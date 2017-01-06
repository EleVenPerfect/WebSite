<?
// This is used to constuct the cPanel login ur>ol
include('geturl.php');
?>
<?php 
$the_host = $_SERVER['HTTP_HOST'];//取得当前域名
$the_url = isset($_SERVER['REQUEST_URI']) ? $_SERVER['REQUEST_URI'] : '';//判断地址后面部分
$the_url = strtolower($the_url);//将英文字母转成小写
if($the_url=="/index.php")//判断是不是首页
{
$the_url="/";//如果是首页，赋值为“/”
}
if($the_host !== 'www.atime.site')//如果域名不是带www的网址那么进行下面的301跳转
{
header('HTTP/1.1 301 Moved Permanently');//发出301头部 
header('Location:http://www.atime.site'.$the_url);//跳转到带www的网址
}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<!-- Template designed by iFastNet (iFastNet.com) exclusively for MyOwnFreeHost.com users -->
<head>
<title>ATIME免费云主机-英国免费PHP空间-免备案主机</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<link href="css/style.css" rel="stylesheet" type="text/css" />
<link href="http://fonts.googleapis.com/css?family=Oswald|Open+Sans:400,600" rel="stylesheet" type="text/css">
<?include('baidutongji.php');?>
</head>
<body>
<div class="main">
  <div class="blok_header">
    <div class="header">
      <div class="logo"><a href="index.php"><?echo $webname;?></a></div>
        <? include ('navigation.php'); ?>
      <div class="spacer"></div>
    </div>
    <div class="spacer"></div>
  </div>
  <div class="spacer"></div>
  <div class="header_text_bg">
    <div class="header_text">
      <div class="div">
        <div class="left1">
          <h2>专业 & 可靠<br />
            虚拟主机提供商<br /></h2>
          <p><b>立即注册享受如下服务：</b></p>
          <ul>
            <li><b>500MB 云存储空间 & 10GB 月流量</b></li>
            <li><b>支持绑定自定义域名</b></li>
            <li><b>1 MySQL 数据库, FTP & Email 账户</b></li>
            <li><b>7*24小时超强防火墙保护</b></li>
            <li><b>cPanel 易用控制面板</b></li>
          </ul>
          <div class="spacer"></div><br/ >
          <p><a href="free-hosting.php" class="btn-large">了解更多</a><a href="signup.php" class="btn-large">马上注册!</a></p>
        </div>
      </div>
      <div class="gallery">
        <div id="slider">
			<img src="images/server.png" alt="Free Hosting"/>
        </div>
      </div>
      <div class="spacer"></div>
    </div>
    <div class="menu_resize">
      <div class="spacer"></div>
    </div>
    <div class="spacer"></div>
  </div>
  <div class="header_panel">
    <div class="header_panel_resize">
      <div class="bloga">
        <h2>1.注册免费云主机</h2>
        <img class="fade" src="images/1.png" alt="Free hosting" />
        <p>点击马上注册填写表格完成免费主机注册，系统将自动为你分配一个“用户名.atime.site”的域名测试访问。</p>
        <p><a href="signup.php" class="btn-small">马上注册</a></p>
      </div>
      <div class="bloga">
        <h2>2.登录邮箱</h2>
        <img class="fade" src="images/2.png" alt="Premium Hosting" />
        <p>通过激活链接激活您的账户，请注意保存系统分配的用户名、密码、ftp服务器地址、cpanel管理界面地址。</p>
        <p><a href="free-hosting.php" class="btn-small">了解更多</a></p>
      </div>
      <div class="bloga">
        <h2>3.使用cPanel管理面板</h2>
        <img class="fade" src="images/3.png" alt="Why Us" />
        <p>通过cPanel管理面板设置你的MySql数据库名称、Mysql数据库服务器地址、绑定自定义域名。</p>
        <p><a href="http://cpanel.atime.site" class="btn-small">点击登陆</a></p>
      </div>
    </div>
    <div class="spacer"></div>
  </div>
  <div class="body_resize">
    <div class="body">
  <h2>欢迎使用ATIME云主机</h2>
    <p>注册默认空间500MB，使用期间空间不足可以联系管理员免费增加空间。免费空间来之不易，请大家珍惜资源，杜绝滥用。<br>
  	<p>我们是互联网上最大的免费服务器托管组织之一。你可以在这里注册快速获得支持PHP和MySQL的云主机、一个功能强大、易用，管理网站的控制面板，各种强大的功能，包括：网站建设工具，电子邮件，FTP<br>我们的免费服务平台支持自动启用SSL HTTPS保护每一个域名。这意味着在我们的服务器上所有的网站都为拥有更强的安全性和更好的搜索引擎排名!</p>
  <hr />
  </div>      
</div>
<? include ('footer.php'); ?>
</body>
</html>
