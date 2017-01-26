<?php
defined('BASEPATH') OR exit('No direct script access allowed');?>
<?php 
header('HTTP/1.1 301 Moved Permanently');//发出301头部 
header('Location:http://www.atime.net.cn/blog');//跳转到带www的网址
?>