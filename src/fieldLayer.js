var FieldLayer = cc.Layer.extend({
  _ship : null,
  _blockMgr : null,
  _winsize : null,
  _scoreLabel: null,
  ctor : function(){
    this._super();
  },
  init:function(){
    this._super();

    //2. get the screen size of your game canvas
    _winsize = cc.director.getWinSize();

    //3. calculate the center point
    var centerpos = cc.p(_winsize.width / 2, _winsize.height / 2);

    _blockMgr = new BlockMgr(_winsize.width, _winsize.height, this);
    _blockMgr.init();


    //4. create a background image and set it's position at the center of the screen
    _ship = new Ship();

    this.addChild(_ship);

    _scoreLabel = new cc.LabelTTF();
    _scoreLabel.setFontSize(20);
    _scoreLabel.setPosition( _winsize.width - 45, _winsize.height - 30);
    this.addChild(_scoreLabel);

    _scoreLabel.setString("score: " + _ship.getScore());

    cc.eventManager.addListener({
      event: cc.EventListener.TOUCH_ONE_BY_ONE,
      swallowTouches: true,
      onTouchBegan: this.onTouch
    }, this);

    this.scheduleUpdate();
  },
  onTouch: function () {
    _ship.onTouch();
  },
  update: function () {
    if (_ship.y > _winsize.height) {
      _ship.gameOver();
    }
    _scoreLabel.removeFromParent();
    _scoreLabel.setString("score: " + _ship.getScore());
    this.addChild(_scoreLabel);
    _blockMgr.update(_ship);
  }
});
