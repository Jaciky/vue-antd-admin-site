# this 指向

概括：

- 全局作用域下的函数：window
- 匿名函数：window
- 对象属性方法：当前对象
- 作为构造函数调用：实例化的对象
- 箭头函数：定义该函数时所在的作用域指向的对象

## 全局函数中

**全局声明式函数中， this 指代全局对象 window**

```js
var x = 2;
function test() {
  var x = 1;
  console.log(this.x);
}
test(); // 2
```

## 匿名函数中

**匿名函数的执行环境具有全局性，this 对象通常指向 window 对象**

```js
// 匿名函数作为返回值被调用
var name = "The Window";
var obj = {
  name: "My obj",
  getName: function() {
    return function() {
      console.log(this.name);
    };
  }
};

obj.getName()(); // 'The Window'

// 匿名函数作为setInterval、setTimeout的参数
setInterval(function() {
  console.log(this); // 'Window'
}, 300);
```

## 对象属性方法

**函数作为对象属性方法调用， this 当前对象，数组同理**

```js
// 普通对象
var obj = {
  name: "obj",
  func1: function() {
    console.log(this);
  }
};
obj.func1(); // this--->obj

// 元素对象
document.getElementById("div").onclick = function() {
  console.log(this);
}; // this--->div
```

## 构造函数中

**作为构造函数调用，this 指代 new 实例化的对象**

```js
function Animal() {
  this.x = 1;
}
var o = new Animal();
alert(o.x); // 1
```

## 箭头函数中

**es6 箭头函数的 this**

下面是普通函数的列子：

```js
var name = "window"; // 其实是window.name = 'window'

var A = {
  name: "A",
  sayHello: function() {
    console.log(this.name);
  }
};

A.sayHello(); // 输出A

var B = {
  name: "B"
};

A.sayHello.call(B); //输出B

A.sayHello.call(); //不传参数指向全局window对象，输出window.name也就是window
```

从上面可以看到，sayHello 这个方法是定义在 A 对象中的，当当我们使用 call 方法，把其指向 B 对象，最后输出了 B；可以得出，sayHello 的 this 只跟使用时的对象有关。

改造一下：

```js
var name = "window";

var A = {
  name: "A",
  sayHello: () => {
    console.log(this.name);
  }
};

A.sayHello(); // 还是以为输出A ? 错啦，其实输出的是window
```

::: details 分析
我相信在这里，大部分同学都会出错，以为 sayHello 是绑定在 A 上的，但其实它绑定在 window 上的，那到底是为什么呢？

一开始，我重点标注了“**该函数所在的作用域指向的对象**”，作用域是指函数内部，这里的箭头函数，也就是 sayHello，所在的作用域其实是最外层的 js 环境，因为没有其他函数包裹；然后最外层的 js 环境指向的对象是 winodw 对象，所以这里的 this 指向的是 window 对象。

那如何改造成永远绑定 A 呢：

```js
var name = 'window';

var A = {
   name: 'A',
   sayHello: function(){
      var s = () => console.log(this.name)
      return s//返回箭头函数s
   }
}

var sayHello = A.sayHello();
sayHello();// 输出A

var B = {
   name: 'B';
}

sayHello.call(B); //还是A
sayHello.call(); //还是A
```

OK，这样就做到了永远指向 A 对象了，我们再根据“**该函数所在的作用域指向的对象**”来分析一下：

**该函数所在的作用域**：箭头函数 s 所在的作用域是 sayHello,因为 sayHello 是一个函数。  
**作用域指向的对象**：A.sayHello 指向的对象是 A。
:::

> 总结：箭头函数体内的 this 对象，就是**定义该函数时所在的作用域指向的对象**，而不是使用时所在的作用域指向的对象。

_如题_

```js
var x = 3;
var y = 4;
var obj = {
  x: 1,
  y: 6,
  getX: function() {
    var x = 5;
    return (function() {
      return this.x;
    })();
  },
  getY: function() {
    var y = 7;
    return this.y;
  }
};
console.log(obj.getX()); // 3
console.log(obj.getY()); // 6
```

```js
var a = 10;
var obt = {
  a: 20,
  fn: function() {
    var a = 30;
    console.log(this.a);
  }
};
obt.fn(); // 20
obt.fn.call(); // 10
```

说明：部分总结来源于各社区，资料仅用来学习，如有侵权，请 [联系我](/about/)

**参考**

[ES6 箭头函数的 this 指向详解](https://zhuanlan.zhihu.com/p/57204184)
