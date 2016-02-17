<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

/**
 * 留言板保存模型
 */
class contacts_model extends CI_Model{
	/**
	 * 查询catagory数据
	 */
	public function save_message($message){
		$msid =$this->db->get_where('message', array('id'=>'0'))->result_array();
		$data = array(
		    'id' => '0',
		    'date'  => $msid['0']['date']+1
		    );
		$this->db->replace('message', $data);
		
		$data =array(
				'id' => $msid['0']['date'],
				'name'=>$message['name'],
				'email'=>$message['email'],
				'message'=>$message['message'],
				'date'=>$message['date']
			);
		$this->db->insert('message', $data);
	}


}