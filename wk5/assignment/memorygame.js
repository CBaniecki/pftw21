const DOWN = 'down';
const UP= 'up';
let startingX = 250;
let startingY = 85;
let cards = [];
const gameState = {
    totalPairs: 5,
    flippedCards: [],
    numMatched: 0,
    attempts:0,
    waiting: false

};

let cardfaceArray= [];
let cardback;
function preload() {
    cardback = loadImage('images/cardback copy.png');
    cardfaceArray= [
        loadImage('images/pinkflower copy.JPG'),
        loadImage('images/prettyinpink copy.jpeg'),
        loadImage('images/redroses copy.jpeg'),
        loadImage('images/yellowbouquet copy.JPG'),
        loadImage('images/yellowFlower copy.JPG')
    ]
}

function setup() {
    createCanvas(1000, 850);
    let selectedFaces = [];
    for (let z = 0; z < 5; z++) {
        const randomIdx = floor(random(cardfaceArray.length));
        const face = cardfaceArray[randomIdx];
        selectedFaces.push(face);
        selectedFaces.push(face);
        // remove used cardface so it doesn't get randomly selected again
        cardfaceArray.splice(randomIdx, 1);
    }

    selectedFaces = shuffleArray(selectedFaces);
    for(let j = 0; j < 2; j++){
        for(let i = 0; i < 5; i++){
            const faceImage = selectedFaces.pop();
            cards.push(new Card(startingX, startingY, faceImage));
            startingX += 120;
        }
        startingY += 150;
        startingX = 250;
    }
}

function draw () {
    background('#fceeda');
    if(gameState.numMatched === gameState.totalPairs) {
        fill('#2c1503');
        textSize(66);
        text('You won! YAY!', 100, 125);
        noLoop();
    }

    for(let k = 0; k < cards.length; k++) {
        if(!cards[k].isMatch) {
            cards[k].face = DOWN;
        }
        cards[k].show();
    }
    noLoop();
    gameState.flippedCards.length = 0;
    gameState.waiting = false;
    fill('#2c1503');
    textSize(36);
    text('attempts ' + gameState.attempts, 100, 500);
    text('matches ' + gameState.numMatched, 100, 450);
    //text('A Simple Matching Game', 100, 50);
}

function mousePressed() {
    if(gameState.waiting) {
        return;
    }
    for(let k = 0; k < cards.length; k++) {
        // check flipped card length, and then trigger the flip
        console.log('gameState', gameState);
        if(gameState.flippedCards.length < 2 && cards[k].didHit(mouseX, mouseY)){
            console.log('flipped', cards[k]);
            gameState.flippedCards.push(cards[k]);
        }
    }

    if (gameState.flippedCards.length === 2) {
        if(gameState.flippedCards[0].cardFaceImg === gameState.flippedCards[1].cardFaceImg){
            //cards match! Time to score. 
            //mark cards as matched so they don't flip back
            gameState.flippedCards[0].isMatch = true;
            gameState.flippedCards[1],isMatch = true;
            //empty the flipped cards array
            gameState.flippedCards.length = 0;
            //increment the score
            gameState.numMatched++;
            loop();
        
        }else {
            gameState.waiting = true;
            const loopTimeout = window.setTimeout(() => {
                loop();
                window.clearTimeout(loopTimeout);

            }, 1000)
        }
    }
}

class Card {
    constructor (x, y, cardFaceImg) {
        this.x = x;
        this.y = y;
        this.width = 80;
        this.height = 100;
        this.face = 'down';
        this.cardFaceImg = cardFaceImg
        this.isMatch = false;
        this.show();
    }

    show () {

        if(this.face === UP || this.isMatch) {
            fill('#aaa');
            rect(this.x, this.y, this.width, this.height);
            image(this.cardFaceImg, this.x , this.y);
        } else {
    
            fill('lavender');
            rect(this.x, this.y, this.width, this.height);
            image(cardback, this.x + 4 , this.y + 10);

        }
    }

    didHit (mouseX, mouseY) {
        if(mouseX >= this.x && mouseX <= this.x + this.width && mouseY >= this.y && mouseY <= this.y + this.height) {
            this.flip();
            return true;
        } else {
            return false;
        }
    }
    
    flip () {
        if (this.face === DOWN) {
            this.face = UP
        
        } else {
            this.face = DOWN;
        }
        this.show ();
    }
}

function shuffleArray (array) {
    let counter = array.length;
    while (counter > 0) {
        //pick random index
        const idx = Math.floor(Math.random() * counter);
        //decrease counter by 1 (decrement)
        counter--;
        //swap the last element with it
        const temp = array[counter];
        array[counter] = array[idx];
        array[idx] = temp;
    }
    return array;
}

