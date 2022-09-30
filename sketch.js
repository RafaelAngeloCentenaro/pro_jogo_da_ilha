var fundo
var personagem1Img
var personagem1
var monstro1=[]
var monstro2=[]
var monstro3=[]
function preload(){
    imgfundo= loadImage("./assets/imagem fundo.png")
    imgfundofundo= loadImage("./assets/imagem fundo fundo.jpg")
    personagem1Img= loadAnimation("./assets/personagens/1/1_entity_000_WALK_000.png","./assets/personagens/1/1_entity_000_WALK_001.png","./assets/personagens/1/1_entity_000_WALK_002.png","./assets/personagens/1/1_entity_000_WALK_003.png","./assets/personagens/1/1_entity_000_WALK_004.png","./assets/personagens/1/1_entity_000_WALK_005.png","./assets/personagens/1/1_entity_000_WALK_006.png")
}
function setup(){
    createCanvas(windowWidth,windowHeight)
    fundo=createSprite(width/2,height*0.5)
    fundo.addImage(imgfundo)
    fundo.scale=2
    personagem1=createSprite(width/2,height*0.7)
    personagem1.addAnimation("pirata1",personagem1Img)
    personagem1.scale=0.2
    fundoinvisivel=createSprite(width*0.1,height*0.7,10,height)
    fundoinvisivel2=createSprite(width*0.9,height*0.7,10,height)
    fundoinvisivel3=createSprite(width*0.5,height*0.82,width,10)
    fundoinvisivel4=createSprite(width*0.5,height*0.4,width,10)
    fundoinvisivel.visible=false
    fundoinvisivel2.visible=false
    fundoinvisivel3.visible=false
    fundoinvisivel4.visible=false
}

function draw(){
    background(imgfundofundo)
    drawSprites()
    criarmonstros()
    move()
    personagem1.bounceOff(fundoinvisivel)
    personagem1.bounceOff(fundoinvisivel2)
    personagem1.bounceOff(fundoinvisivel3)
    personagem1.bounceOff(fundoinvisivel4)
}
function move(){
  if (keyDown(UP_ARROW)){
    personagem1.y-=5
  }  
  if (keyDown(LEFT_ARROW)){
    personagem1.x-=5
  }
  if (keyDown(RIGHT_ARROW)){
    personagem1.x+=5
  }
  if (keyDown(DOWN_ARROW)){
    personagem1.y+=5
  }
}
function criarmonstros(){
  if(monstro1.length>0){
    if(monstro1[monstro1.length-1]===undefined||monstro1[monstro1.length]<3){
      var claudio=new monstroo1(width/2,height/2,70,70)
      monstro1.push(claudio)
    }
  }
}