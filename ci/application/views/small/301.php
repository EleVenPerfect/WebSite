<?php 
$the_host = $_SERVER['HTTP_HOST'];//取得当前域名
$the_url = isset($_SERVER['REQUEST_URI']) ? $_SERVER['REQUEST_URI'] : '';//判断地址后面部分
$the_url = strtolower($the_url);//将英文字母转成小写
if($the_url=="/index.php")//判断是不是首页
{
$the_url="/";//如果是首页，赋值为“/”
}
if($the_host !== 'www.atime.net.cn')//如果域名不是带www的网址那么进行下面的301跳转
{
header('HTTP/1.1 301 Moved Permanently');//发出301头部 
header('Location:http://www.atime.net.cn'.$the_url);//跳转到带www的网址
}
?>