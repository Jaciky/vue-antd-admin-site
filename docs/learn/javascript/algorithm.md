# 算法

## 快速排序(Quicksort)

> 快速排序（英语：Quicksort），又称划分交换排序（partition-exchange sort），简称快排，一种排序算法，最早由东尼·霍尔提出。在平均状况下，排序 n 个项目要 O(nLogn)次比较。在最坏状况下则需要 O(n^2)次比较，但这种状况并不常见。事实上，快速排序 O(nLogn)通常明显比其他算法更快，因为它的内部循环（inner loop）可以在大部分的架构上很有效率地达成

**快速排序的 3 个基本步骤：**

1. 从数组中选择一个元素作为基准点
2. 排序数组，所有比基准值小的元素摆放在左边，而大于基准值的摆放在右边。每次分割结束以后基准值会插入到中间去。
3. 最后利用递归，将摆放在左边的数组和右边的数组在进行一次上述的 1 和 2 操作。

为了更深入的理解，可以看下面这张图

![ ](https://image-static.segmentfault.com/735/222/735222987-5c3469a8b952e_articlex)

我们根据上面这张图，来用文字描述一下

1. 选择左右边的元素为基准数，7
2. 将小于 7 的放在左边，大于 7 的放在右边，然后将基准数放到中间
3. 然后再重复操作从左边的数组选择一个基准点 2
4. 3 比 2 大则放到基准树的右边
5. 右边的数组也是一样选择 12 作为基准数，15 比 12 大所以放到了 12 的右边
6. 最后出来的结果就是从左到右 2 ，3，7，12，15 了

以上就是快速排序基本的一个实现思想。

**快速排序实现方式一**

```js
var quickSort = function(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  var pivotIndex = Math.floor(arr.length / 2);
  var pivot = arr.splice(pivotIndex, 1)[0];
  var left = [];
  var right = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat([pivot], quickSort(right));
};
```

以上代码的实现方式是，选择一个中间的数字为基准点，用两个数组分别去保存比基准数小的值，和比基准数大的值，最后递归左边的数组和右边的数组，用 concat 去做一个数组的合并。

对于这段代码的分析：

缺点：

- 获取基准点使用了一个 splice 操作，在 js 中 splice 会对数组进行一次拷贝的操作，而它最坏的情况下复杂度为 O(n)，而 O(n)代表着针对数组规模的大小进行了一次循环操作。
- 首先我们每次执行都会使用到两个数组空间，产生空间复杂度。
- concat 操作会对数组进行一次拷贝，而它的复杂度也会是 O(n)
- 对大量数据的排序来说相对会比较慢

优点：

- 代码简单明了，可读性强，易于理解
- 非常适合用于面试笔试题
- 那么我们接下来用另外一种方式去实现快速排序

**快速排序的实现方式二**

![ ](https://image-static.segmentfault.com/379/004/379004857-5c34776597e7f_articlex)

从上面这张图，我们用一个指针 i 去做了一个分割

- 初始化 i = -1
- 循环数组，找到比支点小的数就将 i 向右移动一个位置，同时与下标 i 交换位置
- 循环结束后，最后将支点与 i+1 位置的元素进行交换位置
- 最后我们会得到一个由 i 指针作为分界点，分割成从下标 0-i，和 i+1 到最后一个元素。
- 下面我们来看一下代码的实现，整个代码分成三部分，数组交换，拆分，qsort（主函数）三个部分

先写最简单的数组交换吧，这个大家应该都懂

```js
function swap(A, i, j) {
  const t = A[i];
  A[i] = A[j];
  A[j] = t;
}
```

下面是拆分的过程，其实就是对指针进行移动，找到最后指针所指向的位置

```js
/**
 *
 * @param {*} A  数组
 * @param {*} p  起始下标
 * @param {*} r  结束下标 + 1
 */
function dvide(A, p, r) {
  // 基准点
  const pivot = A[r - 1];

  // i初始化是-1，也就是起始下标的前一个
  let i = p - 1;

  // 循环
  for (let j = p; j < r - 1; j++) {
    // 如果比基准点小就i++，然后交换元素位置
    if (A[j] <= pivot) {
      i++;
      swap(A, i, j);
    }
  }
  // 最后将基准点插入到i+1的位置
  swap(A, i + 1, r - 1);
  // 返回最终指针i的位置
  return i + 1;
}
```

主程序主要是通过递归去重复的调用进行拆分，一直拆分到只有一个数字。

```js
/**
 *
 * @param {*} A  数组
 * @param {*} p  起始下标
 * @param {*} r  结束下标 + 1
 */
function qsort(A, p, r) {
  r = r || A.length;
  if (p < r - 1) {
    const q = divide(A, p, r);
    qsort(A, p, q);
    qsort(A, q + 1, r);
  }
  return A;
}
```

**完整代码**

```js
function swap(A, i, j) {
  const t = A[i];
  A[i] = A[j];
  A[j] = t;
}

/**
 *
 * @param {*} A  数组
 * @param {*} p  起始下标
 * @param {*} r  结束下标 + 1
 */
function divide(A, p, r) {
  const x = A[r - 1];
  let i = p - 1;

  for (let j = p; j < r - 1; j++) {
    if (A[j] <= x) {
      i++;
      swap(A, i, j);
    }
  }

  swap(A, i + 1, r - 1);

  return i + 1;
}

/**
 *
 * @param {*} A  数组
 * @param {*} p  起始下标
 * @param {*} r  结束下标 + 1
 */
function qsort(A, p = 0, r) {
  r = r || A.length;

  if (p < r - 1) {
    const q = divide(A, p, r);
    qsort(A, p, q);
    qsort(A, q + 1, r);
  }

  return A;
}
```

**总结**

第二段的排序算法我们减少了两个 O(n)的操作，得到了一定的性能上的提升，而第一种方法数据规模足够大的情况下会相对来说比较慢一些，快速排序在面试中也常常出现，为了笔试更好写一些可能会有更多的前端会选择第一种方式，但也会有一些为难人的面试官提出一些算法中的问题。而在实际的项目中，我觉得第一种方式可以少用。

## 参考

[js 算法-快速排序(Quicksort)](https://segmentfault.com/a/1190000017814119)
