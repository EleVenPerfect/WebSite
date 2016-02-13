<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Atime extends CI_Controller {

	public function index()
	{
		$this->home();
	}


	public function home()
	{
		//$this->load->view('welcome_message');
		$this->load->model('home_model','home');

		$data =array(
			'home'    => $this->home->read_home(),
			'catagory'=> $this->home->read_catagory()
		);
		// print_r($data);
		// print_r($data['home'][0]['value']);
		$this->output->enable_profiler(TRUE);
		//$data = $this->uri->segment(3);
		// print_r($data);
		$this->load->view('atime/index',$data);
	}	


	public function code()
	{
		//$this->load->view('welcome_message');
		$this->load->model('home_model','home');

		$data =array(
			'home'    => $this->home->read_home(),
			'catagory'=> $this->home->read_catagory()
		);
		// print_r($data);
		// print_r($data['home'][0]['value']);
		$this->output->enable_profiler(TRUE);
		//$data = $this->uri->segment(3);
		// print_r($data);
		$this->load->view('atime/code',$data);
	}
	
	public function skills()
	{
		//$this->load->view('welcome_message');
		$this->load->model('home_model','home');

		$data =array(
			'home'    => $this->home->read_home(),
			'catagory'=> $this->home->read_catagory()
		);
		// print_r($data);
		// print_r($data['home'][0]['value']);
		$this->output->enable_profiler(TRUE);
		//$data = $this->uri->segment(3);
		// print_r($data);
		$this->load->view('atime/skills',$data);
	}

	public function blog()
	{
		//$this->load->view('welcome_message');
		$this->load->model('home_model','home');

		$data =array(
			'home'    => $this->home->read_home(),
			'catagory'=> $this->home->read_catagory()
		);
		// print_r($data);
		// print_r($data['home'][0]['value']);
		$this->output->enable_profiler(TRUE);
		//$data = $this->uri->segment(3);
		// print_r($data);
		$this->load->view('atime/blog',$data);
	}

	public function contacts()
	{
		//$this->load->view('welcome_message');
		$this->load->model('home_model','home');
		$this->load->library('email');
		$this->load->helper('captcha');

		// $this->email->from('elevenperfect@126.com');
		// $this->email->to('elevenperfect@126.com');
		// $this->email->subject('Email Test');
		// $this->email->message('ATIME，专注创造奇迹！');
		// $this->email->send();



// $vals = array(
//     'word'      => 'Random word',
//     'img_path'  => './captcha/',
//     'img_url'   => 'http://example.com/captcha/',
//     'font_path' => './path/to/fonts/texb.ttf',
//     'img_width' => '150',
//     'img_height'    => 30,
//     'expiration'    => 7200,
//     'word_length'   => 8,
//     'font_size' => 16,
//     'img_id'    => 'Imageid',
//     'pool'      => '25dsfdeweiip6575fs989sdf834fsd2opzv',

//     // White background and border, black text and red grid
//     'colors'    => array(
//         'background' => array(255, 255, 255),
//         'border' => array(255, 255, 255),
//         'text' => array(0, 0, 0),
//         'grid' => array(255, 40, 40)
//     )
// );

// $cap = create_captcha($vals);
// echo $cap['image'];

// die();




		$data =array(
			'home'    => $this->home->read_home(),
			'catagory'=> $this->home->read_catagory()
		);
		// print_r($data);
		// print_r($data['home'][0]['value']);
		$this->output->enable_profiler(TRUE);
		//$data = $this->uri->segment(3);
		// print_r($data);
		$this->load->view('atime/contacts',$data);
	}
}
