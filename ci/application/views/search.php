<?php
defined('BASEPATH') OR exit('No direct script access allowed');?>
<?php $this->load->view('small/301') ?>

<!DOCTYPE html>
<!--[if IE 9]> <html lang="en" class="ie9"> <![endif]-->
<!--[if !IE]><!-->
<html lang="en">
<!--<![endif]-->
	<head>
		<title>搜索导航--ATIME，专注创造奇迹！</title>
		<?php $this->load->view('small/first') ?>
		<?php $this->load->view('small/cache') ?>
	</head>
	<body>
		<?php $this->load->view('small/header') ?>

		<div class="section translucent-bg bg-image-2 pb-clear">
			<div class="container object-non-visible" data-animation-effect="fadeIn">
			<div class="space"></div>
				<h1 id="clients" class="title text-center">Search</h1>
				<div class="space"></div>
				
					<?php foreach($sec as $v): ?>
					<div class="col-md-4">
						<a target="_blank" href="<?php echo $v['url'] ?>" style="text-decoration:none;" >
						<div class="media testimonial">
							<div class="media-left">
								<img src="<?php echo base_url().'bootstrap/images/ico/'.$v['pic'] ?>" alt="">
							</div>
							<div class="media-body">
								<h3 class="media-heading"><?php echo $v['title'] ?></h3>
								<blockquote>
									<footer><?php echo $v['contain'] ?></footer>
									</blockquote>
							</div>
						</div>
						</a>
					</div>
					<?php endforeach ?>
					
			</div>
			<div class="space"><p/>&nbsp;</div><div class="space"><p/>&nbsp;</div>
			<div class="space"><p/>&nbsp;</div><div class="space"><p/>&nbsp;</div>
		</div>

		<?php $this->load->view('small/copyright') ?>
		<?php $this->load->view('small/last') ?>
	</body>
</html>