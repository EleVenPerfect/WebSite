---
title: 交叉编译环境安装（上）Samba服务安装
id: 222
categories:
  - 起式
date: 2017-01-28 16:02:53
tags: [交叉编译环境,S3C2440,嵌入式]
---

## 1.安装Samba

Samba服务用于共享目录，将Linux下的某个目录设置为局域网共享。
登录系统后，输入 "sudo -i" 输入密码获得管理员权限。如图所示：

![](http://www.atime.net.cn/blog/wp-content/uploads/2017/01/捕获-6.png)

更新软件列表，输入"apt-get update"
然后安装samba，输入"apt-get install samba"

![](http://www.atime.net.cn/blog/wp-content/uploads/2017/01/捕获-7.png)

## 2.配置Samba

先复制smb配置文件备份
输入"cp /etc/samba/smb.conf /etc/samba/smb.conf.bak"
如图所示结果

![](http://www.atime.net.cn/blog/wp-content/uploads/2017/01/捕获-8.png)

输入"vi smb.conf"编辑smb.conf文件
在文件最末尾添加如下：

![](http://www.atime.net.cn/blog/wp-content/uploads/2017/01/捕获-9.png)

按Esc后输入"：wq"保存退出即可
然后为smb服务添加用户密码；输入"smbpasswd -a atime"

![](http://www.atime.net.cn/blog/wp-content/uploads/2017/01/捕获-10.png)

输入："/etc/init.d/samba start"启动samba服务

![](http://www.atime.net.cn/blog/wp-content/uploads/2017/01/捕获-11.png)

## 3.Windows下连接共享目录

Linux下输入:"ifconfig"查看本机IP
在windows系统下添加网络驱动器：

![](http://www.atime.net.cn/blog/wp-content/uploads/2017/01/捕获-12.png)

选择添加网络驱动器，输入虚拟机IP地址
"\\192.168.1.105\share"输入用户名密码登录即可

![](http://www.atime.net.cn/blog/wp-content/uploads/2017/01/捕获-13.png)

添加完成后如图所示

![](http://www.atime.net.cn/blog/wp-content/uploads/2017/01/捕获-14.png)

至此，本片文章作为配置交叉编译环境的上篇，Samba服务安装配置完成，下一步将介绍安装交叉编译环境。