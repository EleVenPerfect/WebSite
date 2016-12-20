<?
// This is used to constuct the cPanel login ur>ol
include('geturl.php');
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<!-- Template designed by iFastNet (iFastNet.com) exclusively for MyOwnFreeHost.com users -->
<head>
<title>服务支持 - ATIME云主机</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<link href="css/style.css" rel="stylesheet" type="text/css" />
<link href="http://fonts.googleapis.com/css?family=Oswald|Open+Sans:400,600" rel="stylesheet" type="text/css">
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
  <div class="header_text_bg2">
    <div class="header_text2">
    <img src="images/support.png" alt="Free hosting" />
    <h2>服务支持</h2>
      <div class="spacer"></div>
    </div>
    <div class="menu_resize">
    <div class="spacer"></div>
    </div>
    <div class="spacer"></div>
  </div>
  <div class="body_resize">
    <div class="body">
      <div class="port">
        <h3>工单</h3>
        <img class="fade" src="images/sp1.png" alt="img" />
        <p>你可以在cPanel内提交工单，我们将在未来24到48个小时内回复。</p>
      </div>
      <div class="port">
        <h3>电子邮件</h3>
        <img class="fade" src="images/sp2.png" alt="img" />
        <p>工单太慢？直接发电子邮件到管理员吧: <a href="http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=<? echo $supportmail;?>"><? echo $supportmail;?></a>点击链接快速给管理员发送电子邮件，管理员收到后尽快解决。</p>
      </div>
      <div class="port">
        <a target="_blank" href="<? echo $supporturl;?>">
        <h3>支持服务社区</h3>
        <img class="fade" src="images/sp3.png" alt="img" />
        <p>空间不够用？到社区联系管理员，说出你的要求，我们将尽力满足。</p>
        </a>
      </div>
	<div class="spacer"></div>
	<div class="hr"></div>
	<h3>常见问题</h3>
	<section class="questions">
    	<div>
        	<input id="ac-1" name="faq" type="checkbox" />
        	<label for="ac-1">How much files can I upload?</label>
        	<article class="content">
            <p>You're free to upload 60MB files, but please be aware that the largest size for an individual file is limited to 10Mb.</p>
        	</article>
    	</div>
    	<div>
        	<input id="ac-2" name="faq" type="checkbox"/>
        	<label for="ac-2">What is bandwidth?</label>
        	<article class="content">
            <p>Bandwidth is the amount of data your website can transfer per month, every month the bandwidth counter will reset.</p>
        	</article>
   		</div>
    	<div>
       		<input id="ac-3" name="faq" type="checkbox"/>
        	<label for="ac-3">How can I upload files?</label>
        	<article class="content">
            <p>You have two ways, the first one (recommanded), you can download a FTP client software, you will find recommanded free softwares to download on the "Free FTP Software" from the "Files" section on VistaPanel. The second way is to use our free "Online File Manager" on VistaPanel.</p>
        	</article>
    	</div>
    	<div>
        	<input id="ac-4" name="faq" type="checkbox"/>
        	<label for="ac-4">How can I use FTP?</label>
        	<article class="content">
            <p>You can view our tutorial on how to setup and use FTP to manage your files <a href="<? echo $supporturl;?>">here</a>.</p>
        	</article>
    	</div>    
    	<div>
        	<input id="ac-5" name="faq" type="checkbox"/>
        	<label for="ac-5">Do you allow PHP and MySQL databases?</label>
        	<article class="content">
            <p>Yes, we allow PHP and MySQL.</p>
        	</article>
    	</div>     
    	<div>
        	<input id="ac-6" name="faq" type="checkbox"/>
        	<label for="ac-6">Do you offer PHPMyAdmin?</label>
        	<article class="content">
            <p>Yes we do offer PUPMyAdmin.</p>
        	</article>
    	</div>    
    	<div>
        	<input id="ac-7" name="faq" type="checkbox"/>
        	<label for="ac-7">What type of websites are not allowed to be hosted?</label>
        	<article class="content">
            <p>Anything illegal, websites that contains copyrighted files (warez), adult content, spamming scripts, web proxies etc... For more information please read our TOS.</p>
        	</article>
    	</div>     
    	<div>
        	<input id="ac-8" name="faq" type="checkbox"/>
        	<label for="ac-8">How do I report a website?</label>
        	<article class="content">
            <p>We would really appreciate it, the best way is to open a ticket from VistaPanel, if not, you can email us at <? echo $supportmail;?></p>
        	</article>
    	</div>      
    	<div>
        	<input id="ac-9" name="faq" type="checkbox"/>
        	<label for="ac-9">How do I get support?</label>
        	<article class="content">
            <p>To get technical support, open a ticket from VistaPanel, email us at <? echo $supportmail;?> or join our <a target="_blank" href="<? echo $supporturl;?>">community forums</a>.</p>
       		</article>
    	</div>     
    	<div>
        	<input id="ac-10" name="faq" type="checkbox"/>
        	<label for="ac-10">What details should I post when asking for support?</label>
        	<article class="content">
            <p>Don't post your account's password, including databases passwords! And just be specific.</p>
        	</article>
    	</div>      
	</section>
     <p>更多问题可以查看如下链接 <a href="http://tutorials.securesignup.net/">knowledge base</a>.</p>
    <div class="spacer"></div>
  </div>      
</div>
<? include ('footer.php'); ?>
</body>
</html>
