
//flower code is found from p5.js website

//water drop array
var drops= [];

//timer to stop rain
var time1 = 5220;
var time2 = 5310;



//flower
var rando = 0.00;
var co = 100;



function setup() {
    createCanvas(740,640);
    //creates water droplets
    for(var i = 0; i < 500; i++) {
        drops[i] = new Drop();
    }
}
function draw() {
    background("#add8e6"); 
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

      co = co + 1;
      var zo = floor(noise(co) * 20);

      rando = rando + 0.0005
      var no = noise(rando);

      //flower 1
      translate(height/2, width/2);
      fill(mouseX, zo, 150, 127);
      noStroke();
      for( i = 0; i < 10; i++ ) {
          ellipse(0, 40, 30, 80);
          rotate(QUARTER_PI/no);
      }

      //flower 2
      translate(60, 200);
      fill("#9932cc");
      for( i = 0; i < 11; i++ ) {
          ellipse(0, 20, 40, 100);
          rotate(TWO_PI/no);
      }
        
    
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
        stroke("#000080");
        line(this.x, this.y, this.x, this.y + this.len);
    }
}



    