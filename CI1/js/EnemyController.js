class EnemyController {
  constructor (x,y,spriteName,configs){
//    this.configs = configs;

    this.enemy = Nakama.enemyGroup.create(
      x,
      y,
      'assets',
      spriteName
    );
    this.enemy.health = configs.health; //
    this.enemy.anchor = new Phaser.Point(0.5,0.5);
    this.enemy.moveInTime = 0;
    this.enemy.readyTime = 1;
    this.enemy.movingRight = true;
//    Nakama.game.physics.enable(this.enemy,Phaser.Physics.ARCADE);

  }
  update(){
    this.enemy.moveInTime += Nakama.game.time.physicsElapsed;
    if (this.enemy.moveInTime <= this.enemy.readyTime) {
      this.enemy.body.velocity = new Phaser.Point(2,1).setMagnitude(Nakama.configs.ENEMY_SPEED);
//      console.log(1);
    }
    else {
      if (this.enemy.movingRight)
        this.enemy.body.velocity = new Phaser.Point(1,0).setMagnitude(Nakama.configs.ENEMY_SPEED);
      else this.enemy.body.velocity = new Phaser.Point(-1,0).setMagnitude(Nakama.configs.ENEMY_SPEED);
//      this.enemy.moveInTime = 0;
      if (this.enemy.position.x >= Nakama.game.scale.maxWidth)
        this.enemy.movingRight = false;
      else if (this.enemy.position.x <= 0)
        this.enemy.movingRight = true;
//      console.log(this.enemy.position.x);
    }
  }
}
