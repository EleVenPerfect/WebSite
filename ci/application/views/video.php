<?php
defined('BASEPATH') OR exit('No direct script access allowed');?>
<?php $this->load->view('small/301') ?>
<!DOCTYPE html>
<!--[if IE 9]> <html lang="en" class="ie9"> <![endif]-->
<!--[if !IE]><!-->
<html lang="en">
<!--<![endif]-->
	<head>
		<title>视频--ATIME，专注创造奇迹！</title>
		<?php $this->load->view('small/first') ?>
		<?php $this->load->view('small/cache') ?>
	</head>
	<body class="scroll-spy fixed-header-on" style="overflow-y: hidden">
		<div class="fixed-header-on">
		<?php $this->load->view('small/header') ?>
		</div>
		
		<IFRAME width=100% height=100% marginwidth=0 marginheight=0 SRC="http://i.youku.com/elevenperfect"  allowtransparency="yes" >
		</IFRAME>

		<?php $this->load->view('small/copyright') ?>
		<?php $this->load->view('small/last') ?>
	</body>
</html>