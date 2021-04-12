function setup() {
    createCanvas(800,800);
    background("#99E");
}


function draw() {



if(mouseIsPressed){
    for(var y =0; y<= height; y+=40){
        for(x=0; x<= width; x+=40){
            fill(255,91,71);
            ellipse(x,y, 40,40);
        }
    }
}else {
    fill(255);
    background("#99E");
}
for(x= 10; x<= width-20; x+=130){
    for( y= 90; y<=height-50; y+=150){
    ellipse(x, y, 80, 80);
    noStroke(255);
 
    
    }

}

}

