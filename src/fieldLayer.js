var FieldLayer = cc.Layer.extend({
  _ship : null,
  _block : null,
  ctor : function(){
    this._super();
  },
  init:function(){
    this._super();

    //2. get the screen size of your game canvas
    var winsize = cc.director.getWinSize();

    //3. calculate the center point
    var centerpos = cc.p(winsize.width / 2, winsize.height / 2);

    _block = new Block(winsize.width, 0, 30, 200);
    this.addChild(_block);

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
    _block.x -= 1;
    var shipRect = _ship.getBoundingBox();
    var blockRect = _block.getBoundingBox();

    if (cc.rectIntersectsRect(shipRect, blockRect)) {
      _ship.gameOver();
    }
  }
});