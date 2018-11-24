<?PHP
// This is used to geneate a unique number for catchpa 
$id = md5(rand(6000,PHP_INT_MAX));
?>
<?
// This is used to constuct the cPanel login ur>ol
include('geturl.php');
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
//<!-- Template designed by iFastNet (iFastNet.com) exclusively for MyOwnFreeHost.com users -->
<head>
<title>Free Hosting Sign Up</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<link href="css/style.css" rel="stylesheet" type="text/css" />
<link rel='stylesheet' id='google_fonts_style-css'  href='http://fonts.googleapis.com/css?family=Armata&amp;ver=3.5' type='text/css' media='all' />
    <link rel="stylesheet" href="/bootstrap/css/bootstrap.min.css">
    <script type="text/javascript" src="/jquery/jquery-1.11.1.min.js"></script>
<script type="text/javascript" src="js/go-top.js"></script>
<script type="text/javascript">
function ismaxlength(obj){
        var mlength=obj.getAttribute? parseInt(obj.getAttribute("maxlength")) : ""
        if (obj.getAttribute && obj.value.length>mlength)
                obj.value=obj.value.substring(0,mlength)
}
</script>
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
      <h2>Sign up</h2>
      <p>That was a good decision! Thank you for trusting us!</p>
      <div class="div"></div>
      <div class="spacer"></div>
    </div>
  </div>
  <div class="spacer"></div>
  <div class="bloga_resize">
    <div class="bloga_resize_use">
      <h3>Sign up to our free hosting</h3>
      <div class="spacer"></div>
    </div>
    <div class="spacer"></div>
  </div>
  <div class="body">
    <div class="body_resize">
      <div class="body_big">
        <h2>Please fill out the form below</h2>
		<form id="updatedetails" name="updatedetails" class="signup" method=post action="http://order.<?echo $yourdomain;?>/register2.php">
			<table>
				<div class="form-group">
				<tr><th>Username<td><input class="form-control" type=text name=username size=30 value=""  maxlength="16" onkeyup="return ismaxlength(this)"><td>
				</div>
				
				<div class="form-group">
				<tr><th>Password<td><input class="form-control" type=password name=password size=30 maxlength="8" onkeyup="return ismaxlength(this)"><td>
				</div>
				
				<div class="form-group">
				<tr><th>Email Address<td><input class="form-control" type=text name=email size=30 value=""></td></tr>
				</div>
				
				<div class="form-group">
				<tr><th>Site Category<td><select  class="form-control" size="1" name="website_category">
				<option>Personal</option>
				<option>Business</option>
				<option>Hobby</option>
				<option>Forum</option>
				<option>Adult</option>
				<option>Dating</option>
				<option>Software / Download</option>
				</select>
				</td></tr>
				</div>
				
				<div class="form-group">
				<tr><th>Site Language<td>
				<select  class="form-control" size="1" name="website_language">
				<option>English</option>
				<option>Non-English</option>
				</select>
				</td></tr>
				</div>
				<input type=hidden name=id value="<?PHP echo $id; ?>">
				<tr><th>Security Code<td><div ><img width="250px" height="90px" src="http://order.<? echo "$yourdomain" ;?>/image.php?id=<?PHP echo $id; ?>"></div><td>
				<tr><th>Enter Security Code<td><input class="form-control" type=text name=number size=30><td>
				<tr><th colspan=2><button type="submit" class="btn btn-primary">Submit</button><td></tr>
			</table>
		</form>
      </div>
      <div class="body_small">
        <h3>To use your own domain</h3>
        <p>You may not find the email confirmation in your inbox, so please check your Spam inbox.</p>
        <h3>To use your own domain</h3>
        <p>If you want to use your own domain name from third parties (free or premium), please remember to set your domain nameservers to ours:
        	<br /><span>ns1.<?echo $yourdomain;?></span>
			<br /><span>ns2.<?echo $yourdomain;?></span>
        </p>
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
	   <p class="copyright">© <? echo "$yourdomain" ;?></p>
	   <div class="spacer"></div>
	  </div>
	  <div class="spacer"></div>
	</div>
<a href="#" class="go-top">Go Top</a>
</body>
//<!-- Template designed by iFastNet (iFastNet.com) exclusively for MyOwnFreeHost.com users -->
</html>


