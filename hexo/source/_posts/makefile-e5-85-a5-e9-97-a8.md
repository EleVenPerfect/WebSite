---
title: Makefile入门
id: 336
categories:
  - 裸机程序
date: 2017-02-08 13:23:22
tags: [makefile,S3C2440,嵌入式]
---

<section data-role="outer"><section class="_135editor" data-tools="135编辑器" data-id="84261"><section class="layout"><section><section></section><section></section></section><section class="135brush" data-style="color: rgb(51, 51, 51); font-size: 1em; line-height: 1.75em; word-break: break-all; word-wrap: break-word; text-align: justify;">在学习单片机时，经常使用Keil、IAR等IDE工具，在这些IDE工具中建立工程，然后就可以编程、编译、下载到单片机了。但是在嵌入式编程中，通常不会使用这些IDE，而是直接使用交叉编译环境进行编译，使用J-Flash进行下载。

使用IDE开发好处是不需要处理过多的编译选项，很多IDE会自动生成makefile，自动处理编译链接过程。而嵌入式编程，如果使用交叉编译环境，就需要自己写makefile来完成编译工作。会不会写makefile，也从一个侧面说明了一个人是否具备完成大型工程的能力。

makefile定义了一系列的规则来指定，哪些文件需要先编译，哪些文件需要后编译，哪些文件需要重新编译，甚至于进行更复杂的功能操作，因为makefile就像一个Shell脚本一样，其中也可以执行操作系统的命令。makefile带来的好处就是——“自动化编译”，一旦写好，只需要一个make命令，整个工程完全自动编译，极大的提高了软件开发的效率。

</section><section><section></section></section></section></section><section class="_135editor" data-tools="135编辑器" data-id="33">

## <span class="autonum" title="" data-original-title="">1.</span>编译、链接过程

</section><section class="_135editor" data-tools="135编辑器" data-id="84261"><section class="layout"><section><section></section><section></section></section><section class="135brush" data-style="color: rgb(51, 51, 51); font-size: 1em; line-height: 1.75em; word-break: break-all; word-wrap: break-word; text-align: justify;">C语言中，要将一段代码生成可执行文件，首先要把源文件编译成中间代码文件，在Windows下也就是 .obj 文件，UNIX下是 .o 文件，即Object File，这个动作叫做编译（compile）。然后再把大量的Object File合成执行文件，这个动作叫作链接（link）。</section><section><section></section></section></section></section><section class="_135editor" data-tools="135编辑器" data-id="33">

## <span class="autonum" title="" data-original-title="">2.</span>**makefile**

</section><section class="_135editor" data-tools="135编辑器" data-id="84261"><section class="layout"><section><section></section><section></section></section><section class="135brush" data-style="color: rgb(51, 51, 51); font-size: 1em; line-height: 1.75em; word-break: break-all; word-wrap: break-word; text-align: justify;">在Linux下，当我们在某个目录使用make命令时，会自动搜索本目录下的makefile文件，根据文件的命令执行。makefile的格式如下：

target... : prerequisites ...

command

即：注明生成的目标，冒号后书写生成目标的依赖文件，下一行Tab后写需要执行的命令。若命令过长，可以使用\来换行。

make会比较targets文件和prerequisites文件的修改日期，如果prerequisites文件的日期要比targets文件的日期要新，或者target不存在的话，那么，make就会执行后续定义的命令。

</section><section><section></section></section></section></section><section class="_135editor" data-tools="135编辑器" data-id="33">

## <span class="autonum" title="" data-original-title="">3.</span>**实例**

</section><section class="_135editor" data-tools="135编辑器" data-id="86412"><section><section><section class="135brush">objs := head.o init.o serial.o main.o000.bin: $(objs)

arm-linux-ld -Ttext 0x000000 -o timer_elf $^

arm-linux-objcopy -O binary -S timer_elf $@

arm-linux-objdump -D -m arm timer_elf &gt; timer.dis

%.o:%.c

arm-linux-gcc -Wall -nostdlib -O2 -c -o $@ $&lt;

%.o:%.S

arm-linux-gcc -Wall -nostdlib -O2 -c -o $@ $&lt;

clean:

rm -f timer.bin timer_elf timer.dis *.o

</section></section></section></section><section class="_135editor" data-tools="135编辑器" data-id="84261"><section class="layout"><section><section></section><section></section></section><section class="135brush" data-style="color: rgb(51, 51, 51); font-size: 1em; line-height: 1.75em; word-break: break-all; word-wrap: break-word; text-align: justify;">第一行定义了一个objs，它是由head.o init.o serial.o main.o四个文件组成。第二行定义了000.bin生成的过程，他的需要有head.o init.o serial.o main.o这四个文件。

第3~5行说明要执行的指令，根据先后，依次执行。

第6行定义了一个通用规则，任何.o文件，由.c文件生成所需要的指令。

第7行将.c文件编译为.o文件的命令。

第8行义了一个通用规则，任何.o文件，由.s文件生成所需要的指令。

第9行将.s文件编译为.o文件的命令。

第10行定义了一个新目标，当执行make clean 时会执行它。

第11行是make clean所设置要执行的指令，清理生成的文件。

当执行make命令时，自动会执行生成000.bin文件的过程，当它需要某一个文件时会查找这个文件生成的方法，依次执行。

</section><section><section></section></section></section></section><section class="_135editor" data-tools="135编辑器" data-id="33">

## <span class="autonum" title="" data-original-title="">4.</span>技巧

</section><section class="_135editor" data-tools="135编辑器" data-id="84261"><section class="layout"><section><section></section><section></section></section><section class="135brush" data-style="color: rgb(51, 51, 51); font-size: 1em; line-height: 1.75em; word-break: break-all; word-wrap: break-word; text-align: justify;">上例中的第1、2行是常用的定义变量使用变量的方法。通过使用变量，可以使makefile在不同工程中做简单的修改即可使用。makefile支持通配符，如*,c代表一系列c文件，%则代表0个或多个字符。

$^表示一些列相同的命令，所有的依赖目标的集合。以空格分隔。如果在依赖目标中有多个重复的，那个这个变量会去除重复的依赖目标，只保留一份。

$@表示规则中的目标文件集。在模式规则中，如果有多个目标，那么，"$@"就是匹配于目标中模式定义的集合。

$&lt;表示依赖目标中的第一个目标名字。如果依赖目标是以模式（即"%"）定义的，那么"$&lt;"将是符合模式的一系列的文件集。注意，其是一个一个取出来的。

</section><section><section></section></section></section></section><section class="_135editor" data-tools="135编辑器" data-id="88719"><section><section><section data-width="40%">![](http://www.atime.net.cn/blog/wp-content/uploads/2017/02/ShpxkEgp_nxNZ-1.jpg "undefined")</section><section><section>![](http://www.atime.net.cn/blog/wp-content/uploads/2017/02/aHR0cHM6Ly9tbWJpei5xbG9nby5jbi9tbWJpel9wbmcvaWFucTAzVVVXR21KS0Zwdno3eEV2U050ZW5saEluaDlSZkxmVW1TRzBvSGdKUmxheWIyaWNuU3R4TnFlUk10M2F6aWEwZ2w3aWFndW41YVpJYWljZGFJUkQ0dy8wP3d4X2ZtdD1wbmc-1.png)</section><section>Hello，伙伴们</section><section>长按二维码关注我们吧！</section></section></section></section></section><section class="_135editor" data-role="paragraph"></section></section>