# 递归函数

## 递归函数初体验

递归是一种思想, 化归思想: 把一个复杂的问题拆解成更简单的问题

求 1 - 100 的和





## 求斐波纳契数列

递归虽好, 这里有性能问题





## 斐波纳契数列的优化





# 闭包

## 统计函数执行的次数 - 闭包的基本认知







## 闭包的内存问题







## 闭包解决斐波纳契问题







## js 垃圾回收机制

js的垃圾回收

闭包的内存释放







## 闭包经典面试题

1. 点击按钮, 打印对应按钮的下标
2. 使用定时器, 每隔一秒打印 0, 1, 2, 3, 4, 5





# 正则表达式

## 正则表达式的介绍

1. 百度注册
2. 目标: 实现一个完整校验



## 正则表达式的创建方式

1. 构造函数
2. 字面量



## 正则表达式的元字符

\d

\D

\w

\W

\s

\S





## 正则表达式的优先级

|  表示 或, 优先级最低

() 优先级最高



```
console.log(/b|foot/.test('bbbbb'));

console.log(/(b|f)oot/.test('bbbbb'));
```





## 正则表达式的字符 

[ ] 表示一个字符的位置, 里面的内容表示可以出现的字符

[^] 取反





## 正则的边界

^

$

```javascript
  console.log(/^chuan/.test("dachuan"));
  console.log(/^chuan/.test("chuang"));
  console.log(/^chuan/.test("chuan"));

  console.log(/chuan$/.test("chuan"));
  console.log(/chuan$/.test("dachuan"));
  console.log(/chuan$/.test("chuang"));

  console.log(/^chuan$/.test("chuan"));
  console.log(/^chuan$/.test("chuanchuan"));
```







## 正则的量词

`  *  +   ?`

```
  console.log(/^a*$/.test('a'));
  console.log(/^a*$/.test(''));
  console.log(/^a*$/.test('aaa'));
  console.log(/^a*$/.test('aab'));
  console.log(/^a*$/.test('b'));
```

想要精确数量   { m, n  }





# 常见的表单校验

## 校验 qq 号 和 座机

1.  qq号, 规则: 5-11的数字, 不能以0开头
2.  座机, 规则:  xxx-xxxxxxxx,  0开头,  3位或4位-7位或8位





## 校验手机号 和 姓名

1. 姓名, 规则: 必须汉字 2-6

2. 手机号规则: 1开头, 11位,  

   ```
   1开头, 11位,  
   前三位号段 号段13[0-9] 147 15[0-9] 17[0-9] 18[0-9]
   ```

   



## 校验邮箱

```\
单词 @ 单词 . 单词
pp@163.com
jepson@qq.com.top
```







## 正则的replace



