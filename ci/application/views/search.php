<?php
defined('BASEPATH') OR exit('No direct script access allowed');?>
<!DOCTYPE html>
<!--[if IE 9]> <html lang="en" class="ie9"> <![endif]-->
<!--[if !IE]><!-->
<html lang="en">
<!--<![endif]-->
	<head>
		<title>搜索导航--ATIME，专注创造奇迹！</title>
		<?php $this->load->view('small/first') ?>
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
						<a href="<?php echo $v['url'] ?>" target="new" style="text-decoration:none;" >
						<div class="media testimonial">
							<div class="media-left">
								<img src="<?php echo $v['pic'] ?>" alt="">
							</div>
							<div class="media-body">
								<h3 class="media-heading"><?php echo $v['title'] ?></h3>
								<blockquote>
									<?php echo $v['contain'] ?>
									<footer><?php echo $v['footer'] ?></footer>
								</blockquote>
							</div>
						</div>
						</a>
					</div>
					<?php endforeach ?>
					
			</div>
			<div class="space"></div><div class="space"></div>
		</div>

		<?php $this->load->view('small/copyright') ?>
		<?php $this->load->view('small/last') ?>
	</body>
</html>