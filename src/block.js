var Block = cc.LayerColor.extend({
  ctor: function (_x, _y, width, height, winsize) {
    this._super(cc.color(255,0,0,255), width, height);
    this.x = _x;
    this.y = _y;
    this.width = width;
    this.winsize = winsize;
    return true;
  },
  update: function () {
    this.x -= 1;
    if (this.x + this.width < 0) {
      this.x = this.winsize.width + this.width;
    }
  }
});