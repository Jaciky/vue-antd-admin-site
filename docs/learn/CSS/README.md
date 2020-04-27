# CSS

## 选择器

**元素选择器**：选择器通常将是某个 HTML 元素，比如 p、h1、em、a，甚至可以是 html 本身

```css
html {
  color: black;
}
p {
  color: gray;
}
h2 {
  color: silver;
}
```

**选择器分组**：逗号告诉浏览器，规则中包含两个不同的选择器

```css
h2,
table,
strong {
  color: gray;
}
```

**类选择器**：类选择器允许以一种独立于文档元素的方式来指定样式，为了将类选择器的样式与元素关联，必须将 class 指定为一个适当的值

语法：  
然后我们使用以下语法向这些归类的元素应用样式，即类名前有一个点号（.）

```html
<h1 class="important">
  This heading is very important.
</h1>
<p class="important">
  This paragraph is very important.
</p>
<p class="important warning">
  This paragraph is a very important warning.
</p>
```

```css
.important {
  color: red;
}
.warning {
  font-style: italic;
}

/* 结合元素选择器 */
p.important {
  color: red;
}
h1.important {
  color: blue;
}
```

**ID 选择器**：在某些方面，ID 选择器类似于类选择器，不过也有一些重要差别

语法：  
首先，ID 选择器前面有一个 # 号 - 也称为棋盘号或井号，**区分大小写**

```html
<p id="intro">This is a paragraph of introduction.</p>
```

```css
#intro {
  font-weight: bold;
}
```

:::details 类选择器还是 ID 选择器？

1. 只能在文档中使用一次  
   与类不同，在一个 HTML 文档中，ID 选择器会使用一次，而且仅一次。

2. 不能使用 ID 词列表  
   不同于类选择器，ID 选择器不能结合使用，因为 ID 属性不允许有以空格分隔的词列表。

3. ID 能包含更多含义  
   重要信息

:::

**属性选择器**：属性选择器可以根据元素的属性及属性值来选择元素

```html
<a href="http://www.w3school.com.cn/css/" title="CSS">CSS</a>
<p class="important warning">This paragraph is a very important warning.</p>
```

简单属性选择

```css
/* 如果您希望把包含标题（title）的所有元素变为红色，可以写作： */
*[title] {
  color: red;
}

/* 与上面类似，可以只对有 href 属性的锚（a 元素）应用样式： */
a[href] {
  color: red;
}

/* 还可以根据多个属性进行选择，只需将属性选择器链接在一起即可 */
a[href][title] {
  color: red;
}

/* 可以采用一些创造性的方法使用这个特性。
例如，可以对所有带有 alt 属性的图像应用样式，从而突出显示这些有效的图像： */
img[alt] {
  border: 5px solid red;
}
```

根据具体属性值选择

```css
/* 例如，假设希望将指向 Web 服务器上某个指定文档的超链接变成红色，可以这样写： */
a[href="http://www.w3school.com.cn/about_us.asp"] {
  color: red;
}

/* 与简单属性选择器类似，可以把多个属性-值选择器链接在一起来选择一个文档。 */
a[href="http://www.w3school.com.cn/"][title="W3School"] {
  color: red;
}
```

属性与属性值必须完全匹配

```css
/* 如果写成 p[class="important"]，那么这个规则不能匹配示例标记 */
p[class="important warning"] {
  color: red;
}
```

根据部分属性值选择

```css
/* 假设您想选择 class 属性中包含 important 的元素，可以用下面这个选择器做到这一点： */
p[class~="important"] {
  color: red;
}
```

子串匹配属性选择器

| 类型         | 描述                                       |
| ------------ | ------------------------------------------ |
| [abc^="def"] | 选择 abc 属性值以 "def" 开头的所有元素     |
| [abc$="def"] | 选择 abc 属性值以 "def" 结尾的所有元素     |
| [abc*="def"] | 选择 abc 属性值中包含子串 "def" 的所有元素 |

```css
/* 如果希望对指向 W3School 的所有链接应用样式，
不必为所有这些链接指定 class，再根据这个类编写样式，而只需编写以下规则： */
a[href*="w3school.com.cn"] {
  color: red;
}
```

**后代选择器**：后代选择器（descendant selector）又称为包含选择器

```html
<h1>This is a <em>important</em> heading</h1>
<p>This is a <em>important</em> paragraph.</p>
```

```css
/* 这个规则会把作为 h1 元素后代的 em 元素的文本变为 红色。
其他 em 文本（如段落或块引用中的 em）则不会被这个规则选中： */
h1 em {
  color: red;
}
```

**后代选择器**：与后代选择器相比，子元素选择器（Child selectors）只能选择作为某元素子元素的元素

```html
<h1>This is <strong>very</strong> <strong>very</strong> important.</h1>
<h1>
  This is <em>really <strong>very</strong></em> important.
</h1>
```

```css
/* 这个规则会把第一个 h1 下面的两个 strong 元素变为红色，但是第二个 h1 中的 strong 不受影响： */
h1 > strong {
  color: red;
}

/* 子结合符两边可以有空白符，这是可选的。因此，以下写法都没有问题： */
h1 > strong
h1> strong
h1 >strong
h1>strong

/* 结合后代选择器和子选择器 */
table.company td > p
```

**相邻兄弟选择器**：相邻兄弟选择器（Adjacent sibling selector）可选择紧接在另一元素后的元素，且二者有相同父元素。

如果需要选择紧接在另一个元素后的元素，而且二者有相同的父元素，可以使用相邻兄弟选择器（Adjacent sibling selector）。

例如，如果要增加紧接在 h1 元素后出现的段落的上边距，可以这样写：

```css
/* 这个选择器读作：“选择紧接在 h1 元素后出现的段落，h1 和 p 元素拥有共同的父元素”。 */
h1 + p {
  margin-top: 50px;
}
```

**伪类 (Pseudo-classes)**：CSS 伪类用于向某些选择器添加特殊的效果

```html
<a class="red" href="css_syntax.asp">CSS Syntax</a>
```

动态伪类选择器：不同的状态，使用不同的样式

```css
/* 未访问的链接 */
a:link {
  color: #ff0000;
}
/* 已访问的链接 */
a:visited {
  color: #00ff00;
}
/* 鼠标移动到链接上 */
a:hover {
  color: #ff00ff;
}
/* 选定的链接 */
a:active {
  color: #0000ff;
}

/* 伪类可以与 CSS 类配合使用： */
a.red: visited {
  color: #ff0000;
}
```

::: warning 注意

1. 在 CSS 定义中，a:hover 必须被置于 a:link 和 a:visited 之后，才是有效的。
2. 在 CSS 定义中，a:active 必须被置于 a:hover 之后，才是有效的。
3. 伪类名称对大小写不敏感。

:::

目标伪类选择器：用来匹配页面的 URI 中某个标识符的目标元素

```css
/* 选择匹配E的所有元素，且匹配元素被相关URL指向 */
　e: target;
```

语言伪类选择器：用来匹配使用指定语言的元素

```css
e: lang(language);
```

元素状态伪类选择器：当元素处于某种状态下时，才起作用，在默认状态下不起作用。

```css
E: checked
eg: input[type="checkbox"]:checked
E: enabled
eg: input[type="text"]:checked
E: disabled
eg: input[type="text"]:disabled
```

结构伪类选择器

```css
: nth-child
: nth-last-child
: nth-of-type
: nth-last-of-type
: first-child
: last-child
: only-child
: first-of-type
: last-of-type
: only-of-type
: root 匹配元素所有在文档的根元素
: empty 选择没有子元素的元素，且不包含节点
```

否定伪类选择器

```css
e: not(F) 匹配所有除F外的E元素;
```

**伪类 (Pseudo-classes)**：CSS 伪类用于向某些选择器添加特殊的效果

| 属性          | 描述                             |
| ------------- | -------------------------------- |
| :first-letter | 向文本的第一个字母添加特殊样式。 |
| :first-line   | 向文本的首行添加特殊样式。       |
| :before       | 在元素之前添加内容。             |
| :after        | 在元素之后添加内容。             |

::: tip :first-line 伪元素，向文本的首行设置特殊样式
"first-line" 伪元素只能用于块级元素。
下面的属性可应用于 "first-line" 伪元素：

- font
- color
- background
- word-spacing
- letter-spacing
- text-decoration
- vertical-align
- text-transform
- line-height
- clear

:::

::: tip :first-letter 伪元素，向文本的首字母设置特殊样式
"first-letter" 伪元素只能用于块级元素
下面的属性可应用于 "first-letter" 伪元素：

- font
- color
- background
- margin
- padding
- border
- text-decoration
- vertical-align (仅当 float 为 none 时)
- text-transform
- line-height
- float
- clear

:::

## 样式

## 框模型

## 定位

## 尺寸

## 布局
