<?php

/*
	Xiuno BBS 4.0 插件实例：QQ 登陆插件设置
	admin/plugin-setting-xn_qq_login.htm
*/

!defined('DEBUG') AND exit('Access Denied.');

if($method == 'GET') {
	
	$setting['header_nav_forum_start_htm'] = setting_get('header_nav_forum_start_htm');
	$setting['header_nav_home_link_after_htm'] = setting_get('header_nav_home_link_after_htm');
	$setting['header_nav_forum_end_htm'] = setting_get('header_nav_forum_end_htm');
	$setting['header_nav_user_start_htm'] = setting_get('header_nav_user_start_htm');
	$setting['header_nav_admin_page_after_htm'] = setting_get('header_nav_admin_page_after_htm');
	$setting['header_nav_user_end_htm'] = setting_get('header_nav_user_end_htm');
	
	include _include(APP_PATH.'plugin/lh_nav_url/setting.htm');
	
} else {

	setting_set('header_nav_forum_start_htm', param('header_nav_forum_start_htm', '', FALSE));
	setting_set('header_nav_home_link_after_htm', param('header_nav_home_link_after_htm', '', FALSE));
	setting_set('header_nav_forum_end_htm', param('header_nav_forum_end_htm', '', FALSE));
	setting_set('header_nav_user_start_htm', param('header_nav_user_start_htm', '', FALSE));
	setting_set('header_nav_admin_page_after_htm', param('header_nav_admin_page_after_htm', '', FALSE));
	setting_set('header_nav_user_end_htm', param('header_nav_user_end_htm', '', FALSE));
	
	message(0, '修改成功');
}
	
?>