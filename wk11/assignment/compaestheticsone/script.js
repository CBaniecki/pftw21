
function setup(){
    createCanvas(700,700);
    noFill();
    stroke(240);
    background(102);
}

function draw() {
   ellipse(mouseX,mouseY, 80, 80);
   if(mouseIsPressed){
       fill("#99E");
       background("#036");
   }
}

function doubleClicked(){
    noFill();
    stroke("#f00");
}

