var global_score = 0;
var Ship = cc.Sprite.extend({
  appearPosition: cc.p(70, 240),
  vy: 4,
  ctor: function () {
    global_score = 0;
    this.score = 0;
    this._super(res.chara);
    this.setScale(0.75, 0.75);
    this.x = this.appearPosition.x;
    this.y = this.appearPosition.y;
    this.scheduleUpdate();
  },
  update: function () {
    if (this.y > 0) {
      this.y = this.y + this.vy;
      this.vy += -0.45;
    } else {
      this.gameOver();
    }
  },
  pointGet: function (p) {
    this.score += p;
  },
  getScore: function () {
    return this.score / 2;
  },
  onTouch: function () {
    console.log("touch");
    this.vy = 7.5;
  },
  gameOver: function () {
    global_score = this.score / 2;
    cc.director.runScene(new GameOverScene);
  }
});
