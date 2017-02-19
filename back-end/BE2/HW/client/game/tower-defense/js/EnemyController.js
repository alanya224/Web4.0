class EnemyController {
  constructor() {
    this.deads = {
      type1: [],
      type2: [],
      type3: [],
      type4: [],
      type5: [],
      type6: [],
      type7: [],
      type8: [],
      type9: [],
      type10: [],
      type11: [],
      type12: [],
      type13: [],
      type14: [],
      type15: [],
      type16: [],
      type17: [],
      type18: [],
      type19: [],
      type20: [],
      type21: [],
      type22: [],
      type23: [],
      type24: [],
      type25: []
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
    var configs = Citadel.configs.enemy[index];
    if(this.deads[configs.name].length > 0) {
      return this.resetEnemy(this.deads[configs.name].shift(), -100, -100, configs);
    } else {
      Citadel.enemyGroup.add(new Citadel.configs.enemy[index].clazz(Citadel.game, -100, -100, 'assets', configs));
      return Citadel.enemyGroup.children.slice(-1)[0];
    }
  }

  resetEnemy(enemy, x, y, configs) {
    enemy.speed = configs.speed;
    enemy.from = enemy.to = undefined;
    enemy.nextDestination();
    enemy.reborn();
    enemy.health = configs.health;
    return enemy;
  }
  damage(target, damageAmount){
    target.damage(damageAmount);
    if (!(target.alive)) {
      this.kill(target);
      Citadel.monneyAmount += target.money;
    }
  }
  kill(enemy) {
    enemy.kill();
    // console.log(this.deads[enemy.name].length + " | " + Citadel.enemyGroup.children.length);
    this.deads[enemy.name].push(enemy);
    // Citadel.enemyController.get(0);
  }

}
