function BlockMgr(winwidth ,winheight, layer) {
  this._winHeight = winheight;
  this._winWidth = winwidth;
  this._layer = layer;
  this._mgr = [];
}

BlockMgr.prototype = {
  init: function () {
    this.add();
  },
  add: function () {
    var minH = this._winHeight / 7 * 2;
    var maxH = this._winHeight / 7 * 4;

    var bottombar = Math.random() * (maxH - minH) + minH;

    var topbar = bottombar + 130;

    var block = new Block(this._winWidth, 0, 30, bottombar);
    this._mgr.push(block);
    this._layer.addChild(block);

    block = new Block(this._winWidth, topbar, 30, this._winHeight - topbar);
    this._mgr.push(block);
    this._layer.addChild(block);
  },
  update: function (_ship) {
    var shipRect = _ship.getBoundingBox();
    for (var i = 0; i < this._mgr.length;) {
      console.log(this._mgr.length);
      var ret = this._mgr[i].update();
      var blockRect = this._mgr[i].getBoundingBox();
      if (cc.rectIntersectsRect(shipRect, blockRect)) {
        _ship.gameOver();
      }
      if (ret) {
        console.log("del");
        this._mgr.splice(i, 1);
      } else {
        i++;
      }
    }
    if (this._mgr.length < 2) {
      this.add();
    }
  }
};