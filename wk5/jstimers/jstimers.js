// TIMERS are COOL
let blockX = 0;
let blockY = 0;
let blockColor = '#cd00cd';
let drawTimer;
const speed = 7;
const distance = 2;

function setup () {
    createCanvas(500, 500);
    background(209);
}

function drawBlock(x, y, color) {
    fill(color || '#800080');
    rect(x, y, 50, 50);

}
function keyTyped(){
    let keyToNumber = Number(key);
    if (isNaN(keyToNumber)){
        return;
    }
    keyToNumber = map(keyToNumber, 1, 9, '#cd00cd' , '#cd00cd');
    console.log('converted number', keyToNumber);
    blockColor = keyToNumber;
}
window.setTimeout(() => {

    drawTimer = window.setInterval(() => {
        if(blockY - 50 <= height ) {
        drawBlock(blockX, blockY, blockColor);
        blockY += distance;
        } else {
            blockY = 0;
            blockX += 50;
        }
        if (blockY - 50 > height && blockX - 50 > width) {
            //cancels timer 
            window.clearInterval(drawTimer);  
            alert('done');
        }
    
    }, speed);


}, 1500);
