<?php
defined('BASEPATH') OR exit('No direct script access allowed');?>
<?php $this->load->view('small/301') ?>
<!DOCTYPE html>
<!--[if IE 9]> <html lang="en" class="ie9"> <![endif]-->
<!--[if !IE]><!-->
<html lang="en">
<!--<![endif]-->
	<head>
		<title>博客--ATIME，专注创造奇迹！</title>
		<?php $this->load->view('small/first') ?>
		<?php $this->load->view('small/cache') ?>

	</head>
	<body class="scroll-spy fixed-header-on" style="overflow-y: hidden">
		<div class="fixed-header-on">
		<?php $this->load->view('small/header') ?>
		</div>
		<div class="space"></div>
		<iframe width=100% height=100% marginwidth=0 marginheight=0 SRC="http://louislii.lofter.com/view"  allowtransparency="yes" >
		</iframe>

		<?php $this->load->view('small/copyright') ?>
		<?php $this->load->view('small/last') ?>
	</body>
</html>