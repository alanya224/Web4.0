class BulletController {
  constructor (position, spriteName, direction, configs) {
    this.configs = configs;
    this.direction = direction;
    this.sprite = Nakama.bulletGroup.create(
      position.x,
      position.y,
      'assets',
      spriteName
    );
//    this.sprite.anchor = configs.anchor;
    this.sprite.anchor = new Phaser.Point(0.5,0.5);
//    this.sprite.turnRate = configs.turnRate;
    this.sprite.power = configs.power;
//    this.sprite.ENEMY_ALIVE = configs.ENEMY_ALIVE;
    this.sprite.checkWorldBounds = true;

    this.sprite.outOfBoundsKill = true;
//    this.sprite.body.velocity
//      var type1 =  direction.setMagnitude(Nakama.configs.BULLET_SPEED);
      this.sprite.angle = Math.atan2(direction.y,direction.x);
//    this.sprite.body.velocity = this.direction;
//    this.sprite.events.onKilled.add(this.explode,this);
  }
  update(){};
/*  explode() {
    var index = Nakama.bulletList.indexOf(this);
    if (index > -1){
      Nakama.bulletList.splice(index,1);
    }
  } */
  type1velocity(){
    this.sprite.body.velocity =  this.direction.setMagnitude(Nakama.configs.BULLET_SPEED);
  }
}
