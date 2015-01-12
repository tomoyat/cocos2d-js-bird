var GameOverScene = cc.Scene.extend({
  onEnter:function () {
    this._super();
    var layer = new GameOverLayer();
    layer.init();
    this.addChild(layer);
  }
});
