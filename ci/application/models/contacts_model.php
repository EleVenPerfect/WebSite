<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

/**
 * 留言板保存模型
 */
class contacts_model extends CI_Model{
	/**
	 * 查询catagory数据
	 */
	public function save_message($message){
		$data =array(
				'id' =>'',
				'name'=>$message['name'],
				'email'=>$message['email'],
				'message'=>$message['message'],
				'date'=>$message['date']
			);
		$this->db->insert('message', $data);
	}


}