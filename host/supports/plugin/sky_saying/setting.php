<?php

/*
	插件配置文件 (无配置则不需要此文件)
*/

!defined('DEBUG') AND exit('Access Denied.');

if ($method == 'GET') {
    $kv = kv_get('sky_saying_data');
    $input = array();
    $sky_saying_content = isset($kv['sky_saying_content']) ? implode(chr(10), $kv['sky_saying_content']) : '';
    $input['sky_saying_content'] = form_textarea('sky_saying_content', $sky_saying_content, '', 150);

    include _include(APP_PATH.'plugin/sky_saying/setting.htm');
} else {
    $kv = array();
    $sky_saying_content = param('sky_saying_content');
    $sky_saying_contents = explode(chr(10), $sky_saying_content);
    $kv['sky_saying_content'] = $sky_saying_contents;
    kv_set('sky_saying_data', $kv);
    message(0, '修改成功');
}



?>