function setup () {
    createCanvas(1210, 650); 
}

function draw(){
   if (mouseIsPressed) {
       fill(128, 0, 128);
   }else {
       fill(300);
   }
   rect(mouseX, mouseY, 80, 80);
   stroke(268, 118, 200, 200);
}