// 食物对象
// 属性: 宽 高 背景色 坐标x, y
// 方法: 渲染 render
function Food(options) {
  options = options || {};
  this.width = options.width || 20;
  this.height = options.height || 20;
  this.bgColor = options.bgColor || 'blue';
  this.x = options.x || 0;
  this.y = options.y || 0;
}

Food.prototype.render = function (target) {
  // 0. 将原来的旧食物, 先移除, 再添加新的
  var oldDiv = target.querySelector('div');
  // if (oldDiv) {
  //   target.removeChild( oldDiv );
  // }
  oldDiv && target.removeChild(oldDiv);

  // 1. 动态创建 div
  // 2. 添加到 target 中
  // 3. 设置样式
  var div = document.createElement('div');
  target.appendChild(div);

  // 设置样式
  // 宽高背景色
  div.style.width = this.width + 'px';
  div.style.height = this.height + 'px';
  div.style.backgroundColor = this.bgColor;

  // 先算坐标  800 / 20
  this.x = parseInt(Math.random() * (target.offsetWidth / this.width));
  this.y = parseInt(Math.random() * (target.offsetHeight / this.height));

  // 再设置 left top 定位
  div.style.position = 'absolute';
  div.style.left = this.x * this.width + 'px';
  div.style.top = this.y * this.height + 'px';
}
