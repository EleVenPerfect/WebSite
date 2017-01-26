<?php
defined('BASEPATH') OR exit('No direct script access allowed');?>
<?php $this->load->view('small/301') ?>
<!DOCTYPE html>
<!-- saved from url=(0116)http://mp.weixin.qq.com/mp/homepage?__biz=MzA5OTMwMDIzMA==&hid=1&sn=d149c115ef8a09b80adb60a5c1cc496a#wechat_redirect -->
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name="MobileOptimized" content="240">
<meta name="viewport" content="width=device-width; initial-scale=1.0; minimum-scale=1.0; maximum-scale=1.0">
<link href="<?php echo base_url()?>bootstrap/wechat/css/common.css" rel="stylesheet" type="text/css">
<link rel="shortcut icon" type="image/x-icon" href="<?php echo base_url()?>bootstrap/wechat/static/wechat.ico">
<title>文章分类</title>
<script src="<?php echo base_url()?>bootstrap/wechat/js/mobile_zh_CN.js"></script>
<script src="<?php echo base_url()?>bootstrap/wechat/js/mobile.js" type="text/javascript"></script>
<script src="<?php echo base_url()?>bootstrap/wechat/js/jquery.mobile-1.0.1.min.js" type="text/javascript"></script>
<script type="text/javascript" src="<?php echo base_url()?>bootstrap/wechat/js/jquery-1.6.2.min.js"></script>
<script type="text/javascript" src="<?php echo base_url()?>bootstrap/wechat/js/common.js"></script>
<script src="<?php echo base_url()?>bootstrap/wechat/js/jquery.1.3.2.min.js" type="text/javascript"></script>
<script src="<?php echo base_url()?>bootstrap/wechat/js/tbtouch.js" type="text/javascript"></script>
<link href="<?php echo base_url()?>bootstrap/wechat/css/tbtouch.css" rel="stylesheet" type="text/css"> 
<script src="<?php echo base_url()?>bootstrap/wechat/js/tms.js" type="text/javascript"></script> 
<style type="text/css" class="tabfix">
body.landscape .common-tab li.cur:before {left:-8px}body.landscape .common-tab li.cur:after {left:-7px}
</style>
</head>
<link href="<?php echo base_url()?>bootstrap/wechat/css/css.css" rel="stylesheet" type="text/css">

</div>
<ul class="ylmenu">
	<?php foreach($list_type as $v): ?>
  		<li class="ylmenu1">
  		<a href="<?php echo base_url().'wechat/'.$v['type_url']; ?>">
  		<span><?php echo $v['type_name']; ?></span>
  		</a>
  		</li>
  	<?php endforeach ?>
</ul>

<div style=" background:url(<?php echo base_url()?>bootstrap/wechat/img/bg1.jpg)">
	<div class=" pic-widget-slide-v2" id="J_IndexSlider"> 
	<div class="common-slide"> 
	<div class="list" style="left: 0px; "> 

	<ul class="wrap" style="width: 960px; left: -640px; "> 
		<?php foreach($best_type as $v): ?>
			<li class="one-img" style="left: 0px; "> 
				<a href="<?php echo $v['url']; ?>">
				<img src="<?php echo $v['pic']; ?>" width="320" height="150" border="0"> 
				</a>
			</li>
		<?php endforeach ?>
	</ul>

	</div>
	<div class="mtbslide-pagination"> 
	<div class="prev pg-btn">
		<a>上一页</a>
	</div> 
	<div class="trigs"> 
	<ul>
	<li class="">1</li>
	<li class="">2</li>
	<li class="cur">3</li>
	</ul> 
	</div> 
	<div class="next pg-btn">
		<a>下一页</a>
	</div> 
	</div> 
	</div> 
	</div>
</div> 

<script type="text/javascript">
$('#J_IndexSlider').slideLayer_v2({wrapEl:'.common-slide .list',slideEl:'.common-slide .list .wrap',childEl:'.common-slide .list li',counter:'.common-slide .trigs'});
</script> 

  <ul class="tjlist">
  	<?php foreach($one_type as $v): ?>
  	<li>
		<a href="<?php echo $v['url']; ?>">
	      <img class="img76" src="<?php echo $v['pic']; ?>" width="76" height="76">
	      <strong><?php echo $v['title']; ?></strong>
	      <div class="jiantou"></div>
	    </a>
    </li>
  	<?php endforeach ?>
 </ul>

<table border="0" cellspacing="0" cellpadding="0" style="width:100%; padding:0 5px; line-height:1.8em;">
	<tbody>
	<tr><td>
	<a href="#" class="top">TOP</a>
	<div align="center">冀ICP备16029575号<?php 
						$the_host = $_SERVER['HTTP_HOST'];//取得当前域名
						if($the_host == 'www.atime.net.cn')
						{
							echo '-1';
						}
						if($the_host == 'www.atime.org.cn')
						{
							echo '-2';
						}
					?><br>Copyright &copy;2014-2017.ATIME All rights reserved.		
	</div>
	</td></tr>
	</tbody>
</table>

</body>
</html>