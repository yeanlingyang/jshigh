# js 高级课程

## 课程内容介绍

学习资源的说明





## js 基础复习

1. 变量

   变量的作用

   命名规则:

   命名规范:

2. 数据类型

3. 类型转换

   转成字符串 / 数字 /  布尔

4. 运算符

   - 算数运算符

   - 赋值运算符

   - 比较运算符

   - 逻辑运算符

   - 自增自减运算符

   **运算符的优先级**

5. 流程控制语句

   顺序 / 分支 / 循环

6. 数组

   创建数组

   数组的长度 和 下标

   存值 取值

   数组的遍历

7. 函数:

   函数的声明和调用

   参数

   返回值

8. 对象:

   创建对象

   属性 和 方法

   存值 和 取值

   对象的遍历

9. 内置对象



# 知识点强化

## typeof 关键字

1. 对于简单类型
2. 对于复杂类型







## 逻辑中断 && 和 ||







## 比较运算符

==   只比较值, 不比较类型

===  值和类型都要比较 (严格)

```
  console.log(11 == '11');
  console.log(11 == true); 
  console.log(1 == true);
  console.log(0 == false);
  console.log('' == 0);
  console.log([] == 0);
  console.log([] == '0');
  console.log({} == 0);
```







## 值类型 和 引用类型







## 深拷贝 和 浅拷贝 (面试题)

### 如何拷贝一个对象

面试题: 封装一个函数, 拷贝一个对象



### 浅拷贝 和 深拷贝的说明 (画图)





### 深拷贝的实现





# 面向对象编程

## 面向对象和面向过程思想的说明







## 面向对象编程的体验

1. 给 p 设置边框
2. 给 div 设置边框
3. 给 p 设置背景色
4. 给 div 设置背景色





## 创建对象的方式

1. 创建对象的方式
2. new的作用
3. 对象的成员







## 构造函数创建对象的缺点 (画图)

每创建一个对象, 都会新创建一个功能相同的函数, 造成了资源浪费









## 使用对象的方式解决内存浪费









## 函数的原型(画图)

1. 任何函数都自带 prototype 属性
2. 任何原型都有 constructor
3. 构造函数创建出来的对象, 可以直接访问, 构造函数原型对象上的所有成员







## 通过原型解决内存浪费问题







## `__proto__`和对象的三角关系

1. 任何一个对象, 都有一个 `__protot__` 属性, 指向了原型对象
2. 给原型添加成员通过prototype







