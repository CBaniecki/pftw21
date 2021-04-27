//water drop array
var drops= [];

//timer to stop rain
var time1 = 5200;
var time2 = 5310;

//flower
let diameter;
let angle = 0;
var pos;

function setup() {
    createCanvas(740,640);
    for(var i = 0; i < 500; i++) {
        drops[i] = new Drop();
    }

    diameter = height - 10;
    stroke(0);
    strokeWeight(2);
    fill(0);


}
function draw() {
    background("#000080");
    var currentTime = millis();

    //timer which sets duration for water
    if (currentTime < time1){
    for(var i = 0; i< drops.length; i++){
    drops[i].fall();
    drops[i].show();
    }
    }

    //flower
    if(currentTime > time2){
    let d1 = 10 + (sin(angle) * diameter) /6 + diameter/5;
    let d2 = 10 + (sin(angle) * diameter) /7 + diameter/6;
    
    ellipse(150, height/2, d1, d1);
    ellipse(width/5, height/3.5, d2, d2);

    angle += 0.02;
    }

}

function Drop() {
    this.x = random(width);
    this.y = random(-500, -50);
    this.z = random(0,20);
    this.len= map(this.z, 0, 20, 1, 20);
    this.yspeed= map(this.z, 0, 20, 1, 20);

    this.fall = function() {
        this.y = this.y + this.yspeed;
        var grav = map(this.z, 0,20, 0, 0.1);
        this.yspeed = this.yspeed+grav;

        if(this.y > height) {
            this.y = random (-200, -100);
            this.yspeed = map (this.z, 0, 20, 4,.5);
        }
    } 

    this.show = function() {
        var thick = map(this.z, 0, 20, 1, 3);
        strokeWeight(thick);
        stroke(255);
        line(this.x, this.y, this.x, this.y + this.len);
    }
}



    