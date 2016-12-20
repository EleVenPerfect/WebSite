<?
// This is used to constuct the cPanel login ur>ol
include('geturl.php');
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<!-- Template designed by iFastNet (iFastNet.com) exclusively for MyOwnFreeHost.com users -->
<head>
<title>关于我们 - ATIME云主机</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<link href="css/style.css" rel="stylesheet" type="text/css" />
<link href="http://fonts.googleapis.com/css?family=Oswald|Open+Sans:400,600" rel="stylesheet" type="text/css">
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
    <img src="images/whyus.png" alt="Free hosting" />
    <h2>关于我们</h2>
      <div class="spacer"></div>
    </div>
    <div class="menu_resize">
      <div class="spacer"></div>
    </div>
    <div class="spacer"></div>
  </div>
  <div class="body_resize">
    <div class="body">
        <h2>选择我们的7大理由</h2>
		<br/>
	<div id="links">
    <ul>
      <li>
      <img src="images/wu1.png">
      <a>1. 急速开启账户
        <em>注册账户3分钟内即可开始使用我们的免费空间，即时开通即时使用。</a></li> 
      <hr />
      <li>
      <img src="images/wu2.png">
      <a>2. 高防云主机
        <em>我们的免费托管计划是基于云计算，这意味着，我们的服务器集成共享所有资源，提供高资源可用性。</a></li> 
      <hr />
      <li>
      <img src="images/wu3.png">
      <a>3. 更安全
        <em>100% 安全的防火墙和防盗链保护。</a></li> 
      <hr />
      <li>
      <img src="images/wu4.png">
      <a>4. 成熟服务系统
        <em>我们提供一个完整的托管解决方案，易于使用的工具，网站建设，管理和跟踪都提供技术支持!</a></li> 
      <hr />
      <li>
      <img src="images/wu5.png">
      <a>5. 更易用工具
        <em>你将获得cPanel控制面板，包含了所有您需要的功能！网站建设器，搜索引擎优化工具，脚本安装工具…</a></li> 
      <hr />
      <li>
      <img src="images/wu6.png">
      <a>6. 低成本升级
        <em>在你的网站很受欢迎，当你准备好要升级，我们将提供最好的专用VPS和最合理的价格!</a></li> 
      <hr />
      <li>
      <img src="images/wu7.png">
      <a target="_blank" href="<? echo $supporturl;?>">7. 专业服务团队
        <em>厌烦漫长的等待时间？我们也一样！这就是为什么我们提供一个强大的BBS，通过BBS社区服务感受快速响应支持服务吧！</a></li> 
    </ul>
    </div>
    <div class="spacer"></div>
  </div>      
</div>
<? include ('footer.php'); ?>
</body>
</html>
