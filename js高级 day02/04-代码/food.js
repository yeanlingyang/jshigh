// 食物对象
// 属性: 宽高 背景色 坐标
// 方法: 渲染

// 优化1: 每次都传全参数, 太麻烦, 可以设置默认值
// 优化2: 如果参数是后面的要传, 但是前面的参数不能不传的, 很麻烦, 可以传入一个对象来配置
// 优化3: 如果不传, 我也希望默认options是一个空对象

function Food(options) {
  options = options || {};
  this.width = options.width || 20;
  this.height = options.height || 20;
  this.bgColor = options.bgColor || 'blue';

  // 将来食物是需要, 随机位置的
  this.x = options.x || 0;
  this.y = options.y || 0;
}

// 将食物根据宽高坐标, 渲染到 target 盒子中
Food.prototype.render = function (target) {
  // this 指向调用者, this指向实例 f
  // 1. 动态创建 div
  // 2. 添加到 target 中
  // 3. 设置div的样式

  var div = document.createElement('div');
  target.appendChild(div)

  // 设置样式, 设置div宽高背景色
  div.style.width = this.width + 'px';
  div.style.height = this.height + 'px';
  div.style.backgroundColor = this.bgColor;

  // 随机坐标  800 / 20
  this.x = parseInt(Math.random() * (target.offsetWidth / this.width));
  this.y = parseInt(Math.random() * (target.offsetHeight / this.height));

  // 根据随机的坐标, 设置 div 的 left top (定位, 要设置position)
  div.style.position = 'absolute';
  div.style.left = this.x * this.width + 'px';
  div.style.top = this.y * this.height + 'px';
}


