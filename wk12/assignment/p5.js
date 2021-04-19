// Is it possible to create multiple/different animations without code conflict?
// My idea was to have different animations for the different keyTyped functions, but that did not go as expected. 
// Music is from Epidemic Sound and FreeSFX 
// Code is from Bouncy Bubbles on p5.js website 

//sound
let sound;
let value = 255;

//bouncing balls 
let numBalls= 13; 
let spring = 0.05;
let gravity = 0.03;
let friction = -0.9;
let balls= [];



function preload() {
    soundFormats('mp3');
    sound = loadSound('music/ES_Music-Organ-Chord-2-SFX-Producer.mp3'); 
    mySound = loadSound('music/ES_Flute-Glock-Harp-SFX-Producer.mp3');
    piano = loadSound('music/ES_Piano-Chord-183-SFX-Producer.mp3');
    guitar = loadSound('music/guitar-strum.mp3');
    congas = loadSound('music/congas.mp3');

}

function setup() {
    createCanvas(1400,700);
    
    // loop for bouncing balls
    for(let i = 0; i < numBalls; i++){
        balls[i] = new Ball (
            random(width),
            random(height),
            random(30, 70),
            i, 
            balls
        );
    }
    noStroke();
    fill(255,204);
    
}
function draw() {
    background(0)

    //draws the balls to the canvas 
    balls. forEach(ball => {
        ball.collide();
        ball.move();
        ball.display();
    });
   
}

class Ball {
    constructor(xin, yin, din, idin, oin) {
        this.x = xin;
        this.y = yin;
        this.vx = 0;
        this.vy = 0;
        this.diameter = din;
        this.id = idin;
        this.others = oin;
    }

// the "bounce" in bouncing balls
collide() {
    for(let i = this.id + 1; i < numBalls; i++) {
        let dx = this.others[i].x - this.x;
        let dy = this.others[i].y - this.y;
        let distance = sqrt(dx * dx + dy * dy);
        let minDist = this.others[i].diameter / 2 + this.diameter / 2;

        if (distance < minDist) {
            let angle = atan2(dy, dx);
            let targetX = this.x + cos(angle) * minDist;
            let targetY = this.y + sin(angle) * minDist;
            let ax = (targetX - this.others[i].x) * spring;
            let ay = (targetY - this.others[i].y) * spring;
            this.vx -= ax;
            this.xy -= ay;
            this.others[i].vx += ax;
            this.others[i].vy += ay;
        }
    }
}

//ball movement, this is fetched from constructor
move() {
    this.vy += gravity;
    this.x += this.vx;
    this.y += this.vy;
    if (this.x + this.diameter /2 > width) {
        this.vx *= friction;

    } else if (this.x - this.diameter /2 < 0){
        this.x = this.diameter /2;
        this.vx *= friction;
    }
    if (this.y + this.diameter / 2 > height) {
        this.y = height - this.diameter/2;
        this.vy *= friction;

    }else if (this.y - this.diameter /2 <0){
        this.y = this.diameter/2
        this.vy *= friction;
    }
}

display() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
    }
}

// If certain keys are pressed, this function associates it with sound and a color change 
function keyTyped(){
    if(key === 'a'){
        sound.play();
        fill(51, 144, 255);
        ellipse(this.x, this.y, this.diameter, this.diameter);
    }else {
        sound.stop();
    }

    if(key === 'c'){
        mySound.play();
        fill(142, 68, 173);
    }else {
        mySound.stop();
    }

    if(key === 'h'){
        fill(17,254,225);
        piano.play();
    } else {
        piano.stop();
    }

    if(key === 'd'){
        fill(255, 62, 237);
        guitar.play();
    }else {
        guitar.stop();
    }

    if(key === 'm') {
        fill(152, 183, 241);
        congas.play();
    }else{
        congas.stop();
    }    
        
}



