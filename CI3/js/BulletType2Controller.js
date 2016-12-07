class BulletType2Controller extends BulletController {
  constructor (position,direction,configs) {
    var spriteName = 'BulletType2.png';

//       this.configs = configs;
    configs.power = 5;
//    configs.turnRate = 5;
//    this.configs.ENEMY_ALIVE = false;
    super(position,spriteName,direction,configs);
  }
  chase() {
//    console.log(1);
    var targetAngle = Math.atan2(Nakama.EnemyController[0].enemy.position.y - this.sprite.position.y, Nakama.EnemyController[0].enemy.position.x - this.sprite.position.x);
//     this.sprite.position.x, this.sprite.position.y,
//     Nakama.EnemyController[0].enemy.position.x, Nakama.EnemyController[0].enemy.position.y

    if (this.sprite.angle !== targetAngle) {

        var delta = targetAngle - this.sprite.angle;

        // Keep it in range from -180 to 180 to make the most efficient turns.
        if (delta > Math.PI) delta -= Math.PI * 2;
        if (delta < -Math.PI) delta += Math.PI * 2;

        if (delta > 0) {
            // Turn clockwise
            this.angle += Nakama.configs.TURN_RATE;
        } else {
            // Turn counter-clockwise
            this.angle -= Nakama.configs.TURN_RATE;
        }

        // Just set angle to target angle if they are close
        if (Math.abs(delta) < Nakama.configs.TURN_RATE*(Math.PI)/180) {
            this.sprite.angle = targetAngle;
        }
    }

    // Calculate velocity vector based on this.angle and this.SPEED
    this.sprite.body.velocity.x = Math.cos(this.sprite.angle) * Nakama.configs.BULLET_SPEED;
    this.sprite.body.velocity.y = Math.sin(this.sprite.angle) * Nakama.configs.BULLET_SPEED;
    console.log(this.sprite.body.velocity.x,this.sprite.body.velocity.y);
  //  var targetAngle = this.game.math.angleBetween(this.x, this.y,Nakama.EnemyController[0].enemy.position.x, Nakama.EnemyController[0].enemy.position.y);
 }
}
