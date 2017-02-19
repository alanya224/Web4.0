class TowerType1 extends Tower{
  constructor(game, x, y, key, frame, configs){
    super(game, x, y, key, frame, configs);
    this.target = null;
    this.timeSinceLastFire = 0;
  }
  update(){
    if (!(this.alive)) return;
    this.timeSinceLastFire += Citadel.game.time.physicsElapsed;

    if (!(this.target) || !(this.target.alive) || this.target.alpha < 1 || Phaser.Point.subtract(this.target,  this.position).getMagnitude() > this.radius){
      this.target = null;
      this.target = this.getTarget();
    } else {
      this.fire();
    }
  }
  reborn(){
      this.alive = this._exists = this.exists = true;
  }
  reset( x, y){
     this.position.x = x;
     this.position.y = y;
    //  this.textLevel.alpha = 1;
    //  this.textLevel.position.x = this.position.x;
    //  this.textLevel.position.y = this.position.y + 30;
  }
  getTarget(){
    var target = null;
    var minDistance = 100000;
    var minDisF =( function(enemy){
      if(enemy.alpha > 0.5){
        var distance = Phaser.Point.subtract(enemy.position,  this.position).getMagnitude();
        if ( distance < this.radius && distance < minDistance){
          target = enemy;
          minDistance = distance;
        }
      }
    }).bind(this);
    Citadel.enemyGroup.forEachAlive(minDisF);
    return target;
  }
  fire(){
    if (this.timeSinceLastFire < this.cooldown ) return;
    Citadel.music.fire.play();
    var direct = new Phaser.Point(this.target.x - this.position.x, this.target.y - this.position.y);
    var bullet = Citadel.bulletController.get(0);
    bullet.target = this.target;
    bullet.tower = this;
    bullet.reset(direct, this.position.x, this.position.y);
    bullet.damageAmount += this.upgradeDamage;
    this.angle = bullet.angle + 90;
    this.timeSinceLastFire = 0;

  }

}
