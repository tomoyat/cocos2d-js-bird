var RankingScene = cc.Scene.extend({
  onEnter:function () {
    this._super();
    var layer = new RankingLayer();
    layer.init();
    this.addChild(layer);
  }
});
