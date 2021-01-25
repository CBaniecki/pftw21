let grid = undefined; 
function setup(){
    createCanvas(1000, 800,);
    background("#ccc");
    grid = loadImage("../images/100px_grid.png");
} 

function draw(){
    background(grid);
    // snowman legs 
    fill("#ffffff");
    strokeWeight(20);
    stroke(100, 250, 100);
    // left leg
    ellipse(350, 650, 200);
    // right leg
    ellipse(650, 650, 200);
    // body
    ellipse(500, 450, 350, 400);
    //head 
    ellipse(500, 200, 200);
    //hat brim
    stroke(100, 100, 255);
    strokeWeight(40);
    line(400, 120, 500, 120); 
}

