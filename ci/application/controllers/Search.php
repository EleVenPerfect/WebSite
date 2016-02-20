<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Search extends CI_Controller {

	public function index()
	{
		$this->load->model('home_model','home');
		$this->load->model('search_model','sech');

		$data =array(
			'home' => $this->home->read_catagory(),
			'sec'  => $this->sech->read_search()
		);
		// $this->output->enable_profiler(TRUE);
		// print_r($data);die();

		$this->load->view('search',$data);
	}

}
