const { Linter } = require("eslint");

function setup(){
    createCanvas(700,700);
    noFill();
    stroke(240);
    background(0);
}

function draw(){
    for(x=100; x<=width-80; x+= 100){
        for(y =100; y<=height-80; y+=100){
            rotate(mouseX/100.00);
            ellipse(x, y, width/20, height/20);
            fill(31,81,255);
            noStroke();
        }
    }

    for(x=25; x<=width; x+= 110){
        for(y =35; y<=height; y+=100){
            rotate(mouseX/90.00);
            ellipse(x, y, width/40, height/40);
            fill(190,0,254);
            noStroke();
        }
    }


}