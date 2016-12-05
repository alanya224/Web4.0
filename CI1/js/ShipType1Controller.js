class ShipType1Controller extends ShipController {
  constructor(x,y,isPlayer1,configs) {
    var spriteName = 'Spaceship1-' + (isPlayer1 ? 'Player' : 'Partner') + '.png';

    configs.cooldown = 0.3;
    configs.health = 5;
    configs.hitBoxRadius = 15;
    configs.hitBoxOffset = new Phaser.Point(25,20);
    super(x,y,spriteName,configs);
  }
  fire(){
    new BulletController(this.ship.position,"BulletType1.png",new Phaser.Point(1,-10),{power: 5});
    new BulletController(this.ship.position,"BulletType1.png",new Phaser.Point(-1,-10),{power: 5});
    new BulletController(this.ship.position,"BulletType1.png",new Phaser.Point(2,-10),{power: 5});
    new BulletController(this.ship.position,"BulletType1.png",new Phaser.Point(-2,-10),{power: 5});
    new BulletController(this.ship.position,"BulletType1.png",new Phaser.Point(0,-1),{power: 5});
  }
}
