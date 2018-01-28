---
title: S3C2440两种启动方式介绍
id: 324
categories:
  - 裸机程序
date: 2017-02-06 16:19:45
tags: [S3C2440,嵌入式]
---

S3C2440处理器通常有两种启动方式，分别为Nor Flash启动和Nand Flash启动，两种启动方式的细节略有不同。

## 1.Nand Flash启动

当设置开发板为Nand Flash启动时，开发板将会按一下步骤执行：

1.  <section class="135brush" data-style="color: rgb(51, 51, 51); font-size: 1em; line-height: 1.75em; word-break: break-all; word-wrap: break-word; text-align: justify;">硬件自动将Nand Flash前4k内容拷贝到S3C2440芯片内部的SRAM中，并将SRAM起始地址设置为0x0.

</section>
2.  <section class="135brush" data-style="color: rgb(51, 51, 51); font-size: 1em; line-height: 1.75em; word-break: break-all; word-wrap: break-word; text-align: justify;">S3C2440从0x0地址开始执行代码。

</section>
通常在bootloader中，前4k内容为初始化最基础的的设备，并复制后面的内容到SDRAM中，以便于继续执行代码。

![](http://www.atime.net.cn/blog/wp-content/uploads/2017/02/无标题-300x225.png)

## 2.Nor Flash启动

当S3C2440设置为Nor Flash启动时，CPU会将Nor Flash所在位置指向为0x0地址，然后CPU从0x0开始执行。

Nor Flash可以像内存一样读数据，但不能像内存一样写数据。

![](http://www.atime.net.cn/blog/wp-content/uploads/2017/02/无标题-1-300x225.png)

并不是所有2440开发板都会配有Nand Flash和North Flash，有些会只有Nand Flash。

Nand Flash相对于Nor Flash拥有更大的存储空间，可以在Nand Flash上烧写更大的程序。而Nor Flash则具有可以像内存一样读取数据的优势。