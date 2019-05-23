
// 分析蛇对象: 是由一个一个的关节组成的
/* 
  蛇对象
    属性
      关节的宽度 width
      关节的高度 height
      蛇头的颜色 headColor
      蛇身的颜色 bodyColor
      蛇的位置 body, 是一个数组 
        x, y 只能描述一个的关节的坐标  { x: 2, y: 1 }
        需要通过数组来存储, 数组中有着一个一个关节坐标的对象
        [
          { x: 2, y : 0 },
          { x: 1, y : 0 },
          { x: 0, y : 0 }
        ]
    方法:
      渲染 render()
      移动 move()
*/
function Snake(options) {
  options = options || {};
  this.width = options.width || 20;
  this.height = options.height || 20;
  this.headColor = options.headColor || 'green';
  this.bodyColor = options.bodyColor || 'red';

  this.body = [
    { x: 2, y: 0 },
    { x: 1, y: 0 },
    { x: 0, y: 0 }
  ];

  // 蛇的方向 up down left right
  this.direction = options.direction || 'right';
}

Snake.prototype.render = function (target) {
  // 0. 如果之前有 span, 先把之前的span先移除
  var spans = target.querySelectorAll('span');
  for (var i = 0; i < spans.length; i++) {
    target.removeChild(spans[i]);
  }

  // 1. 循环创建 span
  // 2. 添加到 target 中
  // 3. 设置样式
  for (var i = 0; i < this.body.length; i++) {
    var span = document.createElement('span');
    target.appendChild(span);

    // 设置节点的样式, 宽高背景色
    span.style.width = this.width + 'px';
    span.style.height = this.height + 'px';
    span.style.backgroundColor = i === 0 ? this.headColor : this.bodyColor;

    // 定位之后, 就能看到了
    span.style.position = 'absolute';
    // this.body[i] 每个关节, { x: 2, y : 1 }
    span.style.left = this.body[i].x * this.width + 'px';
    span.style.top = this.body[i].y * this.height + 'px';
  }
};


// 思路:
// 1. 新复制一个新蛇头, 新蛇头 和 旧蛇头的坐标是一致的
// 2. 根据蛇运动的方向, 设置新蛇头的位置
// 3. 将新蛇头添加到 body 的最前面  unshift
//    将多余的一个蛇尾, 删除即可    pop
Snake.prototype.move = function (target, food) {

  var newHead = {
    x: this.body[0].x,
    y: this.body[0].y
  };
  // 根据方向, 计算出新的蛇头应该出现的位置
  switch (this.direction) {
    case 'left':
      newHead.x--;
      break;
    case 'right':
      newHead.x++;
      break;
    case 'up':
      newHead.y--;
      break;
    case 'down':
      newHead.y++;
      break;
  }
  // 将新蛇头添加到 body 的最前面
  this.body.unshift(newHead);

  // 让 蛇头 和 食物的位置比, 如果重合, 表示吃了, 吃了就不需要将多余的删除了
  if (newHead.x === food.x && newHead.y === food.y) {
    console.log('吃到了, 美滋滋');
    // 食物被吃, 需要换个位置
    food.render(target);
  }
  else {
    // 删除多余的蛇尾
    this.body.pop();
  }
  

  // 改完之后, 需要重新渲染
  this.render(target);
}

