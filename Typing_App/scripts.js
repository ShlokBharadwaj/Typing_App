const RANDOM_WORD_API_URL = 'http://api.quotable.io/random'
const wordsDisplayElements = document.getElementById('wordsDisplay')
const wordsInputElements = document.getElementById('wordsInput')
const timerElement = document.getElementById('timer')

wordsInputElements.addEventListener('input', () => {
    const arrayQuote = wordsDisplayElements.querySelectorAll('span')
    const arrayValue = wordsInputElements.value.split('')

  let correct = true
  arrayQuote.forEach((characterSpan, index) => {
    const character = arrayValue[index]
    if (character == null) {
      characterSpan.classList.remove('correct')
      characterSpan.classList.remove('incorrect')
      correct = false
    } else if (character === characterSpan.innerText) {
      characterSpan.classList.add('correct')
      characterSpan.classList.remove('incorrect')
    } else {
      characterSpan.classList.remove('correct')
      characterSpan.classList.add('incorrect')
      correct = false
    }
})

if (correct) generateNewWords()
})

function getRandomWords(){
    return fetch(RANDOM_WORD_API_URL)
    .then(response => response.json())
    .then(data => data.content)
}

async function generateNewWords(){
         const words = await getRandomWords()

        wordsDisplayElements.innerHTML =  ''

        words.split('').forEach(character => {
            const characterSpan = document.createElement('span')
            characterSpan.innerText = character
            wordsDisplayElements.appendChild(characterSpan)
        })
        wordsInputElements.value=null
        startTimer()
} 

let startTime
function startTimer() {
  timerElement.innerText = 0
  startTime = new Date()
  setInterval(() => {
    timer.innerText = getTimerTime()
  }, 1000)
}

function getTimerTime() {
  return Math.floor((new Date() - startTime) / 1000)
}

generateNewWords();