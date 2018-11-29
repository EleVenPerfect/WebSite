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
<!-- Template designed by iFastNet (iFastNet.com) exclusively for MyOwnFreeHost.com users -->
<head>
<title>快速注册 - <?php echo $webname ?></title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<link href="css/style.css" rel="stylesheet" type="text/css" />
<link href="http://fonts.googleapis.com/css?family=Oswald|Open+Sans:400,600" rel="stylesheet" type="text/css">
<?include('baidutongji.php');?>
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
    <img src="images/server2.png" alt="Free hosting" />
    <h2>欢迎!</h2>
      <div class="spacer"></div>
    </div>
    <div class="menu_resize">
      <div class="spacer"></div>
    </div>
    <div class="spacer"></div>
  </div>
  <div class="body_resize">
    <div class="body">
	<h2>请填写如下信息</h2>
  <h3>提交注册后大约需要20-50秒时间系统自动分配账户，请耐心等待不要关闭页面。</br>
  注册完成后系统将会向电子邮箱发送激活链接，注意查收哦</br>
  严禁一个邮箱地址申请多个账户，一经发现永久停用</br>
  建议注册主机账户后，进入论坛注册论坛账户，方便交流讨论和问题反馈。</h3>
			<div class="body-left">
		<form class="signup" name="updatedetails" method=post action="http://order.<?echo $yourdomain;?>/register2.php">
			<table>
				<tr><th>用户名<td><input class="signupipt" type=text name=username size=30 value=""  maxlength="16" onkeyup="return ismaxlength(this)"><td>
				<tr><th>密码<td><input class="signupipt" type=password name=password size=30 maxlength="8" onkeyup="return ismaxlength(this)"><td>
				<tr><th>电子邮件<td><input class="signupipt" type=text name=email size=30 value=""><td>
				
        <tr><th style="text-align: left;">选择套餐<td>
				<select class="signupiptsl" name='plan_name'>
        <? include ('packages.php'); ?>
        </select><td>

				<input type="hidden" name="id" value="<?PHP echo $id; ?>">
				<tr><th>验证码<td><div class="captcha"><img width=200px; height=90px; src="http://order.<? echo "$yourdomain" ;?>/image.php?id=<?PHP echo $id; ?>"></div><td>
				<tr><th>请输入验证码<td><input class="signupipt" type=text name=number size=30><td>
				<tr><th colspan=2><input type=submit class="signupbtn" value="注册" name=submit><td>
			</table>
		</form>
	</div>
      <div class="body-right">
        <h2>注意</h2>
        <p>为防止空间资源滥用，注册账户默认提供500M空间，如果后期空间不够用，可以联系管理员免费增大空间。</p>
        <p>如果没有收到我们的电子邮件，请查看是否被邮箱拦截</p>
		<h2>绑定自己的域名</h2>
        <p>如果你想绑定自己的域名到网站空间 (free or premium), 需要将你的域名DNS服务器设置为如下:<br /><span>ns1.<?echo $yourdomain;?></span><br /><span>ns2.<?echo $yourdomain;?></span></p>
      </div>
    <div class="spacer"></div>
  </div>      
</div>
<? include ('footer.php'); ?>
</body>
</html>
