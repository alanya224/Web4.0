class TowerController{
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
        for(var i = 0; i < Citadel.configs.tower.length; i++){
          if(Citadel.configs.tower[i].name == index) {
            index = i;
            break;
          }
        }
      }
    var configs = Citadel.configs.tower[index];
    var tower = null;
    if(this.deads[configs.name].length > 0) {
      tower = this.deads[configs.name].splice(0,1)[0];
      tower.resett(configs);
      tower.reborn();
    } else {
      Citadel.towerGroup.add(tower = new Citadel.configs.tower[index].clazz(Citadel.game, 0, 0, 'assets', configs.frame, configs));
      //tower =  Citadel.towerGroup.children.slice(-1)[0];
    }
    return tower;
  }
  kill(tower) {
    tower.kill();
    //tower.textLevel.alpha = 0;
    if (tower.emitter){
      tower.emitter.kill();
    }
    this.deads[tower.name].push(tower);
    // Citadel.enemyController.get(0);
  }
}
