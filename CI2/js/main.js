var Nakama = {};
Nakama.configs = {
  SHIP_SPEED: 400, //viet hoa thuong la hang so
  BULLET_SPEED: 1500
}
window.onload = function() {  //onload event, occur when an object has been loaded
  Nakama.game = new Phaser.Game ( //object game va cac thuoc tinh
    640,
    960,
    Phaser.AUTO,
    '',
    {
      preload: preload,
      create: create,
      update: update,
      render: render,
    },
    false,
    false
  );
}
//var starField;
var preload = function(){ //load nhac va anh tu o cung
  Nakama.game.scale.minWidth = 320;
  Nakama.game.scale.minHeight = 480;
  Nakama.game.scale.maxWidth = 640;
  Nakama.game.scale.maxHeight = 960;
  Nakama.game.scale.pageAlignHorizontally = true;
  Nakama.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
  Nakama.game.load.atlasJSONHash('assets', 'Assets/assets.png', 'Assets/assets.json');
  Nakama.game.load.image('background', 'Assets/Map1.png');
  Nakama.game.time.advancedTiming = true;
};
var create = function(){
  Nakama.game.physics.startSystem(Phaser.Physics.ARCADE); //cung cap he thong vat ly
  //Physics là 1 class nhưng physics là 1 object
  Nakama.keyboard = Nakama.game.input.keyboard;

  Nakama.background = Nakama.game.add.tileSprite(0,0,640,960,'background');
  Nakama.bulletGroup = Nakama.game.add.physicsGroup(); //giai quyet van de dan de len tau
  Nakama.playersGroup = Nakama.game.add.physicsGroup();
  Nakama.enemyGroup = Nakama.game.add.physicsGroup();



  Nakama.ShipController = []; // mảng
  Nakama.Enemy = [];
  Nakama.Bullet = [];
  var player1 = new ShipController(200,400,'Spaceship1-Player.png',{
    up: Phaser.Keyboard.UP,
    down: Phaser.Keyboard.DOWN,
    left: Phaser.Keyboard.LEFT,
    right: Phaser.Keyboard.RIGHT,
    fire: Phaser.Keyboard.SPACEBAR,
    cooldown: 0.3 //de giam so lan ban theo ham update

  })
  Nakama.ShipController.push(player1);
  var player2 = new ShipController(400,400,'Spaceship1-Partner.png',{
    up: Phaser.Keyboard.W,
    down: Phaser.Keyboard.S,
    left: Phaser.Keyboard.A,
    right: Phaser.Keyboard.D,
    fire: Phaser.Keyboard.SHIFT,
    cooldown: 0.3
  });
  Nakama.ShipController.push(player2);
//  var bullet1 = new Bullet(200,400,'BulletType1.png',{})
  var enemy1 = new Enemy(320,100,'EnemyType1.png');
  var enemy2 = new Enemy(380,100,'EnemyType1.png')
//  Nakama.MakeEnemy.push(enemy1);
/*  var enemy = Nakama.enemyGroup.create(
    320,
    100,
    'assets',
    'EnemyType1.png'
  );
  enemy.health = 10; //
}*/
}
var update = function(){ // gọi 1lần/60s
  Nakama.background.tilePosition.y+=6;
  for (var i=0;i < Nakama.ShipController.length;i++) {
    Nakama.ShipController[i].update();
  }
//  Nakama.game.physics.enable(Nakama.enemyGroup,Phaser.Physics.ARCADE);

 Nakama.game.physics.arcade.overlap(Nakama.bulletGroup,Nakama.enemyGroup,onBulletHitActor);
}

function onBulletHitActor(bulletSprite,actorSprite) {
  actorSprite.damage(1);
  bulletSprite.kill();
}
var render = function(){};
