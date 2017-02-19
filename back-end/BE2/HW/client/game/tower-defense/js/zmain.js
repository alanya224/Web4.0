var Citadel = {};

Citadel.configs = {
  GAME_WIDTH: 1200,
  GAME_HEIGHT: 600,
  PLAY_SCREEN_WIDTH: 1080,
  PLAY_SCREEN_HEIGHT: 600,
  TIME_TO_NEXT_WAVE: 1000,
  HEALTH: 10,

  map: [
    {
      background: 'map/map1.png',
      money: 20,
      occupied: [
        {min: {x: 0, y: 0}, max: {x: 7, y: 3}},
        {min: {x: 0, y: 4}, max: {x: 2, y: 8}},
        {min: {x: 8, y: 2}, max: {x: 11, y: 3}},
        {min: {x: 8, y: 4}, max: {x: 9, y: 6}},
        {min: {x: 10, y: 5}, max: {x: 10, y: 6}},
        {min: {x: 10, y: 5}, max: {x: 15, y: 6}},
        {min: {x: 14, y: 2}, max: {x: 15, y: 6}},
        {min: {x: 16, y: 2}, max: {x: 21, y: 3}},
        {min: {x: 20, y: 4}, max: {x: 21, y: 10}},
        {min: {x: 22, y: 7}, max: {x: 25, y: 9}},
        {min: {x: 24, y: 6}, max: {x: 26, y: 6}},
        {min: {x: 14, y: 9}, max: {x: 19, y: 10}},
        {min: {x: 0, y: 12}, max: {x: 1, y: 15}},
        {min: {x: 29, y: 7}, max: {x: 30, y: 7}},
        {min: {x: 29, y: 8}, max: {x: 29, y: 8}},
        {min: {x: 23, y: 11}, max: {x: 24, y: 11}},
        {min: {x: 28, y: 11}, max: {x: 30, y: 11}},
        {min: {x: 14, y: 11}, max: {x: 15, y: 17}},
        {min: {x: 14, y: 18}, max: {x: 18, y: 19}},
        {min: {x: 17, y: 16}, max: {x: 21, y: 17}},
        {min: {x: 20, y: 13}, max: {x: 21, y: 15}},
        {min: {x: 22, y: 13}, max: {x: 27, y: 14}},
        {min: {x: 26, y: 15}, max: {x: 27, y: 17}},
        {min: {x: 28, y: 16}, max: {x: 35, y: 17}},
        {min: {x: 27, y: 0}, max: {x: 28, y: 1}},
        {min: {x: 32, y: 1}, max: {x: 35, y: 6}},
        {min: {x: 15, y: 16}, max: {x: 17, y: 17}}

      ],
      enemyRoute: [
        {x: 0, y: 75},
        {x: 255, y: 75},
        {x: 255, y: 165},
        {x: 435, y: 165},
        {x: 435, y: 75},
        {x: 615, y: 75},
        {x: 615, y: 285},
        {x: 435, y: 285},
        {x: 435, y: 495},
        {x: 615, y: 495},
        {x: 615, y: 405},
        {x: 795, y: 405},
        {x: 795, y: 495},
        {x: 1060, y: 495}
      ],
      wave: [
        {
          enemy: [
            {name: "type1", number: 5},
            {name: "type2", number: 1}
            // {name: "type3", number: 1},
            // {name: "type4", number: 1},
            // {name: "type5", number: 1},
            // {name: "type6", number: 1},
            // {name: "type7", number: 1},
            // {name: "type8", number: 1},
            // {name: "type9", number: 1},
            // {name: "type10", number: 1},
            // {name: "type11", number: 1},
            // {name: "type12", number: 1},
            // {name: "type13", number: 1},
            // {name: "type14", number: 1},
            // {name: "type15", number: 1},
            // {name: "type16", number: 1},
            // {name: "type17", number: 1},
            // {name: "type18", number: 1},
            // {name: "type19", number: 1},
            // {name: "type20", number: 1},
            // {name: "type21", number: 1},
            // {name: "type22", number: 1},
            // {name: "type23", number: 1},
            // {name: "type24", number: 1},
            // {name: "type25", number: 1}
          ],
          timeEnemyReborn: 1000
        }
        ,
        {
          enemy: [
            {
              name: "type1",
              number: 10
            },
            {
              name: "type2",
              number: 5
            }
          ],
          timeEnemyReborn: 1000
        }
        ,
        {
          enemy: [
            {
              name: "type1",
              number: 8
            },
            {
              name: "type2",
              number: 5
            },
            {
              name: "type3",
              number: 2
            }
          ],
          timeEnemyReborn: 1000
        },
        {
          enemy: [
            {
              name: "type2",
              number: 1
            },
            {
              name: "type3",
              number: 1
            },
            {
              name: "type2",
              number: 1
            },
            {
              name: "type3",
              number: 1
            },
            {
              name: "type2",
              number: 1
            },
            {
              name: "type3",
              number: 1
            },
            {
              name: "type2",
              number: 2
            },
            {
              name: "type3",
              number: 2
            },
            {
              name: "type2",
              number: 2
            },
            {
              name: "type3",
              number: 5
            }
          ],
          timeEnemyReborn: 500
        },
        {
          enemy: [
            {
              name: "type16",
              number: 1
            }
          ],
          timeEnemyReborn: 2000
        },{
          enemy: [
            {
              name: "type16",
              number: 1
            }
          ],
          timeEnemyReborn: 1000
        }
      ]
    },
    {
      background: 'map/map2.png',
      money: 40,
      occupied: [
        {min: {x: 4, y: 0}, max: {x: 5, y: 3}},
          {min: {x: 6, y: 3}, max: {x: 13, y: 3}},
          {min: {x: 11, y: 0}, max: {x: 13, y: 1}},
          {min: {x: 15, y: 0}, max: {x: 17, y: 2}},
          {min: {x: 28, y: 1}, max: {x: 30, y: 2}},
          {min: {x: 8, y: 4}, max: {x: 9, y: 6}},
          {min: {x: 12, y: 4}, max: {x: 13, y: 10}},
          {min: {x: 4, y: 5}, max: {x: 7, y: 6}},
          {min: {x: 0, y: 6}, max: {x: 3, y: 7}},
          {min: {x: 4, y: 9}, max: {x: 11, y: 10}},
          {min: {x: 18, y: 0}, max: {x: 23, y: 0}},
          {min: {x: 18, y: 1}, max: {x: 19, y: 1}},
          {min: {x: 15, y: 3}, max: {x: 16, y: 11}},
          {min: {x: 17, y: 3}, max: {x: 30, y: 3}},
          {min: {x: 30, y: 4}, max: {x: 30, y: 10}},
          {min: {x: 26, y: 4}, max: {x: 28, y: 6}},
          {min: {x: 26, y: 7}, max: {x: 26, y: 7}},
          {min: {x: 1, y: 13}, max: {x: 2, y: 14}},
          {min: {x: 4, y: 11}, max: {x: 5, y: 18}},
          {min: {x: 6, y: 19}, max: {x: 8, y: 19}},
          {min: {x: 6, y: 17}, max: {x: 13, y: 18}},
          {min: {x: 12, y: 12}, max: {x: 13, y: 16}},
          {min: {x: 13, y: 11}, max: {x: 15, y: 12}},
          {min: {x: 21, y: 6}, max: {x: 24, y: 8}},
          {min: {x: 20, y: 7}, max: {x: 20, y: 7}},
          {min: {x: 20, y: 9}, max: {x: 21, y: 9}},
          {min: {x: 23, y: 9}, max: {x: 29, y: 12}},
          {min: {x: 31, y: 17}, max: {x: 35, y: 18}},
          {min: {x: 22, y: 14}, max: {x: 23, y: 16}},
          {min: {x: 20, y: 15}, max: {x: 21, y: 17}},
          {min: {x: 17, y: 11}, max: {x: 19, y: 11}},
          {min: {x: 29, y: 11}, max: {x: 30, y: 18}}
      ],
      enemyRoute: [
        {x: 155, y: 0},
        {x: 155, y: 100},
        {x: 400, y: 100},
        {x: 400, y: 300},
        {x: 160, y: 300},
        {x: 160, y: 540},
        {x: 400, y: 540},
        {x: 400, y: 365},
        {x: 475, y: 365},
        {x: 475, y: 105},
        {x: 915, y: 105},
        {x: 915, y: 290},
        {x: 705, y: 290},
        {x: 705, y: 350},
        {x: 915, y: 350},
        {x: 915, y: 540},
        {x: 1080, y: 540}
      ],
      wave: [
        {
          enemy: [
            {
              name: "type3",
              number: 5
            },
            {
              name: "type22",
              number: 1
            },
            {
              name: "type3",
              number: 1
            },
            {
              name: "type22",
              number: 1
            },
            {
              name: "type3",
              number: 1
            },
            {
              name: "type22",
              number: 1
            },
            {
              name: "type3",
              number: 1
            },
            {
              name: "type22",
              number: 1
            }
          ],
          timeEnemyReborn: 1000
        },
        {
          enemy: [
            {
              name: "type3",
              number: 10
            },
            {
              name: "type4",
              number: 5
            },
            {
              name: "type17",
              number: 2
            }
          ],
          timeEnemyReborn: 1000
        }
        ,
        {
          enemy: [
            {
              name: "type5",
              number: 10
            },
            {
              name: "type7",
              number: 5
            },
            {
              name: "type5",
              number: 10
            }
          ],
          timeEnemyReborn: 1000
        },
        {
          enemy: [
            {
              name: "type8",
              number: 10
            },
            {
              name: "type9",
              number: 5
            },
            {
              name: "type7",
              number: 10
            },
            {
              name: "type10",
              number: 1
            },
            {
              name: "type17",
              number: 1
            },
            {
              name: "type10",
              number: 1
            },
            {
              name: "type17",
              number: 1
            },
            {
              name: "type10",
              number: 1
            },
            {
              name: "type17",
              number: 1
            },
            {
              name: "type10",
              number: 1
            },
            {
              name: "type17",
              number: 1
            },
            {
              name: "type10",
              number: 1
            },
            {
              name: "type17",
              number: 1
            }
          ],
          timeEnemyReborn: 1000
        }
      ]
    },
	{
      background: 'map/map5.png',
      money: 60,
      occupied: [
        {min: {x: 0, y: 0}, max: {x: 3, y: 1}},
          {min: {x: 0, y: 2}, max: {x: 1, y: 2}},
          {min: {x: 0, y: 9}, max: {x: 1, y: 10}},
          {min: {x: 0, y: 15}, max: {x: 13, y: 19}},
          {min: {x: 3, y: 2}, max: {x: 27, y: 3}},
          {min: {x: 3, y: 4}, max: {x: 4, y: 10}},
          {min: {x: 25, y: 0}, max: {x: 28, y: 0}},
          {min: {x: 27, y: 1}, max: {x: 28, y: 1}},
          {min: {x: 0, y: 12}, max: {x: 17, y: 13}},
          {min: {x: 11, y: 10}, max: {x: 12, y: 11}},
          {min: {x: 5, y: 9}, max: {x: 9, y: 10}},
          {min: {x: 5, y: 14}, max: {x: 6, y: 14}},
          {min: {x: 11, y: 14}, max: {x: 13, y: 14}},
          {min: {x: 8, y: 6}, max: {x: 9, y: 8}},
          {min: {x: 10, y: 6}, max: {x: 14, y: 7}},
          {min: {x: 12, y: 8}, max: {x: 14, y: 10}},
          {min: {x: 15, y: 9}, max: {x: 18, y: 10}},
          {min: {x: 16, y: 6}, max: {x: 18, y: 8}},
          {min: {x: 19, y: 6}, max: {x: 22, y: 7}},
          {min: {x: 25, y: 5}, max: {x: 33, y: 6}},
          {min: {x: 31, y: 0}, max: {x: 33, y: 4}},
          {min: {x: 21, y: 8}, max: {x: 22, y: 13}},
          {min: {x: 23, y: 12}, max: {x: 28, y: 13}},
          {min: {x: 34, y: 7}, max: {x: 35, y: 8}},
          {min: {x: 15, y: 14}, max: {x: 17, y: 16}},
          {min: {x: 14, y: 17}, max: {x: 15, y: 18}},
          {min: {x: 26, y: 8}, max: {x: 28, y: 11}},
          {min: {x: 18, y: 15}, max: {x: 33, y: 16}},
          {min: {x: 29, y: 8}, max: {x: 33, y: 9}},
          {min: {x: 31, y: 10}, max: {x: 33, y: 14}},
          {min: {x: 26, y: 19}, max: {x: 27, y: 19}},
          {min: {x: 25, y: 4}, max: {x: 27, y: 4}}
      ],
      enemyRoute: [
        {x: 0, y: 400},
        {x: 500, y: 400},
        {x: 500, y: 480},
        {x: 975, y: 480},
        {x: 975, y: 280},
        {x: 815, y: 280},
        {x: 815, y: 395},
        {x: 660, y: 395},
        {x: 660, y: 210},
        {x: 525, y: 210},
        {x: 525, y: 300},
        {x: 390, y: 300},
        {x: 390, y: 210},
        {x: 270, y: 210},
        {x: 270, y: 300},
        {x: 120, y: 300},
        {x: 120, y: 105},
        {x: 800, y: 105},
        {x: 800, y: 180},
        {x: 970, y: 180},
        {x: 970, y: 0}
      ],
      wave: [
        {
          enemy: [
            {
              name: "type6",
              number: 1
            },
            {
              name: "type25",
              number: 1
            },
            {
              name: "type11",
              number: 1
            },
            {
              name: "type22",
              number: 1
            }
          ],
          timeEnemyReborn: 1000
        },
        {
          enemy: [
            {
              name: "type6",
              number: 0
            },
            {
              name: "type25",
              number: 0
            }
            ,
            {
              name: "type22",
              number: 1
            }
          ],
          timeEnemyReborn: 1000
        },
        {
          enemy: [
            {
              name: "type25",
              number: 15
            },
            {
              name: "type22",
              number: 7
            },
            {
              name: "type13",
              number: 1
            }
            ,
            {
              name: "type21",
              number: 15
            },
            {
              name: "type23",
              number: 7
            },
          ],
          timeEnemyReborn: 1000
        },

      ]
    }
  ],
  menu: {
    margin: 10
  },
  SQUARE: {
    size: 30,
    fillColor: "0x64E328",
    lineColor: "0xffd900",
    lineWidth: 6,
    lineAlpha: 1
  },
  towerChoser: [
    {
      size: 1,
      frame: 'tower/type1/idle/001.png',
      hotkey : Phaser.Keyboard.Q
    },
    {
      size: 2,
      frame: "tower/type2/fire/5.png",
      hotkey : Phaser.Keyboard.W
    },
    {
      size: 3,
      frame: "tower/type2/fire/7.png",
      hotkey : Phaser.Keyboard.E
    }
  ],
  enemy: [
    {
      name: "type1",
      frame: "enemy/type1/idle/001.png",
      clazz: EnemyCake,
      speed: 100,
      health: 40,
      money: 1,
      size: {
        width: 50,
        height: 50
      },
      animations: {
        idle: {
            frameCount: 7,
            fps: 10
        },
        left: {
            frameCount: 14,
            fps: 10
        }
      }
    },
    {
      money: 2,
      name: "type2",
      frame: "enemy/type2/idle/001.png",
      clazz: EnemyTiger1,
      fly: true,
      speed: 110,
      health: 40,
      size: {
        width: 50,
        height: 50
      },
      animations: {
        idle: {
            frameCount: 7,
            fps: 10
        },
        front: {
            frameCount: 4,
            fps: 10
        },
        back: {
            frameCount: 4,
            fps: 10
        },
        left: {
            frameCount: 4,
            fps: 10
        },
        right: {
            frameCount: 4,
            fps: 10
        }
      }
    },
    {
      money: 3,
      name: "type3",
      frame: "enemy/type3/idle/001.png",
      clazz: EnemyDragon1,
      speed: 120,
      health: 40,
      size: {
        width: 50,
        height: 50
      },
      animations: {
        idle: {
            frameCount: 3,
            fps: 10
        },
        front: {
            frameCount: 6,
            fps: 10
        },
        back: {
            frameCount: 6,
            fps: 10
        },
        right: {
            frameCount: 5,
            fps: 10
        }
      }
    },
    {
      money: 4,
      name: "type4",
      frame: "enemy/type4/idle/001.png",
      clazz: EnemyDragon2,
      speed: 100,
      health: 40,
      size: {
        width: 50,
        height: 50
      },
      animations: {
        idle: {
            frameCount: 4,
            fps: 10
        },
        front: {
            frameCount: 6,
            fps: 10
        },
        back: {
            frameCount: 7,
            fps: 10
        },
        right: {
            frameCount: 5,
            fps: 10
        }
      }
    },
    {
      money: 5,
      name: "type5",
      frame: "enemy/type5/idle/001.png",
      clazz: EnemyWarrior,
      speed: 100,
      health: 40,
      size: {
        width: 50,
        height: 50
      },
      animations: {
        idle: {
            frameCount: 4,
            fps: 10
        },
        front: {
            frameCount: 3,
            fps: 10
        },
        back: {
            frameCount: 3,
            fps: 10
        },
        left: {
            frameCount: 3,
            fps: 10
        }
      }
    },
    {
      money: 6,
      name: "type6",
      frame: "enemy/type6/idle/001.png",
      "clazz": EnemyType6,
      health: 200,
      speed: 100,
      size: {
        width: 50,
        height: 50
      },
      animations: {
        idle: {
            frameCount: 5,
            fps: 10
        },
        dead: {
            frameCount: 6,
            fps: 10
        },
        front: {
            frameCount: 3,
            fps: 10
        },
        back: {
            frameCount: 3,
            fps: 10
        },
        left: {
            frameCount: 3,
            fps: 10
        }
      }
    },
    {
      money: 7,
      name: "type7",
      frame: "enemy/type7/idle/001.png",
      "clazz": EnemyType6,
      health: 200,
      speed: 100,
      size: {
        width: 50,
        height: 50
      },
      animations: {
        idle: {
            frameCount: 5,
            fps: 10
        },
        dead: {
            frameCount: 6,
            fps: 10
        },
        front: {
            frameCount: 3,
            fps: 10
        },
        back: {
            frameCount: 3,
            fps: 10
        },
        left: {
            frameCount: 3,
            fps: 10
        }
      }
    },
    {
      money: 8,
      name: "type8",
      frame: "enemy/type8/idle/001.png",
      "clazz": EnemyType6,
      health: 200,
      speed: 100,
      size: {
        width: 50,
        height: 50
      },
      animations: {
        idle: {
            frameCount: 5,
            fps: 10
        },
        dead: {
            frameCount: 6,
            fps: 10
        },
        front: {
            frameCount: 3,
            fps: 10
        },
        back: {
            frameCount: 3,
            fps: 10
        },
        left: {
            frameCount: 3,
            fps: 10
        }
      }
    },
    {
      money: 9,
      name: "type9",
      frame: "enemy/type9/idle/001.png",
      "clazz": EnemyType6,
      health: 200,
      speed: 100,
      size: {
        width: 50,
        height: 50
      },
      animations: {
        idle: {
            frameCount: 5,
            fps: 10
        },
        dead: {
            frameCount: 6,
            fps: 10
        },
        front: {
            frameCount: 3,
            fps: 10
        },
        back: {
            frameCount: 3,
            fps: 10
        },
        left: {
            frameCount: 3,
            fps: 10
        }
      }
    },
    {
      money: 10,
      name: "type10",
      frame: "enemy/type10/idle/001.png",
      "clazz": EnemyType6,
      health: 200,
      speed: 100,
      size: {
        width: 50,
        height: 50
      },
      animations: {
        idle: {
            frameCount: 5,
            fps: 10
        },
        dead: {
            frameCount: 6,
            fps: 10
        },
        front: {
            frameCount: 3,
            fps: 10
        },
        back: {
            frameCount: 3,
            fps: 10
        },
        left: {
            frameCount: 3,
            fps: 10
        }
      }
    },
    {
      money: 11,
      name: "type11",
      frame: "enemy/type11/idle/001.png",
      "clazz": EnemyType6,
      health: 200,
      speed: 100,
      fly: true,
      size: {
        width: 50,
        height: 50
      },
      animations: {
        idle: {
            frameCount: 5,
            fps: 10
        },
        dead: {
            frameCount: 6,
            fps: 10
        },
        front: {
            frameCount: 3,
            fps: 10
        },
        back: {
            frameCount: 3,
            fps: 10
        },
        left: {
            frameCount: 3,
            fps: 10
        }
      }
    },
    {
      money: 12,
      name: "type12",
      frame: "enemy/type12/idle/001.png",
      "clazz": EnemyType6,
      health: 200,
      speed: 100,
      fly: true,
      size: {
        width: 50,
        height: 50
      },
      animations: {
        idle: {
            frameCount: 5,
            fps: 10
        },
        dead: {
            frameCount: 6,
            fps: 10
        },
        front: {
            frameCount: 3,
            fps: 10
        },
        back: {
            frameCount: 3,
            fps: 10
        },
        left: {
            frameCount: 3,
            fps: 10
        }
      }
    },
    {
      money: 13,
      name: "type13",
      frame: "enemy/type13/idle/001.png",
      "clazz": EnemyType6,
      health: 6000,
      speed: 50,
      // fly: true,
      size: {
        width: 200,
        height: 200
      },
      animations: {
        idle: {
            frameCount: 5,
            fps: 10
        },
        dead: {
            frameCount: 6,
            fps: 10
        },
        front: {
            frameCount: 3,
            fps: 10
        },
        back: {
            frameCount: 3,
            fps: 10
        },
        left: {
            frameCount: 3,
            fps: 10
        }
      }
    },
    {
      money: 14,
      name: "type14",
      frame: "enemy/type14/idle/001.png",
      "clazz": EnemyType6,
      health: 200,
      speed: 100,
      fly: true,
      size: {
        width: 50,
        height: 50
      },
      animations: {
        idle: {
            frameCount: 5,
            fps: 10
        },
        dead: {
            frameCount: 6,
            fps: 10
        },
        front: {
            frameCount: 3,
            fps: 10
        },
        back: {
            frameCount: 3,
            fps: 10
        },
        left: {
            frameCount: 3,
            fps: 10
        }
      }
    },
    {
      money: 15,
      name: "type15",
      frame: "enemy/type15/idle/001.png",
      "clazz": EnemyType6,
      health: 200,
      speed: 100,
      size: {
        width: 50,
        height: 50
      },
      animations: {
        idle: {
            frameCount: 5,
            fps: 10
        },
        dead: {
            frameCount: 6,
            fps: 10
        },
        front: {
            frameCount: 3,
            fps: 10
        },
        back: {
            frameCount: 3,
            fps: 10
        },
        left: {
            frameCount: 3,
            fps: 10
        }
      }
    },
    {
      money: 16,
      name: "type16",
      frame: "enemy/type16/idle/001.png",
      "clazz": EnemyType6,
      health: 200,
      speed: 100,
      size: {
        width: 50,
        height: 50
      },
      animations: {
        idle: {
            frameCount: 5,
            fps: 10
        },
        dead: {
            frameCount: 6,
            fps: 10
        },
        front: {
            frameCount: 3,
            fps: 10
        },
        back: {
            frameCount: 3,
            fps: 10
        },
        left: {
            frameCount: 3,
            fps: 10
        }
      }
    },
    {
      money: 17,
      name: "type17",
      frame: "enemy/type17/idle/001.png",
      "clazz": EnemyType6,
      health: 200,
      speed: 100,
      fly: true,
      size: {
        width: 50,
        height: 50
      },
      animations: {
        idle: {
            frameCount: 5,
            fps: 10
        },
        dead: {
            frameCount: 6,
            fps: 10
        },
        front: {
            frameCount: 3,
            fps: 10
        },
        back: {
            frameCount: 3,
            fps: 10
        },
        left: {
            frameCount: 3,
            fps: 10
        }
      }
    },
    {
      money: 18,
      name: "type18",
      frame: "enemy/type18/idle/001.png",
      "clazz": EnemyType6,
      health: 200,
      speed: 100,
      size: {
        width: 50,
        height: 50
      },
      animations: {
        idle: {
            frameCount: 5,
            fps: 10
        },
        dead: {
            frameCount: 6,
            fps: 10
        },
        front: {
            frameCount: 3,
            fps: 10
        },
        back: {
            frameCount: 3,
            fps: 10
        },
        left: {
            frameCount: 3,
            fps: 10
        }
      }
    },
    {
      money: 19,
      name: "type19",
      frame: "enemy/type19/idle/001.png",
      "clazz": EnemyType6,
      health: 200,
      speed: 100,
      size: {
        width: 50,
        height: 50
      },
      animations: {
        idle: {
            frameCount: 5,
            fps: 10
        },
        dead: {
            frameCount: 6,
            fps: 10
        },
        front: {
            frameCount: 3,
            fps: 10
        },
        back: {
            frameCount: 3,
            fps: 10
        },
        left: {
            frameCount: 3,
            fps: 10
        }
      }
    },
    {
      money: 20,
      name: "type20",
      frame: "enemy/type20/idle/001.png",
      "clazz": EnemyType6,
      health: 200,
      speed: 100,
      size: {
        width: 50,
        height: 50
      },
      animations: {
        idle: {
            frameCount: 5,
            fps: 10
        },
        dead: {
            frameCount: 6,
            fps: 10
        },
        front: {
            frameCount: 3,
            fps: 10
        },
        back: {
            frameCount: 3,
            fps: 10
        },
        left: {
            frameCount: 3,
            fps: 10
        }
      }
    },
    {
      money: 21,
      name: "type21",
      frame: "enemy/type21/idle/001.png",
      "clazz": EnemyType6,
      health: 200,
      speed: 100,
      size: {
        width: 50,
        height: 50
      },
      animations: {
        idle: {
            frameCount: 5,
            fps: 10
        },
        dead: {
            frameCount: 6,
            fps: 10
        },
        front: {
            frameCount: 3,
            fps: 10
        },
        back: {
            frameCount: 3,
            fps: 10
        },
        left: {
            frameCount: 3,
            fps: 10
        }
      }
    },
    {
      money: 22,
      name: "type22",
      frame: "enemy/type22/idle/001.png",
      "clazz": EnemyType6,
      health: 200,
      speed: 100,
      //fly: true,
      invisible: true,
      invisibleCooldown: 2,
      invisibleDuration: 2,
      size: {
        width: 50,
        height: 50
      },
      animations: {
        idle: {
            frameCount: 5,
            fps: 10
        },
        dead: {
            frameCount: 6,
            fps: 10
        },
        front: {
            frameCount: 3,
            fps: 10
        },
        back: {
            frameCount: 3,
            fps: 10
        },
        left: {
            frameCount: 3,
            fps: 10
        }
      }
    },
    {
      money: 23,
      name: "type23",
      frame: "enemy/type23/idle/001.png",
      "clazz": EnemyType6,
      health: 200,
      speed: 100,
      fly: true,
      size: {
        width: 50,
        height: 50
      },
      animations: {
        idle: {
            frameCount: 5,
            fps: 10
        },
        dead: {
            frameCount: 6,
            fps: 10
        },
        front: {
            frameCount: 3,
            fps: 10
        },
        back: {
            frameCount: 3,
            fps: 10
        },
        left: {
            frameCount: 3,
            fps: 10
        }
      }
    },
    {
      money: 24,
      name: "type24",
      frame: "enemy/type24/idle/001.png",
      "clazz": EnemyType6,
      health: 200,
      speed: 100,
      size: {
        width: 50,
        height: 50
      },
      fly: true,
      animations: {
        idle: {
            frameCount: 5,
            fps: 10
        },
        dead: {
            frameCount: 6,
            fps: 10
        },
        front: {
            frameCount: 3,
            fps: 10
        },
        back: {
            frameCount: 3,
            fps: 10
        },
        left: {
            frameCount: 3,
            fps: 10
        }
      }
    },
    {
      money: 25,
      name: "type25",
      frame: "enemy/type25/idle/001.png",
      "clazz": EnemyType6,
      health: 200,
      speed: 100,
      size: {
        width: 50,
        height: 50
      },
      animations: {
        idle: {
            frameCount: 5,
            fps: 10
        },
        dead: {
            frameCount: 6,
            fps: 10
        },
        front: {
            frameCount: 3,
            fps: 10
        },
        back: {
            frameCount: 3,
            fps: 10
        },
        left: {
            frameCount: 3,
            fps: 10
        }
      }
    }
  ],
  tower: [
    {
      price: 10,
      clazz: TowerType1,
      radius: 200,
      cooldown: 0.1,
      frame: 'tower/type1/idle/001.png',
      frameUpgrade: "tower/type2/fire/",
      name: 'type1',
      upgradePrice: 5,
      maxLV: 3,
      upgradeRadius: 20,
      upgradeDamage: 1,
      upgradeCooldown: 0.01
    },
    {
      price: 20,
      clazz: TowerType2,
      radius: 250,
      slow: 0.2,
      upgradeSlow: 0.15,
      frame: "tower/type2/fire/5.png",
      frameUpgrade: "tower/type2/fire/",
      name: 'type2',
      upgradePrice: 10,
      maxLV: 3,
      upgradeRadius: 10,
    },
    {
      price: 30,
      clazz: TowerType3,
      radius: 300,
      cooldown: 0.4,
      frame: "tower/type2/fire/7.png",
      frameUpgrade: "tower/type2/fire/",
      name: 'type3',
      upgradePrice: 5,
      maxLV: 3,
      upgradeRadius: 20,
      upgradeDamage: 1,
      upgradeCooldown: 0.01
    },
  ],
  weapon: [

  ],
  bullet: [
    {
      name: "type1",
      clazz: BulletType1,
      speed: 500,
      damageAmount: 2
    },
    {
      name: "type2",
      clazz: BulletType1,
      speed: 450,
      damageAmount: 4
    },
    {
      name: "type3",
      clazz: BulletType3,
      speed: 400,
      damageAmount: 6,
      explodeRadius: 100,
      explosion: 'explosion'
    }
  ]
};

window.onload = function() {
  Citadel.game = new Phaser.Game(
    Citadel.configs.GAME_WIDTH,
    Citadel.configs.GAME_HEIGHT,
    Phaser.AUTO,
    '',
    {
      preload: preload,
      create: create,
      update: update,
      render: render
    },
    false,
    false
  );
}

var preload = function() {
    Citadel.game.scale.minWidth = 600;
    Citadel.game.scale.minHeight = 300;
    Citadel.game.scale.maxWidth = 1200;
    Citadel.game.scale.maxHeight = 600;
    Citadel.game.scale.pageAlignHorizontally = true;
    Citadel.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    Citadel.game.load.atlasJSONHash('assets', 'Assets/mob.png', 'Assets/mob.json');
    Citadel.game.load.image('bullet', 'Assets/33.png');
    Citadel.game.load.image('pauseButton', 'Assets/Pause.jpg');
    Citadel.game.load.image('resumeButton', 'Assets/Resume.jpg');
    Citadel.game.load.image('introduce', 'Assets/huongdan.png');
    Citadel.game.load.image('menubg', 'Assets/MenuBg.jpg');
    Citadel.game.load.image('cloud', 'Assets/cloud.jpg');
    Citadel.game.load.spritesheet('explosion', 'Assets/explode.png', 128, 128);
    Citadel.game.load.audio('soundFired', ['Assets/sound/11.wav']);
    Citadel.game.load.audio('soundExplode', ['Assets/sound/22.wav']);
    Citadel.game.load.audio('soundBackground', ['Assets/sound/Andromeda.mp3']);
    Citadel.game.time.advancedTiming = true;
}

var create = function() {
  Citadel.music = {};
  Citadel.music.fire = Citadel.game.add.audio('soundFired');
  Citadel.music.explode = Citadel.game.add.audio('soundExplode');
  Citadel.music.background = Citadel.game.add.audio('soundBackground');

  Citadel.music.background.play();
  Citadel.map = new MapBuilder(-1 , Citadel.configs);

  Citadel.health = Citadel.configs.HEALTH;
  Citadel.damage = function(damage){
    Citadel.health -= damage;
    if (Citadel.health <= 0) {
      console.log("GAME OVER!");
      var style = { font: "30px Arial", fill: "#ff0044", wordWrap: true, wordWrapWidth: Citadel.configs.PLAY_SCREEN_WIDTH, align: "center"};
      var text = Citadel.game.add.text(Citadel.configs.PLAY_SCREEN_WIDTH/2, Citadel.configs.PLAY_SCREEN_HEIGHT/2, "GAME OVER", style);
      Citadel.game.paused = true;
      setTimeout(function(){
        location.reload();
      }, 2000);
    }
  }

  document.dispatchEvent(Citadel.map.event["nextLevel"]);
}

var update = function() {
  Citadel.map.update();
}

var render = function() {
  // Citadel.bulletGroup.forEachAlive(function(sprite){
  //   Citadel.game.debug.body(sprite);
  // });
  //
  // Citadel.enemyGroup.forEachAlive(function(sprite){
  //   Citadel.game.debug.body(sprite);
  // });
}


function gameClick() {
  if(Citadel.dragSprite.enable) {
    Citadel.dragSprite.enable = false;
    tryDropTower(Citadel.dragSprite.clonedTarget, Citadel.mouse.activePointer.x, Citadel.mouse.activePointer.y);
  } else {
  }
}

function tryDropTower(target, mouseX, mouseY) {
  var squareStart;
  if((squareStart = getSquareStart(mouseX, mouseY)) && canDropTower(squareStart, target)) {
    dropTower(squareStart, target);
  }
}

function canDropTower(squareStart, target, canBeNotStart) {
  if(canBeNotStart) {
    return squareStart.isFree;
  } else {
    var i = 0;
    var goRight = squareStart;
    while(i < target.size) {
      var j = 0;
      var goDown = goRight;
      while(j < target.size) {
        if(!goDown || !goDown.isFree) {
          return false;
        }
        goDown = goDown.nextDown();
        j++;
      }
      goRight = goRight.nextRight();
      i++;
    }
    return true;
  }
}

function dropTower(squareStart, target) {
  if (target.price > Citadel.monneyAmount ) {
    // console.log("not enough money");
    return;
  }
  Citadel.monneyAmount -= target.price;
  squareStart.childTower = Citadel.towerController.get(target.name);
  squareStart.childTower.reset(squareStart.x + Citadel.configs.SQUARE.size * target.size / 2, squareStart.y + Citadel.configs.SQUARE.size * target.size / 2);
  squareStart.childTower.scale = target.scale;
  squareStart.childTower.anchor.setTo(0.5);

  // squareStart.childTower.animations.add('idle', Phaser.Animation.generateFrameNames('tower/type1/idle/', 0, 1, '.png', 3), 10, true, false);
  // squareStart.childTower.animations.play('idle', 10, true);

  var i = 0;
  var goRight = squareStart;
  while(i < target.size) {
    var j = 0;
    var goDown = goRight;
    while(j < target.size) {
      goDown.alpha = 0.1;
      goDown.dragOver = false;
      goDown.isFree = false;
      goDown.childTower = squareStart.childTower;
      goDown = goDown.nextDown();
      j++;
    }
    goRight = goRight.nextRight();
    i++;
  }
}

function getSquareStart(mouseX, mouseY) {
  for(var i = 0; i < Citadel.squareGroup.children.length; i++) {
    var child = Citadel.squareGroup.children[i];
    if(child.x < mouseX && mouseX < child.x + Citadel.configs.SQUARE.size && child.y < mouseY && mouseY < child.y + Citadel.configs.SQUARE.size) {
      return child;
    }
  }
}

function onDragOver(mouseX, mouseY) {
  Citadel.squareGroup.children.forEach(function(child, i) {
    if(child.x - Citadel.configs.SQUARE.size * (Citadel.dragSprite.clonedTarget.size - 1) < mouseX && mouseX < child.x + Citadel.configs.SQUARE.size
      && child.y - Citadel.configs.SQUARE.size * (Citadel.dragSprite.clonedTarget.size - 1) < mouseY && mouseY < child.y + Citadel.configs.SQUARE.size) {
      child.dragOver = true;
    } else {
      child.dragOver = false;
    }
  })
}
