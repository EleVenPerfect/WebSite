<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?>

<link rel="icon" href="<?php echo base_url()?>images/favicon.ico">
<link rel="shortcut icon" href="<?php echo base_url()?>images/favicon.ico" />

<meta charset="utf-8">
<meta name = "format-detection" content = "telephone=no" />
<link rel="stylesheet" href="<?php echo base_url()?>css/style.css">
<script src="<?php echo base_url()?>js/jquery.js"></script>
<script src="<?php echo base_url()?>js/jquery-migrate-1.1.1.js"></script>
<script src="<?php echo base_url()?>js/jquery.easing.1.3.js"></script>
<script src="<?php echo base_url()?>js/script.js"></script> 

<script src="<?php echo base_url()?>js/device.js"></script> 
<script src="<?php echo base_url()?>js/jquery.mousewheel.js"></script> 
<script src="<?php echo base_url()?>js/jquery.simplr.smoothscroll.js"></script> 

<script src="<?php echo base_url()?>js/superfish.js"></script>
<script src="<?php echo base_url()?>js/jquery.equalheights.js"></script>
<script src="<?php echo base_url()?>js/jquery.mobilemenu.js"></script>
<script src="<?php echo base_url()?>js/tmStickUp.js"></script>
<script src="<?php echo base_url()?>js/jquery.ui.totop.js"></script>
<script src="<?php echo base_url()?>js/jquery.shuffle-images.js"></script>

<script>
 $(window).load(function(){
  $().UItoTop({ easingType: 'easeOutQuart' });
  $('#stuck_container').tmStickUp({});  

 }); 

 $(document).ready(function(){
       $(".shuffle-me").shuffleImages({
         target: ".images > img"
       });
    });

</script>
<!--[if lt IE 8]>
 <div style=' clear: both; text-align:center; position: relative;'>
   <a href="http://windows.microsoft.com/en-US/internet-explorer/products/ie/home?ocid=ie6_countdown_bannercode">
     <img src="http://storage.ie6countdown.com/assets/100/images/banners/warning_bar_0000_us.jpg" border="0" height="42" width="820" alt="You are using an outdated browser. For a faster, safer browsing experience, upgrade for free today." />
   </a>
</div>
<![endif]-->
<!--[if lt IE 9]>
<script src="<?php echo base_url()?>js/html5shiv.js"></script>
<link rel="stylesheet" media="screen" href="<?php echo base_url()?>css/ie.css">
<![endif]-->
</head>

<body class="page1" id="top">
<!--==============================
              header
=================================-->
<header>
  <div class="header_top">
    <div class="container">
      <div class="row">
        <div class="grid_12">
          <h1><a href="#"><?php echo  $home[0]['value']?> </a></h1>
          <?php echo  $home[1]['value']?>
        </div>
      </div>
    </div>
  </div>
  <section id="stuck_container">
  <!--==============================
              Stuck menu
  =================================-->
    <div class="container">
      <div class="row">
        <div class="grid_12 ">
          <h1 class="logo">
            <a href="index.html">
              <?php echo  $home[2]['value']?>
            </a>
          </h1>
          <div class="navigation ">
            <nav>
              <ul class="sf-menu">
               <?php foreach($catagory as $v): ?>
                <li><a href="<?php echo site_url('/atime/'.$v['catagory']) ?>"><?php echo  $v['catagory'] ?></a></li>
               <?php endforeach ?>
             </ul>
            </nav>
            <div class="clear"></div>
          </div>       
         <div class="clear"></div>  
        </div>
     </div> 
    </div> 
  </section>
</header>
<!--=====================
          Content
======================-->
<section id="content">