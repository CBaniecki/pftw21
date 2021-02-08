let questionInput;
let currentQuestion;
let response;
let responseColor = 'green';
let heading;
let numberCorrect = Number(0);
let numberWrong = Number(0);
let statements = [
       {question: 'What is the name of the famous clock tower in London?', answer: 'Big Ben'},
       {question: 'What city in France is the Eiffel Tower located in?', answer:'Paris'},
       {question: 'Where is Yosemite National Park located?', answer :'California'},
       {question: 'What was the first Pixar movie?', answer: 'Toy Story'},
       {question: 'What is the bunny rabbits name in Bambi?', answer: 'Thumper'},
       {question: 'What is the name of the animation movie created by Walt Disney Animation Studios in 1988?', answer: 'Who Framed Roger Rabbit?'}

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
        responseColor= 'green';
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
    heading = createElement('h1', ['Color Quiz']);
    heading.position(100, 100);
    questionInput = createInput('');
    questionInput.size(250, 26);
    questionInput.position(100, 220);
    submitAnswerButton = createButton('submit answer');
    submitAnswerButton.size(250, 24);
    submitAnswerButton.mousePressed(checkQuestion);
    submitAnswerButton.position( 100, 250);
}

function draw() {
    background('lightblue');
    fill('purple');
    textSize(24);
    text(message, 100, 200);
    fill(responseColor);
    text(response, 100, 350);
}

