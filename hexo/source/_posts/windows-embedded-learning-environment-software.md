---
title: 嵌入式学习之Windows环境常用软件
id: 96
categories:
  - 起式
date: 2017-01-26 23:35:01
tags:[常用软件,S3C2440,嵌入式]
---

本节介绍嵌入式开发中，windows系统下需要安装的软件。

## 1.J-Link

J-Link用于将bootloader下载到开发板NOR Flash上，或在裸板开发中，直接将程序下载到开发板。

安装J-Link软件如图所示：

![](http://www.atime.net.cn/blog/wp-content/uploads/2017/01/1.png)

直接下一步、下一步即可安装完成。

接下来在开始菜单中，找到J-Flash ARM，如图所示：

![](http://www.atime.net.cn/blog/wp-content/uploads/2017/01/2.png)

打开File-Open Project

打开开发板所提供的工程

![](http://www.atime.net.cn/blog/wp-content/uploads/2017/01/2-1.png)

如图所示：

![](http://www.atime.net.cn/blog/wp-content/uploads/2017/01/2-2.png)

点击Option-Project Setting-Flash

设置为如图所示：

![](http://www.atime.net.cn/blog/wp-content/uploads/2017/01/2-3.png)

打开开发板，连接上J-Link，确认开发板是从NOR Flash启动的。

点击Target-Connect看到如下提示即为成功：

![](http://www.atime.net.cn/blog/wp-content/uploads/2017/01/2-4.png)

## 2.串口驱动

串口驱动程序安装比较简单，需要注意的是，某些串口驱动因自身设计问题，安装串口驱动时USB转串口插在哪个USB口，在将来使用时也只能使用那个USB口插USB转串口模块。安装完成后，在设备管理器会看到分配的串口：

![](http://www.atime.net.cn/blog/wp-content/uploads/2017/01/2-5.png)

## 3.TQBoardDNW

TQBoardDNW是天嵌公司开发的下载软件，使用这个软件可以更方便的下载镜像，安装步骤比较简单，这里就不多说。软件安装完成后还需要安装USB下载驱动，完成后软件即可正常使用。

![](http://www.atime.net.cn/blog/wp-content/uploads/2017/01/2-6.png)

串口连接成功后，重启开发板，会看到如下：

![](http://www.atime.net.cn/blog/wp-content/uploads/2017/01/2-7.png)

驱动安装方法：找到USB下载驱动目录，右击TQ2440_Board.inf-安装即可。安装过程中，会提示没有数字签名若系统强制需要数字签名，windows8系统可以在高级启动中禁用驱动强制数字签名。安装完成后设备管理器内出现：

![](http://www.atime.net.cn/blog/wp-content/uploads/2017/01/2-8.png)

即为安装成功，重启系统后再测试没问题即可。

## 4.Source Insight

Source Insight用于在windows下方便地查看项目源代码，对于阅读Linux内核源码、Uboot源码有很大帮助。安装后如图所示：

![](http://www.atime.net.cn/blog/wp-content/uploads/2017/01/2-9.png)

## 5.SecureCRT

SecureCRT用于电脑和开发板连接串口，通过SecureCRT软件设置串口信息，连接到开发板上。如果使用天嵌开发板，可以直接使用TQBoardDNW作为串口下载程序，此软件可不安装。

![](http://www.atime.net.cn/blog/wp-content/uploads/2017/01/2-10.png)

## 另：

还有一些软件在学习嵌入式时会有人说要安装ADS，在这里，因为我的学习路线主要采用Linux下主要使用Gcc编译器，因此不再使用ADS，况且ADS在编译bootloader、Linux内核时有诸多不便，就不再安装这款软件了。

![](http://www.atime.net.cn/blog/wp-content/uploads/2017/01/qrcode_for_gh_85e596090db2_1280-300x300.jpg)

扫描二维码，添加我的公众号吧