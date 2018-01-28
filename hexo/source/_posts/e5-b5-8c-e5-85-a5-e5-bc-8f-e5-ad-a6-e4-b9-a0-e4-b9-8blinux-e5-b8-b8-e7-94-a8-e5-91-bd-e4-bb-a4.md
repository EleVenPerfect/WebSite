---
title: 嵌入式学习之Linux常用命令
id: 158
categories:
  - 起式
date: 2017-01-27 15:49:53
tags: [Linux,Linux命令,S3C2440,嵌入式]
---

本文主要介绍在嵌入式开发中常用的Linux命令，如创建删除文件、文件夹、查看系统状态等。本文只做简单介绍。

## <span class="" title="" data-original-title="">1.</span>pwd

pwd命令用于显示当前工作目录，如图所示：

![](http://www.atime.net.cn/blog/wp-content/uploads/2017/01/1-1.png)

## 2.man

man相当于我们使用软件时的帮助，使用方法如下：

man [option]

如图所示，我们想了解pwd命令的作用可以输入：

![](http://www.atime.net.cn/blog/wp-content/uploads/2017/01/1-2.png)

阅读中，使用j、k按键进行上下滚动，q退出。

## 3.cd

cd命令用于切换当前目录，在控制台中，需要切换当前目录可以用如下命令：

cd [direction]

![](http://www.atime.net.cn/blog/wp-content/uploads/2017/01/1-3.png)

需要说明的是，第二行所示中，

@符号前面的atime指的是当前用户；

@后的atime-pc指的是电脑名；

：后的/etc指的是当前目录；

~符号表示当前用户目录。

当以普通用户登录时虎仔结尾显示$符号，

当以root用户登陆时，会显示#符号。

## 4.sudo

<section class="" data-style="color: rgb(51, 51, 51); font-size: 1em; line-height: 1.75em; word-break: break-all; word-wrap: break-word; text-align: justify;">ifconfig用于查看当前网络状态，可查看当前本机的IP地址如图所示：sudo命令是以其他用户执行某一命令，常用为:sudo -i：获取root权限。

![](http://www.atime.net.cn/blog/wp-content/uploads/2017/01/1-4.png)

## 5.**ls/ll**

ls命令用于列出当前目录的文件，

ll命令将会列出当前目录文件的详细信息。

ls命令还有附加的参数如-a会列出所有文件，-s按照文件大小排序列出，等这里不多介绍。

![](http://www.atime.net.cn/blog/wp-content/uploads/2017/01/1-5.png)

## 6.mkdir

mkdir用于创建文件夹使用方法如下：

在当前目录创建名为help的文件夹

![](http://www.atime.net.cn/blog/wp-content/uploads/2017/01/1-6.png)

## 7.cat

cat主要有三个功能：

1.一次显示整个文件：$ cat filename

2.从键盘创建一个文件：$ cat &gt; filename

注意，此命令只能创建新文件,不能编辑已有文件。

3.将几个文件合并为一个文件： $cat file1 file2 &gt; file

如创建一个叫a.txt的文件：

![](http://www.atime.net.cn/blog/wp-content/uploads/2017/01/1-7.png)

输入命令后，会进入编辑状态，这时可以输入要保存在a.txt的文字，按Ctrl+c退出。打开共享目录中的a.txt文件如下：

![](http://www.atime.net.cn/blog/wp-content/uploads/2017/01/1-8.png)

## 8.cat查看CPU信息

cat命令查看CPU信息：cat /proc/cpuinfo

如图所示：

![](http://www.atime.net.cn/blog/wp-content/uploads/2017/01/1-9.png)

## 9.ifconfig

ifconfig用于查看当前网络状态，可查看当前本机的IP地址如图所示：

![](http://www.atime.net.cn/blog/wp-content/uploads/2017/01/1-10.png)

## 10.rm

命令用来删除Linux系统中的文件或目录。通常情况下rm不会删除目录，通过指定参数-r或-R才可以删除目录。

常用参数如下：

-i：交互删除模式，删除文件前给提示；

-f：强制删除，忽略不存在的文件，从不给出提示；

-F：递归的删除目录下面文件以及子目录下文件；

-v：显示运行时状态；

-r/-R：递归的删除目录下面文件以及子目录下文件。

更多参数请使用man rm查阅。

如删除1.txt文件，示例如下：

rm -rf [目录]：递归强制删除某一目录；

![](http://www.atime.net.cn/blog/wp-content/uploads/2017/01/1-11.png)

## 12.**ps -ef**

ps -ef用于查看进程，可以搭配|less使用：

![](http://www.atime.net.cn/blog/wp-content/uploads/2017/01/1-12.png)

## 13.mv

<section class="" data-style="color: rgb(51, 51, 51); font-size: 1em; line-height: 1.75em; word-break: break-all; word-wrap: break-word; text-align: justify;">mv：命令用于移动、重命名文件如将2.txt重命名为3.txt![](http://www.atime.net.cn/blog/wp-content/uploads/2017/01/1-13.png)

## 14.**apt-get**

apt-get需要root权限，常用命令输入下：

sudo apt-get update：更新源

sudo apt-get install XXX：安装软件

sudo apt-get remove：卸载软件包

## 15.logout

logout用于退出登录账号。

![](http://www.atime.net.cn/blog/wp-content/uploads/2017/01/1-14.png)

回车后显示如下：

![](http://www.atime.net.cn/blog/wp-content/uploads/2017/01/1-15.png)

<section class="" data-tools="135编辑器" data-id="33">

## **16.shutdown**

</section><section class="" data-tools="135编辑器" data-id="84261"><section class=""><section><section></section><section></section></section><section class="" data-style="color: rgb(51, 51, 51); font-size: 1em; line-height: 1.75em; word-break: break-all; word-wrap: break-word; text-align: justify;">shutdown 命令用于关机，需要root权限运行，如下命令shutdown now

</section><section class="" data-tools="135编辑器" data-id="33">

## **17.reboot**

</section><section class="" data-tools="135编辑器" data-id="84261"><section class=""><section><section></section><section></section></section><section class="" data-style="color: rgb(51, 51, 51); font-size: 1em; line-height: 1.75em; word-break: break-all; word-wrap: break-word; text-align: justify;">reboot命令用于重启，需要root权限运行。</section><section class="" data-tools="135编辑器" data-id="33">

## **18.chmod**

</section><section class="" data-tools="135编辑器" data-id="84261"><section class=""><section><section></section><section></section></section><section class="" data-style="color: rgb(51, 51, 51); font-size: 1em; line-height: 1.75em; word-break: break-all; word-wrap: break-word; text-align: justify;">chmod命令后接参数接文件-R递归操作

+r增加读权限

-删除写权限

+x增加执行权限

学习这个命令需要了解Linux的权限相关知识，将在以后的文章中讲解。

示例如下：

$ chmod u+x file：

给file的属主增加执行权限，

$ chmod -R u+r directory：递归地给directory目录下所有文件和子目录的属主分配读的权限。

更多详情需要学习权限知识后再学习。

</section>学习Linux命令要常用man查看使用手册，通过阅读man文档可以更高效地学习这些知识。同时，要多动手实践。

![](http://www.atime.net.cn/blog/wp-content/uploads/2017/01/qrcode-300x300.jpg)

</section></section></section></section></section></section></section></section>