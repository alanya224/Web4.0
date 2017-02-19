class Enemy extends Phaser.Sprite {
  constructor(game, x, y, key, frame, configs) {
    super(game, x, y, key, frame);
    this.configs = configs;
    game.add.existing(this);
    game.physics.enable(this, Phaser.Physics.ARCADE);
    this.name = configs.name;
    this.health = configs.health;
    this.init(configs);
    this.money = configs.money;


    if(this.invisible){
      this.timeSinceLastInvi = 0;
      this.timeDurationInviLeft = 2;
    }
  }

  init(configs) {
    this.addAnimation(configs.animations);
    this.anchor.setTo(0.5);
    this.route = Citadel.map.mapConfigs().enemyRoute;
    this.speed = configs.speed;
    this.fly = configs.fly;
    this.invisible = configs.invisible;
    this.invisibleCooldown = configs.invisibleCooldown;
    this.invisibleDuration = configs.invisibleDuration;
    // console.log(this.width);
    this.scale.setTo(configs.size.width / this.width, configs.size.height / this.height);
  }

  nextDestination() {
    if(this.fly) {
      if(!this.from && !this.to){
        this.from = this.route[0];
        this.to = this.route[this.route.length - 1];
        this.position.setTo(this.from.x, this.from.y);
      } else {
        this.finish();
      }
    } else {
      if(this.from && this.to){
        this.from = this.to;
        if(this.route.indexOf(this.to) < this.route.length - 1) {
          this.to = this.route[this.route.indexOf(this.to) + 1];
        } else {
          this.to = this.from = undefined;
          this.finish();
        }
      } else {
        this.from = this.route[0];
        this.to = this.route[1];
      }

      if(this.from) {
        this.x = this.from.x;
        this.y = this.from.y;
      }
    }
  }

  finish() {
    Citadel.enemyController.kill(this);
    Citadel.damage(1);
  }

  reborn() {
    this.alive = this._exists = this.exists = true;
  }

  addAnimation(configs) {
    for(var key in configs) {
      this.animations.add(key, Phaser.Animation.generateFrameNames('enemy/' + this.name + "/" + key + "/", 0, configs[key].frameCount, '.png', 3),
       10, true, false);
    }
    this.animations.play("idle", configs["idle"]);
    this.animationsConfigs = configs;
  }
}
