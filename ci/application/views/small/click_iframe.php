		<script type="text/javascript" src="<?php echo base_url()?>bootstrap/plugins/jquery.min.js"></script>
		<script src="<?php echo base_url()?>bootstrap/layer/layer.js"></script>

		<script>
		function layercreate(url){
			layer.open({
		  		type: 2,
		  		title: '点击的网页',
		  		fix: true,
		  		maxmin: true,
		  		area: ['1200px', '600px'],
		  		shadeClose: false, //点击遮罩关闭
		  		content: url
		  	});
		}
		</script>


		<a href="javascript:layercreate('<?php echo $v['url'] ?>')" style="text-decoration:none;" >