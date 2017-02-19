class MapBuilder {
    constructor(level, configs) {
      this.level = level;
      this.configs = configs.map;
      this.init(configs);
    }

    init(configs) {
      Citadel.game.physics.startSystem(Phaser.Physics.ARCADE);
      Citadel.keyboard = Citadel.game.input.keyboard;
      Citadel.mouse = Citadel.game.input;
      Citadel.enemyController = new EnemyController();
      Citadel.bulletController = new BulletController();
      Citadel.towerController = new TowerController();

      Citadel.I = Citadel.configs.PLAY_SCREEN_WIDTH / Citadel.configs.SQUARE.size;
      Citadel.J = Citadel.configs.PLAY_SCREEN_HEIGHT / Citadel.configs.SQUARE.size;

      Citadel.menubg = Citadel.game.add.sprite(0, 0,'menubg');
      Citadel.menubg.position.setTo(Citadel.configs.PLAY_SCREEN_WIDTH - Citadel.menubg.width/3, 0);
      Citadel.background = Citadel.game.add.sprite(0, 0,'assets', 'map/map1.png');
      Citadel.background.scale.setTo(Citadel.configs.PLAY_SCREEN_WIDTH / Citadel.background.width, Citadel.configs.PLAY_SCREEN_HEIGHT / Citadel.background.height);

      Citadel.bulletGroup = Citadel.game.add.physicsGroup();
      Citadel.enemyGroup = Citadel.game.add.physicsGroup();
      Citadel.squareGroup = Citadel.game.add.physicsGroup();
      Citadel.menuGruop = Citadel.game.add.group();
      Citadel.towerGroup = Citadel.game.add.group();
      Citadel.towerChoserGroup = Citadel.game.add.group();
      Citadel.introduce = Citadel.game.add.sprite(0, 0, 'introduce');
      Citadel.introduce.alpha = 0;
      Citadel.introduce.scale.setTo(Citadel.configs.GAME_WIDTH/Citadel.introduce.width, Citadel.configs.GAME_HEIGHT/Citadel.introduce.height) ;
      var style = { font: "20px Arial", fill: "#ffff00", wordWrap: true, wordWrapWidth: Citadel.configs.PLAY_SCREEN_WIDTH, align: "center"};
      Citadel.textHeath = Citadel.game.add.text(Citadel.configs.PLAY_SCREEN_WIDTH, Citadel.configs.PLAY_SCREEN_HEIGHT-250, "Health\r\n" + Citadel.health, style);
      Citadel.textMoney = Citadel.game.add.text(Citadel.configs.PLAY_SCREEN_WIDTH, Citadel.configs.PLAY_SCREEN_HEIGHT-120, "Money\r\n" + Citadel.monneyAmount, style);
      Citadel.textUpgrade = Citadel.game.add.text(0, 0, "Upgrade", style);
      Citadel.textUpgrade.alpha = 0;

      Citadel.dragSprite = new DragSprite(Citadel.game, 0, 0, 'assets', 'tower/type1/idle/001.png');

      this.addGraphicMatrix();
      this.addTowerChoser();
      this.TIME_TO_NEXT_WAVE = Citadel.configs.TIME_TO_NEXT_WAVE;
      Citadel.play = true;
      Citadel.pause = false;
      Citadel.nextWaveWaiting = false;
      Citadel.lose = false;

      document.addEventListener("nextWave", this.nextWaveHandler.bind(this));
      document.addEventListener("nextLevel", this.nextLevelHandler.bind(this));

      this.event = {
        nextWave : new CustomEvent("nextWave", {detail: "Event call when next level is coming!"}),
        nextLevel : new CustomEvent("nextLevel", {detail: "Event call when next wave is coming!"})
      };
    }

    mapConfigs() {
      return this.level < this.configs.length ? this.configs[this.level] : null;
    }

    waveConfigs() {
      if(this.mapConfigs())
        return this.wave < this.mapConfigs().wave.length ? this.mapConfigs().wave[this.wave] : null;
    }

    reset() {
      //TODO : clearmap
      Citadel.background.frameName = this.mapConfigs().background;
    }

    nextLevelHandler() {
      this.level++;
      if (this.level >= Citadel.configs.map.length) {
        setTimeout(function(){
          Citadel.game.paused = true;
          location.reload();
        }, 1000);
      } else {
        Citadel.monneyAmount = this.mapConfigs().money;
        this.reset();
        this.endWave = false;
        this.timeSinceLastEnemy = 0;
        this.wave = -1;
        document.dispatchEvent(this.event.nextWave);
        var cb = (function(enemy){
          enemy.route = this.mapConfigs().enemyRoute;
        }).bind(this);
        Citadel.enemyGroup.children.forEach(cb);
        Citadel.towerGroup.forEachAlive(function(tower){
          Citadel.towerController.kill(tower);
        });
        this.resetMapFree();
        // Citadel.enemyController.get("type6");

        // console.log(this);
        // this.changeMap(++this.level);
        // this.wave = 0;
        // document.dispatchEvent(this.event["nextWave"]);
      }
    }

    changeMap(level) {
      // this.level = (level > this.configs.length) ? level % this.configs.length : level - 1;
      // this.reset(this.mapConfigs());
    }

    nextWaveHandler(evt, info) {
      this.wave++;
      this.timeSinceLastEnemy = 0;
      this.timeSinceLastWave = 0;
      if(this.waveConfigs()) {
        this.timeToNextEnemy = this.waveConfigs().timeEnemyReborn;
      } else {
        // document.dispatchEvent(this.event.nextLevel);
        this.endWave = true;
      }
    }

    resetMapFree() {

      var style = { font: "12px Arial", fill: "#ff0044", wordWrap: true, wordWrapWidth: Citadel.configs.SQUARE.size, align: "center"};
      var cb = (function(square, index) {
        square.isFree = this.checkMapFree(square.i, square.j);
          // square.isFree = true;
        if(!this.checkMapFree(square.i, square.j)) {
          //  var text = Citadel.game.add.text(square.i * Citadel.configs.SQUARE.size, square.j * Citadel.configs.SQUARE.size, square.i + "|" + square.j, style);
            // var text = Citadel.game.add.text(i * Citadel.configs.SQUARE.size, j * Citadel.configs.SQUARE.size, (i * Citadel.configs.SQUARE.size) , style);
            // var text = Citadel.game.add.text(i * Citadel.configs.SQUARE.size, j * Citadel.configs.SQUARE.size, (j * Citadel.configs.SQUARE.size), style);
        }
      }).bind(this);
        Citadel.squareGroup.children.forEach(cb);
    }

    addGraphicMatrix() {
      var style = { font: "12px Arial", fill: "#ff0044", wordWrap: true, wordWrapWidth: Citadel.configs.SQUARE.size, align: "center"};
      for(var j = 0; j < Citadel.J; j++) {
        for(var i = 0; i < Citadel.I; i++) {
          Citadel.squareGroup.add(new Square(Citadel.game, i, j, Citadel.configs.SQUARE));
          // var text = Citadel.game.add.text(i * Citadel.configs.SQUARE.size, j * Citadel.configs.SQUARE.size, i + "|" + j, style);
          if(!this.checkMapFree(i, j)) {
              // var text = Citadel.game.add.text(i * Citadel.configs.SQUARE.size, j * Citadel.configs.SQUARE.size, i + "|" + j, style);
              // var text = Citadel.game.add.text(i * Citadel.configs.SQUARE.size, j * Citadel.configs.SQUARE.size, (i * Citadel.configs.SQUARE.size) , style);
              // var text = Citadel.game.add.text(i * Citadel.configs.SQUARE.size, j * Citadel.configs.SQUARE.size, (j * Citadel.configs.SQUARE.size), style);
          }
        }
      }
      this.resetMapFree();
    }

    addTowerChoser() {
      var top = Citadel.configs.menu.margin;
      for(var i = 0; i < 3; i++) {
        // var tc = new TowerChoser(Citadel.game, Citadel.configs.PLAY_SCREEN_WIDTH + Citadel.configs.SQUARE.size / 2 + Citadel.configs.menu.margin,
        //    top + Citadel.configs.menu.margin, 'assets', 'tower/type1/idle/001.png', Citadel.configs.towerChoser[i]);
        Citadel.towerChoserGroup.add(new TowerChoser(Citadel.game, Citadel.configs.PLAY_SCREEN_WIDTH + Citadel.configs.SQUARE.size / 2 + Citadel.configs.menu.margin,
           top + Citadel.configs.menu.margin, 'assets', Citadel.configs.towerChoser[i].frame, Citadel.configs.towerChoser[i], Citadel.configs.tower[i]));

          top += Citadel.configs.menu.margin + Citadel.towerChoserGroup.children[Citadel.towerChoserGroup.children.length - 1].height;


      }
      // Citadel.pauseButton = Citadel.game.add.button(Citadel.configs.PLAY_SCREEN_WIDTH, top + Citadel.configs.menu.margin, 'pauseButton', this.actionOnPause, 2,1,0);
      // Citadel.pauseButton.scale.setTo(Citadel.configs.SQUARE.size*2/Citadel.pauseButton.height);
      document.onkeypress = function (e) {
          e = e || window.event;
          if(e.keyCode == 112){
            Citadel.game.paused = !Citadel.game.paused;
            Citadel.introduce.alpha = Citadel.game.paused ? 1 : 0;
          }
      };

      Citadel.mouse.onDown.add(gameClick, Citadel.game);
    }
    actionOnPause(){
      Citadel.game.paused = true;
      Citadel.introduce.alpha = 1;
    }

    checkMapFree(x, y) {

      var occupieds = this.configs[this.level >= 0 ? this.level : 0].occupied;
      for(var i = 0; i < occupieds.length; i++) {
        var occupied = occupieds[i];
        if(occupied.min.x <= x && x <= occupied.max.x && occupied.min.y <= y && y <= occupied.max.y) {
          return false;
        }
      }
      return true;
    }

    update() {
      var timeSinceLastUpdate = Citadel.game.time.physicsElapsed * 1000;
      var configs = this.waveConfigs();
      Citadel.textHeath.setText('Heath \r\n' + Citadel.health);
      Citadel.textMoney.setText("Money \r\n" + Citadel.monneyAmount);
      if(Citadel.play && !Citadel.pause) {
          if(this.endWave) {
            var count = 0;
            Citadel.enemyGroup.forEachAlive(function() {
                count++;
            });
            if(count == 0) {
              document.dispatchEvent(this.event.nextLevel);
            }
          } else if(this.wave > -1 && configs) {
              if(this.timeSinceLastWave > this.TIME_TO_NEXT_WAVE) {
                  if(this.timeSinceLastEnemy > this.timeToNextEnemy) {
                      var i = 0;
                      for( ; i < configs.enemy.length; i++) {
                        if(configs.enemy[i].number > 0) {
                          Citadel.enemyController.get(configs.enemy[i].name);
                          configs.enemy[i].number--;
                          this.timeSinceLastEnemy = 0;
                          break;
                        }
                      }
                      if(i >= configs.enemy.length) {
                        document.dispatchEvent(this.event.nextWave);
                      }
                  } else {
                    this.timeSinceLastEnemy += timeSinceLastUpdate;
                  }
              } else {
                this.timeSinceLastWave += timeSinceLastUpdate;
              }
          }
      } else {

      }
    }
}
