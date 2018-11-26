<?
// This is used to constuct the cPanel login url
include('geturl.php');
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<!-- Template designed by iFastNet (iFastNet.com) exclusively for MyOwnFreeHost.com users -->
<head>
<title>Professional Free Hosting</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<link href="css/style.css" rel="stylesheet" type="text/css" />
<link rel='stylesheet' id='google_fonts_style-css'  href='http://fonts.googleapis.com/css?family=Armata&amp;ver=3.5' type='text/css' media='all' />
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script type="text/javascript" src="js/go-top.js"></script>
</head>
<body>
<div id="top">
<div class="page">
  <div class="head">
    <div class="header">
      <div class="logo"><a href="index.php"><?echo $yourdomain;?></a></div>
        <? include ('navigation.php'); ?>
    </div>
  </div>
  <div class="spacer"></div>
  <div class="header_text_bg">
    <div class="header_text">
      <div class="div">
        <div class="left1">
          <h2>Reliable & Professional Free Web Hosting</h2>
          	<p><strong>Sign up and get benefit of these features & more!</strong></p>
          	<ul>
				<li>10GB Cloud Storage & 100GB Bandwidth</li>
				<li>Host Up To 10 Websites On Each Account</li>
				<li>10 MySQL Databases, FTP & Email accounts</li>
				<li>24/7 Monitoring & Firewall Protection</li>
				<li>Free Website Builder & Softaculous</li>
				<li>vPanel Easy-To-Use Control Panel</li>
          	</ul>
          <div class="spacer"></div>
            <p><a href="free-hosting.php" class="headbtn">Learn more</a><a href="#"><a href="signup.php" class="headbtn">Sign up</a></p>
       </div>
      </div>
     <div class="spacer"></div>
    </div>
   </div>
  <div class="spacer"></div>
  <div class="bloga_resize">
    <div class="bloga_resize_use">
      <div class="bloga">
      <div class="ef1 s1" alt="Free hosting"></div>
        <h2>Free hosting</h2>
        <p>We provide quality free hosting powered by one of the largest hosting organizations on the internet!</p>
        <p><a href="free-hosting.php" class="msbtn">Learn more</a></p>
      </div>
      <div class="bloga">
      <div class="ef1 s2" alt="Premium hosting"></div>
        <h2>Premium hosting</h2>
        <p>Powerful premium cPanel hosting powered by iFastNet with multiple plans to match your needs!</p>
        <p><a href="premium-hosting.php" class="msbtn">Learn more</a></p>
      </div>
      <div class="bloga">
      <div class="ef1 s3" alt="Domain names"></div>
        <h2>Domain names</h2>
        <p>Register your own premium domain name within few minutes, we support many extensions (.com, .net, .org...).</p>
        <p><a href="domains.php" class="msbtn">Learn more</a></p>
      </div>
      <div class="spacer"></div>
    </div>
    <div class="spacer"></div>
  </div>
  <div class="body"> 
    <div class="body_resize">
	<h2>Welcome to <?echo $yourdomain;?> Hosting</h2>
	<p>We are specialists in free hosting services using clustered technology powered by one of the largest hosting organizations on the internet. Sign up here for fast free PHP & MySQL hosting including a free sub domain. A powerful, easy-to-use control panel provided to manage your website, packed with hundreds of great features including website building tools, Email, FTP add-on domain <br>Our hosting platform is the only one in the world to automatically enable SSL HTTPS protection on every domain name.  This means all websites on our servers have https protection for added security and better Search Engine rankings!</p>
	<hr />
		<p>Enter the domain with the extension (ex: yourname.com) tld you wish to use in the box below and click search to see whether the domain is available for purchase.</p>
	  <div class="domainsearchbox">
		<section class="domainsearch">
      <form method="post" action="https://ifastnet.com/portal/domainchecker.php" target="_blank">     
        <input type="text" placeholder="Domain name search..." name="domain" value="" size="40">  
        <button type="submit" id="Submit" value="Lookup">Search</button>
      </form>
			<p>This service is powered by iFastNet</p>
		</section>
	</div> 
  	<div class="spacer"></div>    
    </div> 
    <hr />  
	<div class="whyus">
	<h2>Whys us?</h2>
	<p>We use a powerful cluster of web servers that are all interconnected to act as one giant super computer. This technology is years ahead of most other hosting companies. Combining the power of many servers creates lightning fast website speed. Not only is the service extremely fast, it is resistant to failures that effect 'single server' hosting, used by most other free and paid hosting providers. If one of our clustered servers were to fail or have a problem, your website will continue to run normally using the working servers!</p>
  	</div>  
  </div>
  <div class="spacer"></div>
	  <div class="logo-footer"><a href="index.php"><?echo $yourdomain;?></a></div>
	  <div class="social">
	  <a href=""><img class="social bw" src="images/social/facebook.png"></a>
	  <a href=""><img class="social bw" src="images/social/twitter.png"></a>
	  <a href=""><img class="social bw" src="images/social/google.png"></a>
	  </div>
	</div>
	<div class="footer"> 
    <p class="links"><a href="">Terms of service</a> | <a href="">Privacy policy</a> | <a href="http://cpanel.<? echo "$yourdomain" ;?>">Login</a></p>
    <p class="copyright">© HostName, Powered By <a href="https://ifastnet.com">iFastNet</a>.</p>
    <div class="spacer"></div>
  	</div>
  <div class="spacer"></div>
</div>
<a href="#" class="go-top">Go Top</a>
</body>
<!-- Template designed by iFastNet (iFastNet.com) exclusively for MyOwnFreeHost.com users -->
</html>
