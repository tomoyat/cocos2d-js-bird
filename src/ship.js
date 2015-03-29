var Ship = cc.Sprite.extend({
  appearPosition: cc.p(70, 240),
  vy: 4,
  ctor: function () {
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
  onTouch: function () {
    console.log("touch");
    this.vy = 7.5;
  },
  gameOver: function () {
    cc.director.runScene(new GameOverScene);
  }
});
