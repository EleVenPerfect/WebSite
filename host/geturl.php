<?
    $yourdomain = $_SERVER['HTTP_HOST'];
    $yourdomain = preg_replace('/^www\./' , '' , $yourdomain);
    $yourdomain = ucfirst($yourdomain);
	$yourfulldomain = 'www.'.$yourdomain;
    $supportmail = 'admin@sinsy.com.cn';
    $supporturl  = 'http://'.$yourfulldomain.'/supports';
    $webname     = '森西科技云主机';
?>

