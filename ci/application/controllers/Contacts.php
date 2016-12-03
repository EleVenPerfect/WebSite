<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Contacts extends CI_Controller {

	public function index()
	{
		//$this->load->view('welcome_message');
		$this->load->model('home_model','home');
		// date_default_timezone_set("PRC");
		$data =array(
			'home' => $this->home->read_catagory(),
			'cap'  => $this->captcha_genner()

		);
		// print_r($data);die();

		// $this->output->enable_profiler(TRUE);

		if(!isset($_SESSION)){
			session_start();
		}

		$_SESSION['captcha'] = $data['cap']['word'];
		
		$this->load->view('contacts',$data);
	}


	public function checkmessage()
	{
		//$this->load->view('welcome_message');
		$this->load->model('home_model','home');
		$this->load->model('contacts_model','cont');
		date_default_timezone_set("PRC");
		$data =array(
			'home' => $this->home->read_catagory(),
			'cap'  => $this->captcha_genner()

		);
		$message =array(
			'name' 	  => $this->input->post('name'),
			'email'   => $this->input->post('email'),
			'captcha1' => $this->session->captcha,			
			'captcha2' => $this->input->post('captcha'),
			'message' => $this->input->post('message'),
			'date'    => time()
		);

		

		if( strtoupper($message['captcha1'])!=strtoupper($message['captcha2']) ) error('验证码错误');
		else 
		{
			$this->cont->save_message($message);//保存数据库
			$this->send_email($message);
			$this->email_me($message);
			error('发送成功！');
		}
		// $this->output->enable_profiler(TRUE);
		
		$this->load->view('contacts',$data);
	}

	public function captcha_genner()
	{
		$this->load->helper('captcha');

		$speed = 'sfljlwjqrljlfafasdfasldfj1231443534507698';
		$word = '';
		for($i = 0; $i < 4; $i++)
		{
			$word .= $speed[mt_rand(0, strlen($speed) - 1)];
		}

		$vals = array(
		    'word'      => $word,
		    'img_path'  => './captcha/',
		    'img_url'   => base_url().'captcha/',
		    'font_path' => base_url().'fonts/fontawesome-webfont.ttf',
		    'img_width' => '100',
		    'img_height'    => 40,
		    'expiration'    => 4,
		    'word_length'   => 4,
		    'font_size' => 100,
		    'img_id'    => 'captchaid',
		    'pool'      => '25dsfdewe6789hp6575fs989sdf834fsd29nmeupzv',
		    // White background and border, black text and red grid
		    'colors'    => array(
		        'background' => array(255, 255, 255),
		        'border' => array(255, 255, 255),
		        'text' => array(0, 0, 0),
		        'grid' => array(255, 40, 40)
		    )
		);
		$cap =create_captcha($vals);
		return $cap;
	}

	public function send_email($message)
	{
		$this->load->library('email');

		$this->email->from('elevenperfect@126.com', 'ATIME');
		$this->email->to($message['email']);

		$this->email->subject('谢谢留言！');

		$this->email->message($this->prepare_email($message));

		$this->email->send();

		// echo $this->email->print_debugger();
	}


	function prepare_email($message)
	{

     	$body = file_get_contents(base_url().'email/email.html');
     	date_default_timezone_set('Asia/Chongqing'); 
		$time = date("Y-m-d H:i:s");
		// print_r($time);
		
		$body  = str_replace('ATIME_NAME',$message['name'],$body);
		$body  = str_replace('ATIME_MESSAGE',$message['message'],$body);
		$body  = str_replace('ATIME_DATE',$time,$body);

	    return $body;
    } 

	public function email_me($message)
	{
		$this->load->library('email');

		$this->email->from('18333605384@139.com', 'ATIME');
		$this->email->to('atime@atime.org.cn');

		$this->email->subject('有新留言啦');

		$this->email->message($this->prepare_email_to_me($message));

		$this->email->send();

		// echo $this->email->print_debugger();
	}

    function prepare_email_to_me($message)
	{

     	$body = file_get_contents(base_url().'email/email_to_me.html');
     	date_default_timezone_set('Asia/Chongqing'); 
		$time = date("Y-m-d H:i:s");
		// print_r($time);
		
		$body  = str_replace('ATIME_NAME',$message['name'],$body);
		$body  = str_replace('ATIME_MESSAGE',$message['message'],$body);
		$body  = str_replace('ATIME_DATE',$time,$body);

	    return $body;
    } 
}
