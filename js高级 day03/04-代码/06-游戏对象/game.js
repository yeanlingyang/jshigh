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
}

// 所谓游戏开始, 就是开启定时器, 不断让蛇动
// 开始游戏: 1. 开启定时器, 让蛇动  2. 添加键盘事件
Game.prototype.start = function () {
  var snake = this.snake;
  var map = this.map;
  var food = this.food;

  setInterval(function () {

    snake.move(map, food)

  }, 300);

  // 添加键盘事件
  // left 37  up 38 right 39  down 40 
  document.onkeyup = function (e) {
    switch (e.keyCode) {
      case 37:
        snake.direction = 'left';
        break;
      case 38:
        snake.direction = 'up';
        break;
      case 39:
        snake.direction = 'right';
        break;
      case 40:
        snake.direction = 'down';
        break;
    }
  }
};
