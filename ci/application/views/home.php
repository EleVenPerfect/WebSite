<?php
defined('BASEPATH') OR exit('No direct script access allowed');?>
<?php $this->load->view('small/301') ?>
<!DOCTYPE html>
<!--[if IE 9]> <html lang="en" class="ie9"> <![endif]-->
<!--[if !IE]><!-->
<html lang="en">
<!--<![endif]-->
	<head>
		<title>ATIME，专注创造奇迹！</title>
		<?php $this->load->view('small/first') ?>
		<?php $this->load->view('small/cache') ?>
	</head>
	<body>
		<?php $this->load->view('small/header') ?>


		<div id="banner" class="banner">
			<div class="banner-image"></div>
			<div class="banner-caption">
				<div class="container">
					<div class="row">
						<div class="col-md-8 col-md-offset-2 object-non-visible" data-animation-effect="fadeIn">
							<h1 class="text-center"><?php echo $page1top['0']['value']; ?></h1>
							<p class="lead text-center"><?php echo $page1mid['0']['value']; ?></p>
						</div>
					</div>
				</div>
			</div>
		</div>

		

		<!-- section start -->
		<!-- ================ -->
		<!--
		<div class="section clearfix object-non-visible" data-animation-effect="fadeIn">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<h1 id="about" class="title text-center">About <span>ATIME</span></h1>
						<p class="lead text-center"><?php echo $page2top['0']['value']; ?></p>
						<div class="space"></div>
						<div class="row">
							<div class="col-md-6">
								<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=400 height=500 src="<?php echo $page2pic['0']['value']; ?>"></iframe>
								<div class="space"></div>
							</div>
							<div class="col-md-6">
								<?php //echo $page2mid['0']['value']; ?>
								<?php //$this->load->view('small/textcloud'); ?>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>-->





		<?php $this->load->view('small/copyright') ?>
		<?php $this->load->view('small/last') ?>
	</body>
</html>