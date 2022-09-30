class monstroo2 {
    constructor(x, y, width, height) {
      this.body = Bodies.rectangle(x, y, width, height);
      this.width = width;
      this.height = height;
  
      this.animation = loadAnimation("./assets/Atacar_monstro2/Wraith_02_Attack_000.png","./assets/Atacar_monstro2/Wraith_02_Attack_001.png","./assets/Atacar_monstro2/Wraith_02_Attack_002.png","./assets/Atacar_monstro2/Wraith_02_Attack_003.png","./assets/Atacar_monstro2/Wraith_02_Attack_004.png","./assets/Atacar_monstro2/Wraith_02_Attack_005.png","./assets/Atacar_monstro2/Wraith_02_Attack_006.png","./assets/Atacar_monstro2/Wraith_02_Attack_007.png","./assets/Atacar_monstro2/Wraith_02_Attack_008.png","./assets/Atacar_monstro2/Wraith_02_Attack_009.png","./assets/Atacar_monstro2/Wraith_02_Attack_010.png","./assets/Atacar_monstro2/Wraith_02_Attack_011.png",);
      World.add(world, this.body);
    }
    remove(index){
      setTimeout(()=>{Matter.World.remove(world,monstro2[index].body)
      delete monstro2[index]},1000)
    }
    display() {
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      imageMode(CENTER);
      image(this.image, 0, this.monstro2Position, this.width, this.height);
      pop();
    }
  }