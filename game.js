var Block=cc.LayerColor.extend({ctor:function(e,i,t,n,c){return this._super(cc.color(255,0,0,255),t,n),this.x=e,this.y=i,this.width=t,this.winsize=c,!0},update:function(){this.x-=1,this.x+this.width<0&&(this.x=this.winsize.width+this.width)}}),FieldLayer=cc.Layer.extend({_ship:null,_block:null,ctor:function(){this._super()},init:function(){this._super();{var e=cc.director.getWinSize();cc.p(e.width/2,e.height/2)}_block=new Block(e.width,0,30,200,e),this.addChild(_block),_ship=new Ship,this.addChild(_ship),cc.eventManager.addListener({event:cc.EventListener.TOUCH_ONE_BY_ONE,swallowTouches:!0,onTouchBegan:this.onTouch},this),this.scheduleUpdate()},onTouch:function(){_ship.onTouch()},update:function(){_block.update();var e=_ship.getBoundingBox(),i=_block.getBoundingBox();cc.rectIntersectsRect(e,i)&&_ship.gameOver()}}),GameLayer=cc.Layer.extend({ctor:function(){this._super()},init:function(){this._super();var e=cc.director.getWinSize(),i=cc.p(e.width/2,e.height/2),t=new cc.Sprite(res.background);t.setPosition(i),this.addChild(t)}}),GameOverLayer=cc.Layer.extend({ctor:function(){this._super()},init:function(){this._super();var e=cc.director.getWinSize(),i=cc.p(e.width/2,e.height/2),t=new cc.Sprite(res.background);t.setPosition(i),this.addChild(t);var n=new cc.MenuItemLabel(new cc.LabelTTF("restart","Arial",30),this.onPlay,this),c=new cc.Menu;c.addChild(n),c.setPosition(i),this.addChild(c)},onPlay:function(){cc.log("==onplay clicked"),cc.director.runScene(new GameScene)}}),GameOverScene=cc.Scene.extend({onEnter:function(){this._super();var e=new GameOverLayer;e.init(),this.addChild(e)}}),GameScene=cc.Scene.extend({onEnter:function(){this._super();var e=new GameLayer;e.init(),this.addChild(e,0);var i=new FieldLayer;i.init(),this.addChild(i,1)}});window.onload=function(){cc.game.onStart=function(){cc.LoaderScene.preload(g_resources,function(){cc.director.runScene(new MenuScene)},this)},cc.game.run("gameCanvas")};var MenuLayer=cc.Layer.extend({ctor:function(){this._super()},init:function(){this._super();var e=cc.director.getWinSize(),i=cc.p(e.width/2,e.height/2),t=new cc.Sprite(res.background);t.setPosition(i),this.addChild(t);var n=new cc.MenuItemLabel(new cc.LabelTTF("start","Arial",30),this.onPlay,this),c=new cc.Menu;c.addChild(n),c.setPosition(i),this.addChild(c)},onPlay:function(){cc.log("==onplay clicked"),cc.director.runScene(new GameScene)}}),MenuScene=cc.Scene.extend({onEnter:function(){this._super();var e=new MenuLayer;e.init(),this.addChild(e)}}),res={background:"res/background.png",chara:"res/chara.png"},g_resources=[res.background,res.chara],Ship=cc.Sprite.extend({appearPosition:cc.p(160,240),vy:4,ctor:function(){this._super(res.chara),this.x=this.appearPosition.x,this.y=this.appearPosition.y,this.scheduleUpdate()},update:function(){this.y>0?(this.y=this.y+this.vy,this.vy+=-.25):this.gameOver()},onTouch:function(){console.log("touch"),this.vy=6},gameOver:function(){cc.director.runScene(new GameOverScene)}});