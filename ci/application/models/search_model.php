<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

/**
 * 文章管理模型
 */
class search_model extends CI_Model{
	/**
	 * 查询catagory数据
	 */
	public function read_search(){
		$data = $this->db->get('search')->result_array();
		return $data;
	}

	
}