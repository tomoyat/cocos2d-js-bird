var Block = cc.LayerColor.extend({
  ctor: function (_x, _y, width, height) {
    this._super(cc.color(255,0,0,255), width, height);
    this.x = _x;
    this.y = _y;
    return true;
  }
});