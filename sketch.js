let angle =0
function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#000000")
  rectMode(CENTER)
  noFill()
  angleMode(DEGREES)
  //frameRate(50)
}

function draw() {
  background("#000000");
  //translate(width/2,height/2)
  for(let y=0;y<height;y= y+120){
       for(let x=0;x<width;x= x+120){
         push()
         translate(x,y)
         stroke(255)
          for(let i=0;i<10;i=i+1){
             let r = map(sin(frameCount),-1,1,50,255)
             let g = map(cos(frameCount/2),-1,1,50,255)
             let b = map(sin(frameCount/4),-1,1,50,255)
             stroke(r,g,b)
             rotate(angle)
             rect(0,0,100-i*3,100-i*3,20)
             angle= sin(frameCount) *20
            }
         pop()
       }
    }
}