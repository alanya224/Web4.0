class Bullet {
  constructor (x,y,spriteName,a,b) {
  //  this.configs = configs;

    this.newBullet = Nakama.bulletGroup.create(
      x,
      y,
      'assets',
      spriteName
    );
//    this.newBullet.body.velocity.y = -Nakama.configs.BULLET_SPEED;
    this.newBullet.anchor = new Phaser.Point(0.5,0.5);
    this.newBullet.body.velocity = new Phaser.Point(a,b).setMagnitude(Nakama.configs.BULLET_SPEED);
    Nakama.game.physics.enable(this.newBullet,Phaser.Physics.ARCADE);
//    this.timeSinceLastFire = 0;
  }
  update() {
//    this.timeSinceLastFire += Nakama.game.time.physicsElapsed;
//    if (Nakama.keyboard.isDown(this.configs.fire)&&this.timeSinceLastFire >= this.configs.cooldown) {
//      this.fire();
//      this.timeSinceLastFire = 0;
//    }
//    this.newBullet.body.velocity.y = -2*Nakama.configs.SHIP_SPEED;
  }
}
