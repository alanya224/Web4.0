class EnemyCake extends Enemy {
  constructor(game, x, y, key, configs){
    super(game, x, y, key, configs.frame, configs);
    this.nextDestination();
  }

  update() {
    if(this.alive) {
      if(this.from && this.to) {
        var absScaleX = Math.abs(this.scale.x);
        this.scale.setTo(this.from.x <= this.to.x ? -absScaleX : absScaleX, this.scale.y);
        this.body.velocity.setTo(this.to.x - this.from.x, this.to.y - this.from.y).setMagnitude(this.speed);
        if(this.position.distance(this.from) >= new Phaser.Point(this.to.x, this.to.y).distance(this.from)) {
          this.nextDestination();
        }
      }
    }
  }
}
