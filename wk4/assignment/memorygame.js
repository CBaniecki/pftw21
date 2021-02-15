const rectangleDiameter = 100;
let startingX = 530;
let startingY = 80;
let myRects = [];
let startingId = 0;
function setup () {
    createCanvas(1000, 720);
    background('#fceeda');
    //ellipse(circleX, circleY, circleDiameter);
    for (let k = 0; k < 4; k ++){
        for (let i = 0; i < 2; i++) {
            rect(startingX, startingY, rectangleDiameter);
            myRects.push({ x: startingX, y: startingY, id: startingId});
            startingX += 150;
            startingId++;
        }   

        startingY += 140; 
        startingX = 530;

    }
  
    console.log(myRects);
}