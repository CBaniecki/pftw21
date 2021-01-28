const games = [
    {title: 'Checkers', type: 'Strategy', numberOfPlayers: '2', shortDescription:'Checkers is a strategy board game for two players which involve diagonal moves of game pieces and captures by jumping over opponent pieces.'},
    {title: 'Monopoly', type: 'Board', numberOfPlayers: '2 to number of pawns in the box', shortDescription:'Monopoly is a fast-dealing property trading game where players roll two six-sided dice to move around the game board, buying and trading properties and using the properties to purchase houses and hotels.'},
    {title: 'Sorry!', type: 'Board', numberOfPlayers: '2 to 4', shortDescription:'Sorry is a fun board game where players move their four pawns around the board, attempting to get all of their pieces "home" before any other player.'}
]; 

const gameArray = [
    {question: 'I have three games in my collection. Pick a number between 1 and 3 and I will tell you about that game', answer: '1'},
];

const firstQuestion = prompt(gameArray[0].question);
if(firstQuestion == gameArray[0].answer){
    alert('You selected ' + games[0].title + ' which is a ' + games[0].type + ' game with ' + games[0].numberOfPlayers + ' players. A description of this game is ' + games[0].shortDescription + ".");
} else{
    alert('You selected ' + games[1].title + ' which is a ' + games[1].type + ' game with ' + games[1].numberOfPlayers + ' players. A description of this game is ' + games[1].shortDescription + ".");
} else{
    alert('You selected ' + games[2].title + ' which is a ' + games[2].type + ' game with ' + games[2].numberOfPlayers + ' players. A description of this game is ' + games[2].shortDescription + ".");
} 