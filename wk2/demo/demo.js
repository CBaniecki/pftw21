// from string using split
//const nameString = 'Betty|Bob|Sue';
//console.log(nameString);
//const myArrayFromString = nameString.split("|");
//console.log(myArrayFromString);
// from square brackets (with and without content);
//const myMovies = []; 
//console.log(myMovies);
//const mySongs = ['happy birthday song', 'twinkle twinkle', 
//'popcorn popping on the apricot tree'];
//console.log(mySongs);
//const myNumbers = [1, 2, 3, 4, 5];
//console.log(myNumbers);
//const myMix = ['casablanca', 1 , true];
//console.log(myMix);

// viewing values by index
//console.log(mySongs[2]);

//get length 
//mySongs.push('can\'t stop loving you');
//console.log(mySongs[mySongs.length - 1]);

//push
//myNumbers.push(13);
//console.log(myNumbers);

// pop 
//mySongs.pop();
//mySongs.pop();
//console.log(mySongs[mySongs.length - 1]);
//shift
//mySongs.shift();
//mySongs.shift();
//console.log(mySongs[0]);

//unshift
//mySongs.unshift('celebrate');
//console.log(mySongs);
//splice
//mySongs.splice(3, 2);
//console.log(mySongs);
//myNumbers.splice(3, 0, 67); 
//console.log(myNumbers);

//indexOf
//const hbsIndex = mySongs.indexOf('happy birthday song'); // will return -1 if no match 
//console.log(hbsIndex);
//mySongs.splice(hbsIndex, 1);
//console.log(mySongs);

//concat
//const myNewArray = mySongs.concat(myNumbers);
//const myNewNewArray = myNewArray.concat('hi from space');
//console.log(myNewArray);

//join 
//console.log(myNewNewArray.join(' | '));

// Objects 
const myTopMovies = {
    adventure: ['Raiders of the Lost Ark', 'Star Wars'],
    romance: 'Romancing the Stone',
    comedy: 'Time Bandits',
    foreign: {
        Japanese: 'Millenium Actress'
    },
    'film noir': 'Casablanca'

}; 
console.log(myTopMovies);

//adding properties 
myTopMovies.drama = 'kramer vs kramer';

//viewing vsalues by key (dot and array notation)
console.log(myTopMovies['film noir']);

//deleting properties
delete myTopMovies['film noir'];
console.log(myTopMovies);

//merging objects 
const myTopSongs = {
    techno: 'some song',
    country: 'something else with a dog'
};
const myCombinedStuff = Object.assign(myTopMovies, myTopSongs);
console.log(myCombinedStuff);
const basicCar = {
    wheels: 4,
    engine: 'combustion', 
    drivetrain:'front-wheel drive'
};

const stuartCar = {
    engine: 'electric' 

}; 
const thisNewCar = Object.assign({}, basicCar, stuartCar);
console.log(thisNewCar);


 



