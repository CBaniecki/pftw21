const  triviaQuestion = [
    {question: 'What is the name of the famous clock tower in London?', answer: 'Big Ben'},
    {question: 'What city in France is the Eiffel Tower located in?', answer:'Paris'},
    {question: 'Where is Yosemite National Park located?', answer :'California'},
    {question: 'What was the first Pixar movie?', answer: 'Toy Story'},
    {question: 'What is the bunny rabbits name in Bambi?', answer: 'Thumper'}
];

const randomIdx = Math.round(Math.random() * triviaQuestion.length -1);

firstQuestion = prompt(triviaQuestion[randomIdx].question); {
alert('You answered ' + firstQuestion + "." + "\n" +

'The correct answer was ' + triviaQuestion[randomIdx].answer);
}

const arrayOfQuestions = triviaQuestion.concat(firstQuestion);
console.log(arrayOfQuestions);

