function setup() {
    createCanvas(200, 200);
}

function createTile() {
    translate(0, 0);
    fill('maroon');
    rect(0, 0, 200, 200);;
    
    //background circle
    fill('#5f0000');
    ellipse(80, 102, 80, 80);
    
    //center lines
    fill('#fffee4');
    rect(77, 0, 2, 200);
    rect(0, 100, 200, 2)


    // individual lines
    fill('black');
    rect(30, 0, 2, 200);
    rect(15, 0, 2, 200);
    //bottom solid
    rect(0, 150, 200, 15);

    // thick white lines 
    fill('#fffefb');
    //rect(150, 0, 4, 200);
    rect(130, 0, 8, 200);
    rect(0, 40, 200, 8);
    //line(20,10, 50, 40);     

};

function draw(){
    createTile();
}

//no loop
noLoop();