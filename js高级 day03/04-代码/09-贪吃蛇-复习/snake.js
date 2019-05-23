// 蛇对象: 蛇是由一个一个关节组成的
/* 
  属性:
    关节的宽度
    关节的高度
    蛇头的颜色
    蛇身的颜色
    蛇的方向

    整个蛇的位置: 需要一个数组
      [
        { x: 2, y : 0 },
        { x: 1, y : 0 },
        { x: 0, y : 0 }
      ]
  方法:
    渲染
    移动
*/
function Snake(options) {
  options = options || {};
  this.width = options.width || 20;
  this.height = options.height || 20;
  this.headColor = options.headColor || 'green';
  this.bodyColor = options.bodyColor || 'red';

  this.body = [
    { x: 2, y : 0 },
    { x: 1, y : 0 },
    { x: 0, y : 0 },
  ];

  this.direction = options.direction || 'right';
}

Snake.prototype.render = function(target) {
  // 0. 在渲染新的span之前, 需要将之前的span新删除
  var spans = target.querySelectorAll('span');
  for (var i = 0; i < spans.length; i++) {
    target.removeChild(spans[i]);
  }
  // 1. 遍历this.body, 动态创建span
  // 2. 将span添加到target中
  // 3. 设置样式
  for (var i = 0; i < this.body.length; i++) {
    var span = document.createElement('span');
    target.appendChild(span);

    // 设置宽高背景色
    span.style.width = this.width + 'px';
    span.style.height = this.height + 'px';
    span.style.backgroundColor = i === 0 ? this.headColor : this.bodyColor;

    // 设置位置
    span.style.position = 'absolute';
    span.style.left = this.body[i].x * this.width + 'px';
    span.style.top = this.body[i].y * this.height + 'px';
  }
}

// 思路1: 先动蛇头, 让一个一个蛇身跟着动, 效率太低, (不用)
// 思路2:
// (1) 复制一个新的蛇头, 位置和原来的蛇头一致
// (2) 根据蛇的方向, 计算新蛇头的位置
// (3) 添加到 body 的最前面 unshift
//     删除 body 的最后面 pop 
Snake.prototype.move = function(target, food) {
  var flag = false; // 表示没有吃到食物

  var newHead = {
    x: this.body[0].x,
    y: this.body[0].y
  };

  // 根据方向, 计算新蛇头的位置
  switch(this.direction) {
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


  // 添加到body最前面
  this.body.unshift(newHead);
  // 没吃到食物, 最后一个要删除, 吃到食物, 就不用删了
  if (food.x === newHead.x && food.y === newHead.y) {
    // 吃到了, 重新更新食物的位置
    food.render(target);
    flag = true;
  }
  else {
    this.body.pop();
  }

  // 重新渲染
  this.render(target);

  return flag;
}