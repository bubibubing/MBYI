const buildQuiz = () => {
  // variable to store the HTML output
  const output = [];

  // for each question...
  questions.forEach((currentQuestion, questionNumber) => {
    // variable to store the list of possible answers
    const answers = [];

    // and for each available answer...
    currentQuestion.answers.forEach((answer, index) => {

      // ...add an HTML radio button
      answers.push(
        `<label>
            <input id = "question${questionNumber}" type="radio" name="question${questionNumber}" value=${index}>
            ${answer} 
          </label>`
      );
    })

    // add this question and its answers to the output
    output.push(
      `<div class="slide">
          <div class="question"> ${currentQuestion.text} </div>
          <div class="answers"> ${answers.join("")} </div>
        </div>`
    );
  }
  );

  // finally combine our output list into one string of HTML and put it on the page
  document.getElementById('quiz').innerHTML = output.join('');
}


const showPage = (n) => {
  pages[currentPage].classList.remove('active-page');
  pages[n].classList.add('active-page');
  currentPage = n;
}
const showNextPage = () => {
  // saveAsPng
  showPage(currentPage + 1);
}

const startAction = ()=>{
  // console.log('a')
  showNextPage()
  showSlide(0)
}

const showSlide = (n) => {
  slides[currentSlide].classList.remove('active-slide');
  slides[n].classList.add('active-slide');
  currentSlide = n;
  if (currentSlide === 0) {
    previousButton.style.display = 'none';
  } else {
    previousButton.style.display = 'inline-block';
  }
  if (currentSlide === slides.length - 1) {
    nextButton.style.display = 'none';
    submitButton.style.display = 'inline-block';
  }
  else {
    nextButton.style.display = 'inline-block';
    submitButton.style.display = 'none';
  }
}


const showNextSlide = () => {
  console.log("show next");
  // console.log("question"+currentSlide)
  const currQ = document.getElementsByName("question"+currentSlide)
  // querySelector('input[name="question${currentSlide}"]:checked').value
  // .getElementById('question'+(currentSlide))
  console.log(currQ)
  let selected  = false;
  currQ.forEach(element => {
    if(element.checked){
      selected = true
    }
  });
  if(selected){
    showSlide(currentSlide + 1);
  }else{
    window.alert('你还没有选择答案哟')
  }
}

const showPreviousSlide = () => {
  showSlide(currentSlide - 1);
}

// input should be an array of answers' number (A->0, B->1, C->2, D->3), e.g. [0,3,...]
const calcuateResult = (input) => {
  if (input.length !== 8) {
    console.error(
      "请填写所有问题！"
    );
    return;
  }

  const results = {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    E: 0,
    F: 0,
    G: 0,
  }
  input.forEach((value, index) => {
    const questionScore = scores[index].score[value];
    results[questionScore.result] += questionScore.point;
  });

  return maxResult(results);
}

const maxResult = (dict) => {
  // convert dict to array
  let items = Object.keys(dict).map((key) => {
    return [key, dict[key]];
  });

  // Sort the array based on the second element
  items.sort((first, second) => {
    return second[1] - first[1];
  });

  return items[0][0];
}

const showResults = () => {
  // gather answer containers from our quiz
  showNextPage();
  const answerContainers = quizContainer.querySelectorAll('.answers');

  const answers = [];
  questions.forEach((_, questionNumber) => {
    // find selected answer
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;
    answerContainer.querySelector(selector).checked = false;
    answers.push(userAnswer);
  });


  let finalAnswer = calcuateResult(answers)
  
  const result = [];
  console.log(username)
  result.push(


    ` 
    <div>${username.value}</div>
     <div style="margin-top:30%"> ${finalAnswer} </div>
     <div class = "result-block">
     <div class = "description"></div>
     <div class = "result-img" style = ""></div>
    </div>
`
  );

  document.getElementById('results').innerHTML = result.join('');

}

const backToHome = ()=>{
  // currentPage = 0;
  showPage(0)
  // buildQuiz()
  showSlide(0)

  console.log(currentPage)
  // if (currentPage !== 4) {
  //   saveButtons.style.display = 'none';
  // }
  // console.log(currentPage)
}

const savePoster = ()=>{
  console.log('save poster')
  const resultPoster = document.getElementById('resultPoster');
  saveAsPng(node, { filename: 'Report', printDate: true });

}

const showPoster = ()=>{
showNextPage();
results.push(
  `<div>
  <div></>
    </div>`
);
}

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

// buildQuiz();
buildQuiz()

const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
const pages = document.querySelectorAll(".page");
let currentSlide = 0;
// showSlide(currentSlide);

const startButton = document.getElementById("start-btn");
const backToHomeButton = document.getElementById("backToHomeButton");
const showPosterButton = document.getElementById("showPosterButton");
const saveButton = document.getElementById("saveButton");
const saveButtons = document.getElementById("saveButtons")
const username = document.getElementById("username")
let currentPage = 0;

showPage(currentPage);



// Event listeners
submitButton.addEventListener('click', showResults);
previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);
startButton.addEventListener("click", startAction);
showPosterButton.addEventListener("click",showNextPage);
backToHomeButton.addEventListener("click", backToHome)
saveButton.addEventListener("click", savePoster)