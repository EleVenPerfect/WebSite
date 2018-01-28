---
title: 交叉编译环境安装（下）环境配置
id: 212
categories:
  - 起式
date: 2017-01-28 15:50:57
tags: [交叉编译环境,S3C2440,嵌入式]
---

## 1.登陆系统

登录Linux系统，并输入"sudo -i"获取管理员权限。如图所示。

![](http://www.atime.net.cn/blog/wp-content/uploads/2017/01/捕获.png)

## 2复制开发工具包

将开发工具包使用文件共享，传到Linux中。如图所示：

![](http://www.atime.net.cn/blog/wp-content/uploads/2017/01/捕获-1.png)

## 3.解压压缩包

将当前目录切换到/opt："cd /opt"
输入："tar vxjf /home/atime/EABI-4.3.3_EmbedSky_20100610.tar.bz2 -C /"回车后效果如图所示：

![](http://www.atime.net.cn/blog/wp-content/uploads/2017/01/捕获-2.png)

## 4.修改系统环境变量

移动到/etc目录下："cd /etc"
使用vi编辑environment文件："vi environment"
在PATH 末尾引号之前添加：":/opt/EmbedSky/4.3.3/bin"
完成后保存退出按Esc输入：":wq"
如图所示：

![](http://www.atime.net.cn/blog/wp-content/uploads/2017/01/捕获-3.png)

## 5.注意

此时可重启虚拟机登录测试："arm-linux-gcc -v"
若出现exec arm-none-linux-gnueabi-gcc:not found
表示没有安装lsb-core，解决办法如下：
输出："sudo apt-get install lsb-core"

![](http://www.atime.net.cn/blog/wp-content/uploads/2017/01/捕获-4.png)

## 6.测试gcc

在次重启虚拟机登录测试："arm-linux-gcc -v"
注意，不要以root用户运行
出现如下显示，即为正确安装配置：

![](http://www.atime.net.cn/blog/wp-content/uploads/2017/01/捕获-5.png)

## 7.测试yaffs

输入mkyaffs后连续按两次Tab键，出现如下则表示安装正确：

Linux操作系统下的交叉编译环境到这里就已经配置完成了。下一步还需要准备windows下的源代码浏览软件、J-Link烧录程序等的安装。

![](http://www.atime.net.cn/blog/wp-content/uploads/2017/01/qrcode_for_gh_85e596090db2_1280-300x300.jpg)