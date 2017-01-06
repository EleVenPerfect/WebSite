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
<title>Free Hosting Sign Up</title>
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
      <div class="head2">
      <div class="text">
      <h2>Sign up to our free hosting</h2>
      <p>That was a good decision! Thank you for trusting us!</p>
	  </div>
      </div>
      <div class="ground"></div>
		</div>
  	  </div>
    <div class="body">
    <div class="body-holder">
    <div class="body-large">
		<h2>Please fill out the form below</h2>
			<div class="body-left">
		<form class="signup" method=post action="http://order.<?echo $yourdomain;?>/register2.php">
			<table>
				<tr><th>Username<td><input class="signupipt" type=text name=username size=30 value=""  maxlength="16" onkeyup="return ismaxlength(this)"><td>
				<tr><th>Password<td><input class="signupipt" type=password name=password size=30 maxlength="8" onkeyup="return ismaxlength(this)"><td>
				<tr><th>Email Address<td><input class="signupipt" type=text name=email size=30 value=""><td>
				                                 </td>
				<tr><th>Site Category<td><select  class="signupiptsl" size="1" name="website_category">
				<option>Personal</option>
				<option>Business</option>
				<option>Hobby</option>
				<option>Forum</option>
				<option>Adult</option>
				<option>Dating</option>
				<option>Software / Download</option>
				</select>
				</td>
				<tr><th>Site Language<td>
				<select  class="signupiptsl"size="1" name="website_language">
				<option>English</option>
				<option>Non-English</option>
				</select>
				</td>
				<input type=hidden name=id value="<?PHP echo $id; ?>">
				<tr><th>Security Code<td><div ><img width="250px" height="90px" src="http://order.<? echo "$yourdomain" ;?>/image.php?id=<?PHP echo $id; ?>"></div><td>
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
      <div class="ground"></div>
      <br/>
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
