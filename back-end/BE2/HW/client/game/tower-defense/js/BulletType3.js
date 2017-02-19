class BulletType3 extends Bullet{
  constructor(game, x, y, key, frame, configs){
    super(game, x, y, key, frame, configs);
    this.configs = configs;
    this.target = null;
    this.name = this.configs.name;
    this.explodeRadius = configs.explodeRadius;
    this.damageAmount = this.configs.damageAmount;

    // this.parent = null;
  }
  setTarget(target){
    this.target = target;
  }
  onCollide(bullet, target){
    // bullet.kill();
    Citadel.bulletController.kill(bullet);
    Citadel.enemyGroup.forEachAlive(function(enemy){
      var distance = Phaser.Point.subtract(enemy.position,  bullet.position).getMagnitude();
      if (distance < bullet.explodeRadius){
        Citadel.enemyController.damage(enemy,  bullet.damageAmount);
        Citadel.music.explode.play();
      }

    });

  if (bullet.x != bullet.tower.x && bullet.y != bullet.tower.y){
     var explosion = Citadel.game.add.sprite(0, 0, 'explosion');
     explosion.position.setTo(bullet.x, bullet.y);
     explosion.scale.setTo(2*bullet.explodeRadius/explosion.width);
     explosion.anchor = bullet.anchor;
     explosion.animations.add('explosion');
     explosion.animations.play('explosion', 30, false, true);
   }

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
