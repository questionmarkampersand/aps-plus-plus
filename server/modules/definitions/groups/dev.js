const { combineStats, addAura, makeDeco, makeAuto } = require('../facilitators.js');
const { base, gunCalcNames, basePolygonDamage, basePolygonHealth, dfltskl, statnames } = require('../constants.js');
const g = require('../gunvals.js');

// Menus
Class.menu = {
    PARENT: ["genericTank"],
    LABEL: "",
    SKILL_CAP: [
        dfltskl,
        dfltskl,
        dfltskl,
        dfltskl,
        dfltskl,
        dfltskl,
        dfltskl,
        dfltskl,
        dfltskl,
        dfltskl,
    ],
    IGNORED_BY_AI: true,
    TURRETS: [],
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [18, 10, -1.4, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: "bullet",
            },
        },
    ],
};
Class.developer = {
    PARENT: ["menu"],
    LABEL: "Developer",
    BODY: {
        SHIELD: 1000,
        REGEN: 10,
        HEALTH: 100,
        DAMAGE: 10,
        DENSITY: 20,
        FOV: 2,
    },
    RESET_CHILDREN: true,
    ACCEPTS_SCORE: true,
    CAN_BE_ON_LEADERBOARD: true,
    DRAW_HEALTH: true,
    ARENA_CLOSER: false,
    INVISIBLE: [0, 0],
    ALPHA: [0, 1],
    HITS_OWN_TYPE: "hardOnlyTanks",
    SHAPE: [
        [-1, -0.8],
        [-0.8, -1],
        [0.8, -1],
        [1, -0.8],
        [0.2, 0],
        [1, 0.8],
        [0.8, 1],
        [-0.8, 1],
        [-1, 0.8],
    ],
    GUNS: [
        {
            /*** LENGTH WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [18, 10, -1.4, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.op]),
                TYPE: "developerBullet",
            },
        },
    ],
};
Class.spectator = {
    PARENT: ["menu"],
    LABEL: "Spectator",
    ALPHA: 0,
    CAN_BE_ON_LEADERBOARD: false,
    ACCEPTS_SCORE: false,
    DRAW_HEALTH: false,
    HITS_OWN_TYPE: "never",
    ARENA_CLOSER: true,
    SKILL_CAP: [0, 0, 0, 0, 0, 0, 0, 0, 0, 255],
    BODY: {
        SPEED: 5,
        FOV: 2.5,
        DAMAGE: 0,
        HEALTH: 1e100,
        SHIELD: 1e100,
        REGEN: 1e100,
    },
    GUNS: [],
};
Class.grassblock = {
    PARENT: ["spectator"],
    TYPE: "crasher",
    LABEL: "Grass Block",
    SHAPE: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/3/3b/Grass_Block_%28side_texture%29_JE2_BE2.png',
    ALPHA:1,
    DRAW_SCORE: false,
    CAN_BE_ON_LEADERBOARD: false,
    ACCEPTS_SCORE: false,
    DRAW_HEALTH: false,
    HITS_OWN_TYPE: "never",
    ARENA_CLOSER: true,
    SKILL_CAP: [0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    BODY: {
        SPEED: 1.5,
        FOV: 1,
        DAMAGE: 0,
        HEALTH: 1e100,
        SHIELD: 1e100,
        REGEN: 1e100,
    },
    GUNS: [],
};
Class.bosses = {
    PARENT: ["menu"],
    LABEL: "Bosses",
};
Class.mcblocks = {
    PARENT: ["menu"],
    LABEL: "Minecraft Blocks",
};
Class.sentries = {
    PARENT: ["menu"],
    LABEL: "Sentries",
    COLOR: "pink",
    UPGRADE_COLOR: "pink",
    SHAPE: 3.5,
    TURRETS: [
        {
            POSITION: [9, 0, 0, 0, 360, 1],
            TYPE: "genericEntity",
        },
    ],
};
Class.elites = {
    PARENT: ["menu"],
    LABEL: "Elites",
    COLOR: "pink",
    UPGRADE_COLOR: "pink",
    SHAPE: 3.5,
};
Class.mysticals = {
    PARENT: ["menu"],
    LABEL: "Mysticals",
    COLOR: "gold",
    UPGRADE_COLOR: "gold",
    SHAPE: 4,
};
Class.nesters = {
    PARENT: ["menu"],
    LABEL: "Nesters",
    COLOR: "purple",
    UPGRADE_COLOR: "purple",
    SHAPE: 5.5,
};
Class.rogues = {
    PARENT: ["menu"],
    LABEL: "Rogues",
    COLOR: "darkGrey",
    UPGRADE_COLOR: "darkGrey",
    SHAPE: 6,
};
Class.rammers = {
    PARENT: ["menu"],
    LABEL: "Rammers",
    COLOR: "teal",
    UPGRADE_COLOR: "teal",
    TURRETS: [
        {
            POSITION: [21.5, 0, 0, 0, 360, 0],
            TYPE: "smasherBody",
        },
    ],
};
Class.terrestrials = {
    PARENT: ["menu"],
    LABEL: "Terrestrials",
    COLOR: "orange",
    UPGRADE_COLOR: "orange",
    SHAPE: 7,
};
Class.celestials = {
    PARENT: ["menu"],
    LABEL: "Celestials",
    COLOR: "lightGreen",
    UPGRADE_COLOR: "lightGreen",
    SHAPE: 9,
};
Class.eternals = {
    PARENT: ["menu"],
    LABEL: "Eternals",
    COLOR: "teal",
    UPGRADE_COLOR: "teal",
    SHAPE: 11,
};
Class.devBosses = {
    PARENT: ["menu"],
    LABEL: "Developers",
    COLOR: "lightGreen",
    UPGRADE_COLOR: "rainbow",
    SHAPE: 4,
};

Class.tanks = {
    PARENT: ["menu"],
    LABEL: "Tanks",
};
Class.unavailable = {
    PARENT: ["menu"],
    LABEL: "Unavailable",
};
Class.dominators = {
    PARENT: ["menu"],
    LABEL: "Dominators",
    TURRETS: [
        {
            POSITION: [22, 0, 0, 0, 360, 0],
            TYPE: "dominationBody",
        },
    ],
};
Class.sanctuaries = {
    PARENT: ["menu"],
    LABEL: "Sanctuaries",
    TURRETS: [
        {
            POSITION: [22, 0, 0, 0, 360, 0],
            TYPE: "dominationBody",
        },
        {
            POSITION: [13, 0, 0, 0, 360, 1],
            TYPE: "healerSymbol",
        },
    ],
};
Class.funTanks = {
    PARENT: ["menu"],
    LABEL: "Fun Tanks",
};
Class.features = {
    PARENT: "menu",
    LABEL: "Features"
}
Class.overpowered = {
    PARENT: "menu",
    LABEL: "Overpowered"
}

// Generators
function compileMatrix(matrix, matrix2Entrance) {
    let matrixWidth = matrix[0].length,
        matrixHeight = matrix.length;
    for (let x = 0; x < matrixWidth; x++) for (let y = 0; y < matrixHeight; y++) {
        let str = matrix[y][x],
            LABEL = str[0].toUpperCase() + str.slice(1).replace(/[A-Z]/g, m => ' ' + m) + " Generator",
            code = str + 'Generator';
        Class[code] = matrix[y][x] = {
            PARENT: "spectator",
            LABEL,
            SKILL_CAP: [31, 0, 0, 0, 0, 0, 0, 0, 0, 31],
            TURRETS: [{
                POSITION: [5 + y * 2, 0, 0, 0, 0, 1],
                TYPE: str,
            }],
            GUNS: [{
                POSITION: [14, 12, 1, 4, 0, 0, 0],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.fake]),
                    TYPE: "bullet"
                }
            }, {
                POSITION: [12, 12, 1.4, 4, 0, 0, 0],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, { recoil: 0 }]),
                    INDEPENDENT_CHILDREN: true,
                    TYPE: str
                },
            }],
        };
    }
}

function connectMatrix(matrix, matrix2Entrance) {
    let matrixWidth = matrix[0].length,
        matrixHeight = matrix.length;
    for (let x = 0; x < matrixWidth; x++) for (let y = 0; y < matrixHeight; y++) {
        let top = (y + matrixHeight - 1) % matrixHeight,
            bottom = (y + matrixHeight + 1) % matrixHeight,
            left = (x + matrixWidth - 1) % matrixWidth,
            right = (x + matrixWidth + 1) % matrixWidth,

        center = matrix[y     ][x    ];
        top    = matrix[top   ][x    ];
        bottom = matrix[bottom][x    ];
        left   = matrix[y     ][left ];
        right  = matrix[y     ][right];

        matrix[y][x].UPGRADES_TIER_0 = [
            "developer" ,  top    , "spectator",
             left       ,  center ,  right      ,
            "basic"     ,  bottom ,  matrix2Entrance
        ];
    }
}
let generatorMatrix = [
    [ "egg"           , "gem"                , "jewel"                  , "crasher"             , "sentry"               , "shinySentry"        , "EggRelic"           ],
    [ "square"        , "shinySquare"        , "legendarySquare"        , "shadowSquare"        , "rainbowSquare"        , "transSquare"        , "SquareRelic"        ],
    [ "triangle"      , "shinyTriangle"      , "legendaryTriangle"      , "shadowTriangle"      , "rainbowTriangle"      , "transTriangle"      , "TriangleRelic"      ],
    [ "pentagon"      , "shinyPentagon"      , "legendaryPentagon"      , "shadowPentagon"      , "rainbowPentagon"      , "transPentagon"      , "PentagonRelic"      ],
    [ "betaPentagon"  , "shinyBetaPentagon"  , "legendaryBetaPentagon"  , "shadowBetaPentagon"  , "rainbowBetaPentagon"  , "transBetaPentagon"  , "BetaPentagonRelic"  ],
    [ "alphaPentagon" , "shinyAlphaPentagon" , "legendaryAlphaPentagon" , "shadowAlphaPentagon" , "rainbowAlphaPentagon" , "transAlphaPentagon" , "AlphaPentagonRelic" ],
    [ "sphere"        , "cube"     ,"SpikyWall"          , "tetrahedron"            , "octahedron"          , "dodecahedron"         , "icosahedron"        , "tesseract"          ],
],

gemRelicMatrix = [];
for (let tier of [ "", "Egg", "Square", "Triangle", "Pentagon", "BetaPentagon", "AlphaPentagon" ]) {
    let row = [];
    for (let gem of [ "Power", "Space", "Reality", "Soul", "Time", "Mind" ]) {
        row.push(gem + (tier ? tier + 'Relic' : 'Gem'));
    }
    gemRelicMatrix.push(row);
}

compileMatrix(generatorMatrix);
compileMatrix(gemRelicMatrix);

// Tensor = N-Dimensional Array, BASICALLY
let labyTensor = [];
for (let tier = 0; tier < 6; tier++) {
    let row = [];
    for (let poly of [ "Egg", "Square", "Triangle", "Pentagon", "Hexagon" ]) {
        let column = [];
        for (let shiny of [ "", "Shiny", "Legendary", "Shadow", "Rainbow", "Trans" ]) {
            let str = `laby${tier}${shiny}${poly}`,
                LABEL = str[0].toUpperCase() + str.slice(1).replace(/\d/, d => ["", "Beta", "Alpha", "Omega", "Gamma", "Delta"][d]).replace(/[A-Z]/g, m => ' ' + m) + " Generator",
                code = str + 'Generator';
            column.push(Class[code] = {
                PARENT: "spectator",
                LABEL,
                SKILL_CAP: [31, 0, 0, 0, 0, 0, 0, 0, 0, 31],
                TURRETS: [{
                    POSITION: [5 + tier * 2, 0, 0, 0, 0, 1],
                    TYPE: str,
                }],
                GUNS: [{
                    POSITION: [14, 12, 1, 4, 0, 0, 0],
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.fake]),
                        TYPE: "bullet"
                    }
                }, {
                    POSITION: [12, 12, 1.4, 4, 0, 0, 0],
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, { recoil: 0 }]),
                        INDEPENDENT_CHILDREN: true,
                        TYPE: str
                    },
                }],
            });
        }
        row.push(column);
    }
    labyTensor.push(row);
}

connectMatrix(generatorMatrix, 'PowerGemGenerator');
connectMatrix(gemRelicMatrix, 'laby0EggGenerator');

let tensorLength = labyTensor[0][0].length,
    tensorWidth = labyTensor[0].length,
    tensorHeight = labyTensor.length;
for (let x = 0; x < tensorWidth; x++) for (let y = 0; y < tensorHeight; y++) for (let z = 0; z < tensorLength; z++) {
    let top = (y + tensorHeight - 1) % tensorHeight,
        bottom = (y + tensorHeight + 1) % tensorHeight,
        left = (x + tensorWidth - 1) % tensorWidth,
        right = (x + tensorWidth + 1) % tensorWidth,
        front = (z + tensorLength - 1) % tensorLength,
        back = (z + tensorLength + 1) % tensorLength,

    center = labyTensor[y     ][x    ][z    ];
    top    = labyTensor[top   ][x    ][z    ];
    bottom = labyTensor[bottom][x    ][z    ];
    left   = labyTensor[y     ][left ][z    ];
    right  = labyTensor[y     ][right][z    ];
    front  = labyTensor[y     ][x    ][front];
    back   = labyTensor[y     ][x    ][back ];

    labyTensor[y][x][z].UPGRADES_TIER_0 = [
        "developer" ,  top                , "spectator",
         left       ,  center             ,  right     ,
        "basic"     ,  bottom             , "eggGenerator",
         front      , "PowerGemGenerator" ,  back
    ];
}

// Testing tanks
Class.diamondShape = {
    PARENT: ["basic"],
    LABEL: "Rotated Body",
    SHAPE: 4.5
};

Class.rotatedTrap = {
    PARENT: ["basic"],
    LABEL: "Rotated Inverted Body",
    SHAPE: -3.5
};

Class.mummyHat = {
    SHAPE: 4.5,
    COLOR: -1
};
Class.mummy = {
    PARENT: ["drone"],
    SHAPE: 4,
    NECRO: [4],
    TURRETS: [{
        POSITION: [20 * Math.SQRT1_2, 0, 0, 180, 360, 1],
        TYPE: ["mummyHat"]
    }]
};
Class.mummifier = {
    PARENT: ["genericTank"],
    LABEL: "Mummifier",
    DANGER: 6,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: 0.8 * base.SPEED,
    },
    SHAPE: 4,
    MAX_CHILDREN: 10,
    GUNS: [{
        POSITION: [5.5, 13, 1.1, 8, 0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
            TYPE: "mummy",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.necro
        }
    },{
        POSITION: [5.5, 13, 1.1, 8, 0, 270, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
            TYPE: "mummy",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.necro
        }
    }],
    TURRETS: [{
        POSITION: [20 * Math.SQRT1_2, 0, 0, 180, 360, 1],
        TYPE: ["mummyHat"]
    }]
};

Class.colorMan = {
    PARENT: ["genericTank"],
    LABEL: "Testing Animated Colors",
    SHAPE: 4,
    COLOR: "rainbow",
    TURRETS: [{
        POSITION: [20, -20, -20, 0, 0, 1],
        TYPE: { SHAPE: 4, COLOR: "animatedBlueRed" }
    },{
        POSITION: [20,  0 , -20, 0, 0, 1],
        TYPE: { SHAPE: 4, COLOR: "animatedBlueGrey" }
    },{
        POSITION: [20,  20, -20, 0, 0, 1],
        TYPE: { SHAPE: 4, COLOR: "animatedGreyBlue" }
    },{
        POSITION: [20, -20,  0 , 0, 0, 1],
        TYPE: { SHAPE: 4, COLOR: "animatedRedGrey" }
    },{
        POSITION: [20,  20,  0 , 0, 0, 1],
        TYPE: { SHAPE: 4, COLOR: "animatedGreyRed" }
    },{
        POSITION: [20,  20,  20, 0, 0, 1],
        TYPE: { SHAPE: 4, COLOR: "animatedLesbian" }
    },{
        POSITION: [20,  0 ,  20, 0, 0, 1],
        TYPE: { SHAPE: 4, COLOR: "animatedTrans" }
    },{
        POSITION: [20,  20,  20, 0, 0, 1],
        TYPE: { SHAPE: 4, COLOR: "animatedBi" }
    }]
};

Class.miscTestHelper2 = {
    PARENT: ["genericTank"],
    LABEL: "Turret Reload 3",
    MIRROR_MASTER_ANGLE: true,
    COLOR: -1,
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.noSpread]),
                TYPE: "bullet",
                COLOR: -1,
            },
        },
    ],
};
Class.miscTestHelper = {
    PARENT: ["genericTank"],
    LABEL: "Turret Reload 2",
    //MIRROR_MASTER_ANGLE: true,
    COLOR: {
        BASE: -1,
        BRIGHTNESS_SHIFT: 15,
    },
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.noSpread]),
                TYPE: "bullet",
                COLOR: -1,
            },
        },
    ],
    TURRETS: [
        {
          POSITION: [20, 0, 20, 30, 0, 1],
          TYPE: "miscTestHelper2",
        }
    ]
};
Class.spikyTurret = {
   PARENT: ["genericTank"],	
   LABEL: 'Spiky Turret',
   SHAPE: 0,
   DAMAGE_CLASS: 2,
   COLOR: "white",
   DANGER: 0,
   SIZE: 12,
   MAX_CHILDREN: 0,
   DAMAGE_EFFECTS: false,
   GUNS: [ {
         POSITION: [ -18, 8, 0, 23, -4, 0, 0, ],
         }, {
         POSITION: [ -18, 8, 0, 23, -4, 90, 0, ],
         }, {
         POSITION: [ -18, 8, 0, 23, -4, 180, 0, ],
         }, {
         POSITION: [ -18, 8, 0, 23, -4, -90, 0, ],
         }, {
         POSITION: [ -18, 8, 0, 20, -4, 45, 0, ],
         }, {
         POSITION: [ -18, 8, 0, 20, -4, 135, 0, ],
         }, {
         POSITION: [ -18, 8, 0, 20, -4, -138.5, 0, ],
         }, {
         POSITION: [ -18, 8, 0, 20, -4, -47.5, 0, ],
         }, {
         POSITION: [ -18, 8, 0, 16, -4, 18.5, 0, ],
         }, {
         POSITION: [ -18, 8, 0, 16, -4, 64.5, 0, ],
         }, {
         POSITION: [ -18, 8, 0, 16, -4, 113.5, 0, ],
         }, {
         POSITION: [ -18, 8, 0, 16, -4, 154.5, 0, ],
         }, {
         POSITION: [ -18, 8, 0, 16, -4, -159, 0, ],
         }, {
         POSITION: [ -18, 8, 0, 16, -4, -119, 0, ],
         }, {
         POSITION: [ -18, 8, 0, 16, -4, -67.5, 0, ],
         }, {
         POSITION: [ -18, 8, 0, 16, -4, -27, 0, ],
         }, 
     ],
};
Class.sfbase = {
    PARENT: ["genericTank"],
    LABEL: "",
    SKILL_CAP: [
        dfltskl,
        dfltskl,
        dfltskl,
        dfltskl,
        dfltskl,
        dfltskl,
        dfltskl,
        dfltskl,
        dfltskl,
        dfltskl,
    ],
    IGNORED_BY_AI: true,
    TURRETS: [],
    UPGRADE_TOOLTIP: "Make your enemies spiky",
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [18, 10, -1.4, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: "bullet",
            },
        },
    ],
};
Class.spikyfier = makeAuto(Class.sfbase, "Spikyfier", {
    type: "spikyTurret",
    size: 9,
})
//spikyfier adds this thing to enemies
Class.spTransform = {
   PARENT: ["genericTank"],	
   LABEL: '',
   SHAPE: 0,
   DAMAGE_CLASS: 2,
   DANGER: 0,
   SIZE: 12,
   MAX_CHILDREN: 0,
   DAMAGE_EFFECTS: false,
   BODY: {
      DAMAGE: base.DAMAGE * 15,
   },
   GUNS: [ {
         POSITION: [ -18, 8, 0, 23, -4, 0, 0, ],
         }, {
         POSITION: [ -18, 8, 0, 23, -4, 90, 0, ],
         }, {
         POSITION: [ -18, 8, 0, 23, -4, 180, 0, ],
         }, {
         POSITION: [ -18, 8, 0, 23, -4, -90, 0, ],
         }, {
         POSITION: [ -18, 8, 0, 20, -4, 45, 0, ],
         }, {
         POSITION: [ -18, 8, 0, 20, -4, 135, 0, ],
         }, {
         POSITION: [ -18, 8, 0, 20, -4, -138.5, 0, ],
         }, {
         POSITION: [ -18, 8, 0, 20, -4, -47.5, 0, ],
         }, {
         POSITION: [ -18, 8, 0, 16, -4, 18.5, 0, ],
         }, {
         POSITION: [ -18, 8, 0, 16, -4, 64.5, 0, ],
         }, {
         POSITION: [ -18, 8, 0, 16, -4, 113.5, 0, ],
         }, {
         POSITION: [ -18, 8, 0, 16, -4, 154.5, 0, ],
         }, {
         POSITION: [ -18, 8, 0, 16, -4, -159, 0, ],
         }, {
         POSITION: [ -18, 8, 0, 16, -4, -119, 0, ],
         }, {
         POSITION: [ -18, 8, 0, 16, -4, -67.5, 0, ],
         }, {
         POSITION: [ -18, 8, 0, 16, -4, -27, 0, ],
         }, 
     ],
};
Class.miscTest = {
    PARENT: ["genericTank"],
    LABEL: "Turret Reload",
    COLOR: "teal",
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.noSpread]),
                TYPE: "bullet",
            },
        },
    ],
    TURRETS: [
        {
            POSITION: [20, 0, 20, 30, 0, 1],
            TYPE: "miscTestHelper",
        }
    ]
};
Class.mmaTest2 = {
    PARENT: ["genericTank"],
    MIRROR_MASTER_ANGLE: true,
    COLOR: "grey",
    GUNS: [{
            POSITION: [40, 4, 1, -20, 0, 0, 0],
        }],
}
Class.mmaTest1 = {
    PARENT: ["genericTank"],
    COLOR: -1,
    // Somehow, removing the gun below causes a crash when the tank is chosen ??????
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
        }
    ],
    TURRETS: [
        {
            POSITION: [10, 0, 0, 0, 360, 1],
            TYPE: "mmaTest2",
        }
    ]
}
Class.mmaTest = {
    PARENT: ["genericTank"],
    LABEL: "Mirror Master Angle",
    TURRETS: [
        {
            POSITION: [10, 0, 0, 0, 360, 1],
            TYPE: "mmaTest2",
        },
        {
            POSITION: [20, 0, 20, 0, 360, 1],
            TYPE: "mmaTest1",
        },
    ]
}

Class.vulnturrettest_turret = {
    PARENT: "genericTank",
    COLOR: "grey",
    HITS_OWN_TYPE: 'hard',
    LABEL: 'Shield',
    COLOR: 'teal',
}

Class.vulnturrettest = {
    PARENT: ["genericTank"],
    LABEL: "Vulnerable Turrets",
    TOOLTIP: "[DEV NOTE] Vulnerable turrets are still being worked on and may not function as intended!",
    BODY: {
        FOV: 2,
    },
    DANGER: 6,
    GUNS: [{
        POSITION: {},
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: 'bullet'
        }
    }],
    TURRETS: (() => {
        let output = []
        for (let i = 0; i < 10; i++) {
            output.push({
                POSITION: {SIZE: 20, X: 40, ANGLE: (360/10)*i},
                TYPE: "vulnturrettest_turret",
                VULNERABLE: true
            })
        }
        return output
    })(),
};

Class.turretLayerTesting = {
    PARENT: 'genericTank',
    LABEL: 'Turret Layer Testing',
    TURRETS: [
        {
            POSITION: [20, 10, 10, 0, 0, 2],
            TYPE: ["basic", {COLOR: "lightGrey", MIRROR_MASTER_ANGLE: true}]
        },
        {
            POSITION: [20, 10, 5, 0, 0, 2],
            TYPE: ["basic", {COLOR: "grey", MIRROR_MASTER_ANGLE: true}]
        },
        {
            POSITION: [20, 10, -5, 0, 0, 1],
            TYPE: ["basic", {COLOR: "darkGrey", MIRROR_MASTER_ANGLE: true}]
        },
        {
            POSITION: [20, -10, -5, 0, 0, -2],
            TYPE: ["basic", {COLOR: "darkGrey", MIRROR_MASTER_ANGLE: true}]
        },
        {
            POSITION: [20, -10, 5, 0, 0, -1],
            TYPE: ["basic", {COLOR: "grey", MIRROR_MASTER_ANGLE: true}]
        },
    ]
}

Class.alphaGunTest = {
    PARENT: "basic",
    LABEL: "Translucent Guns",
    GUNS: [{
        POSITION: {},
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: 'bullet',
            ALPHA: 0.5
        }
    }]
}

// unfinished
Class.strokeWidthTest = {
    PARENT: "basic",
    LABEL: "Stroke Width Test",
    STROKE_WIDTH: 2,
    GUNS: [{
        POSITION: {},
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: 'bullet',
            STROKE_WIDTH: 0.5
        }
    }]
}

Class.onTest = {
    PARENT: 'genericTank',
    LABEL: "'ON' property",
    TOOLTIP: [
        'Refer to Class.onTest to know more ',
        'On collide is a bit buggy right now, please use other methods until its fixed'
    ],
    ON: [{
        event: "fire",
        handler: ({ body, gun }) => {
            switch (gun.identifier) {
                case 'mainGun':
                    body.sendMessage('fired main gun')
                    break;
                case 'secondaryGun':
                    body.sendMessage('fired secondary gun')
                    break;
            }
        }
    }, {
        event: "altFire",
        handler: ({ body, gun }) => {
            body.sendMessage('fired alt gun')
        }
    }, {
        event: "death",
        handler: ({ body, killers, killTools }) => {
            body.sendMessage('you died')
        }
    }, {
        event: "collide",
        handler: ({ instance, other }) => {
            instance.sendMessage('collide!')
        }
    }, {
        event: "damage",
        handler: ({ body, damageInflictor, damageTool }) => {
            body.SIZE += damageInflictor[0].SIZE / 2
            damageInflictor[0].kill()
        }
    }],
    GUNS: [{
        POSITION: {},
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: 'bullet',
            IDENTIFIER: 'mainGun'
        }
    }, {
        POSITION: { ANGLE: 90 },
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: 'bullet',
            ALT_FIRE: true
        }
    }, {
        POSITION: { ANGLE: 180, DELAY: 0.5 },
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: 'bullet',
            IDENTIFIER: 'secondaryGun'
        }
    }]
}

Class.auraBasicGen = addAura();
Class.auraBasic = {
    PARENT: ["genericTank"],
    LABEL: "Aura Basic",
    TURRETS: [
        {
            POSITION: [14, 0, 0, 0, 0, 1],
            TYPE: "auraBasicGen"
        }
    ],
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: "bullet",
            },
        },
    ],
};
Class.auraHealerGen = addAura(-1);
Class.auraHealer = {
    PARENT: ["genericTank"],
    LABEL: "Aura Healer",
    TURRETS: [
        {
            POSITION: [14, 0, 0, 0, 0, 1],
            TYPE: "auraHealerGen"
        }
    ],
    GUNS: [
        {
            POSITION: [8, 9, -0.5, 12.5, 0, 0, 0],
        },
        {
            POSITION: [18, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.healer]),
                TYPE: "healerBullet",
            },
        },
    ],
};

Class.ghoster_ghostForm = {
    PARENT: ['genericTank'],
    TOOLTIP: 'You are now in ghost form, roam around and find your next target. Will turn back in 5 seconds',
    LABEL: 'Ghoster',
    BODY: {
        SPEED: 20,
        ACCELERATION: 10,
        FOV: base.FOV + 1,
    },
    GUNS: [{
        POSITION: { WIDTH: 20, LENGTH: 20 },
    }],
    ALPHA: 0.6,
}
Class.arenaThingy5623 = {
   PARENT: [Class.genericTank],
   LABEL: 'Arena thing',
   DANGER: 0,
   BODY: {
      DAMAGE: 0,
      DENSITY: 0,
       PUSHABILITY: 0
   },
    ACCEPTS_SCORE: false,
   SHAPE: 1,
   GUNS: [ {
         POSITION: [ 136, 8, 1, -68, 59, 0, 0, ],
         }, {
         POSITION: [ 136, 8, 1, -64, 65, -90, 0, ],
         }, {
         POSITION: [ 136, 8, 1, -73, 65, 90, 0, ],
         }, {
         POSITION: [ 140, 8, 1, -70, 69, 180, 0, ],
         }, {
         POSITION: [ -19, 8, 0, -41, 49, 0, 0, ],
          PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -19, 8, 0, -41, 39, 0, 0, ],
          PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -19, 8, 0, -41, 29, 0, 0, ],
          PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -19, 8, 0, -41, 19, 0, 0, ],
          PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -19, 8, 0, -41, 9, 0, 0, ],
          PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -19, 8, 0, -41, -1, 0, 0, ],
          PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -19, 8, 0, -41, -11, 0, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -19, 8, 0, -41, -21, 0, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -19, 8, 0, -41, -31, 0, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -19, 8, 0, -41, -41, 0, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -19, 8, 0, -41, -51, 0, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -19, 8, 0, -41, -60, 0, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -19, 8, 0, -45, 54, 90, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -19, 8, 0, -45, 45, 90, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -19, 8, 0, -45, 36, 90, 0, ],
          PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -19, 8, 0, -45, 26, 90, 0, ],
          PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -19, 8, 0, -45, 16, 90, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -19, 8, 0, -45, 6, 90, 0, ],
          PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -19, 8, 0, -45, -4, 90, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -19, 8, 0, -45, -14, 90, 0, ],
          PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -19, 8, 0, -45, -24, 90, 0, ],
          PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -19, 8, 0, -45, -35, 90, 0, ],
          PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -19, 8, 0, -45, -45, 90, 0, ],
          PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -19, 8, 0, -45, -55, 90, 0, ],
          PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -19, 8, 0, -41, 59, 180, 0, ],
          PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -19, 8, 0, -41, 49, -180, 0, ],
          PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -19, 8, 0, -41, 39, 180, 0, ],
          PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -19, 8, 0, -41, 29, 180, 0, ],
          PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -19, 8, 0, -41, 19, -180, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -19, 8, 0, -41, 9, 180, 0, ],
          PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -19, 8, 0, -41, -1, -180, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -19, 8, 0, -41, -11, 180, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -19, 8, 0, -41, -21, 180, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -19, 8, 0, -41, -31, -180, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -19, 8, 0, -41, -41, -180, 0, ],
          PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -19, 8, 0, -41, -50, -180, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -19, 8, 0, -35, -55, -90, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -19, 8, 0, -35, -45, -90, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -19, 8, 0, -35, -35, -90, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -19, 8, 0, -35, -25, -90, 0, ],
          PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -19, 8, 0, -35, -14, -90, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -19, 8, 0, -35, -4, -90, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -19, 8, 0, -35, 6, -90, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -19, 8, 0, -35, 16, -90, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -19, 8, 0, -35, 26, -90, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -19, 8, 0, -35, 36, -90, 0, ],
          PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
          POSITION: [ -19, 8, 0, -35, 56, -90, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
	 POSITION: [ 0, 0, 0, 0, 0, 0, 0, ],
    SKIN: 15,
 }, {
         POSITION: [ -19, 8, 0, -35, 46, -90, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ 0, 0, 1, 0, 0, 0, 0, ],
         SKIN: 15,
         }, 
     ],
};
Class.LanceSword = {
    PARENT: [Class.genericTank],
    LABEL: 'Sword',
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    BODY: {
        ACCELERATION: base.ACCEL * .675,
        SPEED: base.SPEED * .875,
        FOV: 1.1,
        DAMAGE: base.DAMAGE * 34324234234
    },
     GUNS: [ {
         POSITION: [ 74, 14, 1, 0, 0, 0, 0, ],
         }, {
         POSITION: [ -10, 6, 0, 17, -3, 67.5, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -10, 6, 0, 17, 3, -67.5, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -10, 6, 0, 17, -11, 90, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -10, 6, 0, 17, 11, -90, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -10, 6, 0, 17, -19, 90, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -10, 6, 0, 17, 19, -90, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -10, 6, 0, 17, -27, 90, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -10, 6, 0, 17, 27, -90, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -10, 6, 0, 17, -35, 90, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -10, 6, 0, 17, 35, -90, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -10, 6, 0, 17, -42, 90, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -10, 6, 0, 17, 42, -90, 0, ],
          PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -10, 6, 0, 17, -49, 90, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -10, 6, 0, 17, 49, -90, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -10, 6, 0, 17, -57, 90, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -10, 6, 0, 17, 57, -90, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -16, 6, 0, 23, -65, 90, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -16, 6, 0, 23, 65, -90, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -20, 6, 0, 27, -72, 90, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -20, 6, 0, 27, 72, -90, 0, ],
          PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -19, 13, 0, 94, 0, 0, 0, ],
          PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ 76, 13, 1, 0, 0, 0, 0, ],
         }, 
     ],
};
Class.spikyrange = {
   PARENT: [Class.genericTank],
   LABEL: 'Spikyrange',
   GUNS: [ {
         POSITION: [ -20, 8, 0, 25, 0, 90, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -20, 8, 0, 25, 0, -180, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -20, 8, 0, 25, 0, -90, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -20, 8, 0, 25, 0, 0, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -80, 8, 0, 90, 0, -45, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -80, 8, 0, 90, 0, -135, 0, ],
          PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -80, 8, 0, 90, 0, 135, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -80, 8, 0, 90, 0, 45, 0, ],
          PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -5, 8, 0, 14, 0, 0, 0, ],
          PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -5, 8, 0, 14, 0, -90, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -5, 8, 0, 14, 0, 180, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -5, 8, 0, 14, 0, 90, 0, ],
          PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -5, 8, 0, 14, 0, 135, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -5, 8, 0, 14, 0, -135, 0, ],
          PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -5, 8, 0, 14, 0, -45, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -5, 8, 0, 14, 0, 45, 0, ],
          PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -45, 8, 0, 42, 0, 45, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -45, 8, 0, 42, 0, 135, 0, ],
          PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -45, 8, 0, 42, 0, -135, 0, ],
          PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -45, 8, 0, 42, 0, -45, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -5, 8, 0, 14, 0, 45, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -5, 8, 0, 14, 0, -45, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -5, 8, 0, 14, 0, -135, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -5, 8, 0, 14, 0, 135, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -5, 3, 0, 14, 0, -67.5, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -5, 3, 0, 14, 0, -112.5, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -5, 3, 0, 14, 0, -157.5, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -5, 3, 0, 14, 0, 157.5, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -5, 3, 0, 14, 0, 112.5, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -5, 3, 0, 14, 0, 67.5, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -5, 3, 0, 14, 0, 22.5, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -15, 3, 0, 21, 0, 45, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -15, 3, 0, 21, 0, -45, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -15, 3, 0, 21, 0, -135, 0, ],
          PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -15, 3, 0, 21, 0, 135, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -6, 3, 0, 12, 0, 0, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -6, 3, 0, 12, 0, -90, 0, ],
          PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -6, 3, 0, 12, 0, 180, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -6, 3, 0, 12, 0, 90, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -6, 3, 0, 12, 0, 45, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -6, 3, 0, 12, 0, -45, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -6, 3, 0, 12, 0, -135, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
    POSITION: [ -6, 3, 0, 12, 0, 135, 0, ],
          PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -6, 3, 0, 8, 0, -22.5, 0, ],
         }, 
     ],
};
Class.ringaNeRaN = {
   PARENT: [Class.genericTank],
   LABEL: 'Ring Arena',
    DANGER: 0,
   BODY: {
      DAMAGE: 0,
      DENSITY: 0,
       PUSHABILITY: 0
   },
   SHAPE: 1,
   GUNS: [ {
         POSITION: [ -18, 8, 0, -36, 0, 0, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -18, 8, 0, -36, 0, -10.5, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -18, 8, 0, -36, 0, 10.5, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -18, 8, 0, -36, 0, -21, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -18, 8, 0, -36, 0, 21, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -18, 8, 0, -36, 0, -31.5, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -18, 8, 0, -36, 0, 31.5, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -18, 8, 0, -36, 0, -42.5, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -18, 8, 0, -36, 0, 42.5, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -18, 8, 0, -36, 0, -53.5, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -18, 8, 0, -36, 0, 53.5, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -18, 8, 0, -36, 0, -64.5, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -18, 8, 0, -36, 0, 64.5, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -18, 8, 0, -36, 0, -75.5, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -18, 8, 0, -36, 0, 75.5, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -18, 8, 0, -36, 0, -86, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -18, 8, 0, -36, 0, 86, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -18, 8, 0, -36, 0, -97, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -18, 8, 0, -36, 0, 97, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -18, 8, 0, -36, 0, -108, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -18, 8, 0, -36, 0, 108, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -18, 8, 0, -36, 0, -119, 0, ],
       PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -18, 8, 0, -36, 0, 119, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -18, 8, 0, -36, 0, -129.5, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -18, 8, 0, -36, 0, 129.5, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -18, 8, 0, -36, 0, -140.5, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -18, 8, 0, -36, 0, 140.5, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -18, 8, 0, -36, 0, -151, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -18, 8, 0, -36, 0, 151, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -18, 8, 0, -36, 0, -162, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -18, 8, 0, -36, 0, 162, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -18, 8, 0, -36, 0, -172, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -18, 8, 0, -36, 0, 171.5, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ -18, 8, 0, -36, 0, -179.5, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ 18, 8, 0, -73, 0, 0, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ 18, 8, 0, -73, 0, -10.5, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ 18, 8, 0, -73, 0, 10.5, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ 18, 8, 0, -73, 0, -21, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ 18, 8, 0, -73, 0, 21, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ 18, 8, 0, -73, 0, -31.5, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ 18, 8, 0, -73, 0, 31.5, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ 18, 8, 0, -73, 0, -43, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ 18, 8, 0, -73, 0, 43, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ 18, 8, 0, -73, 0, -54, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ 18, 8, 0, -73, 0, 54, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ 18, 8, 0, -73, 0, -65, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ 18, 8, 0, -73, 0, 65, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ 18, 8, 0, -73, 0, -76, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ 18, 8, 0, -73, 0, 76, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ 18, 8, 0, -73, 0, -86, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ 18, 8, 0, -73, 0, 86, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ 18, 8, 0, -73, 0, -97.5, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ 18, 8, 0, -73, 0, 97.5, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ 18, 8, 0, -73, 0, -108, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ 18, 8, 0, -73, 0, 108, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ 18, 8, 0, -73, 0, -119, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ 18, 8, 0, -73, 0, 119, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ 18, 8, 0, -73, 0, -130, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ 18, 8, 0, -73, 0, 130, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ 18, 8, 0, -73, 0, -140.5, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ 18, 8, 0, -73, 0, 140.5, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ 18, 8, 0, -73, 0, -151, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ 18, 8, 0, -73, 0, 151, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ 18, 8, 0, -73, 0, -162.5, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ 18, 8, 0, -73, 0, 162.5, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ 18, 8, 0, -73, 0, -172, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ 18, 8, 0, -73, 0, 172, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
          POSITION: [ 18, 8, 0, -73, 0, -180, 0, ],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_reload,g.more_damage, g.more_reload,g.more_damage, g.more_reload,g.more_damage]),
            TYPE: [Class.bullet, {
                ALPHA: 0,
                LABEL: 'Lance'
            }]
        }
    }, {
         POSITION: [ 0, 0, 0, 0, 0, -8, 0, ],
         }, 
     ],
};
Class.ghoster = {
    PARENT: ['genericTank'],
    LABEL: 'Ghoster',
    TOOLTIP: 'Shooting will turn you into a ghost for 5 seconds',
    BODY: {
        SPEED: base.SPEED,
        ACCELERATION: base.ACCEL,
    },
    ON: [
        {
            event: 'fire',
            handler: ({ body }) => {
                body.define(Class.ghoster_ghostForm)
                setTimeout(() => {
                    body.SPEED = 1e-99
                    body.ACCEL = 1e-99
                    body.FOV *= 2
                    body.alpha = 1
                }, 2000)
                setTimeout(() => {
                    body.SPEED = base.SPEED
                    body.define(Class.ghoster)
                }, 2500)
            }
        }
    ],
    GUNS: [{
        POSITION: {WIDTH: 20, LENGTH: 20},
        PROPERTIES: {
            TYPE: 'bullet',
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer, g.annihilator]),
        }
    }],
    ALPHA: 1,
}

Class.switcheroo = {
    PARENT: ['basic'],
    LABEL: 'Switcheroo',
    UPGRADES_TIER_0: [],
    RESET_UPGRADE_MENU: true,
    ON: [
        {
            event: "fire",
            handler: ({ body, globalMasterStore: store, gun }) => {
                if (gun.identifier != 'switcherooGun') return
                store.switcheroo_i ??= 0;
                store.switcheroo_i++;
                store.switcheroo_i %= 6;
                body.define(Class.basic.UPGRADES_TIER_1[store.switcheroo_i]);
                setTimeout(() => body.define("switcheroo"), 6000);
            }
        }
    ],
    GUNS: [{
        POSITION: {},
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: 'bullet',
            IDENTIFIER: 'switcherooGun'
        }
    }]
}

Class.vanquisher = {
    PARENT: ["genericTank"],
    DANGER: 8,
    LABEL: "Vanquisher",
    STAT_NAMES: statnames.generic,
    BODY: {
        SPEED: 0.8 * base.SPEED,
    },
    //destroyer
    GUNS: [{
        POSITION: [21, 14, 1, 0, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer]),
            TYPE: "bullet"
        }

    //builder
    },{
        POSITION: [18, 12, 1, 0, 0, 0, 0],
    },{
        POSITION: [2, 12, 1.1, 18, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.setTrap]),
            TYPE: "setTrap",
            STAT_CALCULATOR: gunCalcNames.block
        }

    //launcher
    },{
        POSITION: [10, 9, 1, 9, 0, 90, 0],
    },{
        POSITION: [17, 13, 1, 0, 0, 90, 0],
        PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.artillery, g.artillery]), TYPE: "minimissile", STAT_CALCULATOR: gunCalcNames.sustained }

    //shotgun
    },{
        POSITION: [4, 3, 1, 11, -3, 270, 0],
        PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun]), TYPE: "bullet" }
    },{
        POSITION: [4, 3, 1, 11, 3, 270, 0],
        PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun]), TYPE: "bullet" }
    },{
        POSITION: [4, 4, 1, 13, 0, 270, 0],
        PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun]), TYPE: "casing" }
    },{
        POSITION: [1, 4, 1, 12, -1, 270, 0],
        PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun]), TYPE: "casing" }
    },{
        POSITION: [1, 4, 1, 11, 1, 270, 0],
        PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun]), TYPE: "casing" }
    },{
        POSITION: [1, 3, 1, 13, -1, 270, 0],
        PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun]), TYPE: "bullet" }
    },{
        POSITION: [1, 3, 1, 13, 1, 270, 0],
        PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun]), TYPE: "bullet" }
    },{
        POSITION: [1, 2, 1, 13, 2, 270, 0],
        PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun]), TYPE: "casing" }
    }, {
        POSITION: [1, 2, 1, 13, -2, 270, 0],
        PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun]), TYPE: "casing" }
    }, {
        POSITION: [15, 14, 1, 6, 0, 270, 0],
        PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun, g.fake]), TYPE: "casing" }
    }, {
        POSITION: [8, 14, -1.3, 4, 0, 270, 0],
    }]
};
Class.armyOfOneBullet = {
    PARENT: ["bullet"],
    LABEL: "Unstoppable",
    TURRETS: [
        {
            /** SIZE         X             Y         ANGLE        ARC */
            POSITION: [18.5, 0, 0, 0, 360, 0],
            TYPE: ["spikeBody", { COLOR: null }],
        },
        {
            POSITION: [18.5, 0, 0, 180, 360, 0],
            TYPE: ["spikeBody", { COLOR: null }],
        },
    ],
};
Class.armyOfOne = {
    PARENT: ["genericTank"],
    LABEL: "Army Of One",
    DANGER: 9,
    SKILL_CAP: [31, 31, 31, 31, 31, 31, 31, 31, 31, 31],
    BODY: {
        SPEED: 0.5 * base.SPEED,
        FOV: 1.8 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [21, 19, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer, g.destroyer, g.destroyer, g.destroyer, g.sniper, g.sniper, g.sniper, g.sniper, g.sniper, g.sniper, g.sniper, { reload: 0.5 }, { reload: 0.5 }, { reload: 0.5 }, { reload: 0.5 }]),
                TYPE: "armyOfOneBullet",
            },
        },{
            POSITION: [21, 11, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer, g.destroyer, g.destroyer, g.destroyer, g.sniper, g.sniper, g.sniper, g.sniper, g.sniper, g.sniper, g.sniper, { reload: 0.5 }, { reload: 0.5 }, { reload: 0.5 }, { reload: 0.5 }, g.fake]),
                TYPE: "bullet",
            },
        }
    ],
};
Class.godbasic = {
    PARENT: ["genericTank"],
    LABEL: "God Basic",
    SKILL_CAP: [31, 31, 31, 31, 31, 31, 31, 31, 31, 31],
    SKILL: [ 31, 31, 31, 31, 31, 31, 31, 31, 31, 31 ],
    BODY: {
        ACCELERATION: base.ACCEL * 1,
        SPEED: base.SPEED * 1,
        HEALTH: base.HEALTH * 1,
        DAMAGE: base.DAMAGE * 1,
        PENETRATION: base.PENETRATION * 1,
        SHIELD: base.SHIELD * 1,
        REGEN: base.REGEN * 1,
        FOV: base.FOV * 1,
        DENSITY: base.DENSITY * 1,
        PUSHABILITY: 1,
        HETERO: 3,
    },
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: "bullet",
                COLOR: "grey",
                LABEL: "",
                STAT_CALCULATOR: 0,
                WAIT_TO_CYCLE: false,
                AUTOFIRE: false,
                SYNCS_SKILLS: false,
                MAX_CHILDREN: 0,
                ALT_FIRE: false,
                NEGATIVE_RECOIL: false,
            },
        },
    ],
};
Class.maximumOverdrive = {
    PARENT: ["overdrive"],
    LABEL: "Maximum Overdrive",
    SKILL_CAP: Array(10).fill(255),
    SKILL: Array(10).fill(255),
};
Class.weirdAutoBasic = {
    PARENT: "genericTank",
    LABEL: "Weirdly defined Auto-Basic",
    GUNS: [{
        POSITION: {
            LENGTH: 20,
            WIDTH: 10
        },
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, [0.8, 0.8, 1.5, 1, 0.8, 0.8, 0.9, 1, 1, 1, 1, 2, 1]]),
            TYPE: "bullet"
        },
    }],
    TURRETS: [{
        POSITION: {
            ANGLE: 180,
            LAYER: 1
        },
        TYPE: ["autoTurret", {
            CONTROLLERS: ["nearestDifferentMaster"],
            INDEPENDENT: true
        }]
    }]
};

Class.tooltipTank = {
    PARENT: 'genericTank',
    LABEL: "Tooltips",
    UPGRADE_TOOLTIP: "Allan please add details"
}

Class.levels = {
    PARENT: ["menu"],
    LABEL: "Level Switcher",
    UPGRADES_TIER_0: []
};
for (let i = 0; i < 12; i++) {
    let LEVEL = i * c.TIER_MULTIPLIER;
    Class["level" + LEVEL] = {
        PARENT: ["levels"],
        LEVEL,
        LABEL: "Level " + LEVEL
    };
    Class.levels.UPGRADES_TIER_0.push("level" + LEVEL);
}

Class.teams = {
    PARENT: ["menu"],
    LABEL: "Team Switcher",
    UPGRADES_TIER_0: []
};
for (let i = 1; i <= 8; i++) {
    let TEAM = i;
    Class["Team" + TEAM] = {
        PARENT: ["teams"],
        TEAM: -TEAM,
        COLOR: getTeamColor(-TEAM),
        LABEL: "Team " + TEAM
    };
    Class.teams.UPGRADES_TIER_0.push("Team" + TEAM);
}
Class['Team' + TEAM_ROOM] = {
    PARENT: ["teams"],
    TEAM: TEAM_ROOM,
    COLOR: "yellow",
    LABEL: "Room Team"
};
Class['Team' + TEAM_ENEMIES] = {
    PARENT: ["teams"],
    TEAM: TEAM_ENEMIES,
    COLOR: "yellow",
    LABEL: "Enemies Team"
};
Class.teams.UPGRADES_TIER_0.push('Team' + TEAM_ROOM, 'Team' + TEAM_ENEMIES);

Class.testing = {
    PARENT: ["menu"],
    LABEL: "Testing"
};

Class.addons = {
    PARENT: "menu",
    LABEL: "Addon Entities",
    UPGRADES_TIER_0: []
};

Class.whirlwindDeco = makeDeco(6)
Class.whirlwindDeco.CONTROLLERS = [["spin", { independent: true, speed: 0.128 }]]
Class.whirlwind = {
    PARENT: "genericTank",
    LABEL: "Whirlwind",
    ANGLE: 60,
    CONTROLLERS: ["whirlwind"],
    HAS_NO_RECOIL: true,
    STAT_NAMES: statnames.whirlwind,
    TURRETS: [
        {
            POSITION: [8, 0, 0, 0, 360, 1],
            TYPE: "whirlwindDeco"
        }
    ],
    AI: {
        SPEED: 2, 
    }, 
    GUNS: (() => { 
        let output = []
        for (let i = 0; i < 6; i++) { 
            output.push({ 
                POSITION: {WIDTH: 8, LENGTH: 1, DELAY: i * 0.25},
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.satellite]), 
                    TYPE: ["satellite", {ANGLE: i * 60}], 
                    MAX_CHILDREN: 1,   
                    AUTOFIRE: true,  
                    SYNCS_SKILLS: false,
                    WAIT_TO_CYCLE: true
                }
            }) 
        }
        return output
    })()
}

Class.developer.UPGRADES_TIER_0 = ["tanks", "bosses", "spectator", "levels", "teams", "eggGenerator", "testing", "addons","mcblocks"];
Class.mcblocks.UPGRADES_TIER_0 =["grassblock"]
    Class.tanks.UPGRADES_TIER_0 = ["basic", "unavailable", "spectator", "dominators", "sanctuaries", "mothership", "baseProtector", "antiTankMachineGun", "arenaCloser","arenaThingy5623", "ringaNeRaN" , "spikyrange", "LanceSword"];
        Class.unavailable.UPGRADES_TIER_0 = ["healer"];
        Class.dominators.UPGRADES_TIER_0 = ["destroyerDominator", "gunnerDominator", "trapperDominator"];
        Class.sanctuaries.UPGRADES_TIER_0 = ["sanctuaryTier1", "sanctuaryTier2", "sanctuaryTier3", "sanctuaryTier4", "sanctuaryTier5", "sanctuaryTier6"];

    Class.bosses.UPGRADES_TIER_0 = ["sentries", "elites", "mysticals", "nesters", "rogues", "rammers", "terrestrials", "celestials", "eternals", "devBosses"];
        Class.sentries.UPGRADES_TIER_0 = ["sentrySwarm", "sentryGun", "sentryTrap", "shinySentrySwarm", "shinySentryGun", "shinySentryTrap", "sentinelMinigun", "sentinelLauncher", "sentinelCrossbow"];
        Class.elites.UPGRADES_TIER_0 = ["eliteDestroyer", "eliteGunner", "eliteSprayer", "eliteBattleship", "eliteSpawner", "eliteTrapGuard", "eliteSpinner", "eliteSkimmer", "legionaryCrasher", "guardian", "defender", "sprayerLegion"];
        Class.mysticals.UPGRADES_TIER_0 = ["sorcerer", "summoner", "enchantress", "exorcistor", "shaman"];
        Class.nesters.UPGRADES_TIER_0 = ["nestKeeper", "nestWarden", "nestGuardian"];
        Class.rogues.UPGRADES_TIER_0 = ["roguePalisade", "rogueArmada", "julius", "genghis", "napoleon"];
	    Class.rammers.UPGRADES_TIER_0 = ["bob", "nemesis"];
        Class.terrestrials.UPGRADES_TIER_0 = ["ares", "gersemi", "ezekiel", "eris", "selene"];
        Class.celestials.UPGRADES_TIER_0 = ["paladin", "freyja", "zaphkiel", "nyx", "theia", "atlas", "rhea", "julius", "genghis", "napoleon"];
        Class.eternals.UPGRADES_TIER_0 = ["odin", "kronos"];
        Class.devBosses.UPGRADES_TIER_0 = ["taureonBoss", "zenphiaBoss", "dogeiscutBoss", "trplnrBoss"];

    Class.testing.UPGRADES_TIER_0 = ["features", "overpowered", "whirlwind", "vanquisher", "mummifier", "tracker3"];
        Class.features.UPGRADES_TIER_0 = ["diamondShape", "rotatedTrap", "colorMan", "miscTest", "mmaTest", "vulnturrettest", "onTest", "alphaGunTest", "strokeWidthTest", "testLayeredBoss", "tooltipTank", "turretLayerTesting", "auraBasic", "auraHealer", "weirdAutoBasic", "ghoster", "switcheroo", ["developer", "developer"],"spikyfier"]
        Class.overpowered.UPGRADES_TIER_0 = ["armyOfOne", "godbasic", "maximumOverdrive"]
