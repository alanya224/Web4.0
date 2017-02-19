class Bullet extends Phaser.Sprite{
  constructor(game, x, y, key, frame, configs) {
    super(game, x, y, key, frame);
    this.configs = configs;
    game.add.existing(this);
    game.physics.enable(this, Phaser.Physics.ARCADE);
    this.anchor.setTo(0.5, 0.5);
  }
  reset(direct){
    //TODO
  }
  effect(enemy){
    //TODO
  }
}
