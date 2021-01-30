const  triviaQuestion = [
    {question: 'what is the name of the famous clock tower in London?', answer: 'Big Ben'},
    {question: 'what city in France is the Eiffel Tower located in?', answer:'Paris'},
    {question: 'where is Yosemite National Park located?', answer :'California'}
];

const firstQuestion = prompt(triviaQuestion[0].question); {
alert('You answered ' + firstQuestion + ' the correct answer was ' + triviaQuestion[0].answer );
}

const arrayOfQuestions = triviaQuestion.concat(firstQuestion);
console.log(arrayOfQuestions); 


