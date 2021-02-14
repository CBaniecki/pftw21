function setup () {
    createCanvas(200, 200);
}
function createTile() {
    translate(0, 0);
    fill('lavender');
    rect(0, 0, 200, 200);

    
    fill('#4d004d');
    noStroke();
    //bottom left 
    ellipse(134, 120, 60, 60);
    //bottom right
    ellipse(94, 141, 60, 60);
    //next to bottom right
    ellipse(54, 115, 60, 60);    
    //top left
    ellipse(59, 70, 60, 60);
    //top right
    ellipse(134, 73, 60, 60);
    //top
    ellipse(99,51, 60, 60);
    

    //center
    fill('#fffee7');
    ellipse(96, 95, 60, 60);
    

  
  

}

function draw() {
    createTile();
    noLoop();
}