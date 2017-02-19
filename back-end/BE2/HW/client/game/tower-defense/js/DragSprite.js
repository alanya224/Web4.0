class DragSprite extends Phaser.Sprite{
  constructor(game, x, y, key, frame) {
    super(game, x, y, key, frame);
    game.add.existing(this);

    Citadel.game.physics.enable(this, Phaser.Physics.ARCADE);
    this.enable = false;
    this.anchor.setTo(0.5, 0.5);
  }

  update() {
    if(this.enable) {
      this.alpha = 0.8;
      this.x = Citadel.game.input.x;
      this.y = Citadel.game.input.y;
      onDragOver(this.x, this.y);
    } else {
      this.alpha = 0;
    }
  }

}
