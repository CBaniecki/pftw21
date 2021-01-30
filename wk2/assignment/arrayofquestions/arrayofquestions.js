const  triviaQuestion = [
    {question: 'what is the name of the famous clock tower in London?', answer: 'Big Ben'},
    {question: 'what city in France is the Eiffel Tower located in?', answer:'Paris'},
    {question: 'where is Yosemite National Park located?', answer :'California'}
];

const randomIdx = Math.round(Math.random() * triviaQuestion.length -1);

firstQuestion = prompt(triviaQuestion[randomIdx].question); {
alert('You answered ' + firstQuestion + ' the correct answer was ' + triviaQuestion[randomIdx].answer);
}

const arrayOfQuestions = triviaQuestion.concat(firstQuestion);
console.log(arrayOfQuestions);

