class BulletType1Controller extends BulletController {
  constructor (position,direction,configs) {
    var spriteName = 'BulletType1.png';

  //  BulletVelocity = direction.setMagnitude(Nakama.configs.BULLET_SPEED);
    configs.power = 5;
    configs.speed = 300;
    configs.anchor = new Phaser.Point(0.5,0.5);
    super(position,spriteName,direction,configs);

  }
}
