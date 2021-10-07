const answerTextEl = document.getElementById('text')
const btnagainEl = document.getElementById('btnagain')
const answerNumberEl = document.getElementById('number')
const guessInputEl = document.getElementById('guess')
const btnchekEl = document.querySelector('.check')
const messageEl = document.getElementById('message')
const scoreEl = document.querySelector('.score')
const highscoreEl = document.querySelector('.highscore')
const modalBgEl = document.querySelector('.modal-bg')
const modalcloseEl = document.querySelector('.modal-close')
const modalbtnokEl = document.querySelector('.btn-ok')

const modalBg1El = document.querySelector('.modal-bg1')
const modalclose1El = document.querySelector('.modal-close1')
const modalbtnok1El = document.querySelector('.btn-ok1')



// CHECK BUTTON
btnchekEl.addEventListener('click', checkNumber)
guessInputEl.addEventListener('keyup', (e)=>{
  if(e.keyCode === 13){
      return checkNumber()
  }
})
btnagainEl.addEventListener('click', gameAgain)
modalcloseEl.addEventListener('click', function(){
  modalBgEl.classList.remove('bg-active')
})
modalbtnokEl.addEventListener('click', function(){
  modalBgEl.classList.remove('bg-active')
})

//modal lose
modalclose1El.addEventListener('click', function(){
  modalBg1El.classList.remove('bg-active1')
})
modalbtnok1El.addEventListener('click', function(){
  modalBg1El.classList.remove('bg-active1')
})
// RANDOM NUMBER
let randomNumber = Math.floor(Math.random() * 20) +1
console.log(randomNumber)
// SCORE
let score = 20

// HIGH SCORE
let highscore = 0

function checkNumber() {
  if (randomNumber == guessInputEl.value) {
    modalBgEl.classList.add('bg-active')

    document.body.style.background = '#2dd5fc'
    answerNumberEl.textContent = randomNumber
    messageEl.textContent = 'Your are winner ! 🥇'
    
    if (highscore < score) {
      highscore = score
      highscoreEl.textContent = highscore
    }
  } else if (randomNumber < guessInputEl.value) {
    messageEl.textContent = 'You numeber is HIGHER ! ⛰'

    score-- 
    scoreEl.textContent = score
    return returAgainscore()
  } else {
    messageEl.textContent = 'You numeber is LOWER ! ⛰'

    score--
    scoreEl.textContent = score
    return returAgainscore()
  }
}

function returAgainscore(){
  if(score == 0){
    modalBg1El.classList.add('bg-active1')
   return youLose()
   
  }
}

function gameAgain() {
  randomNumber = Math.floor(Math.random() * 21)
  score = 20
  scoreEl.textContent = 20
  messageEl.textContent = 'Start guessing...'
  document.body.style.background = '#222'
  answerNumberEl.textContent = '?'
  guessInputEl.value = ''
}

function youLose(){
  
  score = 1
  messageEl.textContent = 'You lose..'
  document.body.style.background = '#ffa600'
  
}


