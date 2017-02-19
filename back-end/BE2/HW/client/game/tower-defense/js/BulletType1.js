class BulletType1 extends Bullet{
  constructor(game, x, y, key, frame, configs){
    super(game, x, y, key, frame, configs);
    this.configs = configs;
    this.target = null;
    this.name = this.configs.name;
    this.damageAmount = this.configs.damageAmount;

    // this.parent = null;
  }
  setTarget(target){
    this.target = target;
  }
  onCollide(bullet, target){
    // bullet.kill();
    console.log("bl1");
    Citadel.bulletController.kill(bullet);
    Citadel.enemyController.damage(target, bullet.damageAmount);
  }
  reborn() {
    this.alive = this._exists = this.exists = true;
  }
  reset(direct, x, y){
     this.damageAmount = this.configs.damageAmount;
     this.position.x = x;
     this.position.y = y;
     this.body.velocity = direct.setMagnitude(this.configs.speed);
     this.angle = Math.atan2(this.body.velocity.x, -this.body.velocity.y) * (180/Math.PI) + Math.PI*180/2;
  }
  update(){

    if (!(this.target) || !(this.target.alive) ) {
      //console.log(this.target);
      if(this.alive){
          Citadel.bulletController.kill(this);
      }
    } else {
      Citadel.game.physics.arcade.overlap(this, this.target, this.onCollide);
      this.body.velocity = Phaser.Point.subtract(this.target.position,  this.position).setMagnitude(this.configs.speed);
    }
  }
}
