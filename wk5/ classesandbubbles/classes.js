
let bubbleArray = [];
function setup() {
    createCanvas(600, 400);
    for(let i = 0; i < 6; i++) {
    const bubble= new Bubble(200, 150, 24);
    bubbleArray.push(bubble);
    //x += 120;
    }      
}

function draw(){
    background('#30D5C8');
    for (let k = 0; k < 2; k++) {
    bubbleArray[k].move();
    bubbleArray[k].show();
    }
  
}


class Bubble{
    constructor(x, y, r) {
        this.x= x;
        this.y= y;
        this.width= r;
        this.height= r;
        //this.move();
        //this.show();
    }

    move() {
        this.x = this.x + random(-5, 5);
        this.y = this.y + random(-5, 5);
    }

    show() {
        stroke('#654321');
        strokeWeight(4);
        noFill();
        ellipse(this.x, this.y, this.width);
    }
}