# 上下文调用模式 - call apply bind

## call 方法的基本使用

1. 任何一个函数都有一个 call 方法,  也可以调用函数      fn()    fn.call( [ ] );
2. 区别:  多一个参数    fn(1, 2);     fn.call(this指向, 1, 2)
3. 作用: 可以借用别人的方法





## 伪数组 和 数组

1. 借用 pop 和 push
2. 借用 join,  arguments 拼串       [ ].join.call( arguments, '-' );
3. 借用 slice,  伪数组转真数组      





## apply 方法的使用







## 应用: 求数组的最大值







## bind 方法

1. 基本使用
2. 定时器中的 this 指向问题





# 函数也是对象

## 函数也是对象

其实所有的函数, 都是由 Function 创建出来的!!!

函数 fn 的原型链



## 完整版原型链

小练习

```
  console.log(Function instanceof Function);
  console.log(Function instanceof Object);
  
  console.log(Object instanceof Function);
  console.log(Object instanceof Object);
```



## javascript所有对象的族谱







# 变量的作用域 和 预解析

## 预解析 和 作用域

1. 基本预解析的认知
2. 静态作用域的说明  (练习题画图)

```javascript
  var num = 123;
  function f1() {
    console.log(num);
  }

  function f2(){
    var num = 456;
    f1();
  }
  f2();//打印啥？
```

3. 作用域链

   只要是函数，就会形成一个作用域



## 面试题





# 递归

1. 递归函数: 函数内部自己调用自己

2. 递归函数一定要有结束的条件     讲5遍故事
3. 复杂问题简单化  求 1-100的和





## 递归斐波纳契数列







## 递归斐波纳契数列 - 优化





















