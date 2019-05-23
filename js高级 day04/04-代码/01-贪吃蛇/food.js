// 沙箱模式, 匿名函数自调用
(function () {
  var a = 11;
  // 食物对象
  // 属性: width height bgColor x y       
  // 方法: render
  function Food(options) {
    options = options || {};

    this.width = options.width || 20;
    this.height = options.height || 20;
    this.bgColor = options.bgColor || 'blue';

    this.x = options.x || 0;
    this.y = options.y || 0;
  }

  Food.prototype.render = function (target) {
    // 0. 新增食物之前, 需要将存在的旧div, 先移除
    var oldDiv = target.querySelector('div');
    oldDiv && target.removeChild(oldDiv);

    // 1. 创建 div
    // 2. 添加到 target 中
    // 3. 设置样式显示div
    var div = document.createElement('div');
    target.appendChild(div);

    // 设置宽高背景色
    div.style.width = this.width + 'px';
    div.style.height = this.height + 'px';
    div.style.backgroundColor = this.bgColor;

    // 设置随机坐标  800 / 20
    this.x = parseInt(Math.random() * (target.offsetWidth / this.width));
    this.y = parseInt(Math.random() * (target.offsetHeight / this.height));

    // 设置随机位置
    div.style.position = 'absolute';
    div.style.left = this.x * this.width + 'px';
    div.style.top = this.y * this.height + 'px';
  };


  // 匿名函数自调用, 可以防止变量全局污染, 但是防止的有点彻底, 只要是函数内, 外面都不能访问
  // 如果是进行的封装, 一般都需要向外暴露一些方法名, 此时可以通过 window.方法名 向外暴露
  window.Food = Food;
})();