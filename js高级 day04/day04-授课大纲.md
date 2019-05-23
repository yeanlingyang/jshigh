## 沙箱模式 - 优化贪吃蛇



# 继承

## 混入式继承







## 原型链继承

1. 将内容加给原型
2. 原型替换





## 原型混入式继承





## 经典继承





# 函数进阶

## 定义函数的三种方式





## 代码编辑器





## try-catch语法





## eval 方法





## 四种调用模式

### 函数调用模式 和 方法调用模式

```javascript
小测试:
  var obj = {
    sayHi: function() {
      console.log(this);
    }
  };
  var fn = obj.sayHi;
  fn(); 
  
  
小测试2:
  var age = 10;
  function fn() {
    console.log(this.age);
  }
  var obj = {
    age: 20,
    sayHi: fn
  };
  obj.sayHi();
  fn();
```



### 构造函数调用模式

### 面试题

#### 面试题1

```javascript
    var name = 'zs';
    var age = 20;
    function Person(name, age) {
      this.name = name;
      this.age = age;
    }
    var p1 = Person('ls', 30);
    console.log(name);
    console.log(age);
    console.log(p1.name);
    console.log(p1.age);
```

#### 面试题 2





#### 面试题 3

```javascript
    var length = 10;
    function fn() {
      console.log(this.length);
    }
    var obj = {
      length: 5,
      fn: function() {
        console.log(this.length);
      }
    };
    var arr = [fn, obj.fn, 100, 10];
    fn();
    obj.fn();
    arr[0]();
    arr[1]();
```

#### arguments 的说明

任何一个函数内部都自带一个 arguments对象, 存储了所有传递的参数

练习: 求任意个数字的最大值





#### 面试题 4



### 究极综合题

```javascript
      function Foo() {
        getName = function() {
          console.log(1);
        }
        return this;
      }
      Foo.getName = function() {
        console.log(2);
      }
      Foo.prototype.getName = function() {
        console.log(3);
      }
      var getName = function() {
        console.log(4);
      }
      function getName() {
        console.log(5);
      }

      Foo.getName();
      getName();
      Foo().getName();
      getName();

      new Foo.getName();

      new Foo().getName();
      new new Foo().getName();
```







###　上下文调用模式－call 方法的基本使用







### 伪数组 和 数组的说明

1. 什么是真数组
2. 什么是伪数组
3. 往一个伪数组中push / pop





### 伪数组 和 数组的练习

1. fn(1, 2, 3, 4) 要求将传入的值 拼串通过  -  分隔
2. 伪数组 怎么 变成真数组





### 上下文调用模式 - apply 方法

1. 基本使用
2. 求两个数的和
3. 借调往伪数组中加入值





### 小练习

```javascript
求数组的最大值

封装一个函数，将所有的参数通过 - 拼接成字符串, 并打印出来
```













