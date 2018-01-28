---
title: 嵌入式裸机程序之系统时钟
id: 358
categories:
  - 裸机程序
date: 2017-02-10 19:24:43
tags: [系统时钟,S3C2440,嵌入式]
---

<section data-role="outer"><section class="_135editor" data-tools="135编辑器" data-id="33">

## <span class="autonum" title="" data-original-title="">1.</span>**系统时钟**

</section><section class="_135editor" data-tools="135编辑器" data-id="84261"><section class="layout"><section><section></section><section></section></section><section class="135brush" data-style="color: rgb(51, 51, 51); font-size: 1em; line-height: 1.75em; word-break: break-all; word-wrap: break-word; text-align: justify;">S3C2440有三种时钟:FCLK(用于CPU核),HCLK(用于主机模块),PCLK(用于外设).两种PLL(锁相环):MPLL(用于设置FCLK，HCLK，PCLK),UPLL(用于设置USB设备)。如图所示：</section><section><section></section></section></section></section>![blob.png](http://www.atime.net.cn/blog/wp-content/uploads/2017/02/dHLNH74r_XnFA-1.png)

<section class="_135editor" data-tools="135编辑器" data-id="33">

## <span class="autonum" title="" data-original-title="">2.</span>**系统时钟初始化**

</section><section class="_135editor" data-tools="135编辑器" data-id="84261"><section class="layout"><section><section></section><section></section></section><section class="135brush" data-style="color: rgb(51, 51, 51); font-size: 1em; line-height: 1.75em; word-break: break-all; word-wrap: break-word; text-align: justify;">S3c2440系统时钟初始化流程如下：(1) 系统刚上电几毫秒后，FCLK等于外部晶振的振荡频率，即FCLK=Fin(2) 当复位信号nReset恢复高电平后，锁相环按照寄存器MPLLCON和CLKDIVN设定的倍频比例开始生成所需要的时钟频率。从锁相环开始工作到输出新的稳定的频率值需要一定的时间(lock time 即锁相环的捕获时间)，经过这段时间后，锁相环输出新的频率值，这是FCLK等于锁相环的输出。

如图所示：

</section><section><section></section></section></section></section>![blob.png](http://www.atime.net.cn/blog/wp-content/uploads/2017/02/OUKuxGuC_TbZu-1.png)

<section class="_135editor" data-tools="135编辑器" data-id="33">

## <span class="autonum" title="" data-original-title="">3.</span>代码解析

</section><section class="_135editor" data-tools="135编辑器" data-id="84261"><section class="layout"><section><section></section><section></section></section><section class="135brush" data-style="color: rgb(51, 51, 51); font-size: 1em; line-height: 1.75em; word-break: break-all; word-wrap: break-word; text-align: justify;">代码如下所示，首先设置FCLK、MCLK、PCLK的分频比例，随后根据S3C2440的芯片手册说明，当HDIV非1时需要执行一段代码。然后就可以设置MPLLCOM寄存器，设定锁相环输出频率了。</section><section><section></section></section></section></section>![blob.png](http://www.atime.net.cn/blog/wp-content/uploads/2017/02/bpOHsqSu_SuCI-1.png)

<section class="_135editor" data-tools="135编辑器" data-id="88719"><section><section><section data-width="40%">![](http://www.atime.net.cn/blog/wp-content/uploads/2017/02/ShpxkEgp_nxNZ-5.jpg "undefined")</section><section><section>Hello，伙伴们</section><section>长按二维码关注我们吧！</section></section></section></section></section><section class="_135editor" data-role="paragraph"></section></section>