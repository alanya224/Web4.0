class Square extends Phaser.Graphics {
  constructor(game, i, j, configs) {
    super(game, i * configs.size, j * configs.size);
    game.add.existing(this);
    this.size = configs.size;
    this.i = i;
    this.j = j;
    this.alphaDefault = configs.alphaDefault || 0;
    this.alphaOccupied = configs.alphaOccupied || 0.2;
    this.alphaFree = configs.alphaOccupied || 1;
    this.init(configs);
  }

  init(configs) {
    this.beginFill(configs.fillColor);
    this.lineStyle(configs.lineWidth, configs.lineColor, configs.lineAlpha);
    var margin = parseInt(configs.lineWidth / 2);
    this.moveTo(margin, margin);
    this.lineTo(this.size - margin - 1, margin);
    this.lineTo(this.size - margin - 1, this.size - margin - 1);
    this.lineTo(margin, this.size - margin - 1);
    this.lineTo(margin, margin);
    this.endFill();

    this.alpha = this.alphaDefault;

  }

  update() {
    if(this.dragOver && Citadel.dragSprite.enable) {
      this.alpha = canDropTower(this, Citadel.dragSprite.clonedTarget, true) ? this.alphaFree : this.alphaOccupied;
    } else {
      this.alpha = this.alphaDefault;
    }
  }

  nextRight() {
    return this.i < Citadel.I - 1 ? Citadel.squareGroup.children[this.j * Citadel.I + this.i + 1] : null;
  }

  nextDown() {
    return this.j < Citadel.J - 1 ? Citadel.squareGroup.children[(this.j + 1) * Citadel.I + this.i] : null;
  }
}
