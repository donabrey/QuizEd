/* Questions presented in quiz
 * The number option determines the order of the questions.
 * There can be an unlimited number of questions.
 * There can be an unlimited number of answers to each question but there must be at least one.
 * There can be more than one correct answer but there must be at least one correct answer for the user to be able choose a correct answer.
 */
let questions = [
    {
        number: 1,
        question: 'What is the capital of Australia?',
        answers: [
            { answer: 'Sydney', correct: false },
            { answer: 'Canberra', correct: true },
            { answer: 'Perth', correct: false },
            { answer: 'Melbourne', correct: false }
        ]
    },
    {
        number: 2,
        question: 'What is the capital of New Zealand?',
        answers: [
            { answer: 'Auckland', correct: false },
            { answer: 'Christchurch', correct: false },
            { answer: 'Queenstown', correct: false },
            { answer: 'Wellington', correct: true }
        ]
    },
    {
        number: 3,
        question: 'What is the capital of the United States?',
        answers: [
            { answer: 'Washington D.C.', correct: true },
            { answer: 'Seattle', correct: false },
            { answer: 'New York', correct: false },
            { answer: ' San Francisco', correct: false }
        ]
    }
]
