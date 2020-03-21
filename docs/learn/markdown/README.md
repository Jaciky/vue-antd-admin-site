---
# sidebar: "auto"
---

# Markdown

---

[官方文档](https://www.markdownguide.org/basic-syntax/)

MarkDown 作为一种纯文本格式的标记语言，通过简单的标记语法，就使普通文本内容具有一定的格式。一次标记可以做到各平台通用，免除了富文本编辑器换平台就要重新排版的繁琐，越来越受欢迎，尤其是程序员群体。现在很多论坛和社区都开始支持使用 MarkDown。

## 标题

```bash
# 这是一级标题
## 这是二级标题
### 这是三级标题
```

## 字体

```bash
**这是加粗的文字**
*这是倾斜的文字*`
***这是斜体加粗的文字***
~~这是加删除线的文字~~
```

效果：

**这是加粗的文字**  
_这是倾斜的文字_`  
**_这是斜体加粗的文字_**  
~~这是加删除线的文字~~

## 段落

**行尾加回车!**

```bash
这是一段文字

这是一段文字

这是一段文字
```

这是一段文字

这是一段文字

这是一段文字

**行尾加两个或以上的空格!**

```bash
这是一段文字
这是一段文字
这是一段文字
```

这是一段文字  
这是一段文字  
这是一段文字

## 引用

```bash
> 只有不断的反思才能进步
>> 可以嵌套
```

效果：

> 只有不断的反思才能进步
>
> > 可以嵌套

## 标注

```bash
::: tip 注意
备注内容...
:::
```

::: tip 注意
备注内容...
:::

## 分割线

三个或者三个以上的 - 或者 \* 都可以。

```bash
---
***
*****
```

效果：

---

---

## 图片

```bash
![图片alt](图片地址 ''图片title'')

![图片alt](图片地址 ''图片title'')(图片超链接地址)

例如：![girl](https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584683071839&di=5587f28a0c947670cc35df56d3901dfb&imgtype=0&src=http%3A%2F%2Ftupian.qqw21.com%2Farticle%2FUploadPic%2F2020-2%2F20202317381379635.jpg "hello")
```

效果：

![girl](https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584695785148&di=51f6a133ea389dbb1001f5413b42fb98&imgtype=0&src=http%3A%2F%2Fimg.ewebweb.com%2Fuploads%2F20190625%2F16%2F1561451570-UiZRVLFfpT.jpg "hello")

**上传本地图片直接点击导航栏的图片标志，选择图片即可。**

markdown 格式追求的是简单、多平台统一。那么图片的存储就是一个问题，需要用图床，提供统一的外链，这样就不用在不同的平台去处理图片的问题了。才能做到书写一次，各处使用。

图片存储在服务器参考 [markdown 图床](https://www.jianshu.com/p/ea1eb11db63f)

## 链接

```bash
<https://www.markdownguide.org>
<fake@example.com>
```

<https://www.markdownguide.org>  
<fake@example.com>

## 超链接

```bash
[Github](https://github.com/)
*[掘金](https://juejin.im/timeline)*
[`code`](#code) 锚点
```

效果：  
[Github](https://github.com/)  
_[掘金](https://juejin.im/timeline)_  
[代码](#代码)

## 列表

**无序列表：**

```bash

- 列表内容
+ 列表内容
* 列表内容

注意：用 - + * 任何一种都可以，符号与内容之间都要有一个空格
```

效果：

- 列表内容
- 列表内容
- 列表内容

**有序列表：**

```bash
1. 列表内容
2. 列表内容
3. 列表内容

注意：序号跟内容之间要有空格
```

效果：

1. 列表内容
2. 列表内容
3. 列表内容

**嵌套列表：**

上一级和下一级之间敲三个空格即可

效果：

1. 列表内容
   1. 列表内容
   2. 列表内容
   3. 列表内容
2. 列表内容
3. 列表内容

## 表格

Markdown 制作表格使用 `|` 来分隔不同的单元格，使用 `-` 来分隔表头和其他行。

语法如下：

```bash
表头|表头|表头
---|:--:|---:
内容|内容|内容
内容|内容|内容
```

我们可以设置表格的对齐方式：

- `-:` 设置内容和标题栏居右对齐。
- `:-` 设置内容和标题栏居左对齐。
- `:-:` 设置内容和标题栏居中对齐。

示例：

```bash
左对齐|居中对齐|右对齐
---|:--:|---:
内容|内容|内容
内容|内容|内容
```

效果：
| 左对齐 | 居中对齐 | 右对齐 |
| :-----| :---: | ----: |
| 内容 | 内容 | 内容 |
| 内容 | 内容 | 内容 |

## 代码

````bash
`代码内容`

```key
代码...
```
````

示例：

```bash
`new Date()`
```

`new Date()`

代码片段 html

```html
<div>
  <span></span>
</div>
```

代码片段 js

```js
function fn() {
  // ...
}
```

代码片段 css

```css
#apple {
  color: red;
}
```

[VuePress Markdown 语法拓展](https://vuepress.vuejs.org/zh/guide/markdown.html)
