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


}