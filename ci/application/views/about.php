<?php
defined('BASEPATH') OR exit('No direct script access allowed');?>
<?php $this->load->view('small/301') ?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>关于ATIME</title>
	<meta http-equiv="X-UA-Compatible" content="IE=Edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="keywords" content="关于ATIME">
	<meta name="description" content="ATIME的自我介绍">

	<!-- stylesheet css -->
	<link rel="shortcut icon" href="<?php echo base_url()?>images/favicon.png">
	<link rel="stylesheet" href="<?php echo base_url()?>bootstrap/about/css/bootstrap.min.css">
	<link rel="stylesheet" href="<?php echo base_url()?>bootstrap/about/css/font-awesome.min.css">
	<link rel="stylesheet" href="<?php echo base_url()?>bootstrap/about/css/templatemo-blue.css">
</head>
<body data-spy="scroll" data-target=".navbar-collapse">

<!-- preloader section -->
<div class="preloader">
	<div class="sk-spinner sk-spinner-wordpress">
       <span class="sk-inner-circle"></span>
     </div>
</div>

<!-- header section -->
<header>
	<div class="container">
		<div class="row">
			<div class="col-md-12 col-sm-12">
				<img src="<?php echo base_url()?>bootstrap/about/images/tm-easy-profile.jpg" class="img-responsive img-circle tm-border" alt="templatemo easy profile">
				<!-- <hr> -->
				<h1 class="tm-title bold shadow">我是 ATIME</h1>
				<h1 class="white bold shadow">电子信息专业学生</h1>
			</div>
		</div>
	</div>
</header>

<!-- about and skills section -->
<section class="container">
	<div class="row">
		<div class="col-md-6 col-sm-12">
			<div class="about">
				<h3 class="accent" style="color:#333;">Education</h3>
				<h2><a target="_blank" href="http://www.nciae.edu.cn" style="text-decoration:none;color:#333;">北华航天工业学院</a></h2>
				<p><a target="_blank" href="http://www.nciae.edu.cn" style="text-decoration:none;color:#333;">北华航天工业学院（North China Institute of Aerospace Engineering）</a>坐落在河北省廊坊市，是由国家国防科技工业局、中国航天科技集团公司、中国航天科工集团与河北省人民政府共建的一所公办普通本科院校，是服务国家（航天）特殊需求人才硕士专业学位研究生教育试点单位。
				</p>
				<p>北华航天工业学院始建于1978年，1999年4月学校划转到河北省，实行“中央与地方共建，以地方管理为主”的管理体制；2004年7月13日，更名为北华航天工业学院。</p>
			</div>
		</div>
		<div class="col-md-6 col-sm-12">
			<div class="skills">
				<h2 class="white">Courses</h2>
				<h4 class="education-title accent">专业课程</h4>
				<strong>电路分析</strong>
				<span class="pull-right">88%</span>
					<div class="progress">
						<div class="progress-bar progress-bar-primary" role="progressbar" 
                        aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width: 12%;"></div>
					</div>
				<strong>模拟电子线路</strong>
				<span class="pull-right">93%</span>
					<div class="progress">
						<div class="progress-bar progress-bar-primary" role="progressbar" 
                        aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width: 7%;"></div>
					</div>
				<strong>数字电子线路</strong>
				<span class="pull-right">88%</span>
					<div class="progress">
						<div class="progress-bar progress-bar-primary" role="progressbar" 
                        aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style="width: 12%;"></div>
					</div>
				<strong>C语言</strong>
				<span class="pull-right">93%</span>
					<div class="progress">
						<div class="progress-bar progress-bar-primary" role="progressbar" 
                        aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style="width: 7%;"></div>
					</div>
			</div>
		</div>
	</div>
</section>

<!-- education and languages -->
<section class="container">
	<div class="row">
		<div class="col-md-8 col-sm-12">
			<div class="education">
				<h2 class="white">Experiences</h2>
					<div class="education-content">
						<h4 class="education-title accent">学习实践经历</h4>
							<div class="education-school">
								<h5>学习STC单片机</h5><span></span>
								<h5>2014年1月-2014年5月</h5>
							</div>
						<p class="education-description">学习51单片机并完成51单片机常用操作的函数封装。</p>
							<div class="education-school">
								<h5>学习S3C2440微处理器</h5><span></span>
								<h5>2015年-至今</h5>
							</div>
						<p class="education-description">学习三星S3C2440嵌入式微处理器的裸机开发、Bootloader的移植开发、嵌入式Linux操作系统的移植。</p>
					</div>
			</div>
		</div>
		<div class="col-md-4 col-sm-12">
			<div class="languages">
				<h2>Languages</h2>
				<h4>编程语言</h4><span></span>
					<ul>
						<li>熟悉C语言单片机编程<p></p></li>
						<li>了解Verilog设计<p></p></li>
						<li>了解Python编程<p></p></li>
						<li>了解PHP / html网页编程</li>
					</ul>
			</div>
		</div>
	</div>
</section>

<!-- contact and experience -->
<section class="container">
	<div class="row">
		<div class="col-md-4 col-sm-12">
			<div class="contact">
				<h2>Contact</h2>
					<p><i class="fa fa-map-marker"></i> 河北省承德市双桥区</p>
					<p><i class="fa fa-phone"></i> +86-18333605384</p>
					<p><i class="fa fa-envelope"></i><a target="_blank" href="http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=atime2008@atime.org.cn" style="text-decoration:none;color:#333;">  atime2008@atime.org.cn</a></p>
					<p><i class="fa fa-globe"></i><a href="<?php echo site_url()?>" style="text-decoration:none;color:#333;"> www.atime.org.cn</a></p>
			</div>
		</div>
		<div class="col-md-8 col-sm-12">
			<div class="experience">
				<h2 class="white">Experiences</h2>
					<div class="experience-content">
						<h4 class="experience-title accent">学习实践经历</h4>
						<h5>学习MSP430单片机</h5><span></span>
						<h5>2016年1月-2016年2月</h5>
						<p class="education-description">学习使用MSP430F149单片机开发简单应用，并封装常用接口函数。如时钟频率设置、串口设置、SPI接口设置、软件I2C接口等函数。</p>
					</div>
			</div>
		</div>
	</div>
</section>

<!-- footer section -->
<footer>
	<div class="container">
		<div class="row">
			<div class="col-md-12 col-sm-12">
				<p>Copyright &copy; 2014-2016. <a href="<?php echo site_url()?>" style="text-decoration:none;color:#fff;">&nbsp;ATIME</a> All rights reserved.&nbsp;
				<p><a target="_blank" href="http://www.miitbeian.gov.cn" style="text-decoration:none;color:#fff;">冀ICP备16029575号<?php 
						$the_host = $_SERVER['HTTP_HOST'];//取得当前域名
						if($the_host == 'www.atime.net.cn')
						{
							echo '-1';
						}
						if($the_host == 'www.atime.org.cn')
						{
							echo '-2';
						}
					?></a><p>
					<?php $this->load->view('small/count') ?></p>
				<ul class="social-icons">
					<li><a href="<?php echo site_url()?>" class="fa fa-home"></a></li>
                    <li><a target="_blank" href="https://github.com/EleVenPerfect" class="fa fa-github"></a></li>
					<li><a class="fa fa-weixin weixin" href="javascript:"><img src="<?php echo base_url()?>bootstrap/about/images/weixin.jpg"></a></li>
					<li><a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=595309963&site=qq&menu=yes" class="fa fa-qq"></a></li>
					<li><a href="<?php echo site_url()?>" class="fa fa-mail-forward"></a></li>
				</ul>
			</div>
		</div>
	</div>
</footer>

<!-- javascript js -->	
<script src="<?php echo base_url()?>bootstrap/about/js/jquery.js"></script>
<script src="<?php echo base_url()?>bootstrap/about/js/bootstrap.min.js"></script>	
<script src="<?php echo base_url()?>bootstrap/about/js/jquery.backstretch.min.js"></script>
<script src="<?php echo base_url()?>bootstrap/about/js/custom.js"></script>

</body>
</html>