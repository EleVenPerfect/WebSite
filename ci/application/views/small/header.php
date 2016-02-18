<?php
defined('BASEPATH') OR exit('No direct script access allowed');?>

<header class="header fixed clearfix navbar navbar-fixed-top">
			<div class="container">
				<div class="row">
					<div class="col-md-4">

						<!-- header-left start -->
						<!-- ================ -->
						<div class="header-left clearfix">

							<!-- logo -->
							<div class="logo smooth-scroll">
								<a href="<?php echo site_url();?>"><img id="logo" src="<?php echo base_url()?>images/favicon.png" alt="Worthy"></a>
							</div>

							<!-- name-and-slogan -->
							<div class="site-name-and-slogan smooth-scroll">
								<div class="site-name"><a href="<?php echo site_url();?>">ATIME</a></div>
								<div class="site-slogan">atime.org.cn</div>
							</div>

						</div>
						<!-- header-left end -->

					</div>
					<div class="col-md-8">

						<!-- header-right start -->
						<!-- ================ -->
						<div class="header-right clearfix">

							<!-- main-navigation start -->
							<!-- ================ -->
							<div class="main-navigation animated">

								<!-- navbar start -->
								<!-- ================ -->
								<nav class="navbar navbar-default" role="navigation">
									<div class="container-fluid">

										<!-- Toggle get grouped for better mobile display -->
										<div class="navbar-header">
											<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse-1">
												<span class="sr-only">Toggle navigation</span>
												<span class="icon-bar"></span>
												<span class="icon-bar"></span>
												<span class="icon-bar"></span>
											</button>
										</div>

										<!-- Collect the nav links, forms, and other content for toggling -->
										<div class="collapse navbar-collapse scrollspy smooth-scroll" id="navbar-collapse-1">
											<ul class="nav navbar-nav navbar-right">
											<?php foreach($home as $v): ?>
                								<li class="<?php
	                								$aid = $this->uri->segment(1);
	                								if ($aid==$v['catagory']) {
	                									echo 'active';
	                								}
	                								if ($aid=='index'&&$v['catagory']=='Home') {
	                									echo 'active';
	                								}	
	                								?>">

                								<a href="<?php echo base_url($v['catagory']) ?>"><?php echo  $v['catagory'] ?></a>
                								<!-- <a href="<?php echo site_url($v['catagory']) ?>"><?php echo  $v['catagory'] ?></a> -->
                								</li>
               								<?php endforeach ?>
											</ul>
										</div>

									</div>
								</nav>
								<!-- navbar end -->

							</div>
							<!-- main-navigation end -->

						</div>
						<!-- header-right end -->

					</div>
				</div>
			</div>
		</header>