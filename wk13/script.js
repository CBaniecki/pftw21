let diameter;
let angle = 0;

function setup() {
    createCanvas(800,800);
    diameter = height - 10;
    stroke(255);
    strokeWeight(2);
    noFill();

}

function draw(){
    background(0);

    let d1 = 10 + (sin(angle) * diameter) /6 + diameter/5;
    let d2 = 10 + (sin(angle + PI / 2) * diameter) /4 + diameter/3;
    let d3 = 10 + (sin(angle + PI)* diameter) /3.5 + diameter /2;

    ellipse(150, height/3, d1, d1);
    ellipse(width/2, height /2, d2, d2);
    ellipse( width/1.2, height/2, d3, d3);

    angle += 0.02;


}


