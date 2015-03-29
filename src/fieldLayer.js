var FieldLayer = cc.Layer.extend({
  _ship : null,
  _blockMgr : null,
  _winsize : null,
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
    _blockMgr.update(_ship);
  }
});
