const {Engine,World,Bodies}=Matter;

var engine,world;
var grd;
var dv = [];
var pk = [];
var pt = [];
var z=0;

function setup() {
  createCanvas(400,800);

  engine=Engine.create();
  world=engine.world;

  grd = new Grd(width/2,height-10,width,20);

  for (var i=0;i<9;i++){
    dv.push(new Grd(0+i*50,height-70,5,100))
  }

  for(var r = 80;r<550;r+=40){
    for(var c = 40;c<=370-z;c+=40){
      if(r%80!==0){
        z=0;
      
      }else {
        z=20;
    }
    pk.push(new Pnko(c+z,r,20))
    }
  }
}

function draw() {
  Engine.update(engine,1000/30);
  background(0); 
  grd.display();

  if(frameCount%30===0){
    var q=random(-1,1)
    pt.push(new Ball(200+q,-10,15))
  }

  for(var t of pt){
    t.display();
  }

  for(var d of dv){
    d.display();
  }

  for(var p of pk){
    p.display();
  }

}