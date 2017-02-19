class EnemyDragon1 extends Enemy {
  constructor(game, x, y, key, configs){
    super(game, x, y, key, configs.frame, configs);
    this.nextDestination();
  }

  update() {
    if(this.alive) {
      if(this.from && this.to && this.from != this.to) {
        this.body.velocity.setTo(this.to.x - this.from.x, this.to.y - this.from.y).setMagnitude(this.speed);
        if(this.position.distance(this.from) >= new Phaser.Point(this.to.x, this.to.y).distance(this.from)) {
          this.nextDestination();
        }
        this.setAnimations();
      } else {
        this.animations.play("idle");
      }
    }
  }

  setAnimations() {
    if((Math.abs(this.body.velocity.x) + 0.1) / (Math.abs(this.body.velocity.y) + 0.1) > 1) {
      this.animations.play("right");
      this.scale.setTo(this.body.velocity.x >= 0 ? Math.abs(this.scale.x) : -Math.abs(this.scale.x), this.scale.y);
    } else {
      this.animations.play(this.body.velocity.y < 0 ? "back" : "front")
    }
  }
}
