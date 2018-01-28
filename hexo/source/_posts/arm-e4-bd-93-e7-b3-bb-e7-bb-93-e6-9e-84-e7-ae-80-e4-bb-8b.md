---
title: ARM体系结构简介
id: 257
categories:
  - 起式
date: 2017-01-29 19:20:32
tags: [ARM体系结构,S3C2440,嵌入式]
---

<section data-role="outer"><section class="_135editor" data-tools="135编辑器" data-id="33">

## <span class="autonum" title="" data-original-title="">1.</span>**ARM处理器模式**

</section>
<table style="height: 481px;" width="552" cellspacing="0" cellpadding="0">
<tbody>
<tr class="firstRow">
<td width="175">**处理器工作模式**</td>
<td width="109">**特权模式**</td>
<td width="119">**异常模式**</td>
<td width="165">**说明**</td>
</tr>
<tr>
<td width="175" height="31">用户（user）模式</td>
<td width="109" height="31"></td>
<td width="119" height="31"></td>
<td width="165" height="31">用户程序运行模式</td>
</tr>
<tr>
<td width="175" height="34">系统（system）模式</td>
<td rowspan="6" width="109" height="34">该组模式下可以任意访问系统资源</td>
<td width="119" height="34"></td>
<td width="165" height="34">运行特权级的[操作系统](http://lib.csdn.net/base/operatingsystem "操作系统知识库")任务</td>
</tr>
<tr>
<td width="175">一般中断（IRQ）模式</td>
<td rowspan="5" width="119">通常由系统异常状态切换进该组模式</td>
<td width="165">普通中断模式</td>
</tr>
<tr>
<td width="175">快速中断（FIQ）模式</td>
<td width="165">快速中断模式</td>
</tr>
<tr>
<td width="175">管理（supervisor）模式</td>
<td width="165">提供操作系统使用的一种保护模式，swi命令状态</td>
</tr>
<tr>
<td width="175">中止（abort）模式</td>
<td width="165">虚拟内存管理和内存数据访问保护</td>
</tr>
<tr>
<td width="175">未定义指令终止（undefined）模式</td>
<td width="165">支持通过软件仿真硬件的协处理</td>
</tr>
</tbody>
</table>
<section class="_135editor" data-role="paragraph"></section></section><section class="_135editor" data-role="paragraph"></section><section class="_135editor" data-role="paragraph">ARM处理器共有7种工作模式，除用户模式外，其余6种模式称为特权模式。ARM处理器一般有37个寄存器，包括31个通用寄存器和6个状态寄存器，在不同模式下，可以访问不同的寄存器。

![](http://www.atime.net.cn/blog/wp-content/uploads/2017/01/491f0287g830559bb58b2690.jpg)

这部分在学习初期只需简单了解，在后期Bootloader移植、操作系统移植时需要再返回来，仔细研究。因此，这里不做过多介绍。

## 2.ARM处理器寻址方式

ARM处理器寻址方式主要分直接寻址、间接寻址和寄存器寻址这三类。这三类中，包括：立即寻址、寄存器寻址、寄存器间接寻址、寄存器偏移寻址、基址变址寻址、多寄存器寻址、堆栈寻址等。这部分在裸机程序编程中使用较少，根据后续使用中，根据需要学习。

## 3.ARM指令集和Thumb指令集

<section class="135brush" data-style="color: rgb(51, 51, 51); font-size: 1em; line-height: 1.75em; word-break: break-all; word-wrap: break-word; text-align: justify;">ARM处理器运行时可以分别运行两种指令集，在ARM指令集下包括6大类指令。包括跳转指令、数据处理指令、程序状态寄存器传输指令、Load/Store指令、协处理器指令、异常中断产生指令。在ARM体系结构中。ARM指令集中的指令是32位的，其执行效率很高，位兼容总线宽度为16位的应用系统，ARM体系结构也支持16位的Thumb指令集。

Thumb指令集不是一个完整的体系结构，需要通用功能时可使用Thumb指令集，必要时可以借助ARM指令集实现更强大的功能。要实现Thumb子程序和ARM子程序互相调用需要遵循一定的编程规范。

一般情况下，Thumb代码所需的存储空间约为ARM代码的60%-70%；Thumb代码使用的指令数比ARM代码指令数多30-40%；使用16位存储器时Thumb代码速度更快；使用32位存储器时ARM代码速度更快；同时使用Thumb代码，存储器功耗会降低约30%。

</section></section>