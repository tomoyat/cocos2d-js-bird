var GameScene = cc.Scene.extend({
  onEnter:function () {
    this._super();
    var layer = new GameLayer();
    layer.init();
    this.addChild(layer, 0);

    var field = new FieldLayer();
    field.init();
    this.addChild(field, 1);

  }
});
