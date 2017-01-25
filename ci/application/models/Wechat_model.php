<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

/**
 * 留言板保存模型
 */
class wechat_model extends CI_Model{
	/**
	 * 查询catagory数据
	 */
	public function read_alldata(){
		$this->db->order_by('num', 'ASC');
		$data = $this->db->get('pagemb')->result_array();
		return $data;
	}

	public function read_alltype(){
		$this->db->order_by('num', 'ASC');
		$data = $this->db->get('pagemb_type')->result_array();
		return $data;
	}
	

	public function read_datatypebest(){
		$this->db->order_by('num', 'ASC');
		$data = $this->db->get_where('pagemb', array('type'=>'best'))->result_array();
		return $data;
	}

	public function read_datatype1(){
		$this->db->order_by('num', 'ASC');
		$data = $this->db->get_where('pagemb', array('type'=>'type1'))->result_array();
		return $data;
	}

	public function read_datatype2(){
		$this->db->order_by('num', 'ASC');
		$data = $this->db->get_where('pagemb', array('type'=>'type2'))->result_array();
		return $data;
	}

	public function read_datatype3(){
		$this->db->order_by('num', 'ASC');
		$data = $this->db->get_where('pagemb', array('type'=>'type3'))->result_array();
		return $data;
	}

	public function read_datatype4(){
		$this->db->order_by('num', 'ASC');
		$data = $this->db->get_where('pagemb', array('type'=>'type4'))->result_array();
		return $data;
	}



}