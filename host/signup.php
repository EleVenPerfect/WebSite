<?PHP
// This is used to geneate a unique number for catchpa 
$id = md5(rand(6000,99999999999999991000));
?>
<?
// This is used to constuct the cPanel login ur>ol
include('geturl.php');
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<!-- Template designed by iFastNet (iFastNet.com) exclusively for MyOwnFreeHost.com users -->
<head>
<title>Hosting Sign Up - ATIME.SITE</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<link href="css/style.css" rel="stylesheet" type="text/css" />
<link href="http://fonts.googleapis.com/css?family=Oswald|Open+Sans:400,600" rel="stylesheet" type="text/css">
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
    <img src="images/server2.png" alt="Free hosting" />
    <h2>Thank you!</h2>
      <p>That was a good decision! Thank you for trusting us!</p>
      <div class="spacer"></div>
    </div>
    <div class="menu_resize">
      <div class="spacer"></div>
    </div>
    <div class="spacer"></div>
  </div>
  <div class="body_resize">
    <div class="body">
	<h2>Please fill out the form below</h2>
  <h3>contact me with email:<? echo $supportmail;?>,<a href="http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=<? echo $supportmail;?>">click here!</a></h3>
			<div class="body-left">
		<form class="signup" method=post action="http://order.<?echo $yourdomain;?>/register2.php">
			<table>
				<tr><th>Username<td><input class="signupipt" type=text name=username size=30 value=""  maxlength="16" onkeyup="return ismaxlength(this)"><td>
				<tr><th>Password<td><input class="signupipt" type=password name=password size=30 maxlength="8" onkeyup="return ismaxlength(this)"><td>
				<tr><th>Email Address<td><input class="signupipt" type=text name=email size=30 value=""><td>
				
        <tr><th style="text-align: left;">Select Plan<td>
				<select class="signupiptsl" name='plan_name'>
        <? include ('packages.php'); ?>
        </select><td>

				<input type="hidden" name="id" value="<?PHP echo $id; ?>">
				<tr><th>Security Code<td><div class="captcha"><img width=200px; height=90px; src="http://order.<? echo "$yourdomain" ;?>/image.php?id=<?PHP echo $id; ?>"></div><td>
				<tr><th>Enter Security Code<td><input class="signupipt" type=text name=number size=30><td>
				<tr><th colspan=2><input type=submit class="signupbtn" value="Register" name=submit><td>
			</table>
		</form>
	</div>
      <div class="body-right">
        <h2>Remember</h2>
        <p>You may not find the email confirmation, so please check your Spam inbox.</p>
		<h2>To use your own domain</h2>
        <p>If you want to use your own domain name from third parties (free or premium), please remember to set your domain nameservers to ours:<br /><span>ns1.<?echo $yourdomain;?></span><br /><span>ns2.<?echo $yourdomain;?></span></p>
      </div>
    <div class="spacer"></div>
  </div>      
</div>
<? include ('footer.php'); ?>
</body>
</html>
