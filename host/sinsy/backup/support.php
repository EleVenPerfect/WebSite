<?
// This is used to constuct the cPanel login ur>ol
include('geturl.php');
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<!-- Template designed by iFastNet (iFastNet.com) exclusively for MyOwnFreeHost.com users -->
<head>
<title>Technical Support</title>
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
    <div class="header_text2">
      <h2>Support</h2>
      <p>If you have any question about our services, this is the right place, we're available & ready 24 hours a day, 7 days a week!</p>
      <div class="div"></div>
      <div class="spacer"></div>
    </div>
  </div>
  <div class="spacer"></div>
  <div class="bloga_resize">
    <div class="bloga_resize_use">
      <h3>Do you need assistance?</h3>
      <div class="spacer"></div>
    </div>
    <div class="spacer"></div>
  </div>
  <div class="bloga_resize">
    <div class="bloga_resize_use">
      <div class="bloga">
      <div class="ef2 s4" alt="Tickets"></div>
        <h2>Tickets</h2>
        <p>You can submit a support ticket from<br />
          VistaPanel, we will answer it within <br />
          the next 24 to 48 hours.</p>
      </div>
      <div class="bloga">
      <div class="ef2 s5" alt="Emails"></div>
        <h2>Emails</h2>
        <p>You can email us, but remember,we only<br />
          use the following email for technical<br />
          support: <a href="mailto:">support@<?echo $yourdomain;?></a></p>
      </div>
      <div class="bloga">
      <div class="ef2 s6" alt="Community Forums"></div>
        <h2>Community Forums</h2>
        <p>You can also join our community forums<br />
          if you want to interact with other users<br />
          and get instant answers.</p>
      </div>
      <div class="spacer"></div>
    </div>
    <div class="spacer"></div>
  </div>
  <div class="body">
    <div class="body_resize">
      <div class="body_sub">
      
	<h2>Frequently asked questions</h2>
	<section class="questions">
    <div>
        <input id="ac-1" name="faq" type="checkbox" />
        <label for="ac-1">How much files can I upload?</label>
        <article class="content">
            <p>You're free to upload as much files as you want, but please be aware that the largest size for an individual file is limited to 10Mb.</p>
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
            <p>You can view our tutorial on how to setup and use FTP to manage your files <a href="http://kb.ifastnet.com/premium-cpanel-hosting/file-management/via-ftp-2.html">here</a>.</p>
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
            <p>We would really appreciate it, the best way is to open a ticket from VistaPanel, if not, you can email us at support@<?echo $yourdomain;?></p>
        </article>
    </div>      
    <div>
        <input id="ac-9" name="faq" type="checkbox"/>
        <label for="ac-9">How do I get support?</label>
        <article class="content">
            <p>To get technical support, open a ticket from VistaPanel, email us at support@<?echo $yourdomain;?> or join our <a>community forums</a>.</p>
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
	<p>For more information & tutorials, please visit our <a href="http://kb.ifastnet.com/">knowledge base</a>.</p>
      </div>
      <br />
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