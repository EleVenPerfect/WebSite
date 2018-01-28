---
title: 嵌入式裸机程序之中断原理
id: 301
categories:
  - 裸机程序
date: 2017-02-03 20:43:26
tags: [中断,S3C2440,嵌入式]
---

## 1.中断简介

中断，指计算机运行过程中，出现异常后，计算机停止当前工作保存当前状态，然后转向对这些异常的处理，在处理完成后再返回到停止时的状态，继续运行。

![](http://www.atime.net.cn/blog/wp-content/uploads/2017/02/image002-3.jpg)

## 2.S3C2440中断

S3C2440有60个中断源，这里只以其中的外部中断为例，以最简单的中断处理过程代码来分析中断。

中断处理之前需要先将各个IO引脚设置为中断功能，将指示灯的IO引脚设置为输出模式。在此之后，需要了解S3C2440的各组中断的指针位置。

如代码所示，在这段汇编代码中定义了各个中断的入口，本实验使用HandleIRQ这个入口地址，当出现中断信号时，程序跳转到0x18这个地址，然后再跳转到HandleIRQ这个函数。

HandleIRQ函数首先将当前寄存器状态入栈保存，然后再跳转到真正的中断服务程序。

在中断服务程序中，根据INTOFFSET寄存器的内容来做出相应的指示，在完成中断响应后需要手动清中断。

这样主程序不需要运行其他代码，中断的初始化、IO接口初始化也都在汇编文件中完成。

![](http://www.atime.net.cn/blog/wp-content/uploads/2017/02/捕获-4-290x300.png)

![](http://www.atime.net.cn/blog/wp-content/uploads/2017/02/捕获-5-300x242.png)

中断服务程序：

![](http://www.atime.net.cn/blog/wp-content/uploads/2017/02/捕获-6-286x300.png)

![](http://www.atime.net.cn/blog/wp-content/uploads/2017/02/捕获-7-300x180.png)

[caption id="attachment_55" align="alignnone" width="300"]![](http://www.atime.net.cn/blog/wp-content/uploads/2017/01/qrcode-300x300.jpg) 公众号[/caption]