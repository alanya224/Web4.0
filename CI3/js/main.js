var Nakama = {};
Nakama.configs = {
  SHIP_SPEED: 400, //viet hoa thuong la hang so
  BULLET_SPEED: 100,
  ENEMY_SPEED: 100,
  TURN_RATE: 5,
  PLAYER_TYPE: {
    PLAYER_1: true,
    PLAYER_2: false
  },
  ENEMY_ALIVE: false
}
window.onload = function() {  //onload event, occur when an object has been loaded
  Nakama.configs.SHIP_TYPE = {
      SHIP_TYPE_1:ShipType1Controller,
      SHIP_TYPE_2:ShipType2Controller,
      SHIP_TYPE_3:ShipType3Controller
  }
  Nakama.configs.BULLET_TYPE = {
      SHIP_TYPE_1:BulletType1Controller,
      SHIP_TYPE_2:BulletType2Controller,
  //    SHIP_TYPE_3:BulletType3Controller
  }
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
  Nakama.EnemyController = [];
  Nakama.Bullet = [];

  var player1Constructor = getPlayerShipChoice("Player1");
  var player2Constructor = getPlayerShipChoice("Player2");

  var player1BulletType = getPlayerBulletChoice("Player1");
  var player2BulletType = getPlayerBulletChoice("Player2");
  console.log(player1BulletType);console.log(player2BulletType);
  var player1 = new player1Constructor(200,400,Nakama.configs.PLAYER_TYPE.PLAYER_1,{
    up: Phaser.Keyboard.UP,
    down: Phaser.Keyboard.DOWN,
    left: Phaser.Keyboard.LEFT,
    right: Phaser.Keyboard.RIGHT,
    fire: Phaser.Keyboard.SPACEBAR,
    bullettype: player1BulletType
//    cooldown: 0.3 //de giam so lan ban theo ham update

  })
  Nakama.ShipController.push(player1);
  var player2 = new player2Constructor(400,400,Nakama.configs.PLAYER_TYPE.PLAYER_2,{
    up: Phaser.Keyboard.W,
    down: Phaser.Keyboard.S,
    left: Phaser.Keyboard.A,
    right: Phaser.Keyboard.D,
    fire: Phaser.Keyboard.SHIFT,
    bullettype: player2BulletType
//    cooldown: 0.3
  });
  Nakama.ShipController.push(player2);
  var player3 = new ShipType3Controller(600,400,Nakama.configs.PLAYER_TYPE.PLAYER_2,{
    up: Phaser.Keyboard.I,
    down: Phaser.Keyboard.K,
    left: Phaser.Keyboard.J,
    right: Phaser.Keyboard.L,
    fire: Phaser.Keyboard.BACKSPACE,
//    cooldown: 0.3
  });
  Nakama.ShipController.push(player3);

  var enemy1 = new EnemyController(0,0,'EnemyType2.png',{health: 200});Nakama.EnemyController.push(enemy1);
/*  var enemy2 = new EnemyController(100,0,'EnemyType2.png',{health: 200});Nakama.EnemyController.push(enemy2);
  var enemy3 = new EnemyController(0,50,'EnemyType2.png',{health: 200});Nakama.EnemyController.push(enemy3);
  var enemy4 = new EnemyController(100,50,'EnemyType2.png',{health: 200});Nakama.EnemyController.push(enemy4); */
//  console.log(Nakama.EnemyController[0].enemy.position.x);
}

var update = function(){ // gọi 1lần/60s
//  console.log(Nakama.EnemyController[0]);
  Nakama.background.tilePosition.y+=6;
  for (var i=0;i < Nakama.ShipController.length;i++) {
    Nakama.ShipController[i].update();
  }
  for (var i=0;i < Nakama.EnemyController.length;i++) {
    Nakama.EnemyController[i].update();
  }
//  Nakama.Bullet[0].update();
//console.log(Nakama.Bullet[0]);
  //    this.sprite.angle =  Nakama.EnemyController[0].angle - this.sprite.angle;
  Nakama.game.physics.arcade.overlap(Nakama.bulletGroup,Nakama.enemyGroup,onBulletHitActor);
}
function getPlayerShipChoice(playerName) { //Chon ship type
  var playerContructor = prompt(playerName + "Please choose ship type");
  playerChoice = parseInt(playerContructor);
  switch(playerChoice) {
    case 2: var playerContructor = Nakama.configs.SHIP_TYPE.SHIP_TYPE_2;break;
    case 3: var playerContructor = Nakama.configs.SHIP_TYPE.SHIP_TYPE_3;break;
    case 1:
    default:
      var playerContructor = Nakama.configs.SHIP_TYPE.SHIP_TYPE_1;break;
  }
  return playerContructor;
}
function getPlayerBulletChoice(playerName) { //Chon bullet type
  var playerBullet = prompt(playerName + "Please choose bullet type");
  playerChoice = parseInt(playerBullet);
  switch(playerChoice) {
    case 1: playerChoice = 1;break;
    case 2: playerChoice = 2;break;
  }
  return playerChoice;
}

function onBulletHitActor(bulletSprite,actorSprite) {
  actorSprite.damage(bulletSprite.power);
  bulletSprite.kill();

  Nakama.configs.ENEMY_ALIVE = false;Nakama.Bullet.pop();
//  var explodeEnemy = new Enemy(Nakama.Enemy[0].position.x,Nakama.Enemy[0].position.y,'Explode.png');
}
var render = function(){
  Nakama.playersGroup.forEachAlive(function(sprite){
    Nakama.game.debug.body(sprite);
  });
  Nakama.bulletGroup.forEachAlive(function(sprite){
    Nakama.game.debug.body(sprite);
  });
  Nakama.enemyGroup.forEachAlive(function(sprite){
    Nakama.game.debug.body(sprite);
  });
}
