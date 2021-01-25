let grid = undefined; 
let stroke1 = prompt("enter a basic color name in lower case", "gray");
let stroke2 = prompt("enter another basic color lowercase", "purple");
let fill1 = prompt("enter a basic color in lowercase", "black");

function setup(){
    createCanvas(1000, 800,);
    background("#1ae");
    grid = loadImage("../images/100px_grid.png");
} 

function draw(){
    //background(grid);
    // snowman legs 
    fill("#ffffff");
    strokeWeight(20);
    stroke(stroke1);
    // bottom
    ellipse(510, 650, 450);
    // body
    ellipse(510, 430, 350, 350);
    //head 
    ellipse(500, 200, 200);
    //hat brim
    stroke(stroke2);
    strokeWeight(30);
    fill(fill1); 
    line(290, 120, 700, 120); 
    //hat body 
    quad(400, 50, 610, 50, 610, 120, 400, 120);
    // eyes 
    stroke(0);
    strokeWeight(50);
    point(425, 200); 
    point(575, 200);
    //mouth 
    noFill();
    strokeWeight(10);
    arc(500, 240, 100, 90, 0, HALF_PI);
    //left arm
    noFill();
    strokeWeight(10);
    arc(250, 330, 200, 343, 200, QUARTER_PI);
    arc(220, 210,200, 100, 200,QUARTER_PI);
    //right arm
    noFill();
    strokeWeight(10);
    arc(600, 330, 200, 300, 200, QUARTER_PI);
    arc(670, 260, 90, 100, 430, QUARTER_PI);
    
    

}

