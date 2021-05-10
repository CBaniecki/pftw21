const DOWN = 'down';
const UP = 'up';
let startingX = 100;
let startingY = 100;
let cards = [];
const cardGame = {
   totalPairs: 5,
   flippedCards: [],
   numMatched: 0,
   attempts: 0,
   waiting: false
};
let cardfaceArray = [];
let cardback;
function preload() {
    cardback = loadImage('images/card-back-ribbon.jpg');
    cardfaceArray = [
        loadImage('images/cardback-quote-3.jpg'),
        loadImage('images/cardback-quote-1-1.jpg'),
        loadImage('images/cardback-quote-5.jpg'),
        loadImage('images/cardback-quote-6-1.jpg'),
        loadImage('images/cardback-quote-9.jpg'),
    ]
}

function setup() {
    createCanvas(1500, 830);
    let selectedFaces = [];
    for (let z = 0; z < 5; z++){
        const randomIdx = floor(random(cardfaceArray.length));
        const face = cardfaceArray[randomIdx];
        selectedFaces.push(face);
        selectedFaces.push(face);
        //remove the used cardface so it doesn't get randomly selected again
        cardfaceArray.splice(randomIdx, 1);
    }
    selectedFaces = shuffleArray(selectedFaces);
    //layout for cards
    // j is for the rows and i is for the number of cards per row
    for (let j = 0; j < 2; j++){
        for (let i = 0; i < 5; i++){
            const faceImage = selectedFaces.pop();
            cards.push(new Card(startingX, startingY, faceImage));
            startingX += 280;  
        }
        startingY += 280;
        startingX = 100;
    } 
}

function draw () {
    background(0);
    if(cardGame.numMatched === cardGame.totalPairs) {
        fill(255);
        textSize(56);
        text('You Won!', 600, 695);
        noLoop();
    }
    for(let k = 0; k < cards.length; k++) {
        //if cards don't match, this turns the cards down 
        if(!cards[k].isMatch) {
            cards[k].face = DOWN;
        }
        cards[k].show();
    }

    noLoop();
    cardGame.flippedCards.length = 0;
    cardGame.waiting = false;
    fill(255);
    textSize(36);
    text('Matches: ' + cardGame.numMatched, 100, 700);
    text('Attempts: ' + cardGame.attempts, 100, 760);

    textSize(30);
    text('Accessibility Card Game', 600, 60);
    textSize(20);
    text('White ribbon represents disabilities', 100, 812);
}

function mousePressed(){
    if(cardGame.waiting) {
        return;
    }
    for (let k = 0; k < cards.length; k++){
        // first check flippped cards length, and then we can trigger the flip
        if(cardGame.flippedCards.length < 2 && cards[k].didHit(mouseX,mouseY)) {
            cardGame.flippedCards.push(cards[k]);
        }
    }
    if (cardGame.flippedCards.length === 2){
        cardGame.attempts++;
       if (cardGame.flippedCards[0].cardFaceImg === cardGame.flippedCards[1].cardFaceImg){
           //Cards match! 
           // mark cards as matched to prevent them from flipping back
           cardGame.flippedCards[0].isMatch = true;
           cardGame.flippedCards[1].isMatch = true;
           //empty flipped cards array
           cardGame.flippedCards.length = 0; 
           // increment the score
           cardGame.numMatched++;
           loop();

       } else {
           cardGame.waiting = true;
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
        this.width = 240;
        this.height = 240;
        this.face = DOWN;
        this.cardFaceImg = cardFaceImg;
        this.isMatch = false;
        this.show();
    }

    show () {
        if(this.face === UP || this.isMatch){
            fill('#aaa');
            rect(this.x, this.y, this.width, this.height);
            image(this.cardFaceImg, this.x + 5 , this.y + 10);

        } else {
            fill(247);
            rect(this.x, this.y, this.width, this.height);
            image(cardback, this.x + 35, this.y + 20); 
        }
    }

    didHit (mouseX, mouseY) {
        if (mouseX >= this.x && mouseX <= this.x + this.width && mouseY >= this.y && mouseY <= this.y + this.height) {
            this.flip()
            return true;
        } else {
            return false;
        }
    }
    //controls the interactivity of the flip
    flip () {
        if(this.face === DOWN) {
            this.face = UP;

        } else {
            this.face = DOWN
        }
        this.show();
    }
}
//shuffles the cards
function shuffleArray (array) {
    let counter = array.length;
    while(counter > 0) {
        //choose random index
        const idx = Math.floor(Math.random() * counter);
        //decrease counter by 1 
        counter --;
        //swap the last element with it
        const temp = array[counter];
        array[counter] = array[idx];
        array[idx] = temp;
    }
    return array;
}

