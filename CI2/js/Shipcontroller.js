class ShipController {
  constructor (x,y,spriteName,configs){ //constructor khai bao dau tien khi co class moi
    this.configs = configs;

    this.ship = Nakama.playersGroup.create(
      x,
      y,
      'assets',
      spriteName
    );
//    console.log(this.ship);
        // this.ship = Nakama.game.add.sprite(
        //   x,
        //   y,
        //   'assets',
        //   spriteName
        // );
    this.ship.anchor = new Phaser.Point(0.5,0.5); //0.5 0.5 la tam cua hinh anh, anchor nhu 1 cai ghim o chinh giua
    Nakama.game.physics.enable(this.ship,Phaser.Physics.ARCADE); //cho he thong physics
   this.timeSinceLastFire = 0;
  }
  update (){
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
    if (Nakama.keyboard.isDown(this.configs.fire)&&this.timeSinceLastFire >= this.configs.cooldown) {
      this.fire();
      this.timeSinceLastFire = 0;
    }
  }
  fire(){
  var newBullet1 =  new Bullet(this.ship.position.x,this.ship.position.y,'BulletType1.png',1,-10);
  var newBullet2 =  new Bullet(this.ship.position.x,this.ship.position.y,'BulletType1.png',-1,-10);
  var newBullet3 =  new Bullet(this.ship.position.x,this.ship.position.y,'BulletType1.png',2,-10);
  var newBullet4 =  new Bullet(this.ship.position.x,this.ship.position.y,'BulletType1.png',-2,-10);
  var newBullet5 =  new Bullet(this.ship.position.x,this.ship.position.y,'BulletType1.png',0,-1);
  /*  var newBullet2 =  Nakama.bulletGroup.create(
        this.ship.position.x,
        this.ship.position.y,
        'assets',
        'BulletType1.png'
      );
    var newBullet3 =  Nakama.bulletGroup.create(
          this.ship.position.x,
          this.ship.position.y,
          'assets',
          'BulletType1.png'
        );
    var newBullet4 =  Nakama.bulletGroup.create(
            this.ship.position.x,
            this.ship.position.y,
            'assets',
            'BulletType1.png'
          );
    var newBullet5 =  Nakama.bulletGroup.create(
              this.ship.position.x,
              this.ship.position.y,
              'assets',
              'BulletType1.png'
            );
*/
//    Nakama.game.physics.enable(newBullet,Phaser.Physics.ARCADE);
/*    Nakama.game.physics.enable(newBullet2, Phaser.Physics.ARCADE);
    Nakama.game.physics.enable(newBullet3, Phaser.Physics.ARCADE);
    Nakama.game.physics.enable(newBullet4, Phaser.Physics.ARCADE);
    Nakama.game.physics.enable(newBullet5, Phaser.Physics.ARCADE);
*/
//    newBullet.anchor = new Phaser.Point(0.5,0.5);
    /*
    newBullet2.body.velocity = new Phaser.Point(1,-10).setMagnitude(Nakama.configs.BULLET_SPEED);
    newBullet3.body.velocity = new Phaser.Point(1,10).setMagnitude(Nakama.configs.BULLET_SPEED);
    newBullet4.body.velocity = new Phaser.Point(1,-5).setMagnitude(Nakama.configs.BULLET_SPEED);
    newBullet5.body.velocity = new Phaser.Point(1,5).setMagnitude(Nakama.configs.BULLET_SPEED); */



  //  newBullet.body.velocity.y = -2*Nakama.configs.SHIP_SPEED;
     /*
    newBullet2.body.velocity.y = -2*Nakama.configs.SHIP_SPEED;
    newBullet3.body.velocity.y = -2*Nakama.configs.SHIP_SPEED;
    newBullet4.body.velocity.y = -2*Nakama.configs.SHIP_SPEED;
    newBullet5.body.velocity.y = -2*Nakama.configs.SHIP_SPEED; */
  }
}
