<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

/**
 * 文章管理模型
 */
class home_model extends CI_Model{
	/**
	 * 查询catagory数据
	 */
	public function read_catagory(){
		$data = $this->db->get('catagory')->result_array();
		return $data;
	}
	

	public function read_homepage(){
		$data = array(
			'page1top' => $this->db->get_where('index_home', array('name'=>'page1top'))->result_array(), 
			'page1mid' => $this->db->get_where('index_home', array('name'=>'page1mid'))->result_array(), 
			'page2top' => $this->db->get_where('index_home', array('name'=>'page2top'))->result_array(),
			'page2pic' => $this->db->get_where('index_home', array('name'=>'page2pic'))->result_array(),
			'page2mid' => $this->db->get_where('index_home', array('name'=>'page2mid'))->result_array()
			);
		return $data;
	}

	
}