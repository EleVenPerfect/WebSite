---
title: main函数从哪来？
id: 331
categories:
  - 裸机程序
date: 2017-02-06 17:23:39
tags: [main函数,S3C2440,嵌入式]
---

了解C语言的小伙伴，一定会好奇为什么编程都会从main函数开始执行。相信很多学过的人都只是知道一个程序是从main函数这个入口进入的，但main函数又是从哪里来的呢？

对于在电脑上编程，如在windows/Linux上，main函数是由操作系统调用的，main函数完成后，会给操作系统返回值。

对于最简单的嵌入式程序，CPU从上电开始，需要执行以下步骤：

1.  1.从启动文件的代码开始执行程序。
2.  2.启动代码跳转到main函数
3.  3.main函数结束后返回启动文件也就是说，main函数是由人为设定的，并不一定要叫做main函数。
4.  ## 1.启动文件

5.  因进入main函数后程序是以C语言编写，C语言中的函数实现需要出入栈，因此启动文件在跳转到main函数前需要先设置栈。完成栈的设置后，启动文件会做一些硬件方面的初始化工作，如内存的初始化。下面将以之前的代码为例进行讲解：

随后调用main函数，设置main函数的返回地址。

main函数返回后，启动文件还会进行一些清理工作。​
6.  ![](http://www.atime.net.cn/blog/wp-content/uploads/2017/02/捕获-14-300x154.png)
7.  这里以SDRAM程序的启动文件为例，程序流程如下：

    1.  <section class="135brush" data-style="color: rgb(51, 51, 51); font-size: 1em; line-height: 1.75em; word-break: break-all; word-wrap: break-word; text-align: justify;">关闭看门狗，否则程序会不断重启。</section>

8.  <section class="135brush" data-style="color: rgb(51, 51, 51); font-size: 1em; line-height: 1.75em; word-break: break-all; word-wrap: break-word; text-align: justify;">2.初始化SDRAM，然后将程序拷贝到SDRAM中执行。</section>
9.  <section class="135brush" data-style="color: rgb(51, 51, 51); font-size: 1em; line-height: 1.75em; word-break: break-all; word-wrap: break-word; text-align: justify;">3.设置栈指针。</section>
10.  <section class="135brush" data-style="color: rgb(51, 51, 51); font-size: 1em; line-height: 1.75em; word-break: break-all; word-wrap: break-word; text-align: justify;">4.跳转到main函数。</section>
11.  <section class="135brush" data-style="color: rgb(51, 51, 51); font-size: 1em; line-height: 1.75em; word-break: break-all; word-wrap: break-word; text-align: justify;">​5.设置main函数返回后进入一个死循环，防止程序跑飞。</section>
12.