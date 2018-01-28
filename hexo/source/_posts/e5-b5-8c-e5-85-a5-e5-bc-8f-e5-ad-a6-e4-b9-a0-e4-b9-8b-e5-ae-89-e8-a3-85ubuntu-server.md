---
title: 嵌入式学习之安装Ubuntu Server
id: 239
categories:
  - 起式
date: 2017-01-28 16:33:08
tags: [ubuntu,S3C2440,嵌入式]
---

## <span class="" title="" data-original-title="">1.</span>下载ubuntu server

<section class="" data-tools="135编辑器" data-id="84261"><section class=""><section class="" data-style="color: rgb(51, 51, 51); font-size: 1em; line-height: 1.75em; word-break: break-all; word-wrap: break-word; text-align: justify;">Ubuntu Server 16.04LTS网址：https://www.ubuntu.com/download如图所示：

![](http://www.atime.net.cn/blog/wp-content/uploads/2017/01/捕获-15.png)

</section><section><section></section></section></section></section>进入网页后选择Ubuntu Server

下载Ubuntu Server 16.04LTS

选择LTS版因为LTS为Ubuntu的长期支持版本，Ubuntu桌面版可以获得三年的服务支持，服务器版将会获得五年服务支持。

![](http://www.atime.net.cn/blog/wp-content/uploads/2017/01/捕获-16.png)

## <span class="" title="" data-original-title="">2.</span>**安装虚拟机软件**

<section class="" data-tools="135编辑器" data-id="84261"><section class=""><section class="" data-style="color: rgb(51, 51, 51); font-size: 1em; line-height: 1.75em; word-break: break-all; word-wrap: break-word; text-align: justify;">因编程调试过程中需要在Windows系统环境下和Linux系统下不断切换，对于仅有一台PC的情况下建议使用虚拟机来配置Linux环境。本文以我使用的开源软件VBox为例介绍，在之后的开发中，将会一直使用这一环境。下载Oracle VM VirtualBox软件，并安装

如下图所示：

</section><section><section></section></section></section></section>百度搜索Vbox,进入官网选择download VirtualBox

![](http://www.atime.net.cn/blog/wp-content/uploads/2017/01/捕获-17.png)

安装步骤选择默认即可。

需要注意的是，将软件安装到非中文路径目录路，软件语言默认会是中文。

<section class="" data-tools="135编辑器" data-id="33">

## <span class="" title="" data-original-title="">3.</span>创建虚拟机

</section><section class="" data-tools="135编辑器" data-id="84261"><section class=""><section><section></section><section></section></section><section class="" data-style="color: rgb(51, 51, 51); font-size: 1em; line-height: 1.75em; word-break: break-all; word-wrap: break-word; text-align: justify;">根据向导一步步设置虚拟机即可，步骤如下：</section><section class="" data-style="color: rgb(51, 51, 51); font-size: 1em; line-height: 1.75em; word-break: break-all; word-wrap: break-word; text-align: justify;">创建虚拟机-</section><section class="" data-style="color: rgb(51, 51, 51); font-size: 1em; line-height: 1.75em; word-break: break-all; word-wrap: break-word; text-align: justify;">设置名称、操作系统-

设置内存大小-

创建新的虚拟硬盘-

创建完成后，建议修改设置，将启动顺序设置为光驱优先启动，将网络设置为桥接网络。

![](http://www.atime.net.cn/blog/wp-content/uploads/2017/01/捕获-18.png)

完成后可启动虚拟机，开始安装系统。

## 4.**安装Ubuntu Server**

<section class="" data-tools="135编辑器" data-id="84261"><section class=""><section class="" data-style="color: rgb(51, 51, 51); font-size: 1em; line-height: 1.75em; word-break: break-all; word-wrap: break-word; text-align: justify;">安装过程建议使用英语环境。测试中，使用中文到安装系统步骤会出错，在此不再复述，直接采用英文环境安装。</section><section><section></section></section></section></section>启动虚拟机，添加刚刚下载的光盘为系统盘

选择英语

选择Install Ubuntu Server开始安装系统

根据提示以默认设置即可。

&nbsp;

## 5.**进入系统**

<section class="" data-tools="135编辑器" data-id="84261"><section class=""><section class="" data-style="color: rgb(51, 51, 51); font-size: 1em; line-height: 1.75em; word-break: break-all; word-wrap: break-word; text-align: justify;">开启虚拟机后不需要选择，直接默认就可以引导Ubuntu，</section><section><section></section></section></section></section>敲回车或等待几秒钟后自动开始引导系统

准备登录系统，输入用户名，回车

![](http://www.atime.net.cn/blog/wp-content/uploads/2017/01/捕获-20.png)

输入密码，回车

需要注意的是，输入密码过程中，处于安全考录控制台并不会显示输入结果。

![](http://www.atime.net.cn/blog/wp-content/uploads/2017/01/捕获-19.png)

显示以上图片结果即为系统登陆成功。

要关闭虚拟机，可以点击窗口的关闭按钮，选择正常关闭即可。

<section class="" data-tools="135编辑器" data-id="29735"><section></section><section><section data-width="50%"><section></section></section><section class="" data-style="text-indent: 2em;">至此，Ubuntu Server16.04便安装完成了，在接下来的文章中，将会介绍如何安装配置服务器，在虚拟机上安装交叉编译环境。![](http://www.atime.net.cn/blog/wp-content/uploads/2017/01/qrcode_for_gh_85e596090db2_1280-300x300.jpg)</section></section></section></section></section></section>&nbsp;