const quizData = [
    {
        question: 'how old is Gbemi?',
        a: '12',
        b: '45',
        c: '23',
        d: '26',
        correct: 'c'

    },{
        question: 'what is the  full meaning of HTML',
        a: 'Hyperlink men language',
        b: 'HyperText Markup Lnanguage',
        c: 'HypeTo Mark Lan',
        d: 'Healing The MerchLin',
        correct: 'b'

    },{
        question: 'What is the most used programming language?',
        a: 'Javascript',
        b: 'Java',
        c: 'C++',
        d: 'Python',
        correct: 'a'

    },{
        question: 'What does CSS stands for?',
        a: 'Cascading Style Sum',
        b: 'Cashier Sin Sum',
        c: 'Creeping Sun Sheet',
        d: 'Cascading Style Sheet',
        correct: 'd'

    },
]
const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById("a-text")
const b_text = document.getElementById('b-text')
const c_text = document.getElementById('c-text')
const d_text = document.getElementById('d-text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
   
}
function getSelected() {
   

    let answer = undefined

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
         answer = answerEl.id
        }
        
    });
    return answer
}
function deselectAnswers() {
    answerEls.forEach((answerEl) => {
       
         answerEl.checked = false
        
        
    });
}
submitBtn.addEventListener('click', () => {
    
   const answer = getSelected()
   
   
   if (answer === quizData[currentQuiz].correct ) {
       score++
   }
   if (answer) {
        currentQuiz++

        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
             quiz.innerHTML =
              `<h2>You answered correctly at ${score} / ${quizData.length}
              questions.</h2> 
              <button onClick="location.reload()">Reload</button>`
        }
    }
   
    
})