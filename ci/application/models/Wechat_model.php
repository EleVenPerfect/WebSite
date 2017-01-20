<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

/**
 * 留言板保存模型
 */
class wechat_model extends CI_Model{
	/**
	 * 查询catagory数据
	 */
	public function read_alldata(){
		$data = $this->db->get('pagemb')->result_array();
		return $data;
	}

	public function read_alltype(){
		$data = $this->db->get('pagemb_type')->result_array();
		return $data;
	}
	

	public function read_datatypebest(){
		$data = $this->db->get_where('pagemb', array('type'=>'best'))->result_array();
		return $data;
	}

	public function read_datatype1(){
		$data = $this->db->get_where('pagemb', array('type'=>'type1'))->result_array();
		return $data;
	}

	public function read_datatype2(){
		$data = $this->db->get_where('pagemb', array('type'=>'type2'))->result_array();
		return $data;
	}

	public function read_datatype3(){
		$data = $this->db->get_where('pagemb', array('type'=>'type3'))->result_array();
		return $data;
	}

	public function read_datatype4(){
		$data = $this->db->get_where('pagemb', array('type'=>'type4'))->result_array();
		return $data;
	}



}