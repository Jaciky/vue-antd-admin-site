# 函数相关

问题：

1. 定时器概念、语法、清除定时器

2. 运动的基本原理，思路描述：点击 div 向左平移 200，在未到达 200 时多次点击速度不叠加

3. doMove 函数的封装思路

4. 如何获取一个时间对象`Date`，`new Date()`得到的是什么，时间对象它有哪些方法

5. 数学对象`Math`下有哪些方法

6. 字符串`String`对象常用方法

7. 数组`Array`常用方法

## 一些练习题

**以下代码输出什么？**

```js
for (var i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000 * i);
}
```

:::details 解析
结果：输出 5 个 5 ，每次间隔 1 秒

可以将以上代码改写为：

```js
setTimeout(function() {
  console.log(5);
}, 0);
setTimeout(function() {
  console.log(5);
}, 1000);
setTimeout(function() {
  console.log(5);
}, 2000);
setTimeout(function() {
  console.log(5);
}, 3000);
setTimeout(function() {
  console.log(5);
}, 4000);
```

:::

**找出字符串`str`中出现最多的字符**

```js
var str = "abcabcabcbbccccc";

function getMaxNumStr() {
  // ...
}
```

:::details 解析

1. 准备一个空的 对象 `{}`，通过循环字符串的每个字符来看，如果 `{}` 里没有这个字符，就把这个字符的数目设为 1，如果有则数目++

2. 循环 `{}` 里的字符，只要存在，就把他的数目赋给一个变量，并且每次都比较新的字符数量和这个变量的大小，如果比变量大，则更新变量的值，最后这个变量的值就是最多字符的数目,而最多的字符就是 json 里这个字符

```js
var str = "sssfgtdfssddfsssfssss";

function getMaxNumStr(str) {
  var json = {};

  for (var i = 0; i < str.length; i++) {
    var k = str[i]; //k是所有字符,字符串也跟数组一样可以通过中括号下标方法取到每个子元素

    if (json[k]) {
      json[k]++; //json里有这个字符时，把这个字符的数量+1，
    } else {
      json[k] = 1; //否则把这个字符的数量设为1
    }

    // 简写
    // json[k] ? json[k]++ : (json[k] = 1);
  }

  var result = {
    num: 0,
    value: ""
  };

  // json = {s: 7, g: 2, d: 3}

  for (var k in json) {
    if (json[k] > num) {
      result.value = k;
      result.num = json[k];
    }
  }

  return result;
}
getMaxNumStr(str); // {value: 's', num: 7}
```

:::

**转化为驼峰命名**

```js
var str = "get-element-by-id";

function camelCase() {
  // ...
}

camelCase(str); // getElementById
```

:::details 解析

```js
function camelCase(str) {
  var strArr = str.split("-");
  for (var i = 1; i < strArr.length; i++) {
    strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].substring(1);
  }
  return strArr.join("");
}
```

:::

**实现千位分隔符**

```js
var num = 1087654.321;

function setThousandSeparator(num) {
  // ...
}

setThousandSeparator(num); // '1,087,654.321'
```

:::details 解析

```js
// 设置数字千位符
function setThousandSeparator(value) {
  let f, r;

  if ((!value && value != 0) || Number.isNaN(Number(value))) return "";

  // 使用了数组解构 es6
  !Number.isInteger(Number(value))
    ? ([r, f] = value.toString().split("."))
    : (r = value.toString());

  // 使用了正则表达式
  r = r.replace(/(\d)(?=(?:\d{3})+$)/g, "$1,"); // 将整数部分逢三一断

  if (f) {
    return r + "." + f;
  }

  return r;
}
```

:::

**实现防抖函数**

防抖函数作用：可实现对指定函数的调用频率限制

此题知识点涵盖：函数闭包、定时器、this 指向、call/apply，有非常好的思维训练效果

使用场景：

1. ajax 模糊远程搜索
2. 调整窗口大小的时候适配不同的布局，如果适配业务复杂，浏览器可能出现卡顿现象

```js
function fn() {
  console.log(1);
}

/**
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param immediate true 表立即执行
 */
function debounce(func, wait, immediate) {
  // ...
}

debounce(fn, 1000, true);
```

:::details 解析

```js
/**
 * @desc 函数防抖
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param immediate true 表立即执行(前沿触发)，false 表非立即执行（后沿触发）
 */
function debounce(func, wait, immediate) {
  let timeout, args, context, timestamp, result;

  const later = function() {
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

  return function(...args) {
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

:::

**获取当前日期（格式：2018-08-08）**

要求：月份和日期不足两位前面补 ‘0’，以 ‘-’ 连接

```js
var date = new Date();

function formatDate(d) {
  // ...
}

formatDate(date);
```

:::details 解析

```js
function formatDate(d = new Date()) {
  var year = d.getFullYear();
  var month = d.getMonth() + 1;
  var date = d.getDate();

  if (month < 10) {
    month = "0" + month;
  }

  if (date < 10) {
    date = "0" + date;
  }

  return year + "-" + month + "-" + date;
}

formatDate(new Date());
```

:::

**数组排序**

```js
var arr1 = [1, 2, 3, 4];
var arr2 = ["a", "e", "d", "b", "c"];

function sort(arr) {
  // ...
}

sort(arr);
```

:::details 解析

```js
var arr1 = [1, 2, 3, 4];
var arr2 = ["a", "e", "d", "b", "c"];

arr1.sort(); // 转换成字符串，以便进行比较
arr2.sor(); // 按字母顺序对元素进行排序
```

使用 sort() 方法时，应该注意下面几个问题。

1. 所谓的字母顺序，实际上是根据字母在字符编码表中的顺序进行排列的，每个字符在字符表中都有一个唯一的编号。

2. 如果元素不是字符串，则 sort() 方法试图把数组元素都转换成字符串，以便进行比较。

3. sort() 方法将根据元素值进行逐位比较，而不是根据字符串的个数进行排序。在排序时，首先比较每个元素的第 1 个字符，在第 1 个字符相同的情况下，再比较第 2 个字符，以此类推。

4. 在任何情况下，数组中 undefined 的元素都被排序在末尾。

5. sort() 方法是在原数组基础上进行排序操作的，不会创建新的数组。

sort() 方法不仅按字母顺序进行排序，还可以根据其他顺序执行操作。这时就必须为方法提供一个函数参数，该函数要比较两个值，然后返回一个用于说明这两个值的相对顺序的数字。排序函数应该具有两个参数 a 和 b，，其返回值如下。

- 如果根据自定义评判标准，a 小于 b，在排序后的数组中 a 应该出现在 b 之前，就返回一个小于 0 的值。
- 如果 a 等于 b，就返回 0。
- 如果 a 大于 b，就返回一个大于 0 的值。

**示例**

数组升序

```js
var arr = [1, 2, 3, 4];

arr.sort(funtion(a, b) {
  return (a - b)
})
```

数组降序

```js
var arr = [1, 2, 3, 4];

arr.sort(funtion(a, b) {
  return -(a - b)
})
```

:::

**算法：数组冒泡排序**

```js
function bubbleSort(arr) {
  if (arr instanceof Array && arr.length > 1) {
    //外层循环，控制趟数，每一次找到一个最大值
    for (var i = 0; i < arr.length - 1; i++) {
      // 内层循环,控制比较的次数，并且判断两个数的大小
      for (var j = 0; j < arr.length - 1 - i; j++) {
        // 白话解释：如果前面的数大，放到后面(当然是从小到大的冒泡排序)
        if (arr[j] > arr[j + 1]) {
          var temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }
}

bubbleSort();
```

**打乱数组中元素的顺序**

```js
var arr = [1, 2, 3, 4];

function orderArr(arr) {
  // ...
}

orderArr(arr); // [2,3,1,4]
```

:::details 解析

```js
var arr = [1, 2, 3, 4];

arr.sort(funtion(a, b) {
  return Math.random() > 0.5 ? -1 : 1;
})
```

:::

**实现数组去重**

前提：数组中的元素为基本类型

```js
var arr = [1, "a", 1, undefined, 3, 4, NaN, 4];

function unique(arr) {
  // ...
}

unique(arr);
```

:::details 解析

```js
function unique(arr) {
  var n = {};
  var r = [];

  for (var i = 0; i < arr.length; i++) {
    // 如果 hash 表中没有当前项
    if (!n[arr[i]]) {
      // 存入 hash 表
      n[arr[i]] = true;
      // 把当前数组的当前项 push 到临时数组里面
      r.push(arr[i]);
    }
  }
  return r;
}

unique();
```

:::
