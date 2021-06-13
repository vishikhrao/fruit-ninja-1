var fruit,germ,fruitImage1,fruitImage2,
    fruit3Image,fruit4Image,germImage1,germImage2;
var fruitGroup,germGroup,gameoverGroup;
var sword,gameover,swordImage,gameoverImage;
var gamestate,score;

function preload(){
  
  fruitImage1 = loadImage("fruit1.png");
  fruitImage2 = loadImage("fruit2.png");
  fruitImage3 = loadImage("fruit3.png");
  fruitImage4 = loadImage("fruit4.png");
  germImage1 = loadImage("alien1.png");
  germImage2 = loadImage("alien2.png");
  swordImage = loadImage("sword.png");
  gameoverImage = loadImage("gameover.png");
}

function setup(){
  createCanvas(550,430);

  sword = createSprite(20,20,20,20);
  sword.addImage(swordImage);
  sword.scale = 0.6;
  
  score = 0;
  
  gamestate = "play";
  
   fruitGroup = new Group();
   germGroup = new Group();
   gameoverGroup = new Group();
}

function draw(){
  background("lightblue");
  
  if(gamestate === "play"){
  sword.x = World.mouseX;
  sword.y = World.mouseY;
  }
  
  if (sword.isTouching(fruitGroup)){
    
    fruitGroup.destroyEach();
    score = score + 1;
  }
  
  if(sword.isTouching(germGroup)){
    gamestate = "end";
    fruitGroup.destroyEach();
    germGroup.destroyEach();
  }
  
  if(gamestate === "end"){
  
    gameover = createSprite(300,230,20,20);
    gameover.addImage(gameoverImage);
    gameoverGroup.add(gameover);
    text("Press space to play again",200,200);
    }

if(keyDown("space") && gamestate === "end"){
      gamestate = "play";
  gameoverGroup.destroyEach();
   score = 0;
  
}
  
  createGerms();
  createFruits();
  drawSprites();
  
  text("score: "+ score,200,50);
}

function createFruits(){
  
  if(World.frameCount % 120 === 0 && gamestate === "play"){
    
    var a = Math.round(random(1,4));
    fruit = createSprite(600,20,20,20);
    fruit.y = random(50,400);
    fruit.scale = 0.2;
    fruit.lifetime = 200;
    fruit.velocityX = -8;
    fruitGroup.add(fruit);
  if(a === 1){
    
    fruit.addImage(fruitImage1);
    } else if(a === 2){
      
     fruit.addImage(fruitImage2);  
    } else if(a === 3){
      
     fruit.addImage(fruitImage3);  
    } else if(a === 4){
      
     fruit.addImage(fruitImage4);  
    }
  }
}

function createGerms(){
  
  if(World.frameCount % 150 === 0 && gamestate === "play"){
    
    var a = Math.round(random(1,2));
    germ = createSprite(600,20,20,20);
    germ.y = random(50,400);
    germ.scale = 0.7;
    germ.lifetime = 200;
    germ.velocityX = -8;
    germGroup.add(germ);
    
    if(a === 1){
      
      germ.addImage(germImage1);
    } else if(a === 2){
      
      germ.addImage(germImage2);
    }
  }  
}