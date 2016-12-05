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
    new BulletController(this.ship.position,"BulletType2.png",new Phaser.Point(1,-10),{power: 10});
    new BulletController(this.ship.position,"BulletType2.png",new Phaser.Point(-1,-10),{power: 10});
/*    new BulletController(this.ship.position,"BulletType2.png",new Phaser.Point(2,-10),{power: 10});
    new BulletController(this.ship.position,"BulletType2.png",new Phaser.Point(-2,-10),{power: 10});
    new BulletController(this.ship.position,"BulletType2.png",new Phaser.Point(0,-1),{power: 10}); */
  }
}
