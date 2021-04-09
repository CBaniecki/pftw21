const { Linter } = require("eslint");

var row = 10

function setup() {
    createCanvas(1710,900);
    background("#99E");
}

function draw() {

   //lines 14-18 are from the Form and Code Overlapping Circles code example

   for(x=10; x<= width-50; x+=60) {
       for(y=200; y<= height-30; y+=30) {
           ellipse(x, y, 40, 40);
           noFill();
       }
   }

   //lines 21-35 are from the Pins and Lines example in the Make textbook

   for(var y=200; y<= height -90; y+=200){
       for(var x= 100; x<= width-10; x+=90) {
           line(x,y, 4, 4);
           stroke(0,0,0);
       }
   }

   for(var y=20; y<= height- 20; y+=200){
        for(var x= 90; x<= width - 50; x+=80) {
            line(x,y, 4, 4);
            stroke(0,0,0);
        }
    }  

}

