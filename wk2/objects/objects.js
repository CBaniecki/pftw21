// objects 

//create 
const kensCar = {
    color: 'black', 
    pistons: 4
};
console.log(kensCar); 
// mutate: add data (properties)
kensCar.fuelInjection = true;
console.log(kensCar);
kensCar['4-wheel-drive'] = true;

// display single item with dot 
console.log('kens car is' , kensCar.color);

// display single item with array notation
console.log('is it 4 wheel dig?', kensCar['4-wheel-drive']);

//using toString 
console.log(kensCar.toString());
const myCars = ['rav', 'pilot', 'juke'];
console.log(myCars.toString());

// mutate: remove property
delete kensCar.pistons;
console.log('kens car without pistons', kensCar);

// merge two objects 
const basicJuke = {
    wheels: 4,
    color: 'red',
    doors: 4, 
    make: 'Nissan', 
};
