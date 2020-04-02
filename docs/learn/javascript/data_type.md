# 数据类型

先抛出问题：

1. 基本数据类型列举
2. 复合类型和基本类型的区别
3. 利用原型链 `instanceof` 准确判断复合数据类型
4. 隐式转换的理解

## 必看文档

数组：<https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array>

## 一些练习题

**数组扁平化、去重、排序**

```js
// 编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组
var arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];
```

:::details 解析

```js
var arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];
// 扁平化
let flatArr = arr.flat(4);
// 去重
let disArr = Array.from(new Set(flatArr));
// 排序
let result = disArr.sort(function(a, b) {
  return a - b;
});
console.log(result);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
```

:::

## 参考链接

[前端进阶算法 2：从 Chrome V8 源码看 JavaScript 数组](https://juejin.im/post/5e84ae366fb9a03c840d564f?from=timeline&isappinstalled=0)
