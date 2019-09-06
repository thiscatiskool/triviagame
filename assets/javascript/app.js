
const questions = [
    {
      question: "How is steak cooked the best?",
      answers: {
        a: "rare",
        b: "meduim rare",
        c: "meduim",
        d: "meduim well",
      },
      correctAnswer: "b"
    },
    {
        question: "What is my favorite seafood?",
        answers: {
          a: "fish",
          b: "shrimp",
          c: "crab",
          d: "oysters",
        },
        correctAnswer: "c"
      },
      {
        question: "What sport has the smallest ball?",
        answers: {
          a: "football",
          b: "soccer",
          c: "beach volleyball",
          d: "tennis",
        },
        correctAnswer: "d"
      },
      {
        question: "What is the primary programming language I used to create this quiz?",
        answers: {
          a: "PHP",
          b: "HTML",
          c: "Javascript",
          d: "MYSQL",
        },
        correctAnswer: "c"
      },
];

var startButton = document.getElementById('start');
var timer = document.getElementById('timer')
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

//first thing to show up when opening the page

  startButton.onclick = function(){
    clearInterval()
      //add the timer here as well
      var minute = 0;
      var sec = 10;
      setInterval(function() {
        document.getElementById("timer").innerHTML = "QUIZ ENDS IN " + minute + " : " + sec;
        sec--;
        if (sec == 00) {
          minute--;
          sec = 60;
        }
          if (minute === 0, sec === 0) {
            showResults();
            clearInterval();
          
        }
      }, 1000);

  function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

    function showQuestions(questions, quizContainer){
        var output = [];
        var answers;
        for (var i = 0; i<questions.length; i++){
            answers=[];
            for(letter in questions[i].answers){
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
			          + '<div class="answers">' + answers.join('') + '</div>'
            );
        }
        console.log(output);
        console.log(quizContainer);
        quizContainer.innerHTML = output.join('');
    }

    function showResults(questions, quizContainer, resultsContainer){
      var answerContainers = quizContainer.querySelectorAll('.answers');

      var userAnswer = '';
      var numCorrect = 0;

      for(var i=0; i<questions.length; i++){

        // find selected answer
		    userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

        if (userAnswer===questions[i].correctAnswer){
          numCorrect++;
          answerContainers[i].style.color = 'green';
        } else {
          answerContainers[i].style.color = 'red';
        };
        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
      }

    }

    showQuestions(questions, quizContainer);

    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
    }
}

    //generates the quiz on the start click
    generateQuiz(questions, quizContainer, resultsContainer, submitButton)
}