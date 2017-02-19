class TowerChoser extends Phaser.Sprite {
  constructor(game, x, y, key, frame, configs, targetConfigs) {
    super(game, x, y, key, frame);
    game.add.existing(this);
    this.init(configs, targetConfigs);
    this.price = targetConfigs.price;    
  }

  init(configs, targetConfigs) {
    this.targetConfigs = targetConfigs;
    this.name = targetConfigs.name;
    this.inputEnabled = true;
    this.hotkey = configs.hotkey;
    this.events.onInputDown.add(this.onClickTowerChoser, Citadel.game);
    this.size = configs.size;
    this.scale.setTo(Citadel.configs.SQUARE.size * this.size / this.width,
            Citadel.configs.SQUARE.size * this.size / this.height);
    this.anchor.setTo(1 / (Math.pow(2, this.size)));
  }
update() {
     if(Citadel.game.input.keyboard.isDown(this.hotkey)) {
       this.onClickTowerChoser(this);
     }
  }
  onClickTowerChoser(target) {
    Citadel.dragSprite.clonedTarget = target;
    Citadel.dragSprite.frame = target.frame;
    Citadel.dragSprite.scale = target.scale;
    Citadel.dragSprite.anchor = target.anchor;
    Citadel.dragSprite.enable = true;
  }
}
