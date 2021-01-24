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
    stroke(100, 250, 100);
    // left 
    ellipse(350, 650, 200);
}

