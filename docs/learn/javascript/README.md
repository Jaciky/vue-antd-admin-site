# js 基础

## this 指向

面试时这样表述：  
this 对象在运行时基于函数的执行环境绑定的：在全局函数中，this 等于 window,当函数被作为某个对象的方法调用时，this 等于那个对象，不过匿名函数的执行环境具有全局性，因此 this 通常指向 window

**全局声明式函数中， this 指代全局对象 window**

```js
var x = 2;
function test() {
  var x = 1;
  console.log(this.x);
}
test(); // 2
```

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

**作为构造函数调用，this 指代 new 实例化的对象**

```js
function Animal() {
  this.x = 1;
}
var o = new Animal();
alert(o.x); // 1
```

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
console.log(obj.getX()); //3
console.log(obj.getY()); //6
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

obt.fn(); // 20

(obt.fn, obt.fn)(); // 10

new obt.fn(); // undefined
```
