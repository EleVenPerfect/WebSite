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
