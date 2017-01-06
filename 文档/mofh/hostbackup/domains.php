<?
// This is used to constuct the cPanel login ur>ol
include('geturl.php');
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<!-- Template designed by iFastNet (iFastNet.com) exclusively for MyOwnFreeHost.com users -->
<head>
<title>Domain Names Registration</title>
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
      <h2>Domain Names</h2>
      <p>With our partner iFastNet, we are providing low cost domain names registration services supporting numerous extensions.</p>
	  </div>
      </div>
      <div class="ground"></div>
	    </div>
	  </div>
    <div class="body">
    <div class="body-holder">
    <div class="body-large">
        <h2>This is what we offer</h2>
			<p align="center"><strong>Simple Domain Search</strong> | <a href="https://ifastnet.com/portal/domainchecker.php?search=bulkregister" target="_blank">Bulk Domain Search</a> | <a href="https://ifastnet.com/portal/domainchecker.php?search=bulktransfer" target="_blank">Bulk Domain Transfer</a></p>
			<p>Enter the domain and tld you wish to use in the boxes below and click Lookup to see whether the domain is available for purchase.</p>
		<br/>
		<div class="dsbox">
			<form method="post" action="https://ifastnet.com/portal/domainchecker.php" target="_blank">
		<input type="hidden" name="token" value="95865d5db41adbae256bfa7631a03a22a2c889cf" />
  			<div class="contentbox" align="center">
    	<input class="dsinput" type="text" name="domain" value="" size="40">
    	<br />
    <table border="0" align="center" cellpadding="10" cellspacing="0">
      <tr>      <td align="left"><input type="checkbox" id="c1" name="tlds[]" value=".info"/>
          <label for="c1"><span></span></label>.info</td>
                <td align="left"><input type="checkbox" name="tlds[]" id="c2" value=".biz"/><label for="c2"><span></span></label>
          .biz</td>
                <td align="left"><input type="checkbox" name="tlds[]" id="c3" value=".org"/><label for="c3"><span></span></label>
          .org</td>
                <td align="left"><input type="checkbox" name="tlds[]" id="c4" value=".com"/><label for="c4"><span></span></label>
          .com</td>
                <td align="left"><input type="checkbox" name="tlds[]" id="c5" value=".net"/><label for="c5"><span></span></label>
          .net</td>
        </tr>
      <tr>        <td align="left"><input type="checkbox" name="tlds[]" id="c6" value=".oo.gd"/><label for="c6"><span></span></label>
          .oo.gd</td>
                <td align="left"><input type="checkbox" name="tlds[]" id="c7" value=".mobi"/><label for="c7"><span></span></label>
          .mobi</td>
                <td align="left"><input type="checkbox" name="tlds[]" id="c8" value=".cc"/><label for="c8"><span></span></label>
          .cc</td>
                <td align="left"><input type="checkbox" name="tlds[]" id="c9" value=".co.uk"/><label for="c9"><span></span></label>
          .co.uk</td>
                <td align="left"><input type="checkbox" name="tlds[]" id="c10" value=".bz"/><label for="c10"><span></span></label>
          .bz</td>
        </tr>
      <tr>        <td align="left"><input type="checkbox" name="tlds[]" id="c11" value=".us"/><label for="c11"><span></span></label>
          .us</td>
                <td align="left"><input type="checkbox" name="tlds[]" id="c12" value=".name"/><label for="c12"><span></span></label>
          .name</td>
                <td align="left"><input type="checkbox" name="tlds[]" id="c13" value=".in"/><label for="c13"><span></span></label>
          .in</td>
                <td align="left"><input type="checkbox" name="tlds[]" id="c14" value=".co"/><label for="c14"><span></span></label>
          .co</td>
                <td align="left"><input type="checkbox" name="tlds[]" id="c15" value=".es"/><label for="c15"><span></span></label>
          .es</td>
        </tr>
      <tr>        <td align="left"><input type="checkbox" name="tlds[]" id="c16" value=".com.au"/><label for="c16"><span></span></label>
          .com.au</td>
                <td align="left"><input type="checkbox" name="tlds[]" id="c17" value=".cc.nf"/><label for="c17"><span></span></label>
          .cc.nf</td>
                <td align="left"><input type="checkbox" name="tlds[]" id="c18" value=".es.ht"/><label for="c18"><span></span></label>
          .es.ht</td>
                <td align="left"><input type="checkbox" name="tlds[]" id="c19" value=".ar.nf"/><label for="c19"><span></span></label>
          .ar.nf</td>
                <td align="left"><input type="checkbox" name="tlds[]" id="c20" value=".in.nf"/><label for="c20"><span></span></label>
          .in.nf</td>
        </tr>
      <tr>        <td align="left"><input type="checkbox" name="tlds[]" id="c21" value=".it.nf"/><label for="c21"><span></span></label>
          .it.nf</td>
                <td align="left"><input type="checkbox" name="tlds[]" id="c22" value=".mx.nf"/><label for="c22"><span></span></label>
          .mx.nf</td>
                <td align="left"><input type="checkbox" name="tlds[]" id="c23" value=".ro.nf"/><label for="c23"><span></span></label>
          .ro.nf</td>
                <td align="left"><input type="checkbox" name="tlds[]" id="c24" value=".ru.nf"/><label for="c24"><span></span></label>
          .ru.nf</td>
                <td align="left"><input type="checkbox" name="tlds[]" id="c25" value=".uk.nf"/><label for="c25"><span></span></label>
          .uk.nf</td>
        </tr>
      <tr>        <td align="left"><input type="checkbox" name="tlds[]" id="c26" value=".webs.nf"/><label for="c26"><span></span></label>
          .webs.nf</td>
                <td align="left"><input type="checkbox" name="tlds[]" id="c27" value=".ru"/><label for="c27"><span></span></label>
          .ru</td>
                <td align="left"><input type="checkbox" name="tlds[]" id="c28" value=".ca"/><label for="c28"><span></span></label>
          .ca</td>
         </tr>
    </table>
    <br />
    	<input type="hidden" name="direct" value="true">
    	<input type="submit" class="dsbtn" id="Submit" value="Lookup" class="button square small black">
 	</div>
		</form>
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