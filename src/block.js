var Block = cc.LayerColor.extend({
  ctor: function (_x, _y, width, height, winsize) {
    this._super(cc.color(255,0,0,255), width, height);
    this.x = _x;
    this.y = _y;
    this.width = width;
    return true;
  },
  update: function () {

    this.x -= 2.0;
    if (this.x + this.width < 0) {
      console.log("claen!");
      this.removeFromParent(true);
      return true;
    }
  }
});