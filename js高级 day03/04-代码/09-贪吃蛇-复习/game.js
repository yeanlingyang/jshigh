// 游戏对象: 功能, 统一管理 蛇, 食物, 地图
/* 
  属性: map地图  snake蛇   food食物
  方法: 开始游戏, 暂停游戏
*/
function Game(options) {
  options = options || {};

  this.map = options.map; // 必传参数
  this.snake = options.snake || new Snake();
  this.food = options.food || new Food();

  this.snake.render(this.map);
  this.food.render(this.map);

  this.duration = options.duration || 200;  // 控制速度
  this.timeId = null;  // 定时器

  this.flag = true; // 可以修改方向
  this.score = 0;
}

Game.prototype.start = function () {
  var that = this;
  var snake = this.snake;
  var map = this.map;
  var food = this.food;
  // 1. 开启定时器, 让蛇动
  // 开定时器之前, 先清定时器
  clearInterval(this.timeId);
  this.timeId = setInterval(function () {

    var result = snake.move(map, food);
    if (result) {
      // 判断这一次移动的结果, 如果为 true, 说明吃到食物了
      that.score++;
      console.log(that.score);
    }

    // move之后, snake的位置就发生了改变, 拿改变后的 蛇头 判断位置即可
    // (1) 不能撞墙, 判断蛇头, 和 墙的位置
    var head = snake.body[0];
    // 800 / 20 
    var maxX = map.offsetWidth / food.width - 1; //  40  范围 0-39 需要-1
    var maxY = map.offsetHeight / food.height -1; // 30  范围 0-29 需要-1
    if (head.x < 0 || head.y < 0 || head.x > maxX || head.y > maxY) {
      alert('Game Over');
      clearInterval(that.timeId);
      location.reload();
    }

    // (2) 不能吃自己, 判断蛇头 和 身体的位置不能重合
    //     只有第五的关节(下标是4)开始需要判断
    for (var i = 4; i < snake.body.length; i++) {
      var temp = snake.body[i]; // 每个关节
      if (head.x === temp.x && head.y === temp.y) {
        // 重合了
        alert('Game Over');
        clearInterval(that.timeId);
        location.reload();
      }
    }

  }, that.duration);

  // 2. 绑定键盘事件, 控制蛇的方向
  this.addEvent();
};


// 37 左  38 上 39 右  40 下
Game.prototype.addEvent = function () {
  var snake = this.snake;
  var that = this;
  document.onkeyup = function (e) {
    if (that.flag) {
      that.flag = false;
      // 可以改方向
      switch (e.keyCode) {
        case 37:
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

      setTimeout(function() {
        // 解开flag
        that.flag = true;
      }, that.duration);
    }
  }
};


