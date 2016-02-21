<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends CI_Controller {

	public function index()
	{
		//$this->load->view('welcome_message');
		$this->load->model('home_model','home');
		// $this->output->cache(10);//一分钟缓存

		$data =$this->home->read_homepage();
		$data +=array(
			'home'  => $this->home->read_catagory(),
		);


		//$this->output->enable_profiler(TRUE);
		
		$this->load->view('home',$data);
	}

}
