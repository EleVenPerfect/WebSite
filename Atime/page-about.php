<?php
/*
Template Name: aboutme模版
 *
 * @package ATIME
 * @version 1.0
 */
 ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" type="text/css" href="<?php bloginfo('template_url');?>/fonts/Font-Awesome-4.7/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="<?php bloginfo('template_url');?>/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="<?php bloginfo('template_url');?>/style.css">
    <link rel="stylesheet" type="text/css" href="<?php bloginfo('template_url');?>/fonts/Font-Awesome-4.7/aboutme-style.css">
    
    <title>ATIME - 关于我</title>
</head>

<body>
    
    <div class="container">
        <section class="col-md-12 content" id="home">
           <div class="col-lg-6 col-md-6 content-item tm-black-translucent-bg tm-logo-box">
              <i class="fa fa-snowflake-o fa-4x tm-logo"></i>
              <h1 class="text-uppercase">About ME</h1>
               
           </div>
           <div class="col-lg-6 col-md-6 content-item content-item-1 background tm-white-translucent-bg">
               <h2 class="main-title text-center dark-blue-text">.01 Welcome</h2>
               <p><?php echo kratos_option('about_me_welcome'); ?></p>
           </div>
       </section>

       <section class="col-md-12 content padding tm-equal-col-container" id="services">
        <div class="col-lg-6 col-md-6 col-sm-12 content-item tm-black-translucent-bg tm-services-section-padding">
          <h2 class="main-title text-center dark-blue-text">.02 Experience</h2>
           <p><?php echo kratos_option('about_me_experience1'); ?></p>
           <p><?php echo kratos_option('about_me_experience2'); ?></p>
       </div>
       <div class="col-lg-6 col-md-6 col-sm-12 tm-white-translucent-bg tm-services-section-padding tm-box-center">

          <div class="tm-left-col">
            <div class="tm-border-box tm-gray-border-br tm-img-box-1">
              <img src="<?php echo kratos_option('about_me_experience_pic1'); ?>" alt="Image 1" class="tm-img tm-img-tl">  
             </div>  
             <div class="tm-border-box tm-pink-border-bl tm-img-box-2">
              <img src="<?php echo kratos_option('about_me_experience_pic3'); ?>" alt="Image 3" class="tm-img tm-img-bl">  
            </div> 
               
          </div>

          <div class="tm-right-col">
             <div class="tm-border-box tm-pink-border-tr tm-img-box-3">  
              <img src="<?php echo kratos_option('about_me_experience_pic2'); ?>" alt="Image 2" class="tm-img tm-img-tr">  
             </div>
            <div class="tm-border-box tm-gray-border-tl tm-img-box-4">
              <img src="<?php echo kratos_option('about_me_experience_pic4'); ?>" alt="Image 4" class="tm-img tm-img-br">  
            </div>  
          </div>
                      
       </div>

      </section>

      <section class="col-md-12 content padding tm-float-section tm-section-3">

      <div class="col-lg-6 col-md-6 content-item tm-black-translucent-bg"></div>
      <div class="col-lg-6 col-md-6 content-item tm-white-translucent-bg"></div>
      
      <div class="tm-float-section-header">
        <h2 class="text-center tm-white-text tm-section-3-header">.03 Code</h2>  
      </div>

      <div class="tm-float-section-body tm-white-bg">
        <div class="col-lg-12">
          <div class="col-md-4 col-lg-4">
            <i class="fa fa-commenting-o fa-4x tm-fa-icon"></i>
            <p><?php echo kratos_option('about_me_code1'); ?></p>
          </div>
          <div class="col-md-4 col-lg-4">
            <i class="fa fa-code fa-4x tm-fa-icon"></i>
            <p><?php echo kratos_option('about_me_code2'); ?></p>
          </div>
          <div class="col-md-4 col-lg-4">
            <i class="fa fa-inbox fa-4x tm-fa-icon"></i>
            <p><?php echo kratos_option('about_me_code3'); ?></p>
          </div>
        </div>
      </div>
        
      </section>

   <section class="col-md-12 content" id="contact">
       <div class="col-lg-6 col-md-6 content-item tm-content-box tm-black-translucent-bg">
           <h2 class="contact-title">.04 Contact Info</h2>
           <p><?php echo kratos_option('about_me_contact'); ?></p>
           <p>
			       Email: <?php echo kratos_option('about_me_email'); ?><br>
             微信公众号：<?php echo kratos_option('about_me_wechat'); ?>
           </p>
		   <button type="button" class="btn btn-big pull-left tm-btn-primary" onclick="window.location.href='<?php echo home_url();?>'">返回首页</button>
       </div>

       <div class="col-lg-6 col-md-6 content-item tm-content-box tm-white-translucent-bg">
       <?php if ( comments_open() ) comments_template(); ?>
       </div>
       <!---
       <div class="col-lg-6 col-md-6 content-item tm-content-box tm-white-translucent-bg">
           <form action="#" method="post" name="contact-form" class="contact-form">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="form-group">
                    <input name="name" type="text" class="form-control" id="name" placeholder="Your Name" required>
                </div>    
            </div>
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="form-group contact-field">
                    <input name="email" type="email" class="form-control" id="email" placeholder="Email" required>
                </div>    
            </div>
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="form-group contact-field">
                    <textarea name="message" rows="6" class="form-control" id="message" placeholder="Message" required></textarea>
                </div>    
            </div>
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="form-group margin-b-0">
                    <button type="submit" id="form-submit" class="btn pull-right btn-contact tm-btn-primary">提交</button>
                </div>    
            </div>
        </form>
        <div id="msgSubmit" class="h3 text-center hidden">提交成功!</div>
    </div>
    -->
</section>

</div>

<div class="text-center footer">
	<div class="container">
		Copyright &copy; <span class="tm-current-year">2014-2018</span> ATIME 
        
        | More Info <a href="http://www.atime.net.cn/" target="_blank">atime.org.cn</a> 
    </div>
</div>

<script>

// Write current year in copyright text.
  document.getElementsByClassName("tm-current-year").value = new Date().getFullYear();

</script>
</body>
</html>