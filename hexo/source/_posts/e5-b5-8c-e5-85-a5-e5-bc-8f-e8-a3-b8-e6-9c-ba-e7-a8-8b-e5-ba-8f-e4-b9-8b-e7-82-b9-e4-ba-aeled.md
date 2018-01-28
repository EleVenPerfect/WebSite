---
title: 嵌入式裸机程序之点亮LED
id: 287
categories:
  - 裸机程序
date: 2017-02-01 22:38:30
tags: [入门,S3C2440,嵌入式]
---

<section data-role="outer"><section class="_135editor" data-tools="135编辑器" data-id="33">

## <span class="autonum" title="" data-original-title="">1.</span>**GPIO介绍**

</section><section class="_135editor" data-tools="135编辑器" data-id="84261"><section class="layout"><section><section></section><section></section></section><section class="135brush" data-style="color: rgb(51, 51, 51); font-size: 1em; line-height: 1.75em; word-break: break-all; word-wrap: break-word; text-align: justify;">S3C2440A包含130个多功能输入输出引脚，共分为9组：GPA~GPJ。通过查看数据手册，可知每组接口有GPxCON，端口配置寄存器；GPxDAT，端口数据寄存器；GPxUP，端口上拉寄存器；但并不是每组GPIO都包含全部寄存器。除此之外，还有杂项控制寄存器、外部中断寄存器等。</section><section><section></section></section></section></section><section class="_135editor" data-tools="135编辑器" data-id="33">

## <span class="autonum" title="" data-original-title="">2.</span>**本节目标**

</section><section class="_135editor" data-tools="135编辑器" data-id="84261"><section class="layout"><section><section></section><section></section></section><section class="135brush" data-style="color: rgb(51, 51, 51); font-size: 1em; line-height: 1.75em; word-break: break-all; word-wrap: break-word; text-align: justify;">本节介绍最简单的GPIO应用——点亮LED灯。在程序模板的基础下，修改程序。需要准备的文档：S3C2440数据手册，TQ2440开发板电路原理图。

通过查看电路原理图，TQ2440的LED在GPB5~GPB8

通过查看数据手册，要控制一个GPIO需要配置GPxDAT、GPxCON、GPxUP三组寄存器即可。

![](http://www.atime.net.cn/blog/wp-content/uploads/2017/02/捕获-279x300.png)

![](http://www.atime.net.cn/blog/wp-content/uploads/2017/02/捕获-1-277x300.png)

## 3.程序分析

程序已保存在GPIO文件夹中，可在我的Github中浏览，这里只介绍关键的部分。

宏定义：

#define GPB5_out (1&lt;&lt;(5*2))

#define GPB6_out (1&lt;&lt;(6*2))

#define GPB7_out (1&lt;&lt;(7*2))

#define GPB8_out (1&lt;&lt;(8*2))

这部分主要为定义4个GPIO的设置准备，将这4个IO接口设置为输出模式。

GPBCON = GPB5_out | GPB6_out | GPB7_out | GPB8_out;

在主程序中，先设置GPB的5~8位设置为输出，通过逻辑与，生成需要设置给GPBCON的最终结果。

​

因GPBUP寄存器默认值为0x0，即使能上拉功能，在此不需修改。

while(1)

{

i++;

if( i%2==1 )

GPBDAT |=(1&lt;&lt;5);

else

GPBDAT &amp;=~(1&lt;&lt;5);

if( i%2==1 )

GPBDAT |=(1&lt;&lt;6);

else

GPBDAT &amp;=~(1&lt;&lt;6);

if( i%2==1 )

GPBDAT |=(1&lt;&lt;7);

else

GPBDAT &amp;=~(1&lt;&lt;7);

if( i%2==1 )

GPBDAT |=(1&lt;&lt;8);

else

GPBDAT &amp;=~(1&lt;&lt;8);

delay(500);

}

在设置好GPBCON后，设置一个大循环，给GPBDAT设置不同的值来控制LED引脚的高低电位。程序效果为LED亮500ms暗500ms。通过一个变量的最低位值来确定亮暗状态。

程序中，i变量数值范围为0~255，但实际并未设置超出范围后重置变量值，这是因为在i到达255后再加1其值会变为0。

![](http://www.atime.net.cn/blog/wp-content/uploads/2017/02/捕获-2-263x300.png)

![](http://www.atime.net.cn/blog/wp-content/uploads/2017/02/捕获-3-270x300.png)

点亮LED通常是学习单片机的第一节课，ARM裸机程序也是如此。程序中，有部分代码是在后面学习才会涉及到的，这里只需会用即可。建议自己再翻阅芯片数据手册，更详细地了解GPIO的使用规则。

![](http://www.atime.net.cn/blog/wp-content/uploads/2017/01/qrcode_for_gh_85e596090db2_1280-300x300.jpg)

&nbsp;

</section><section><section></section></section></section></section><section class="_135editor" data-role="paragraph"></section></section>