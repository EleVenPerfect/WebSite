<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Blog extends CI_Controller {

	public function index()
	{
		$this->load->view('blog_new');
	}


	public function index_old()
	{
		$this->load->model('home_model','home');

		$data =array(
			'home' => $this->home->read_catagory()
		);
		// $this->output->enable_profiler(TRUE);
		
		$this->load->view('blog',$data);
	}

}
