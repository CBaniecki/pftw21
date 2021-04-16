let mySound;
function preload() {
  soundFormats('mp3');
  mySound = loadSound('sound/short-copy.mp3');
}

function setup() {
  let cnv = createCanvas(600, 600);
  cnv.mousePressed(canvasPressed);
  background(0);
  amp = new p5.Amplitude();
  amp.setInput(mySound);
}

function draw(){
    noStroke();
    fill(0, 10);
    rect(0, 0, width, height);
    scale = map(amp.getLevel(), 0, 1.0, 10, width);
    fill(255);
    ellipse(width/2, height/2, scale, scale);
}

function canvasPressed() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`
  mySound.play();
}