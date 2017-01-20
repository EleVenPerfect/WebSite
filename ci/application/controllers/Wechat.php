<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Wechat extends CI_Controller {

	public function index()
	{
		$this->load->model('wechat_model','wechat');

		$data =array(
			'one_type' => $this->wechat->read_datatype1(),
			'list_type' => $this->wechat->read_alltype(),
			'best_type' => $this->wechat->read_datatypebest()
		);

		$this->load->view('wechat',$data);
	}

	public function w1()
	{
		$this->load->model('wechat_model','wechat');

		$data =array(
			'one_type' => $this->wechat->read_datatype1(),
			'list_type' => $this->wechat->read_alltype(),
			'best_type' => $this->wechat->read_datatypebest()
		);

		$this->load->view('wechat',$data);
	}

	public function w2()
	{
		$this->load->model('wechat_model','wechat');

		$data =array(
			'one_type' => $this->wechat->read_datatype2(),
			'list_type' => $this->wechat->read_alltype(),
			'best_type' => $this->wechat->read_datatypebest()
		);

		$this->load->view('wechat',$data);
	}

	public function w3()
	{
		$this->load->model('wechat_model','wechat');

		$data =array(
			'one_type' => $this->wechat->read_datatype3(),
			'list_type' => $this->wechat->read_alltype(),
			'best_type' => $this->wechat->read_datatypebest()
		);

		$this->load->view('wechat',$data);
	}

	public function w4()
	{
		$this->load->model('wechat_model','wechat');

		$data =array(
			'one_type' => $this->wechat->read_datatype4(),
			'list_type' => $this->wechat->read_alltype(),
			'best_type' => $this->wechat->read_datatypebest()
		);

		$this->load->view('wechat',$data);
	}


}
