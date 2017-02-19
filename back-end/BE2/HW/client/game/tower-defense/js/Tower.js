class Tower extends Phaser.Sprite{
  constructor(game, x, y, key, frame, configs) {
    super(game, x, y, key, frame);
    game.add.existing(this);
    this.resett(configs);


    //console.log(this.events);

    this.events.onInputOver.add((function(){
      if (this.level < this.maxLV){
        Citadel.textUpgrade.alpha = 1;
        Citadel.textUpgrade.position = this.position;
      }
      // if (this.level >= this.maxLV) {
      //   Citadel.textUpgrade.alpha = 0;
      // }
    }).bind(this),Citadel.game);
    this.events.onInputOut.add((function(){
      Citadel.textUpgrade.alpha = 0;
    }).bind(this),Citadel.game);
    this.events.onInputDown.add((function(){
      this.upgrade();
    }).bind(this),Citadel.game);
  }
  upgrade(){
    if (this.level < this.maxLV && Citadel.monneyAmount >= this.upgradePrice) {
      this.level++;
      this.frameName = this.configs.frameUpgrade + this.level + '.png';
    //  console.log(this.frameName);
      //this.textLevel.setText(this.textLevel._text + "/");
      Citadel.monneyAmount -= this.upgradePrice;
      this.radius += this.configs.upgradeRadius;
      this.cooldown -= this.configs.upgradeCooldown;
      this.upgradeDamage += this.configs.upgradeDamage;
    }


  }

  resett(configs){
    this.frameName = configs.frame;
    console.log(this.scale);
    this.configs = configs;
    this.name = configs.name;
    this.cooldown = configs.cooldown;
    this.radius = configs.radius;
    this.price = configs.price;
    this.anchor.setTo(0.5);
    this.inputEnabled = true;
    this.maxLV = configs.maxLV;
    this.level = 0;
    this.upgradeDamage = 0;
    this.upgradePrice = configs.upgradePrice;
    //
    // var style = { font: "15px Arial", fill: "#00ffff", wordWrap: true, wordWrapWidth: Citadel.configs.PLAY_SCREEN_WIDTH, align: "center"};
    // this.textLevel = Citadel.game.add.text(this.x, this.y + 30, '/', style);
  }
}
