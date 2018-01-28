---
title: Github for windows 简介
id: 313
categories:
  - 起式
date: 2017-02-04 20:16:52
tags: [Github for windows,S3C2440,嵌入式]
---

在写代码调试时，经常会出现之前的代码可以用，但是修改后不知为何又出问题的情况。通常的办法是将可用的代码事先复制一份再进行修改，这样代码的管理并不科学。今天介绍使用Github来进行代码的版本控制，用专业的工具，提高工作效率。

这里介绍最简单的Github for windows 图形化软件，不需要学习使用各种命令，对于新手更容易入门。

## 1.Github是什么

GitHub 是一个面向开源及私有软件项目的托管平台。

作为开源代码库以及版本控制系统，Github拥有超过900万开发者用户。随着越来越多的应用程序转移到了云上，Github已经成为了管理软件开发以及发现已有代码的首选方法。

GitHub for Windows 是一个 Metro 风格应用程序，集成了自包含版本的 Git，bash 命令行 shell，PowerShell 的 posh-git 扩展。GitHub 为 Windows 用户提供了一个基本的图形前端去处理大部分常用版本控制任务，可以创建版本库，向本地版本库递交补丁，在本地和远程版本库之间同步。微软也通过CodePlex向开发者提供 git 版本控制系统，而 GitHub 创造了一个更具有吸引力的 Windows 版本。

![](http://www.atime.net.cn/blog/wp-content/uploads/2017/02/捕获-8-300x154.png)

## 2.注册Github

登录网址：https://github.com

如图所示，填写你的用户名，电子邮箱，密码即可注册完成。

点击上栏的加号创建一个程序仓库，用于存放代码。

![](http://www.atime.net.cn/blog/wp-content/uploads/2017/02/捕获-9-300x152.png)

创建代码仓库：

![](http://www.atime.net.cn/blog/wp-content/uploads/2017/02/捕获-10-300x33.png)

创建完成后，这里介绍windows下不需要使用命令的方式进行代码管理。

## 3.配置Github for windows

首先去Github for windows网站下载客户端：[https://desktop.github.com/](https://desktop.github.com/)

下载到的是一个在线安装器，运行后会 在线下载最新版本的软件进行安装。下载速度很慢，需要耐心等待。

安装完成后，即需要登陆之前注册的Github账号。登录完如图所示。要查看自己刚刚建立的代码仓库需要手动克隆仓库到本地。

![](http://www.atime.net.cn/blog/wp-content/uploads/2017/02/捕获-11-300x164.png)

点击左上角加号，选择Clone，将会列出当前帐号的所有代码仓库，选择你的仓库，点击下方的按钮，会提示你要保存到本地的位置。

![](http://www.atime.net.cn/blog/wp-content/uploads/2017/02/捕获-12-300x181.png)

随后将会自动同步你的代码仓库到本地。

本地的文件夹中，编辑修改文件，软件将会自动监控文件变化。

当你完成一定的修改后，需要保存版本，可以进入Github for windows 。如图所示：

![](http://www.atime.net.cn/blog/wp-content/uploads/2017/02/捕获-13-300x163.png)

填写summary摘要和description说明，然后点击commit to master即可完成一个commit的创建。

完成一个commit后需要点击右上角的Sync来同步数据到Github网站，这样在不同的地点登陆都可以从网站下载最新的版本。

## 4.代码管理

Github for windows 不仅仅可以提交commit、同步，还可以在你代码出问题是，退回到原来commit的某个时间点。在代码仓库的History中，可以看到自己提交的commit，在这里选择某个commit点击右上方的revert可以恢复。

除此之外，Github还有跟多高级功能，在多人开发的项目中，Github可以发挥更大的功效。

对于只是想保存自己的代码，暂且使用以上几个基础功能也算够用了。

![](http://www.atime.net.cn/blog/wp-content/uploads/2017/01/qrcode_for_gh_85e596090db2_1280-300x300.jpg)

&nbsp;