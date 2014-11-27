var FieldLayer = cc.Layer.extend({
  _chara : null,
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
    _chara = new cc.Sprite(res.chara);
    _chara.vy = -10;

    _chara.setPosition(centerpos);
    this.addChild(_chara);

    cc.eventManager.addListener({
      event: cc.EventListener.TOUCH_ONE_BY_ONE,
      swallowTouches: true,
      onTouchBegan: this.onTouch
    }, this);

    this.scheduleUpdate();
  },
  update: function () {
    if (_chara.y > 0) {
      _chara.y = _chara.y + _chara.vy;
      _chara.vy += -0.05;
    }
  },
  onTouch: function () {
    _chara.vy = 3;
  }
});