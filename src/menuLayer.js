var MenuLayer = cc.Layer.extend({
  ctor : function(){
    this._super();
  },
  init:function(){
    this._super();

    //2. get the screen size of your game canvas
    var winsize = cc.director.getWinSize();

    //3. calculate the center point
    var centerpos = cc.p(winsize.width / 2, winsize.height / 2);

    //4. create a background image and set it's position at the center of the screen
    var spritebg = new cc.Sprite(res.background);
    spritebg.setPosition(centerpos);
    this.addChild(spritebg);

    var menuPlayButton = new cc.MenuItemLabel(
      new cc.LabelTTF("start", "Arial", 30),
      this.onPlay,
      this
    );
    var menu = new cc.Menu();
    menu.addChild(menuPlayButton);

    menu.setPosition(centerpos);
    this.addChild(menu);
  },

  onPlay : function(){
    cc.log("==onplay clicked");
    cc.director.runScene(new GameScene);
  }
});