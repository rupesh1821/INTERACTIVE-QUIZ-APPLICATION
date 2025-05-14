const quizData = [
    {
      question: "What does HTML stand for?",
      a: "Hyper Text Markup Language",
      b: "Home Tool Markup Language",
      c: "Hyperlinks and Text Markup Language",
      d: "Hyper Tool Multi Language",
      correct: "a"
    },
    {
      question: "Which language is used for styling web pages?",
      a: "HTML",
      b: "JQuery",
      c: "CSS",
      d: "XML",
      correct: "c"
    },
    {
      question: "Which is not a JavaScript Framework?",
      a: "Python Script",
      b: "JQuery",
      c: "NodeJS",
      d: "ReactJS",
      correct: "a"
    },
    {
      question: "Which is used for Connect To Database?",
      a: "PHP",
      b: "HTML",
      c: "JS",
      d: "All",
      correct: "a"
    }
  ];
  
  const quiz = document.getElementById("quiz");
  const answerEls = document.querySelectorAll(".answer");
  const questionEl = document.getElementById("question");
  const a_text = document.getElementById("a_text");
  const b_text = document.getElementById("b_text");
  const c_text = document.getElementById("c_text");
  const d_text = document.getElementById("d_text");
  const submitBtn = document.getElementById("submit");
  
  let currentQuiz = 0;
  let score = 0;
  
  loadQuiz();
  
  function loadQuiz() {
    deselectAnswers();
  
    const currentQuizData = quizData[currentQuiz];
  
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
  }
  
  function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
  }
  
  function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
      if (answerEl.checked) {
        answer = answerEl.id;
      }
    });
    return answer;
  }
  
  submitBtn.addEventListener("click", () => {
    const answer = getSelected();
  
    if (answer) {
      if (answer === quizData[currentQuiz].correct) {
        score++;
      }
  
      currentQuiz++;
  
      if (currentQuiz < quizData.length) {
        loadQuiz();
      } else {
        quiz.innerHTML = `
          <h2>You answered ${score}/${quizData.length} questions correctly</h2>
          <button onclick="location.reload()">Reload</button>
        `;
      }
    } else {
      alert("Please select an answer!");
    }
  });
  