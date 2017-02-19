class TowerType2 extends Tower{
  constructor(game, x, y, key, frame, configs){
    super(game, x, y, key, frame, configs);
    this.target = null;
    this.radiusSprite = null;//TODO
    this.emitter = null;
    this.lastTime = 0;
  }
  init1(){
      var LIFECYCLE = 2000;
      this.emitter = Citadel.game.add.emitter(0,0);
      this.emitter.width = this.radius;
       // Particle behaviour ranges to create a smoke drift-like effect
       this.emitter.minParticleScale = 0.1;
       this.emitter.maxParticleScale = 0.9;
       this.emitter.minRotation = -5;
       this.emitter.maxRotation = 5;
       this.emitter.setYSpeed(-2, -3);
       this.emitter.setXSpeed(10, 11);
       this.emitter.gravity = -10;
       // Particle alpha will ease from 0 to 0.2 and back again, for fade in/out
       this.emitter.setAlpha(0, 0.05, LIFECYCLE, Phaser.Easing.Quadratic.InOut, true);
       this.emitter.particleAnchor.setTo(0.5, 0.5);
       // Start the emitterr
       this.emitter.makeParticles('cloud');
       //this.emitter.scale.setTo(this.radius/this.emitter.width, this.radius/this.emitter.width);
       this.emitter.start(false, LIFECYCLE, 100, 0);


  }
  update(){
    if (!(this.alive)) return;
    Citadel.enemyGroup.forEachAlive((function(enemy){
      var distance = Phaser.Point.subtract(enemy.position,  this.position).getMagnitude();
      if (distance <= this.radius){
        enemy.speed = (1 - this.slow - this.upgradeSlow)*enemy.configs.speed;
      } else {
        enemy.speed = enemy.configs.speed;
      }
    }).bind(this));
  }
  reborn(){
      this.alive = this._exists = this.exists = true;
      this.emitter.alive = this.emitter._exists = this.emitter.exists = true;
  }
  reset( x, y){
     this.position.x = x;
     this.position.y = y;
     this.emitter.position.x = x;
     this.emitter.position.y = y;
  }

  upgrade(){
    if (this.level < this.maxLV && Citadel.monneyAmount >= this.upgradePrice) {
      this.level++;
      this.frameName = this.configs.frameUpgrade + this.level + '.png';
      Citadel.monneyAmount -= this.upgradePrice;
      this.radius += this.configs.upgradeRadius;
      this.upgradeSlow += this.configs.upgradeSlow;
      this.emitter.width = this.radius;
    }
  }
  resett(configs){
    this.frameName = configs.frame;
    this.configs = configs;
    this.name = configs.name;
    this.cooldown = configs.cooldown;
    this.radius = configs.radius;
    this.price = configs.price;
    this.anchor.setTo(0.5);
    this.inputEnabled = true;
    this.maxLV = configs.maxLV;
    this.level = 0;
    this.slow = configs.slow;
    this.upgradeSlow = 0;
    this.upgradePrice = configs.upgradePrice;
    this.init1();
    //
    // var style = { font: "15px Arial", fill: "#00ffff", wordWrap: true, wordWrapWidth: Citadel.configs.PLAY_SCREEN_WIDTH, align: "center"};
    // this.textLevel = Citadel.game.add.text(this.x, this.y + 30, '/', style);
  }
  fire(){

  }
}
