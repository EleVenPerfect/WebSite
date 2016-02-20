<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Blog extends CI_Controller {

	public function index()
	{
		$this->load->model('home_model','home');

		$data =array(
			'home' => $this->home->read_catagory()
		);
		// $this->output->enable_profiler(TRUE);
		
		$this->load->view('blog',$data);
	}

}
