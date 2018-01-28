---
title: 嵌入式裸机程序之串口程序
id: 346
categories:
  - 裸机程序
date: 2017-02-09 19:36:01
tags: [串口,S3C2440,嵌入式]
---

<section data-role="outer"><section class="_135editor" data-tools="135编辑器" data-id="33">

## <span class="autonum" title="" data-original-title="">1.</span>**串口通信**

</section><section class="_135editor" data-tools="135编辑器" data-id="84261"><section class="layout"><section><section></section><section></section></section><section class="135brush" data-style="color: rgb(51, 51, 51); font-size: 1em; line-height: 1.75em; word-break: break-all; word-wrap: break-word; text-align: justify;">串行接口是一种可以将接受来自CPU的并行数据字符转换为连续的串行数据流发送出去，同时可将接受的串行数据流转换为并行的数据字符供给CPU的器件。一般完成这种功能的电路，我们称为串行接口电路。在学习单片机时，通常调试程序都需要先将串口程序调试完成，在此基础上，可以在后续调试程序中使用串口打印数据，设置断点。

嵌入式裸机程序的编写过程中，尤其在没有显示屏幕的情况下，需要串口来配合调试.

</section><section><section></section></section></section></section><section class="_135editor" data-tools="135编辑器" data-id="33">

## <span class="autonum" title="" data-original-title="">2.</span>**S3C2440 UART控制器**

</section><section class="_135editor" data-tools="135编辑器" data-id="84261"><section class="layout"><section><section></section><section></section></section><section class="135brush" data-style="color: rgb(51, 51, 51); font-size: 1em; line-height: 1.75em; word-break: break-all; word-wrap: break-word; text-align: justify;">S3C2440 UART控制器，提供了三个独立的异步串行I/O端口，每个端口都可以在中断模式或DMA模式下工作。也就是说，S3C2440的 UART可以生成中断或DMA请求用于CPU和UART之间的数据传输。UART串口挂接在APB总线上，APB总线最高可以达到50MHz工作频率，在使用APB时钟频率时可以达到最高115.2Kbps波特率的通信速度。如果UART串口接收外部设备提供外部时钟，UART可以在更高的速度下工作。每个UART串口在接收装置和发送装置里分别包含一个64Byte的FIFO缓冲区，用于缓存发送数据和接收数据。</section><section><section></section></section></section></section><section class="_135editor" data-tools="135编辑器" data-id="33">

## <span class="autonum" title="" data-original-title="">3.</span>**帧结构**

</section><section class="_135editor" data-tools="135编辑器" data-id="84261"><section class="layout"><section><section></section><section></section></section><section class="135brush" data-style="color: rgb(51, 51, 51); font-size: 1em; line-height: 1.75em; word-break: break-all; word-wrap: break-word; text-align: justify;">UART在通信之前要在发送端和接收端约定好帧结构，也就是约定好传输数据帧格式。l  开始位：必须包含在数据帧中，表示一个帧的开始。

l  数据位：可选5，6，7，8位，该位长度可由编程人员指定。

l  校验位：如果在开启了数据校验时，该位必须指定。

l  停止位：可选1，2位，该位长度可由编程人员指定。

通信双方约定好帧格式后，指定同一波特率，以保证双方数据传输的同步。

</section><section><section></section></section></section></section>![](http://www.atime.net.cn/blog/wp-content/uploads/2017/02/0_1308549299gl6e-1.gif)

<section class="_135editor" data-tools="135编辑器" data-id="33">

## <span class="autonum" title="" data-original-title="">4.</span>**核心代码**

</section><section class="_135editor" data-tools="135编辑器" data-id="84261"><section class="layout"><section><section></section><section></section></section><section class="135brush" data-style="color: rgb(51, 51, 51); font-size: 1em; line-height: 1.75em; word-break: break-all; word-wrap: break-word; text-align: justify;">S3C2440的串口程序核心代码如图所示，最少需要这三个函数：串口初始化，串口发送，串口接收。同单片机一样，串口初始化也就是需要设置IO引脚功能和设置串口的帧结构和串口波特率。

串口的读写数据都有专用的寄存器负责，使用很简单，从代码中可以看出。

</section><section><section></section></section></section></section>![blob.png](http://www.atime.net.cn/blog/wp-content/uploads/2017/02/75eYByJS_hGpz-1.png)

<section class="_135editor" data-tools="135编辑器" data-id="88719"><section><section><section data-width="40%">![](http://www.atime.net.cn/blog/wp-content/uploads/2017/02/ShpxkEgp_nxNZ-3.jpg "undefined")</section><section><section>Hello，伙伴们</section><section>长按二维码关注我们吧！</section></section></section></section></section><section class="_135editor" data-role="paragraph"></section></section>