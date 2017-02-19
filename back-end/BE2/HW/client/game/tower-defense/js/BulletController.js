class BulletController{
  constructor() {
    this.deads = {
      type1: [],
      type2: [],
      type3: [],
      type4: [],
      type5: []
    };
  }
  get(index) {
    if(typeof index == 'string') {
      for(var i = 0; i < Citadel.configs.enemy.length; i++){
        if(Citadel.configs.enemy[i].name == index) {
          index = i;
          break;
        }
      }
    }
    // console.log(this.deads.type1.length);
    var configs = Citadel.configs.bullet[index];
    var bullet = null;
    if(this.deads[configs.name].length > 0) {
      // console.log(">>>" + bulle);
      bullet = this.deads[configs.name].splice(0,1)[0];
      bullet.reborn();
    } else {
      // console.log("ok");
      Citadel.bulletGroup.add(bullet = new Citadel.configs.bullet[index].clazz(Citadel.game, 0, 0, 'bullet', null, configs));
      //bullet =  Citadel.bulletGroup.children.slice(-1)[0];
    }
    return bullet;
  }
  kill(bullet) {
    bullet.kill();
        // console.log(this.deads[enemy.name].length + " | " + Citadel.enemyGroup.children.length);
    this.deads[bullet.name].push(bullet);
    // Citadel.enemyController.get(0);
  }
}
