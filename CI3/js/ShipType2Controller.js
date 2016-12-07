class ShipType2Controller extends ShipController {
  constructor(x,y,isPlayer1,configs) {
    var spriteName = 'Spaceship2-' + (isPlayer1 ? 'Player' : 'Partner') + '.png';

    configs.cooldown = 1.5;
    configs.health = 10;
    configs.hitBoxRadius = 15;
    configs.hitBoxOffset = new Phaser.Point(25,20);
    super(x,y,spriteName,configs);
  }
  fire(){
    var HB1 = new BulletType2Controller(this.ship.position,new Phaser.Point(0,-1),{});
//    var HB2 = new BulletType2Controller(this.ship.position,new Phaser.Point(-3,-7),{});

    Nakama.Bullet.push(HB1);
//    console.log(Nakama.Bullet[0]);
/*    new BulletController(this.ship.position,"BulletType2.png",new Phaser.Point(2,-10),{power: 10});
    new BulletController(this.ship.position,"BulletType2.png",new Phaser.Point(-2,-10),{power: 10});
    new BulletController(this.ship.position,"BulletType2.png",new Phaser.Point(0,-1),{power: 10}); */
  }
//  update() {
//  this.direction  = new Phaser.Point(-this.ship.position.x + Nakama.EnemyController[0].enemy.position.x,-this.ship.position.y + Nakama.EnemyController[0].enemy.position.y).setMagnitude(Nakama.configs.BULLET_SPEED);
//  console.log(this.direction);
//   }
}
