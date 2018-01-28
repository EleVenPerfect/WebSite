---
title: 嵌入式裸机程序之LCD控制器简介
id: 371
categories:
  - 裸机程序
date: 2017-02-11 10:08:44
tags: [LCD控制器,S3C2440,嵌入式]
---

<section data-role="outer"><section class="_135editor" data-tools="135编辑器" data-id="33">

## <span class="autonum" title="" data-original-title="">1.</span>**LCD信号线**

</section><section class="_135editor" data-tools="135编辑器" data-id="84261"><section class="layout"><section><section></section><section></section></section><section class="135brush" data-style="color: rgb(51, 51, 51); font-size: 1em; line-height: 1.75em; word-break: break-all; word-wrap: break-word; text-align: justify;">常用的LCD显示屏会有这些信号线：VSYNC：垂直同步信号;

HSYNC：水平同步信号；

VCLK：象素时钟信号；

VD[23:0]：LCD像素数据输出端口；

VDEN：数据使能信号；

V+，V-：背光。

</section><section><section></section></section></section></section><section class="_135editor" data-tools="135编辑器" data-id="33">

## <span class="autonum" title="" data-original-title="">2.</span>LCD使用步骤

</section><section class="_135editor" data-tools="135编辑器" data-id="84261"><section class="layout"><section><section></section><section></section></section>    S3C2440芯片内有一个LCD控制器，专门用于驱动LCD屏幕，因此，在S3C2440上驱动LCD相对容易，只需要设置好相关寄存器即可。使用LCD需一下步骤：

1.  <section class="135brush" data-style="color: rgb(51, 51, 51); font-size: 1em; line-height: 1.75em; word-break: break-all; word-wrap: break-word; text-align: justify;">打开背光。</section>
2.  <section class="135brush" data-style="color: rgb(51, 51, 51); font-size: 1em; line-height: 1.75em; word-break: break-all; word-wrap: break-word; text-align: justify;">LCD时序设置。</section>
3.  <section class="135brush" data-style="color: rgb(51, 51, 51); font-size: 1em; line-height: 1.75em; word-break: break-all; word-wrap: break-word; text-align: justify;">在Frame Buffer中写数据。</section>
<section class="135brush" data-style="color: rgb(51, 51, 51); font-size: 1em; line-height: 1.75em; word-break: break-all; word-wrap: break-word; text-align: justify;"></section><section><section></section></section></section></section><section class="_135editor" data-tools="135编辑器" data-id="33">

## <span class="autonum" title="" data-original-title="">3.</span>**调色板**

</section><section class="_135editor" data-tools="135编辑器" data-id="84261"><section class="layout"><section><section></section><section></section></section><section class="135brush" data-style="color: rgb(51, 51, 51); font-size: 1em; line-height: 1.75em; word-break: break-all; word-wrap: break-word; text-align: justify;">当Frame buffer和LCD使用的不是数据位数不一致时，需要使用调色板来将颜色数据转换为需要在LCD显示的数据。在不使用调色板时，LCD显示过程是：Frame Buffer中的数据通过LCD控制器的驱动，显示到LCD上。

当使用调色板时，Frame Buffer上不保存LCD需要现实的实际数据，而是保存需要在LCD显示的颜色索引，通过LCD控制器把索引对应调色板上保存的颜色数据显示到LCD上。

</section><section><section></section></section></section></section><section class="_135editor" data-tools="135编辑器" data-id="33">

## <span class="autonum" title="" data-original-title="">4.</span>**示例代码**

</section><section class="_135editor" data-tools="135编辑器" data-id="84261"><section class="layout"><section><section></section><section></section></section><section class="135brush" data-style="color: rgb(51, 51, 51); font-size: 1em; line-height: 1.75em; word-break: break-all; word-wrap: break-word; text-align: justify;">LCD控制器使用需要几个核心的函数，如引脚的初始化、LCD控制寄存器设置、LCD电源开关。如下所示：</section><section><section></section></section></section></section>![blob.png](http://www.atime.net.cn/blog/wp-content/uploads/2017/02/Pr6pZ8yd_MJV8-1.png)

![blob.png](http://www.atime.net.cn/blog/wp-content/uploads/2017/02/fNphyd3w_vRKI-1.png)

![blob.png](http://www.atime.net.cn/blog/wp-content/uploads/2017/02/Zp4kKxUf_KYMJ-1.png)

在使用时，需要依次执行:

![blob.png](http://www.atime.net.cn/blog/wp-content/uploads/2017/02/DdcZQs3V_DNa6-1.png)

便于演示，代码中使用清屏命令来控制LCD的显示颜色，清屏所用代码如下：

<section class="_135editor" data-role="paragraph">![blob.png](http://www.atime.net.cn/blog/wp-content/uploads/2017/02/2zOKItkS_seuc-1.png)<section class="_135editor" data-tools="135编辑器" data-id="88719"><section><section><section data-width="40%">![](http://www.atime.net.cn/blog/wp-content/uploads/2017/02/ShpxkEgp_nxNZ-7.jpg "undefined")</section><section><section>Hello，伙伴们</section><section>长按二维码关注我们吧！</section></section></section></section></section></section></section>