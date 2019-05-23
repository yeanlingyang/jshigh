// 游戏对象(作用: 集中管理我们蛇和食物, 地图等):
// 属性: 地图map, 蛇snake, 食物food
// 方法: 开始游戏, 停止游戏
function Game(options) {
  options = options || {};
  this.map = options.map;  // 必传参数
  this.snake = options.snake || new Snake();
  this.food = options.food || new Food();

  this.snake.render(this.map); // 渲染蛇
  this.food.render(this.map);  // 渲染食物
  this.timeId = null; 
}

// 耦合性太高了
// 所谓游戏开始, 就是开启定时器, 不断让蛇动
// 开始游戏: 1. 开启定时器, 让蛇动  2. 添加键盘事件
Game.prototype.start = function () {
  var snake = this.snake;
  var map = this.map;
  var food = this.food; 
  var that = this;

  this.timeId = setInterval(function () {

    snake.move(map, food);

    // 调用完成这个移动方法后, 蛇的位置就发生了改变
    // 根据改变后的位置, 判断是否撞墙
    // 1. 判断是否撞墙, 判断蛇头是否撞墙
    var head = snake.body[0];
    // 800 / 20
    var maxX = map.offsetWidth / food.width - 1;  // 0-39
    var maxY = map.offsetHeight / food.height - 1;    // 0-29

    if (head.x < 0 || head.y < 0 || head.x > maxX || head.y > maxY) {
      clearInterval(that.timeId);
      alert('game over');

      // 让蛇回到游戏开始的位置, 可以重新加载页面
      location.reload();
    }

    // 2. 每次蛇移动后, 要判断蛇头 和 身体是否有重合, 如果有重合, 撞死了
    //    从第5个节点(下标为4)开始, 才需要判断是否撞到了
    for (var i = 4; i < snake.body.length; i++) {
      // 2. 每次蛇移动后, 要判断蛇头 和 身体是否有重合, 如果有重合, 撞死了
    //    从第5个节点(下标为4)开始, 才需要判断是否撞到了
      var temp = snake.body[i]; // 每个关节

      if (temp.x === head.x && temp.y === head.y) {
        // 重合了, 清除定时器
        clearInterval(that.timeId);
        alert('Game over');
        location.reload();
      }
    }


  }, 300);

  this.addEvent();
};


// 专门用于添加键盘事件
Game.prototype.addEvent = function() {
  var snake = this.snake;
  // 添加键盘事件
  // left 37  up 38 right 39  down 40 
  // 谁调用的方法, this就指向谁,  如果是直接调用的, 一般指向 window
  document.onkeyup = function (e) {
    switch (e.keyCode) {
      case 37:
        // 只要不是往右, 都可以改成往左
        if (snake.direction != 'right') {
          snake.direction = 'left';
        }
        break;
      case 38:
        if (snake.direction != 'down') {
          snake.direction = 'up';
        }
        break;
      case 39:
        if (snake.direction != 'left') {
          snake.direction = 'right';
        }
        break;
      case 40:
        if (snake.direction != 'up') {
          snake.direction = 'down';
        }
        break;
    }
  }
}
