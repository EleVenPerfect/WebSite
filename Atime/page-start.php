<?php
/*
Template Name: 起始页模版
 *
 * @package ATIME
 * @version 1.0
 */
get_header(); ?>
<div class="kratos-start">
	<div class="kratos-overlay"></div>
	<div class="kratos-cover kratos-topimg text-center" style="background-image: url('<?php echo kratos_option('start_image'); ?>')">
		<div class="desc desc3">
			<h1 class="atime_style_h1 text-center">
				<?php echo kratos_option('start_text0'); ?>
				<nobr><?php echo kratos_option('start_text1'); ?></nobr>
			</h1>
			<span><?php echo kratos_option('start_text2'); ?></span>
			<span><a href="<?php echo home_url(); echo "\home" ?>"><div class="btn btn-star">点击进入</div></a></span>
		</div>
	</div>
</div>
<?php get_footer(); ?>