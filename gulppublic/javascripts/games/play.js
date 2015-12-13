//game tilemap
var map;
var block;
var spikes;

var platform;
var platform2;
var platform3;

var platform4;
var platform5;

var platform6;
var platform7;

var platform8;
var platform9;
var platform10;

var platformYvel = 200;
var platformXvel = 200;

var platform2Yvel = 200;

var platform4Xvel = 250;
var platform5Xvel = 250;

var platform6Yvel = 150;
var platform7Yvel = 400;



//Body of character
var santaHead;
var santaHeadX = 128 * 3; //50 // 700
var santaHeadY = 128 * 3;

//Body of character
var santaBody;
var santaBodyX = santaHeadX;
var santaBodyY = santaHeadY + 30;


// //Legs of character
var santaLegs;
var santaLegsX = santaHeadX;
var santaLegsY = santaHeadY + 60;

//blue monsters
// var blueMonsters;

var music;




var Play = {
  preload: function(){
    //load tilemap
    game.load.tilemap("map", "/images/game/bluecrosstile4.json", null, Phaser.Tilemap.TILED_JSON);
    game.load.image("tiles", "/images/game/tileset.png");

    //load robosanta head
    game.load.image("santaHead", "/images/game/headS.png");

    //load robosanta body
    game.load.image("santaBody", "/images/game/bodyS.png");

    //load robosanta wheels
    game.load.image("santaLegs", "/images/game/wheelS.png");

    game.load.image("block", "/images/testitle.jpg");

    game.load.audio("kylabyte", ["/audio/kilabyte.mp3", "/audio/kilabyte.ogg"]);

    //load spikes
    // game.load.image("spikes", "/images/game/spikes.png");

    // game.load.spritesheet("bluemonsters", "/images/game/blueEvilSpritesheet.png", 24, 23);
  },
  create: function(){
    game.stage.backgroundColor = "#81879D";
    music = game.add.audio("kylabyte");
    //handles keyboard clicks
    cursors = game.input.keyboard.createCursorKeys();

    //enable physics
    game.physics.startSystem(Phaser.Physics.P2JS);

    map = game.add.tilemap("map");
    //testitle
    map.addTilesetImage("tileset", "tiles");



    block = map.createLayer("Tile Layer 1");
    block.resizeWorld();
    map.setCollisionBetween(0,1);

    game.physics.p2.convertTilemap(map, block);

    spikes = map.createLayer("spikes");
    spikes.resizeWorld();

    sign = map.createLayer("sign");
    sign.resizeWorld();

    //add santaBody at position santaHeadX, santaHeadY +
    santaBody = game.add.sprite(santaBodyX, santaBodyY, "santaBody");
    santaBody.anchor.setTo(0.5);
    santaBody.scale.setTo(0.15);


    //add santaHead at position santaHeadX, santaHeadY
    santaHead = game.add.sprite(santaHeadX, santaHeadY,"santaHead");
    santaHead.anchor.setTo(0.5);
    santaHead.scale.setTo(0.15);

    //add santaLegs at position santaLegsX, santaLegsY
    santaLegs = game.add.sprite(santaLegsX, santaLegsY, "santaLegs");
    santaLegs.anchor.setTo(0.5);
    santaLegs.scale.setTo(0.15);

    // spikes = game.add.sprite(700, 400, "spikes");

    // blueMonsters = game.add.sprite(700, 400, "bluemonsters");
    // blueMonsters.scale.setTo(2);

    platform = game.add.sprite((128 * 7) + 64,  (128 * 4) - 128, "block");
    platform2 = game.add.sprite((128 * 16) + 64, (128 * 4) + 64, "block");
    platform3 = game.add.sprite((128 * 15) + 64, (128 * 11) + 64, "block");
    platform4 = game.add.sprite((128 * 5) + 64, (128 * 16) + 64, "block");
    platform5 = game.add.sprite((128 * 8) + 64, (128 * 16) + 64, "block");
    platform6 = game.add.sprite((128 * 13) + 64, (128 * 16) + 64, "block");
    platform7 = game.add.sprite((128 * 14) + 64, (128 * 18) + 64, "block");
    platform8 = game.add.sprite((128 * 17) + 64, (128 * 16) + 64, "block");
    platform9 = game.add.sprite((128 * 19) + 64, (128 * 16) + 64, "block");


    //enable physics for santaLegs
    game.physics.p2.enable([santaLegs, santaBody,santaHead, platform, platform2, platform3,
      platform4, platform5, platform6, platform7, platform8, platform9], false); //set to tru for debug

    //var constraint1 = game.physics.p2.createGearConstraint(santaLegs, santaBody, 0, 1);
    var spring = game.physics.p2.createSpring(santaLegs, santaBody, 1, 200, 1);
    var springhead = game.physics.p2.createSpring(santaBody, santaHead,1,200,1);


    // blueMonsters.body.fixedRotation = true;

    santaLegs.body.clearShapes();
    santaLegs.body.setCircle(15);


    game.physics.p2.gravity.y = 700;
    game.physics.p2.restitution = 0.01;

    santaBody.body.fixedRotation = true;
    santaHead.body.fixedRotation = true;

    platform.body.kinematic = true;
    platform.body.setRectangleFromSprite();
    platform2.body.kinematic = true;
    platform2.body.setRectangleFromSprite();
    platform3.body.kinematic = true;
    platform3.body.setRectangleFromSprite();
    platform4.body.kinematic = true;
    platform4.body.setRectangleFromSprite();
    platform5.body.kinematic = true;
    platform5.body.setRectangleFromSprite();
    platform6.body.kinematic = true;
    platform6.body.setRectangleFromSprite();
    platform7.body.kinematic = true;
    platform7.body.setRectangleFromSprite();
    platform8.body.static = true;
    platform8.body.motionState = Phaser.Physics.P2.Body.DYNAMIC;
    platform8.body.static = true;
    platform8.body.setRectangleFromSprite();
    platform9.body.motionState = Phaser.Physics.P2.Body.DYNAMIC;
    platform9.body.static = true;
    platform9.body.setRectangleFromSprite();


    game.camera.follow(santaBody);

    music.play();
    music.volume -= 0.5;

  },
  update: function(){
    platform.body.velocity.y = platformYvel;
    platform2.body.velocity.y = platform2Yvel;
    platform3.body.velocity.x = platformXvel;
    platform4.body.velocity.x = platform4Xvel;
    platform5.body.velocity.x = platform5Xvel;
    platform6.body.velocity.y = platform6Yvel;
    platform7.body.velocity.y = platform7Yvel;

    platform8.body.rotateRight(50);
    platform9.body.rotateRight(100);

    if(platform.y > 768 + 64){
      platformYvel = -200;
    } else if(platform.y < 384 + 64){
      platformYvel = 200;
    }

    if(platform2.y > 768 + 64){
      platform2Yvel = -200;
    } else if(platform2.y < 384 + 64){
      platform2Yvel = 200;
    }

    if(platform3.x < (128 * 11) + 64){
      platformXvel = 200;
    } else if(platform3.x > (128 * 16) - 64){
      platformXvel = -200;
    }

    if(platform4.x < (128 * 5) + 64){
      platform4Xvel = 250;
    } else if(platform4.x > (128 * 8) - 64){
      platform.x = (128 * 8) - 64;
      platform4Xvel = -250;
    }
    if(platform5.x < (128 * 9) -128){
      platform5Xvel = 250;
    } else if(platform5.x > (128 * 11) - 64){
      platform.x = (128 * 11) -64;
      platform5Xvel = -250;
    }

    if(platform6.y > (128 * 20) - 64){
      platform6Yvel = -150;
    } else if(platform6.y < (128 * 16) + 64){
      platform6Yvel = 150;
    }
    if(platform7.y > (128 * 20) - 64){
      platform7Yvel = -500;
    } else if(platform7.y < (128 * 16) + 64){
      platform7Yvel = 500;
    }


    // santaBody.x = santaHead.x;
    // santaBody.y = santaHead.y + 30;

    santaLegs.body.velocity.x = 0;
    santaHead.body.velocity.x = 0;
    santaBody.body.velocity.x = 0;

    if(cursors.right.isDown){
      santaLegs.body.rotateRight(250);

      santaBody.body.moveRight(370);
      santaLegs.body.moveRight(370);
      santaHead.body.moveRight(370);
    } else if(cursors.left.isDown){
      santaLegs.body.rotateLeft(250);

      santaLegs.body.moveLeft(370);
      santaBody.body.moveLeft(370);
      santaHead.body.moveLeft(370);
    } else if(cursors.down.isDown){
      game.camera.y += 10;
    }
  }
}
