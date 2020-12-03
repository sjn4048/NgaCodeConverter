### 简介

- 本工具支持将HTML或Markdown转换为NGA代码（一种BBCode方言）

- 本工具的流程为Markdown->HTML->NGA，对于Markdown来说，先经由开源代码PyMarkdown2转换为html后再次转换为NGA代码。
- 对于HTML->NGA的部分，请参见html2bbcode文件夹下的README.MD
- 在成立初期，这是一个**场景驱动**的项目，用于王者荣耀官方公告的自动搬运。支持了王者荣耀官方公告html中的一系列常见元素，如内嵌在HTML中的css代码等。对于其他HTML/Markdown元素，可能是未经充分测试的。对于这一部分，欢迎[联系作者](mailto:3160105216@zju.edu.cn)或提交Issue/PR

### 在线demo

[在线版](https://ricochet.cn/tools/html2bbcode)

### 支持特性

覆盖NGA 99%以上的日常使用，功能包含且不限于：

1. 粗体、斜体、删除线
2. 超链接
3. 图片链接
4. 有序/无序列表
5. 代码
6. 字体颜色
7. 字体大小
8. 标题格式
9. 表格
10. quote块

### 使用方法

#### 在线使用（面向一般用户）

[地址](https://ricochet.cn/tools/html2bbcode)

1. 转换器模式

   - 转换器模式是默认的使用模式，你可以输入HTML/Markdown代码，也可以输入一个网址。此后转换器将把你的代码转换为NGA代码格式。

   - 在输入网址时，请确保【编码】选项选择正确。一些中文站点会使用GBK编码，此时在默认的UTF-8模式下将转换失败。

   - 定制转换选项默认为【无】，在绝大多数情况下可以无视。

   - 请务必选择正确的【源码格式】。转换器模式中，默认源码格式为HTML。如果你要转换Markdown代码，请将【源码格式】改为Markdown。

     示例：

2. 编辑器模式

   - 点击页面上方的【切换】按钮切换至编辑器模式。

   - 编辑器模式中，你可以左侧输入Markdown/HTML源码。NGA代码将显示在右侧，中间部分则是渲染结果。编辑结束后，将右侧的代码复制到NGA编辑器中即可发布。要注意的是，由于NGA渲染器不开源，因此**渲染使用的是HTML渲染器，与NGA的效果存在一定差异，请以NGA显示效果为准。**

   - 编辑器模式的默认源码格式为Markdown，你可以在顶端的选项卡中修改为HTML。

   - 由于转换在服务器端进行，为了降低服务器负荷，编辑器内置了200ms的转换延时。当你停止打字累计200ms后，将会产生一次与后端的交互。


#### 本地使用（面向开发者）

1. 安装

    ~使用pip安装~（pip安装存在一定问题，将于短期内修复，请先使用下面的方法本地安装。）

    ```bash
    pip install NgaCodeConverter
    ```

    或使用在本仓库中安装

    ```bash
    pip install .
    ```

2. 引入本地工程

    ```
    from NgaCodeConverter.converter import md2nga, html2nga
    print(md2nga('**Markdown Text**'))
    >>>[b]Markdown Text[/b]
    print(html2nga('<em>HTML Text</em>'))
    >>>[i]HTML Text[/i]
    ```

### 友情链接

[这里](<https://bbs.nga.cn/read.php?tid=17938274>) 提供了另一个Markdown转NGA的选择。相比于该工具，本工具的代码支持更加齐全。但该工具使用的是JavaScript，因此在线编辑的流畅性更好。如果对流畅性有较大需求，可以考虑使用。

### 关于Markdown

没听说过Markdown？来[这里](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) 学一学吧，轻松提升文本输入效率至少50%。

推荐使用Typora编辑Markdown，并使用本工具进行转换。

