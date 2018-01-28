---
title: 基于gcc的编程模板
id: 274
categories:
  - 裸机程序
date: 2017-01-31 21:34:09
tags: [gcc,S3C2440,嵌入式]
---

<section class="135brush" data-style="text-indent: 2em;">嵌入式编程中，需要预先设置好的东西比较多，在初学嵌入式时，经常发现在看完某方面文档后，仍然编写出的程序达不到预定效果，在学习更多知识后才会了解，原来还有一些特殊方面需要提前设置好。因此，本文作为裸机程序编写第一篇，介绍一下之后使用的程序模板。这个模板力求精简，发挥最基础的作用。主要包含以下文件：</section><section class="135brush" data-style="text-indent: 2em;"></section><section class="135brush" data-style="text-indent: 2em;">![](http://www.atime.net.cn/blog/wp-content/uploads/2017/01/捕获-21-300x84.png)</section><section class="135brush" data-style="text-indent: 2em;"></section><section class="135brush" data-style="text-indent: 2em;">github地址：[https://github.com/EleVenPerfect/S3C2440/tree/master/none-OS/](https://github.com/EleVenPerfect/S3C2440/tree/master/none-OS/)

## 1.head.s

head.s是整个程序的最最前面的程序，它以汇编语言编写，负责设置堆栈、设置系统时钟、设置内存、关闭看门狗等作用，在最后它引导程序进入main函数，开始执行main中的程序。

![](http://www.atime.net.cn/blog/wp-content/uploads/2017/01/捕获-22-300x214.png)

## 2.init.c

在head.s中，我们看到，有直接跳转函数的代码，这部分在init.c内，是以c语言编写的负责实际完成关闭看门狗、设置内存、设置系统时钟、将程序复制到内存的。至于为什么不在head.s中实现，因为很多操作相对复杂，用C更便捷吧。它的源码较长，可以在我的github上查看。

需要注意的是，我的内存初始化代码适用于TQ2440开发板的内存，对于不同的内存芯片，需要修改参数。

## 3.mian.c

通常学习过编程的人都知道，main.c是整个程序的开始，这个模板也不例外，在完成最初级的设置后，程序跳转到main.c开始执行用户代码。

![](http://www.atime.net.cn/blog/wp-content/uploads/2017/01/捕获-23-300x160.png)

同时，可以自定义其他指令，如模板文件中，定义了make clean命令，负责删除编译生成的文件，便于重新编译。

## 5.S3C2440.h

S3C2440.h文件负责定义S3C2440处理器的各个寄存器地址，这样在编程中就不需要查看某个寄存器的地址，直接使用名称来表示。

还有为方便调试，预先编写好的串口程序，可作为程序的调试工具。在程序出现问题是，可通过串口打印数据判断错误原因。

欢迎关注我的公众号，和我一起学习嵌入式知识。

![](http://www.atime.net.cn/blog/wp-content/uploads/2017/01/qrcode_for_gh_85e596090db2_1280-300x300.jpg)

&nbsp;

</section>