class Enemy {
  constructor (x,y,spriteName,configs){
    this.configs = configs;

    this.enemy = Nakama.enemyGroup.create(
      x,
      y,
      'assets',
      spriteName
    );
    this.enemy.health = 10; //
    Nakama.game.physics.enable(this.enemy,Phaser.Physics.ARCADE);

  }
  update(){

  }
}
