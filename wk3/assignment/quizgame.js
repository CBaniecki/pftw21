let questionInput;
let currentQuestion;
let response;
let responseColor='white';
let heading;
let numberCorrect = Number(0);
let numberWrong = Number(0);
let statements = [
    {question: 'What is the name of the Disney movie where \n two dogs share spaghetti?', answer: 'Lady and the Tramp'},
    {question: 'Faith, Trust and ?', answer:'Pixie Dust'},
    {question: 'There are three mountains in Magic Kingdom, \n What are their names?', answer :'Space Mountaon, Splash Mountain and Big Thunder Railroad Mountaon'},
    {question: 'What was the first Pixar movie?', answer: 'Toy Story'},
    {question: 'What is the bunny rabbits name in Bambi?', answer: 'Thumper'},
    {question: 'What is the name of the animation movie created \n by Walt Disney Animation Studios in 1988?', answer: 'Who Framed Roger Rabbit?'}

]; 

function next(){
     if(statements.length < 1) { 
     alert('You Won');
     return;
 
 }

 if(numberWrong > 5) {
   alert('You Lost'); 
  return;
 }

 const randomIndex = Math.ceil(Math.random() * statements.length -1);
 return statements[randomIndex];
 
}





function checkQuestion(){
 if (currentQuestion.answer === questionInput.value()) {
     //remove correct answer from array 
     statements = statements.filter(statementObj =>{
         return currentQuestion.answer !== statementObj.answer;
     });
     // this is the correct condition
     response = 'correct! next question';
     responseColor= 'white';
 } else {
     // this is the wrong answer 
     response = 'oops, that wasn\'t quite right! Try again';
     responseColor = 'red';
     
 }
 currentQuestion = next();
 questionInput.value('');
 if(currentQuestion) {
     message = currentQuestion.question;
 }
}

currentQuestion = next();
let message = currentQuestion.question;

function setup() {
 createCanvas(1670, 870);
 heading = createElement('h1', ['Disney Trivia Quiz']);
 heading.position(100, 100);
 questionInput = createInput('');
 questionInput.size(300, 40);
 questionInput.position(100, 300);
 submitAnswerButton = createButton('submit answer');
 submitAnswerButton.size(250, 40);
 submitAnswerButton.mousePressed(checkQuestion);
 submitAnswerButton.position( 100, 400);
}

function draw() {
 //background('lightblue');
 fill('white');
 textSize(24);
 text(message, 100, 200);
 fill(responseColor);
 text(response, 100, 350);
}

function backgroundImg(imgNumber) {
var myImages = ["images/DisneyBackground.jpg", "images/disneycastle.jpeg"];
var image= document.body.style.backgroundImage;
var newImg = Math.floor(Math.random()* myImages.length);
document.body.style.backgroundImage = 'url('+myImages[newImg]+')';

}
window.onload = backgroundImg;