<?php
defined('BASEPATH') OR exit('No direct script access allowed');?>

<div class=" translucent-bg  pb-clear">
	<div class="subfooter">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<p class="text-center"><a target="_blank" href="http://www.miitbeian.gov.cn" style="text-decoration:none;">冀ICP备16029575号<?php 
						$the_host = $_SERVER['HTTP_HOST'];//取得当前域名
						if($the_host == 'www.atime.net.cn')
						{
							echo '-1';
						}
						if($the_host == 'www.atime.org.cn')
						{
							echo '-2';
						}
					?></a></p>
					<p class="text-center">Copyright &copy;2014-2017.<a href="<?php echo base_url()?>About" style="text-decoration:none;">&nbsp;ATIME</a> All rights reserved.&nbsp;
					<?php $this->load->view('small/count') ?>
					</p>
				</div>
			</div>
		</div>
	</div>
</div>		
