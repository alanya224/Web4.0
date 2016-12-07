class ShipController {
  constructor (x,y,spriteName,configs){ //constructor khai bao dau tien khi co class moi
    this.configs = configs;


    this.ship = Nakama.playersGroup.create(
      x,
      y,
      'assets',
      spriteName
    );
    this.ship.health = configs.health;

    this.ship.anchor = new Phaser.Point(0.5,0.5); //0.5 0.5 la tam cua hinh anh, anchor nhu 1 cai ghim o chinh giua
    this.ship.body.collideWorldBounđs = true;
    this.ship.body.setCircle(this.configs.hitBoxRadius,this.configs.hitBoxOffset.x,this.configs.hitBoxOffset.y);
//    Nakama.game.physics.enable(this.ship,Phaser.Physics.ARCADE); //cho he thong physics
   this.timeSinceLastFire = 0;
   this.alreadyFire = false;
  }
  update (){
//    var count=1;
   console.log(this.configs.bullettype);
    this.timeSinceLastFire += Nakama.game.time.physicsElapsed; //tu update truoc den gio la bao nhieu thoi gian r
    if (Nakama.keyboard.isDown(this.configs.up)) {
      this.ship.body.velocity.y = -Nakama.configs.SHIP_SPEED;
    }
    else if (Nakama.keyboard.isDown(this.configs.down)) {
      this.ship.body.velocity.y = Nakama.configs.SHIP_SPEED;
    }
    else {
      this.ship.body.velocity.y = 0;
    }
    if (Nakama.keyboard.isDown(this.configs.left)) {
      this.ship.body.velocity.x = -Nakama.configs.SHIP_SPEED;
    }
    else if (Nakama.keyboard.isDown(this.configs.right)) {
      this.ship.body.velocity.x = Nakama.configs.SHIP_SPEED;
    }
    else this.ship.body.velocity.x = 0;
    if (this.configs.bullettype === 2) {

    if (Nakama.keyboard.isDown(this.configs.fire)&&(!Nakama.configs.ENEMY_ALIVE)/*this.timeSinceLastFire >= this.configs.cooldown*/) {
      this.alreadyFire = true;
      this.fire();
      //count++;
      this.timeSinceLastFire = 0;
      Nakama.configs.ENEMY_ALIVE = true;
    }
//
    if (Nakama.configs.ENEMY_ALIVE) Nakama.Bullet[0].chase(); //console.log(count);
    console.log(Nakama.configs.ENEMY_ALIVE);
    }
    else {
      if (Nakama.keyboard.isDown(this.configs.fire)&&this.timeSinceLastFire >= this.configs.cooldown) {
        this.fire();
        this.timeSinceLastFire = 0;
      }
    }

  }
/*  fire(){
  new BulletController(this.ship.position,"BulletType1.png",new Phaser.Point(1,-10),{power: 5});
  new BulletController(this.ship.position,"BulletType1.png",new Phaser.Point(-1,-10),{power: 5});
  new BulletController(this.ship.position,"BulletType1.png",new Phaser.Point(2,-10),{power: 5});
  new BulletController(this.ship.position,"BulletType1.png",new Phaser.Point(-2,-10),{power: 5});
  new BulletController(this.ship.position,"BulletType1.png",new Phaser.Point(0,-1),{power: 5});
} */
}
