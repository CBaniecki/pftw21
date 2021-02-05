function setup(){
    createCanvas(600, 600);
}

function createTile(originX, originY, primaryLineColor, secondaryLineColor, circleColor) {
    translate(originX,  originY); 
    fill('maroon');
    rect(0, 0, 200, 200);;
    
    //background circle
    fill(circleColor);
    ellipse(80, 102, 80, 80);
    
    //center lines
    fill(primaryLineColor);
    rect(77, 0, 2, 200);
    rect(0, 100, 200, 2)


    // individual lines
    fill(secondaryLineColor);
    rect(30, 0, 2, 200);
    rect(15, 0, 2, 200);
    //bottom solid
    rect(0, 150, 200, 15);

    // thick white lines 
    fill(primaryLineColor);
    rect(130, 0, 8, 200);
    rect(0, 40, 200, 8);

};

function draw(){
    createTile(0, 0, '#ffffff', 'black', '#5f0000');
    createTile(0, 200, '#5f0000','#5f0000', '#5f0000');
    createTile(0, 200, '#30D5C8', '#30D5C8', '#30D5C8');
    createTile(200, -400, 'purple','purple', 'white');
    createTile(0, 200, '#ffffff', 'black', '#5f0000');
    createTile(0, 200, 'purple','purple', 'white');
    createTile(200, -400,'#30D5C8', '#30D5C8', '#30D5C8');
    createTile(0, 200, '#5f0000','#5f0000', '#5f0000');
    createTile(0, 200, '#ffffff', 'black', '#5f0000');





}