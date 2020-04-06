# 基础复习

## :four_leaf_clover: 语言特点及应用场景

:::details 简述

**面向对象三大特性**

封装

隐藏了类的内部实现机制，可以在不影响使用的情况下改变类的内部结构，同时也保护了数据，暴露给外界的只是它的访问方法。

继承

继承是为了重用父类代码。两个类若存在 IS-A 的关系就可以使用继承。同时继承也为实现多态做了铺垫。

多态

多态是指程序中定义的引用变量所指向的具体类型和通过该引用变量发出的方法调用在编程时并不确定，而是在程序运行期间才确定。多态性就是相同的消息使得不同的类做出不同的响应。

指向子类的父类引用由于向上转型了，它只能访问父类中拥有的方法和属性，而对于子类中存在而父类中不存在的方法，该引用是不能使用的。若子类重写了父类中的某些方法，在调用该些方法的时候，必定是使用子类中定义的这些方法（动态连接、动态调用）。

对于面向对象而已，多态分为编译时多态和运行时多态。其中编辑时多态是静态的，主要是指方法的重载，它是根据参数列表的不同来区分不同的函数。而运行时多态是动态的，它是通过动态绑定来实现的（重写父类方法），也就是我们所说的多态性。

**一些重要特点**

动态语言

函数的定义和调用 形参与实参不需要一致

形参可由 arguments 类数组获取 （形参传入时与其形成映射关系）

解释性语言、跨平台

js 代码运行前夕不需要编译，但是有个预编译过程（上下文环境、变量提升、形参实参统一化、函数声明提升）

弱类型语言

变量定义无须指定类型，数据类型是根据赋不同类型的值而定。

单线程

代码块之间不相互影响（ 如两个 script 之间）

代码由上而下运行，看一行执行一行，出现错误立马报错

this 指向

this 上下文环境，参考 [this](/learn/javascript/this.md)

原型及原型链

> 后续补充

**场景**

Web 开发

浏览器环境下的网页开发

桌面应用

基于 [Electron](https://www.electronjs.org) 构建桌面端应用，如 [vscode](https://github.com/microsoft/vscode) 编辑器

移动应用开发

基于 `React Native`、`weex`等框架去开发原生移动端应用，也可使用`uni-app`、`taro`多端框架开发原生应用、微信小程序、支付宝小程序等

服务器和 API

大多数应用都需要某种程度的后端，但这同样可以通过 JS 完成。使用 Node.js 你可以获得一个可构建服务器的，高度且可扩展的 JS 运行时。长久以来，Express 一直是服务器端渲染 Web 应用或 API 的首选框架。虽然目前它或许仍然是最流行的框架，但其它框架也在奋力追赶。Koa 是一个更轻量的继任者，而 hapi 框架则更加注重安全性。其它框架比如 Nest.js 则可以放在顶层以创建可靠的体系结构。

无论你是想设置 REST 还是 GraphQL API，打开 Web 套接字或是只想渲染一些 HTML —— JS 和 Node.js 都可以实现。

游戏开发

JS 究其本源就是面向 UI 的，因此通过 JS,HTML 和 CSS 就已经能写出简单的网页游戏。当游戏变得更复杂时，你可以会需要 HTML Canvas 来进行 2D 渲染。此外还有一些专攻游戏开发的框架，比如 Phaser 和 PixiJS。但如果你对游戏画面重视度很高的话，可能会想要选择 Konva 框架。

如果你想开发 3D 游戏那就走运了，网页浏览器拥有它们自己的 3D 图形界面，叫做 WebGL。自己使用它可能会让人不知所措，这时候用上一个更高效的框架或许是更好的选择。Babylon.js 和 Three.js 在网页 3D 相关领域家喻户晓的名字。如果想要一个更加专注于游戏开发的，可以选择 PlayCanvas，它同样提供一个基于浏览器的编辑器。除此之外，还有已经非常成熟的游戏引擎 Cocos2d.x，它绑定了 Java，被用于开发跨平台游戏。

但等等，我们还有更多：WebXR 渲染引擎将基于 JS 开发的游戏带到了另一个高度，它让你可以接触到增强现实和虚拟现实设备。这就意味着你可以用 JS 开发出沉浸式体验的游戏！

机器学习

谁说机器学习一定要会 Python？Java 就足够了！使用 TensorFlow.js，你就可以开发图像分类，语音识别或预测性分析的机器学习模型。最棒的是，你可以在 Node.js 里进行操作，也可以在浏览器里进行操作。机器学习是一项非常占用 GPU 的任务，但是它可以通过 WebGL 在浏览器中运行硬件加速。这样你可以运行一个完全存在于客户端的推荐系统，无需昂贵的服务器付费，同时还能缓解隐私问题。

如果不太喜欢 TensorFlow，那么你可以试试用 brain.js 来训练神经网络或者自带多种不同机器学习算法的 ml.js，二者都运行在浏览器中训练和运行算法。

物联网 IoT

价格低廉的硬件越来越常见，这也让你更容易地进入微控制器的世界。虽然通常构建智能系统都需要你掌握 C 或 C++ 之类的语言，但再一次地，Java 其实也能做到。

Johnny-Five 平台为各种 Arduino 开发板提供了一个易用的 API。如果你对机器人更感兴趣，不妨试试 Cylon.js。这两者的工作方式都是将 Java 翻译为设备能理解的东西。但不可避免的是这也会带来一些限制：要部署控制器，你必须要有另外一台机器在附近某处运行着 Node.js。

但这对 Jerry 而言就不会形成阻碍。Jerry 是一种微控制器的指定 Java 运行时，它仅需要 64kb 的 RAM。不过需要注意的是，根据具体的用例您可能仍然会需要不同的工具作为补充。物联网对 JS 来说或许是一个偏向实验的应用领域——不过它通过使用 MQTT 也能获得以小博大的效果。
:::

## :four_leaf_clover: 获取元素

- 通过 ID 获取（getElementById）
- 通过 name 属性（getElementsByName）
- 通过标签名（getElementsByTagName）
- 通过类名（getElementsByClassName）
- 获取 html 的方法（document.documentElement）
- 获取 body 的方法（document.body）
- 通过选择器获取一个元素（querySelector）
- 通过选择器获取一组元素（querySelectorAll）

例如：

```js
// 通过id查找元素
document.getElementById("id");
```

## :four_leaf_clover: document.ready 和 window.onload

一般情况下一个页面响应加载的顺序是：域名解析 --> 加载 html --> 加载 js 和 css --> 加载图片等其他信息

**document.ready**

作用：仅保证 DOM 结构加载完成  
使用场景：操作 DOM 时

```js
document.ready(function () {
  //do something
});
```

**window.onload**

作用：保证所以资源加载完成，DOM、JS、CSS、图片等  
使用场景：代码块相互引用时

```js
window.onload = function () {
  //do something
};
```

## :four_leaf_clover: 声明一个变量

`var val = 1`：具有变量提升特性，可重复声明，可赋值  
`let val = 1`：没有有变量提升特性，不可重复声明，可赋值，有块级作用域概念，即 `{}`之间形成一个作用域  
`const val = 1`：常量，没有变量提升特性，不可重复声明，不可赋值，有块级作用域概念，即 `{}`之间形成一个作用域

## :four_leaf_clover: 变量的命名规范

规范：不可以数字开头，可包含数字  
关键字： function var let new 等  
保留字：未来可能会被使用的字符  
大小驼峰：单词首字母大写为大驼峰

## :four_leaf_clover: 函数声明和函数表达式

声明式：`function` 作为关键字，可被预解析  
表达式：函数被赋值给一个变量，调用函数得再赋值语句之后才能运行

## :four_leaf_clover: 标签自定义属性

自定义属性：在标签上绑定非原始属性

如：`age` 即为自定义属性

```html
<div id="root" age="25"></div>
```

获取自定义属性

```js
let root = document.getElementById("root");
console.log(root.age);
```

:::details html5 自定义属性

**1. data-\*自定义属性介绍**

在 html5 中我们可以通过 `data-`来设置我们需要的自定义属性，进行数据存放

```html
<div id="root" data-age="25">
  ROOT
</div>
```

之后可以通过 js 脚本获取/设置自定义属性，也可以使用 CSS 属性选择器进行样式设置

**2. dataset 基本操作**

我们先创建一个 id 为 root 的 div 元素，自定义属性 age 值为 25，然后我们对其自定义属性进行操作

```js
let root = document.getElementById("root");
console.log(root.dataset.age); // 25
root.dataset.name = "bigZMC";
root.dataset.gender = "male";
console.log(root.dataset); // {age: "25", name: "bigZMC", gender: "male"}
delete root.dataset.gender; // 语法和object删除某一属性相同
console.log(root.dataset); // {age: "25", name: "bigZMC"}
console.log(root);
//  可以看到,自定义name属性已经在该dom元素中
//  <div id="root" data-age="25" data-name="bigZMC">
//    ROOT
//  </div>
console.log(root.dataset);
```

![  ](https://image-static.segmentfault.com/328/844/3288443301-5c191da7abb20_articlex)

由此可看出，`dataset` 是一个 `DOMStringMap` 对象,类似 json 的键值对。所有自定义元素 `data-` 都保存在 `dataset` 中，还有一个需要注意的地方是，如果自定义属性为两个单词组成，如 `data-hello-world`,那么在 `dataset` 中的 key 应该为 **helloWorld**,即驼峰命名的形式。

**3. dataset 的好处**

```js
let dataset = {};
for (let i = 0; i < root.attributes.length; i++) {
  let name = root.attributes[i].name;
  if (name.substring(0, 5) == "data-") {
    dataset[name.substring(5)] = root.attributes[i].value;
  }
}
console.log(root.dataset, dataset);
```

![  ](https://image-static.segmentfault.com/293/408/2934084733-5c1922a13cce1_articlex)

当一个 `element` 上的数据很多的话，通过遍历 `attribute` 的 `name` 方法比较复杂，此时采用 `dataset` 一目了然，先上代码

两种方式获取的结果相同,但是使用 `dataset` 代码量大幅减少
这里需要注意的是,`getAttribute()`同样可以获取到 `dataset` 中的值;

```js
console.log(root.getAttribute("data-age")); // 25
root.setAttribute("data-gender", "male");
console.log(root.dataset); // DOMStringMap {age: "25", name: "bigZMC", gender: "male"}
```

以上代码表示`setAttribute()`和 `getAttribute()`都能操作 `dataset`,说明 `dataset` 实际是 `attribute` 的一个子集,只是命名特殊,只包含前缀为 `data-`的属性。

**4. 自定义属性在 css 中的应用**

css 中可以通过属性选择器来对自定义属性的元素进行渲染

```css
[data-name] {
  color: red;
}
[data-name="bigZMC"] {
  color: blue;
}
```

:::

## :four_leaf_clover: if 语句简化技巧

1. 多个条件判断使用 `Array.includes`、`Array.indexOf`

```js
// bad
let fruit = "orange";
function judgeFruit(fruit){
  if ( fruit == "apple" || fruit == "strawberry" || fruit == "cherry" ) {
    // ...
  }
}
judgeFruit(fruit)

// good
funtion judgeFruit(fruit){
  const fruits = ['apple', 'strawberry', 'cherry', 'cranberries'];
  if(fruits.includes(fruit)){
    // ...
  }
}
judgeFruit(fruit)

// good
funtion judgeFruit(fruit){
  const fruits = ['apple', 'strawberry', 'cherry', 'cranberries'];
  if(fruits.indexOf(fruit) != -1){
    // ...
  }
}
judgeFruit(fruit)

```

2. 逆向逻辑：当正向逻辑判断条件远远多于逆向逻辑判断的条件时 **(尽量少用)**

```js
// bad
let fruit = "orange";
funtion judgeFruit(fruit){
  if ( fruit == "apple" || fruit == "strawberry" || fruit == "cherry" ) {
    // ...
  }
}
judgeFruit(fruit)

// good
funtion judgeFruit(fruit){
 if ( fruit !== "orange") {
    // ...
  }
}
judgeFruit(fruit)

```

2. 使用三目运算符

```js
let num = 20;
let res = "";
// bad
if (num > 20) {
  res = "gold";
} else {
  res = "yang";
}

// good
res = num > 20 ? "gold" : "yang";
// 带有赋值语句
res ? setStatus() : (k = 3);
// 嵌套使用
res ? (a > 2 ? fn() : fn2()) : fn3();
```

3. 使用逻辑运算符 `&&`

```js
let price = "";
function getPrice() {}
// bad
if (price) {
  getPrice();
}

// good
price && getPrice();
```

## :four_leaf_clover: 数据类型

值类型(基本类型)：字符串（String）、数字(Number)、布尔(Boolean)、空对象（Null）、未定义（Undefined）、Symbol。

引用数据类型：对象(Object)、数组(Array)、函数(Function)。

**Object.prototype.toString()** 精确判断数据类型

```js
var arr = [];
console.log(Object.prototype.toString.call(arr)); //"[object Array]"
```

[原理解析](https://www.jb51.net/article/79941.htm)

## :four_leaf_clover: 字符串常用方法

[方法使用文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String)

`charAt`：返回特定位置的字符  
`charCodeAt`：返回表示给定索引的字符的 Unicode 的值  
`concat`：连接两个字符串文本，并返回一个新的字符串  
`includes`：判断一个字符串里是否包含其他字符串  
`endsWith`：判断一个字符串的是否以给定字符串结尾，结果返回布尔值  
`indexOf`：从字符串对象中返回首个被发现的给定值的索引值，如果没有找到则返回-1  
`lastIndexOf`：从字符串对象中返回最后一个被发现的给定值的索引值，如果没有找到则返回-1  
`padEnd`：在当前字符串尾部填充指定的字符串， 直到达到指定的长度。 返回一个新的字符串  
`padStart`：在当前字符串头部填充指定的字符串， 直到达到指定的长度。 返回一个新的字符串  
`replace`：被用来在正则表达式和字符串直接比较，然后用新的子串来替换被匹配的子串  
`search`：对正则表达式和指定字符串进行匹配搜索，返回第一个出现的匹配项的下标  
`slice`：摘取一个字符串区域，返回一个新的字符串  
`split`：通过分离字符串成字串，将字符串对象分割成字符串数组  
`startsWith`：判断字符串的起始位置是否匹配其他字符串中的字符  
`substr`：通过指定字符数返回在指定位置开始的字符串中的字符  
`substring`：返回在字符串中指定两个下标之间的字符  
`toLowerCase`：将字符串转换成小写并返回  
`toUpperCaswe`：将字符串转换成大写并返回  
`trim`：从字符串的开始和结尾去除空格

## :four_leaf_clover: 数组常用方法

[方法使用文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)

_修改器方法_

下面的这些方法会改变调用它们的对象自身的值：

`pop`：删除数组的最后一个元素，并返回这个元素  
`push`：在数组的末尾增加一个或多个元素，并返回数组的新长度  
`shift`：删除数组的第一个元素，并返回这个元素  
`unshift`：在数组的开头增加一个或多个元素，并返回数组的新长度  
`sort`：对数组元素进行排序，并返回当前数组  
`reverse`：颠倒数组中元素的排列顺序，即原先的第一个变为最后一个，原先的最后一个变为第一个  
`splice`：在任意的位置给数组添加或删除任意个元素

_访问方法_

下面的这些方法绝对不会改变调用它们的对象的值，只会返回一个新的数组或者返回一个其它的期望值。

`concat`：返回一个由当前数组和其它若干个数组或者若干个非数组值组合而成的新数组  
`includes`：判断当前数组是否包含某指定的值，如果是返回 true，否则返回 false  
`join`：连接所有数组元素组成一个字符串  
`slice`：抽取当前数组中的一段元素组合成一个新数组  
`toString`：返回一个由所有数组元素组合而成的字符串  
`indexOf`：返回数组中第一个与指定值相等的元素的索引，如果找不到这样的元素，则返回 -1  
`lastIndexOf`：返回数组中最后一个（从右边数第一个）与指定值相等的元素的索引，如果找不到这样的元素，则返回 -1

_迭代方法_

在下面的众多遍历方法中，有很多方法都需要指定一个回调函数作为参数。在每一个数组元素都分别执行完回调函数之前，数组的 length 属性会被缓存在某个地方，所以，如果你在回调函数中为当前数组添加了新的元素，那么那些新添加的元素是不会被遍历到的。此外，如果在回调函数中对当前数组进行了其它修改，比如改变某个元素的值或者删掉某个元素，那么随后的遍历操作可能会受到未预期的影响。总之，不要尝试在遍历过程中对原数组进行任何修改，虽然规范对这样的操作进行了详细的定义，但为了可读性和可维护性，请不要这样做。

`forEach`：为数组中的每个元素执行一次回调函数  
`entries`：返回一个数组迭代器对象，该迭代器会包含所有数组元素的键值对  
`every`：如果数组中的每个元素都满足测试函数，则返回 true，否则返回 false  
`some`：如果数组中至少有一个元素满足测试函数，则返回 true，否则返回 false  
`find`：找到第一个满足测试函数的元素并返回那个元素的值，如果找不到，则返回 undefined  
`filter`：将所有在过滤函数中返回 true 的数组元素放进一个新数组中并返回  
`map`：返回一个由回调函数的返回值组成的新数组  
`reduce`：从左到右为每个数组元素执行一次回调函数，并把上次回调函数的返回值放在一个暂存器中传给下次回调函数，并返回最后一次回调函数的返回值

## :four_leaf_clover: classList 的使用

HTML5 为每个元素定义了 classLlist 属性，用于在元素中添加，移除及切换 CSS 类。该属性是 DOMTokenList 对象（一个只读的类数组对象），你可以通过 DOMTokenList 定义的方法对其进行修改

**属性**

length：返回类列表中类的数量（只读）

**方法**

```js
var el = document.getElementById(div);

// 在元素中添加一个或多个类名（如果指定的类名已存在，则不会添加）
el.classList.add("a", "b", "c");

// 删除元素中一个或多个类名
el.classList.remove("a", "b");

// toggle(class, true|false) 在元素中切换类名，参数2可选
el.classList.toggle("d", true / false);

// 判断指定的类名是否存在
el.classList.contains("e")  ，//返回true

// 根据索引返回类名，索引从 0 开始，如果没有则返回null
el.classList.item(0)  //返回e
```

## :four_leaf_clover: Number 常用方法

`Number.MAX_SAFE_INTEGER`：JavaScript 中最大的安全整数 (253 - 1)  
`Number.MIN_SAFE_INTEGER`：JavaScript 中最小的安全整数 (-(253 - 1))

**方法**

`isNaN`：确定传递的值是否是 NaN  
`isFinite`：确定传递的值类型及本身是否是有限数  
`isInteger`：确定传递的值类型是“number”，且是整数  
`isSafeInteger`：确定传递的值是否为安全整数 ( -(253 - 1) 至 253 - 1 之间)  
`parseFloat`：转换为浮点数  
`parseInt`：转换为整数

## :four_leaf_clover: 堆、栈内存的概念

栈内存(stack)

- 存储基础数据类型
- 按值访问
- 存储的值大小固定
- 由系统自动分配内存空间
- 空间小，运行效率高
- 先进后出，后进先出
- 栈中的 DOM，ajax，setTimeout 会依次进入到队列中,当栈中代码执行完毕后，再将队列中的事件放到执行栈中依次执行。
- 微任务和宏任务

堆内存(heap)

- 存储引用数据类型
- 按引用访问
- 存储的值大小不定，可动态调整
- 主要用来存放对象
- 空间大，但是运行效率相对较低
- 无序存储，可根据引用直接获取

比较

![  ](https://user-gold-cdn.xitu.io/2018/6/13/163f6b03478ae38a?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

因此当我们要访问堆内存中的引用数据类型时，实际上我们首先是从栈中获取了该对象的地址引用（或者地址指针），然后再从堆内存中取得我们需要的数据。

```js
var a1 = 0; // 栈
var a2 = "this is string"; // 栈
var a3 = null; // 栈

var b = { m: 20 }; // 变量b存在于栈中，{m: 20} 作为对象存在于堆内存中
var c = [1, 2, 3]; // 变量c存在于栈中，[1, 2, 3] 作为对象存在于堆内存中
```

## :four_leaf_clover: 对象深拷贝

需要先了解**堆栈**的概念

然后可细心阅读以下文章

[浅拷贝与深拷贝](https://juejin.im/post/5b5dcf8351882519790c9a2e)  
[如何写出一个惊艳面试官的深拷贝?](https://juejin.im/post/5d6aa4f96fb9a06b112ad5b1)

## :four_leaf_clover: 浏览器的事件机制

一道面试题

```js
console.log(1);
let promise = new Promise(function (resolve, reject) {
  console.log(3);
  resolve(100);
}).then(function (data) {
  console.log(100);
});
setTimeout(function () {
  console.log(4);
});
console.log(2);
```

> 上面这个 demo 的结果值是 1 3 2 100 4

对象放在 heap（堆）里，常见的基础类型和函数放在 stack（栈）里，函数执行的时候在栈里执行。栈里函数执行的时候可能会调一些 Dom 操作，ajax 操作和 setTimeout 定时器，这时候要等 stack（栈）里面的所有程序先走 **(注意：栈里的代码是先进后出)**，走完后再走 WebAPIs，WebAPIs 执行后的结果放在 callback queue（回调的队列里，注意：队列里的代码先放进去的先执行），也就是当栈里面的程序走完之后，再从任务队列中读取事件，将队列中的事件放到执行栈中依次执行，这个过程是循环不断的。

1. 所有同步任务都在主线程上执行，形成一个执行栈
2. 主线程之外，还存在一个任务队列。只要异步任务有了运行结果，就在任务队列之中放置一个事件。
3. 一旦执行栈中的所有同步任务执行完毕，系统就会读取任务队列,将队列中的事件放到执行栈中依次执行
4. 主线程从任务队列中读取事件，这个过程是循环不断的

接下来需要引入几个概念

- 队列
- 宏任务和微任务
- 垃圾回收

可查看以下优秀文章理解这些概念

[10 分钟了解 JS 堆、栈以及事件循环的概念](https://juejin.im/post/5b1deac06fb9a01e643e2a95)  
[JavaScript 如何工作：对引擎、运行时、调用堆栈的概述](https://juejin.im/post/5a05b4576fb9a04519690d42)  
[JavaScript 中的垃圾回收和内存泄漏](https://juejin.im/post/5cb33660e51d456e811d2687)

## :four_leaf_clover: 闭包

先通过此文了解闭包的概念

[闭包详解一](https://juejin.im/post/5b081f8d6fb9a07a9b3664b6)

通过防抖函数体会闭包的妙处

```js
/**
 * @desc 函数防抖
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param immediate true 表立即执行(前沿触发)，false 表非立即执行（后沿触发）
 */
function debounce(func, wait, immediate) {
  let timeout, args, context, timestamp, result;

  const later = function () {
    // 据上一次触发时间间隔
    const last = +new Date() - timestamp;

    // 上次被包装函数被调用时间间隔 last 小于设定时间间隔 wait
    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
      if (!immediate) {
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      }
    }
  };

  return function (...args) {
    context = this;
    timestamp = +new Date();
    const callNow = immediate && !timeout;
    // 如果延时不存在，重新设定延时
    if (!timeout) timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
      context = args = null;
    }

    return result;
  };
}
```

以上代码中的 定时器 `timeout` 被作为函数返回值的匿名函数所引用，这导致了词变量不会被回收，也就可以在下次调用函数前判断其是否还存在。

扩展

[50 行代码的 MVVM，感受闭包的艺术](https://juejin.im/post/5b1fa77451882513ea5cc2ca)

## :four_leaf_clover: call() apply() bind()

[this、apply、call、bind](https://juejin.im/post/59bfe84351882531b730bac2)

## 参考资料

[html5 自定义属性](https://segmentfault.com/a/1190000017423456)
