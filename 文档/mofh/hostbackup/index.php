<?
// This is used to constuct the cPanel login ur>ol
include('geturl.php');
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<!-- Template designed by iFastNet (iFastNet.com) exclusively for MyOwnFreeHost.com users -->
<head>
<title>Professional Free Hosting</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<link href="css/style.css" rel="stylesheet" type="text/css" />
<link href='http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,400,300,600,700' rel='stylesheet' type='text/css'>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script type="text/javascript" src="js/go-top.js"></script>
</head>
<body>
<div id="top">
<div class="main">
  <div class="header">
    <div class="header-holder">
         <div class="header-login"><a href="signup.php">Sign up</a> | <a href="http://cpanel.<? echo "$yourdomain" ;?>">Login</a></div>
    <div class="ground"></div>
   <div class="header-holder-in">
    <div class="logo"><a href="index.php"><?echo $yourdomain;?></a></div>
      <div style="float:right;">
        <? include ('navigation.php'); ?>
        </div>
      <div class="ground"></div>
      </div>
      <div class="head">
      <div class="text">
      <h2>Professional Free Hosting</h2>
      <p>Sign up and get benefit of these features & more!</p>
		<ul>
		<li>10GB Cloud Storage & 100GB Bandwidth</li>
		<li>Host Up To 10 Websites On Each Account</li>
		<li>10 MySQL Databases, FTP & Email accounts</li>
		<li>24/7 Monitoring & Firewall Protection</li>
		<li>Free Website Builder & Softaculous</li>
		<li>vPanel Easy-To-Use Control Panel</li>
		</ul>
    <a href="free-hosting.php" class="btn">Learn more</a><a href="signup.php" class="btn2">Sign up</a>
	  </div>
	  <div class="server">
	  <img src="images/server.png">
	  </div>
      </div>
    <div class="ground"></div>
    </div>
  </div>
    <div class="body">
    <div class="body-holder">
    <div class="body-large">
    <h2>Welcome to <? echo "$yourdomain" ;?> hosting</h2>
    <p>We are specialists in free hosting services using clustered technology powered by one of the largest hosting organizations on the internet. Sign up here for fast free PHP & MySQL hosting including a free sub domain. A powerful, easy-to-use control panel provided to manage your website, packed with hundreds of great features including website building tools, Email, FTP add-on domain <br>Our hosting platform is the only one in the world to automatically enable SSL HTTPS protection on every domain name.  This means all websites on our servers have https protection for added security and better Search Engine rankings!</p>    
    <h3>Domain Registration</h3>
		<p>Enter the domain with the extension (ex: yourname.com) tld you wish to use in the box below and click search to see whether the domain is available for purchase.</p>
  <form id="searchbox" method="post" action="https://ifastnet.com/portal/domainchecker.php" target="_blank">
      <input type="text" placeholder="Type here" name="domain" value="" id="search">
      <input id="submit" type="submit" value="Search">
  </form>
		<p class="sponsor">This service is powered by iFastNet</p>
	<div class="hr"></div> 
      <div class="port">
        <h3>Free Hosting</h3>
        <img class="blur" src="images/sv-1.jpg" alt="img" width="286" height="101" />
        <p>We provide quality free hosting powered by one of the largest hosting organizations on the internet!</p>
        <p><a class="lmbtn" href="free-hosting.php">read more »</a></p>
      </div>
      <div class="port">
        <h3>Premium Hosting</h3>
        <img class="blur" src="images/sv-2.jpg" alt="img" width="286" height="101" />
        <p>Powerful premium cPanel hosting powered by iFastNet with multiple plans to match your needs!</p>
        <p><a class="lmbtn" href="premium-hosting.php">read more »</a></p>
      </div>
      <div class="port">
        <h3>Domain Names</h3>
        <img class="blur" src="images/sv-3.jpg" alt="img" width="286" height="101" />
        <p>Register your own premium domain name within few minutes, we support many extensions (.com, .net, .org...).</p>
        <p><a class="lmbtn" href="domains.php">read more »</a></p>
      </div>
      <div class="ground"></div>
	<div class="hr"></div>    
    <h2>Why us</h2>
    <p>We use a powerful cluster of web servers that are all interconnected to act as one giant super computer. This technology is years ahead of most other hosting companies. Combining the power of many servers creates lightning fast website speed. Not only is the service extremely fast, it is resistant to failures that effect 'single server' hosting, used by most other free and paid hosting providers. If one of our clustered servers were to fail or have a problem, your website will continue to run normally using the working servers!</p>    
    </div>
    	<div class="ground"></div>
    </div>
    <div class="ground"></div>
  		</div>
    <div class="footer">
    <div class="footer_resize">
      <p class="copyright">© <?echo $yourdomain;?>, Powered By <a href="https://ifastnet.com">iFastNet</a>.</p>
    <div class="social">
	  <ul>
		<li class="youtube">
      <a href="" target="_blank">YouTube</a>
    </li>
    <li class="googleplus">
      <a href="" target="_blank">Google +r</a>
    </li>
    <li class="twitter">
      <a href="" target="_blank">Twitter</a>
    </li>
    <li class="facebook">
      <a href="" target="_blank">Facebook</a>
		</li>
	  </ul>
	</div>
      <div class="ground"></div>
    </div>
    <div class="ground"></div>
  </div>
</div>
<a href="#" class="go-top">Go Top</a>
</body>
<!-- Template designed by iFastNet (iFastNet.com) exclusively for MyOwnFreeHost.com users -->
</html>
