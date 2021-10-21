//declara as variaveis 
var trex ,trex_running;
var solo;

//carrega tudo antes de iniciar o jogo (midias)
function preload(){
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
}


//cria as coisas(objetos) do jogo
function setup(){
  createCanvas(600,200)
  
  //crie um sprite de trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5

  //cria o solo 
  solo = createSprite(200,180,400,20)
}



function draw(){
  background("white")

  // faço o trex saltar 
  if(keyDown("space")){
    trex.velocityY = -10
  }

  //gravidade
  trex.velocityY +=0.5

  trex.collide(solo)


  drawSprites();
}