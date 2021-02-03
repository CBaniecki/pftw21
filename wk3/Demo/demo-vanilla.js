//functions
// how to create a function 
function greet (){
    console.log("hi");

}
greet();


// reasons for functions
//delayed/deferred actions 
//setTimeout(greet, 1000);

//organization
//function makeBlackCircle(){
//  FileList('black');
//  circle(50, 50, 100);
//}

//reusability/ optimization (input)
getStuff("maserati");
function getStuff(stuff){
    console.log('getting ' + stuff);
}

getStuff("bread");
getStuff("peanur butter");

//returning data 
function getSum(numberA, numberB) {
    return numberA + numberB;
}
let mySum = getSum(4, 11);
console.log("this is the sum", mySum);

//functions as values in variables, properties 
let myLittleObject = {
    friendship: function() {
        console.log('is magic');
    }

}
myLittleObject.friendship();
console.log(function(){
    return 'beefy';
}())

//const mySpecialFunction = function() {
 //   alert('yippe');
//}
//mySpecialFunction();
//setTimeout(function() {
 //   alert('waited 5 seconds')
//})

//loops
//OG for loop
for (let i = 100; i < 1000; i+=10) {
    console.log(i);
}
const myCars =['acura', 'bently', 'chevy', 'dodge'];
//for (let sillyVarName = 0; sillyVarName < myCars.length; sillyVarName++) {
//myCars[sillyVarName] = myCars[sillyVarName].toUpperCase();

//}
//console.log(myCars);

// OG for-in loop for objects (bonus track)
const myObject = {
    color: 'red',
    price: '$20',
    weight: '20lbs'
}
for (let prop in myObject) {
    console.log(prop + ':' + myObject[prop]);
}

//while loops 
//let statements = [
//    {question: 'What is the name of the famous clock tower in London?', answer: 'Big Ben'},
//    {question: 'What city in France is the Eiffel Tower located in?', answer:'Paris'},
//    {question: 'Where is Yosemite National Park located?', answer :'California'},
//    {question: 'What was the first Pixar movie?', answer: 'Toy Story'},
//    {question: 'What is the bunny rabbits name in Bambi?', answer: 'Thumper'}
    
//]
//let myNum = 15;
//while(statements.length > 0) {
//    let randomIndex = Math.ceil(Math.random() * statements.length -1);

//    let answer = prompt(statements[randomIndex].question);
//    if (answer === statements[randomIndex].answer){
//        statements.splice(randomIndex, 1);
//        console.log('removing statement')
//    }
    
//}

//functional loops
myCars.forEach(function(car){
    console.log('functional', car);
}) 

//map
let myNewArray = myCars.map(function(car){
    return 'I like ' + car;
})
console.log(myNewArray);

//filter (bonus track)

let myFilterCars = myCars.filter(function(car){
    return car === 'bently';
});
console.log(myFilterCars);