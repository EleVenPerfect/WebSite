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
<link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>
</head>
<body>
<div class="header_resize">
  <div class="header">
    <div class="logo"><a href="index.php"><?echo $yourdomain;?></a></div>
        <? include ('navigation.php'); ?>
    <div class="spacer"></div>
    <div class="spacer"></div>
  </div>
</div>
<div class="main">
  <div class="header_blog">
    <div class="spacer"></div>
  </div>
  <div class="body">
    <div class="body_resize">
      <div id="slider">
      <div class="slider-title">Professional, powerfull & Reliable free hosting by <?echo $yourdomain;?>!</div>
      <div class="features">
      <ul>
      <li class="check">10GB Disk Space</li>
      <li class="check">100GB Bandwidth</li>
      <li class="check">10 Domains Hosting</li>
      <li class="check">10 MySQL Databases</li>
      <li class="check">Easy Control Panel</li>
      <li class="check">Easy Website Builder</li>
      <li class="check">1Click Softaculous</li>
      </ul>
      </div>
      <div class="mainsignup">
		<a href="signup.php"><img class="fade" src="images/signupnow.png"></a>
		</div>
      <img src="images/header.jpg" width="940" height="400" alt="Welcome" />
      </div>
      <div class="container">
      <h2>Welcome to <?echo $yourdomain;?> Hosting</h2>
      <div class="spacer"><p>We are specialists in free hosting services using clustered technology powered by one of the largest hosting organizations on the internet. Sign up here for fast free PHP & MySQL hosting including a free sub domain. A powerful control panel provided to manage your website, packed with hundreds of great features including website building tools, Email, FTP add-on domain and much more.</p></div>
       <div class="spacer"></div>     
		<div class="hr"></div>
      <div class="port">
        <h2>Free Hosting</h2>
        <img class="fade" src="images/sv-1.jpg" alt="img" width="286" height="101" />
        <p>We provide quality free hosting powered by one of the largest hosting organizations on the internet!</p>
        <p><a href="free-hosting.php">read more »</a></p>
      </div>
      <div class="port">
        <h2>Premium Hosting</h2>
        <img class="fade" src="images/sv-2.jpg" alt="img" width="286" height="101" />
        <p>Powerful premium cPanel hosting powered by iFastNet with multiple plans to match your needs!</p>
        <p><a href="premium-hosting.php">read more »</a></p>
      </div>
      <div class="port">
        <h2>Domain Names</h2>
        <img class="fade" src="images/sv-3.jpg" alt="img" width="286" height="101" />
        <p>Register your own premium domain name within few minutes, we support many extensions.</p>
        <p><a href="domains.php">read more »</a></p>
      </div>
      <div class="spacer"></div>
      <br />
      <div class="line"><img src="images/line.jpg"></div>     
      <div/>
    </div>
  </div>
<div class="spacer"></div>
  <div class="FBG">
    <div class="section1">
      <h2>Services</h2>
      <ul>
        <li><a href="free-hosting.php">Free Hosting</a></li>
        <li><a href="premium-hosting.php">Premium Hosting</a></li>
        <li><a href="https://ifastnet.com/portal/vpshosting.php">VPS Hosting</a></li>
        <li><a href="https://ifastnet.com/portal/dedicatedserver.php">Dedicated Hosting</a></li>
        <li><a href="domains.php">Domain Names</a></li>
        <li><a href="support.php">Technical Support</a></li>           
      </ul>
    </div>
    <div class="section1">
      <h2>Legal</h2>
      <ul>
        <li><a href="#">Terms of service</a></li>
        <li><a href="#">Privacy policy</a></li>
        <li><a href="whyus.php">Whys Us</a></li>
        <li><a href="mailto:contact@companyname.com">contact@companyname.com</a></li>
        <li><a href="http://cpanel.<? echo "$yourdomain" ;?>">Login to cPanel</a></li>
      </ul>
    <ul class="social">
       <li class="facebook">
          <a href="">
           <strong>Facebook</strong>
        </a>
     </li>
     <li class="twitter">
        <a href="#">
           <strong>Twitter</strong>
        </a>
     </li>
     <li class="google">
        <a href="#">
           <strong>Google+</strong>
        </a>
     </li>
     <li class="youtube">
        <a href="#">
           <strong>Youtube</strong>
          </a>
       </li>
    </ul>      
    </div>
    <div class="section2">
      <h2>Whys us?</h2>
      <p>We use a powerful cluster of web servers that are all interconnected to act as one giant super computer. This technology is years ahead of most other hosting companies. Combining the power of many servers creates lightning fast website speed. Not only is the service extremely fast, it is resistant to failures that effect 'single server' hosting, used by most other free and paid hosting providers. If one of our clustered servers were to fail or have a problem, your website will continue to run normally using the working servers!</p>
    </div>
    <div class="spacer"></div>
  </div>
  <div class="spacer"></div>
  <div class="footer">
    <div class="footer_resize">
      <p class="copyright">© HostName, Powered By <a href="https://ifastnet.com">iFastNet</a>.</p>
      <div class="spacer"></div>
    </div>
    <div class="spacer"></div>
  </div>
</div>
</body>
<!-- Template designed by iFastNet (iFastNet.com) exclusively for MyOwnFreeHost.com users -->
</html>
