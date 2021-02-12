const circleDiameter = 100;
let startingX = 150;
let startingY = 100;
let myRects = [];
let startingId = 0;
function setup () {
    createCanvas(1000, 500);
    background(0);
    //ellipse(circleX, circleY, circleDiameter);
    for (let k = 0; k < 2; k ++){
        for (let i = 0; i < 5; i++) {
            rect(startingX, startingY, circleDiameter);
            myRects.push({ x: startingX, y: startingY, id: startingId});
            startingX += 150;
            startingId++;
        }   

        startingY += 140; 
        startingX = 150;

    }
  
    console.log(myRects);
}