<?php
defined('BASEPATH') OR exit('No direct script access allowed');?>
<!DOCTYPE html>
<!--[if IE 9]> <html lang="en" class="ie9"> <![endif]-->
<!--[if !IE]><!-->
<html lang="en">
<!--<![endif]-->
	<head>
		<title>联系--ATIME，专注创造奇迹！</title>
		<?php $this->load->view('small/first') ?>
		<?php $this->load->view('small/cache') ?>
	</head>
	<body>
		<?php $this->load->view('small/header') ?>


		<div class="section translucent-bg bg-image-1 blue">
			<div class="container object-non-visible" data-animation-effect="fadeIn">
				<div class="space"></div>
				<h1 id="services"  class="text-center title"><p>Contacts</p></h1>
				<div class="space"></div>
					<div class="row">
						<div class="col-sm-6">
							<div class="footer-content">
								<p class="large">
									留下您的电子邮件和我取得联系。
								</p>
								<ul class="list-icons">
									<li><i class="fa fa-map-marker pr-10"></i>  Chengde City，Hebei Province，China</li>
									<!-- <li><i class="fa fa-phone pr-10"></i> +00 1234567890</li> -->
									<li><i class="fa fa-fax pr-10"></i> QQ:595309963 </li>
									<li><i class="fa fa-envelope-o pr-10"></i> atime2008@atime.org.cn</li>
								</ul>
								<ul class="social-links">
									<!-- <li class="facebook"><a target="_blank" href="http://sc.chinaz.com"><i class="fa fa-facebook"></i></a></li>
									<li class="twitter"><a target="_blank" href="http://sc.chinaz.com"><i class="fa fa-twitter"></i></a></li>
									<li class="googleplus"><a target="_blank" href="http://sc.chinaz.com"><i class="fa fa-google-plus"></i></a></li>
									<li class="skype"><a target="_blank" href="http://sc.chinaz.com"><i class="fa fa-skype"></i></a></li>
									<li class="linkedin"><a target="_blank" href="http://sc.chinaz.com"><i class="fa fa-linkedin"></i></a></li>
									<li class="youtube"><a target="_blank" href="http://sc.chinaz.com"><i class="fa fa-youtube"></i></a></li>
									<li class="flickr"><a target="_blank" href="http://sc.chinaz.com"><i class="fa fa-flickr"></i></a></li>
									<li class="pinterest"><a target="_blank" href="http://sc.chinaz.com"><i class="fa fa-pinterest"></i></a></li> -->
								</ul>

							</div>
						</div>
						<div class="col-sm-6">
							<div class="footer-content">
							
								<form action="<?php echo site_url("Contacts/checkmessage") ?>" method="post" class="form-horizontal">
								    	
								  	<div class="form-group" >
								    	<label class="col-sm-2 control-label">Name</label>
								    	<div class="col-sm-10">
								     		<input type="text" name="name" class="form-control" id="email1" placeholder="Your Name">
								    	</div>
								  	</div>
								  	<div class="form-group">
								    	<label class="col-sm-2 control-label">Email</label>
								    	<div class="col-sm-10">
								      		<input type="email" name="email" class="form-control" id="email2" placeholder="Your Email">
								    	</div>
								  	</div>
								  	<div class="form-group">
								    	<label class="col-sm-2 control-label">Captcha</label>
								    	<div class="col-sm-3">
									    	<img src="<?php echo base_url().'captcha/'.$cap['filename'] ?>" class="img-responsive" alt="Responsive image" />
									    </div>
								    	<div class="col-sm-7">
								      		<input type="text" name="captcha" class="form-control" id="email3" placeholder="Captcha">
								    	</div>
								  	</div>
								  	<div class="form-group">
								  		<label class="col-sm-2 control-label">Message</label>
								  		<div class="col-sm-10">
								    		<textarea class="form-control" name="message" rows="5"></textarea>
								    	</div>
								  	</div>
								  	<div class="form-group">
								    	<div class="col-sm-offset-2 col-sm-10">
								      	<button type="submit" class="btn btn-default">Submit</button>
								      	<button type="reset" class="btn btn-default">Clear</button>
								    	</div>
								  	</div>

								</form>
							</div>
						</div>
					</div>
			</div><p/>&nbsp;<p/>&nbsp;<p/>&nbsp;<p/>&nbsp;<p/>&nbsp;<p/>&nbsp;
		</div>





	
		<?php $this->load->view('small/copyright') ?>
		<?php $this->load->view('small/last') ?>
	</body>
</html>