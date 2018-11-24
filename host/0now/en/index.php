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
if(strtolower($the_host) !== strtolower($yourfulldomain))//如果域名不是带www的网址那么进行下面的301跳转
{
header('HTTP/1.1 301 Moved Permanently');//发出301头部 
header('Location:http://'.$yourfulldomain.$the_url);//跳转到带www的网址
}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<!-- Template designed by iFastNet (iFastNet.com) exclusively for MyOwnFreeHost.com users -->
<head>
<title><?php echo $webname ?></title>
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
          <h2>Reliable & Professional<br />
            Web Hosting<br /></h2>
          <p><b>Sign up and get benefit of these features & more!</b></p>
          <ul>
            <li><b>500MB Cloud Storage & 10GB Bandwidth</b></li>
            <li><b>Host Up To 1 Websites Each Account</b></li>
            <li><b>1 MySQL Databases, FTP & Email accounts</b></li>
            <li><b>24/7 Monitoring & Firewall Protection</b></li>
            <li><b>cPanel Easy-To-Use Control Panel</b></li>
          </ul>
          <div class="spacer"></div><br/ >
          <p><a href="free-hosting.php" class="btn-large">Learn more</a><a href="signup.php" class="btn-large">Sign up now!</a></p>
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
        <h2>Free Hosting</h2>
        <img class="fade" src="images/1.png" alt="Free hosting" />
        <p>We provide quality free hosting powered by one of the largest hosting organizations on the internet!</p>
        <p><a href="free-hosting.php" class="btn-small">Learn more</a></p>
      </div>
      <div class="bloga">
        <h2>Premium Hosting</h2>
        <img class="fade" src="images/2.png" alt="Premium Hosting" />
        <p>Powerful premium cPanel hosting powered by iFastNet with multiple plans to match your needs!</p>
        <p><a href="premium-hosting.php" class="btn-small">Learn more</a></p>
      </div>
      <div class="bloga">
        <h2>cPanel Control Panel</h2>
        <img class="fade" src="images/3.png" alt="Why Us" />
        <p> A powerful, easy-to-use control panel provided to manage your website.</p>
        <p><a href="whyus.php" class="btn-small">Learn more</a></p>
      </div>
    </div>
    <div class="spacer"></div>
  </div>
  <div class="body_resize">
    <div class="body">
  <h2>Welcome to <?php echo $webname ?></h2>
  	<p>We are specialists in hosting services using clustered technology powered by one of the largest hosting organizations on the internet. Sign up here for fast PHP & MySQL hosting . A powerful, easy-to-use control panel provided to manage your website, packed with hundreds of great features including website building tools, Email, FTP add-on domain <br>Our hosting platform is the only one in the world to automatically enable SSL HTTPS protection on every domain name.  This means all websites on our servers have https protection for added security and better Search Engine rankings!</p>
  <hr />
  </div>      
</div>
<? include ('footer.php'); ?>
</body>
</html>
