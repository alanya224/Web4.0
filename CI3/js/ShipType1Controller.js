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
    console.log(7);
    var bullet1 = new BulletType1Controller(this.ship.position,new Phaser.Point(1,-10),{});bullet1.type1velocity();
    var bullet2 = new BulletType1Controller(this.ship.position,new Phaser.Point(-1,-10),{});bullet2.type1velocity();
    var bullet3 = new BulletType1Controller(this.ship.position,new Phaser.Point(2,-10),{});bullet3.type1velocity();
    var bullet4 = new BulletType1Controller(this.ship.position,new Phaser.Point(-2,-10),{});bullet4.type1velocity();
    var bullet5 = new BulletType1Controller(this.ship.position,new Phaser.Point(0,-1),{});bullet5.type1velocity();
  }
}
