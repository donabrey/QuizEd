# QuizEd
A simple, JavaScript multiple choice quiz that can be embedded into any webpage.

**QuizEd** allows a developer to create a quiz with any number of multiple choice questions. The questions can have any number of answers. 

## Design
Two versions of the quiz are provided: vanilla javascript with no styling in index.html and a Bootstrap styled version in index-bootstrap.html. The Bootstrap version encloses the the question and answers in the Bootstrap card component.

## Settings
Settings are stored in the settings.js file in the js folder. There is a setting that allows the answers to be displayed in a random order so each time the question is viewed, the answers will be displayed in a different order.

The HTML page index.html contains a div with id 'quiz' which is where the quiz is displayed. It also contains a div with id 'results' which is where the results of the quiz are displayed on completion.

## Questions
The questions are presented from the questions.js file in the js folder. These could also be served from a database with the same structure if necessary.
