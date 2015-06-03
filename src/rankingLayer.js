var RankingLayer = cc.Layer.extend({
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

    var returnButton = new cc.MenuItemLabel(
      new cc.LabelTTF("return", "Arial", 30),
      this.onReturn,
      this
    );
    
    var menu = new cc.Menu();
    menu.addChild(returnButton);

    menu.setPosition(winsize.width / 2, winsize.height / 6);
    this.addChild(menu);


    var rankingTitleLabel = new cc.LabelTTF();
    rankingTitleLabel.setFontSize(30);
    rankingTitleLabel.setPosition( winsize.width / 2 , winsize.height - 50);
    rankingTitleLabel.setString("Ranking");
    
    this.addChild(rankingTitleLabel);
    
    for(var j = 1; j <= 5; j++){
      var rankLabel = new cc.LabelTTF;
      rankLabel.setFontSize(30);
      rankLabel.setPosition(winsize.width / 2, winsize.height- 70 - 50 * j);
      rankLabel.setString(j + ": playerName" + " 500‰ñ");
      this.addChild(rankLabel);
    }

  },

  onReturn : function(){
    cc.log("==return clicked");
    cc.director.runScene(new GameOverScene);
  }
});