const  triviaQuestion = [
    {question: 'what is the name of the famous clock tower in London?', answer: 'Big Ben'},
];

const firstQuestion = prompt(triviaQuestion[0].question); {
alert('You answered ' + firstQuestion + ' the correct answer was ' + triviaQuestion[0].answer );
}

const arrayOfQuestions = triviaQuestion.concat(firstQuestion);
const newArrayOfQuestions = arrayOfQuestions.concat();
console.log(newArrayOfQuestions); 


