window.onload = function(){
  cc.game.onStart = function(){
    //load resources
    cc.LoaderScene.preload( g_resources, function () {
      /*
      var MyScene = cc.Scene.extend({
        onEnter:function () {
          this._super();
          var size = cc.director.getWinSize();
          var sprite = cc.Sprite.create(res.background);
          sprite.setPosition(size.width / 2, size.height / 2);
          sprite.setScale(1.0);
          this.addChild(sprite, 0);

          var hero = cc.Sprite.create(res.hero_gif);
          hero.setPosition(size.width / 3, size.height / 3);
          hero.setScale(1.2);
          this.addChild(hero, 1);
          //var label = cc.LabelTTF.create("Hello World", "Arial", 40);
          //label.setPosition(size.width / 2, size.height / 2);
          //this.addChild(label, 1);
        }
      });
      */
      cc.director.runScene(new MenuScene());
    }, this);
  };
  cc.game.run("gameCanvas");
};
