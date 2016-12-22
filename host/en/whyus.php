<?
// This is used to constuct the cPanel login ur>ol
include('geturl.php');
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<!-- Template designed by iFastNet (iFastNet.com) exclusively for MyOwnFreeHost.com users -->
<head>
<title>Why Us? - ATIME.SITE</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<link href="css/style.css" rel="stylesheet" type="text/css" />
<link href="http://fonts.googleapis.com/css?family=Oswald|Open+Sans:400,600" rel="stylesheet" type="text/css">
<?include('baidutongji.php');?>
</head>
<body>
<div class="main">
  <div class="blok_header">
    <div class="header">
      <div class="logo"><a href="index.php"><?echo $yourdomain;?></a></div>
      <? include ('navigation.php'); ?>
      <div class="spacer"></div>
    </div>
    <div class="spacer"></div>
  </div>
  <div class="spacer"></div>
  <div class="header_text_bg2">
    <div class="header_text2">
    <img src="images/whyus.png" alt="Free hosting" />
    <h2>Why Us</h2>
      <div class="spacer"></div>
    </div>
    <div class="menu_resize">
      <div class="spacer"></div>
    </div>
    <div class="spacer"></div>
  </div>
  <div class="body_resize">
    <div class="body">
        <h2>The top 6 reasons</h2>
		<br/>
	<div id="links">
    <ul>
      <li>
      <img src="images/wu1.png">
      <a>1. Instant activation
        <em>You will get your account up and running within 3 minutes right after you submit your account information.</a></li> 
      <hr />
      <li>
      <img src="images/wu2.png">
      <a>2. Cloud Hosting
        <em>Our free hosting plan is based on Cloud, which means, our servers are integrated to share all resources providing high resource availability.</a></li> 
      <hr />
      <li>
      <img src="images/wu3.png">
      <a>3. Security
        <em>100% secure hosting with firewal & hotlink protection.</a></li> 
      <hr />
      <li>
      <img src="images/wu4.png">
      <a>4. Complete Solution
        <em>We provide a complete hosting solution, easy-to-use tools for building, managing and tracking powered by quality technical support!</a></li> 
      <hr />
      <li>
      <img src="images/wu5.png">
      <a>5. Professional
        <em>You'll have access to VistaPanel, a control panel packed with all the features you'll ever need! Website builder, SEO tools, Script installer...</a></li> 
      <hr />
      <li>
      <img src="images/wu6.png">
      <a>6. Low-cost upgrades
        <em>After you're website becomes popular, and when you're ready to upgrade, we got the best shared, vps & dedicated plans for the lower prices!</a></li> 
      <hr />
      <li>
      <img src="images/wu7.png">
      <a target="_blank" href="<? echo $supporturl;?>">7. Professional Support
        <em>You hate waiting hours and maybe days to get an answer? So do we! That's why we provide a powerful bbs that we have a fast response support service.</a></li> 
    </ul>
    </div>
    <div class="spacer"></div>
  </div>      
</div>
<? include ('footer.php'); ?>
</body>
</html>
