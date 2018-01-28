---
title: 嵌入式裸机程序之SDRAM学习
id: 297
categories:
  - 裸机程序
date: 2017-02-02 21:08:49
tags: [SDRAM,RAM,S3C2440,嵌入式]
---

<section class="_135editor" data-tools="135编辑器" data-id="33">

## **1.S3C2440存储结构**

</section><section class="_135editor" data-tools="135编辑器" data-id="84261"><section class="layout"><section><section></section><section></section></section><section class="135brush" data-style="color: rgb(51, 51, 51); font-size: 1em; line-height: 1.75em; word-break: break-all; word-wrap: break-word; text-align: justify;">TQ2440开发板包括1片SDRAM、1片Nor Flash和1片Nand Flash。CPU可以直接控制SDRAM和片内Cache，通过IO控制电路连接Flash。程序可在SDRAM或Nor Flash上运行，但Nor Flash空间较小，因此，会添加一片大容量的Nand Flash。Nand Flash上的代码需要拷贝到内存才可以执行。

S3C2440的地址空间分为8个Bank，每个Bank有128M空间，其中有6个是ROM、SRAM这类存储器Bank，2个可以作为ROM、RAM、SDRAM等存储器Bank。S3C2440对外引出27根地址线，8个Bank总共1G空间，但地址总线为32位宽，因此会有剩余的3G地址，这部分作为寄存器地址或保留地址。系统上电后，首先从Bank0开始执行程序。

<section class="_135editor" data-tools="135编辑器" data-id="33">

## 2.本节目标

</section><section class="_135editor" data-tools="135编辑器" data-id="84261"><section class="layout"><section><section></section><section></section></section><section class="135brush" data-style="color: rgb(51, 51, 51); font-size: 1em; line-height: 1.75em; word-break: break-all; word-wrap: break-word; text-align: justify;">程序上电后，初始化内存，并使程序在内存中运行。

## 3.代码分析

这段代码使用汇编完成以之前的LED程序做例子，本程序中，通过上电后初始化内存，并在内存运行代码，将程序下载如开发板后，会发现，这次的程序运行速度大大加快。

@*************************************************************************
@ File：head.S
@ 功能：设置SDRAM，将程序复制到SDRAM，然后跳到SDRAM继续执行
@*************************************************************************

.equ MEM_CTL_BASE, 0x48000000
.equ SDRAM_BASE, 0x30000000

.text
.global _start
_start:
bl disable_watch_dog @ 关闭WATCHDOG，否则CPU会不断重启
bl memsetup @ 设置存储控制器
bl copy_steppingstone_to_sdram @ 复制代码到SDRAM中
ldr pc, =on_sdram @ 跳到SDRAM中继续执行
on_sdram:
ldr sp, =0x34000000 @ 设置堆栈
bl main
halt_loop:
b halt_loop

disable_watch_dog:
@ 往WATCHDOG寄存器写0即可
mov r1, #0x53000000
mov r2, #0x0
str r2, [r1]
mov pc, lr @ 返回

copy_steppingstone_to_sdram:
@ 将Steppingstone的4K数据全部复制到SDRAM中去
@ Steppingstone起始地址为0x00000000，SDRAM中起始地址为0x30000000

mov r1, #0
ldr r2, =SDRAM_BASE
mov r3, #4*1024
1:
ldr r4, [r1],#4 @ 从Steppingstone读取4字节的数据，并让源地址加4
str r4, [r2],#4 @ 将此4字节的数据复制到SDRAM中，并让目地地址加4
cmp r1, r3 @ 判断是否完成：源地址等于Steppingstone的未地址？
bne 1b @ 若没有复制完，继续
mov pc, lr @ 返回

memsetup:
@ 设置存储控制器以便使用SDRAM等外设

mov r1, #MEM_CTL_BASE @ 存储控制器的13个寄存器的开始地址
adrl r2, mem_cfg_val @ 这13个值的起始存储地址
add r3, r1, #52 @ 13*4 = 54
1:
ldr r4, [r2], #4 @ 读取设置值，并让r2加4
str r4, [r1], #4 @ 将此值写入寄存器，并让r1加4
cmp r1, r3 @ 判断是否设置完所有13个寄存器
bne 1b @ 若没有写成，继续
mov pc, lr @ 返回
.align 4
mem_cfg_val:
@ 存储控制器13个寄存器的设置值
.long 0x22011110 @ BWSCON
.long 0x00002e90 @ BANKCON0
.long 0x00002e90 @ BANKCON1
.long 0x00002e90 @ BANKCON2
.long 0x00002e90 @ BANKCON3
.long 0x00002e90 @ BANKCON4
.long 0x00002e90 @ BANKCON5
.long 0x00018005 @ BANKCON6
.long 0x00018005 @ BANKCON7
.long 0x00a60f44 @ REFRESH
.long 0x00000032 @ BANKSIZE
.long 0x00000030 @ MRSRB6
.long 0x00000030 @ MRSRB7

</section>程序需要烧写到Nor Flash上，然后设置Nor Flash启动。程序首先关闭看门狗，然后初始化内存，内存初始化完成后将Nor Flash的内容复制到SDRAM中继续执行。完成这些操作后进入main函数。

对内存的初始化即设置内存相关的寄存器，这部分需要根据不同的内存设置不同的参数。

<span style="color: #333333; font-family: Georgia, 'Times New Roman', 'Bitstream Charter', Times, serif;">复制代码并在内存上运行，就是把Nor Flash地址的内容直接复制到SDRAM中，然后需要设置堆栈指针。设置完成后只需修改PC指针到内存中的代码，程序便跳转到内存中运行。</span>

这部分内容需要配合参考数据手册的存储器控制器部分，还要查看使用的内存芯片手册。在本文中，直接采用TQ2440提供的示例代码提供的内存初始化设置参数。 对于不同的开发板，可以根据开发板提供的内存初始化代码，直接修改参数部分即可。

![](http://www.atime.net.cn/blog/wp-content/uploads/2017/01/qrcode-300x300.jpg)

</section></section></section></section></section>