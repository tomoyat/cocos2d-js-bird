var GameOverLayer = cc.Layer.extend({
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

    var restartButton = new cc.MenuItemLabel(
      new cc.LabelTTF("restart", "Arial", 30),
      this.onPlay,
      this
    );
    var menu = new cc.Menu();
    menu.addChild(restartButton);

    menu.setPosition(centerpos);
    this.addChild(menu);


    var resultScoreLabel = new cc.LabelTTF();
    resultScoreLabel.setFontSize(30);
    resultScoreLabel.setPosition( winsize.width / 2 , winsize.height - 150);
    resultScoreLabel.setString("score: " + global_score);

    this.addChild(resultScoreLabel);


  },

  onPlay : function(){
    cc.log("==onplay clicked");
    cc.director.runScene(new GameScene);
  }
});