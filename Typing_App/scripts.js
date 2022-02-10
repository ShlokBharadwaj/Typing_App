const RANDOM_WORD_API_URL = "https://random-word-api.herokuapp.com/word?number=10&swear=0"
const wordsDisplayElements = document.getElementById('wordsDisplay')
const wordsInputElements = document.getElementById('wordsInput')


function getRandomWords(){
    return fetch(RANDOM_WORD_API_URL)
    .then(response => response.json())
}


async function generateNewWords(){
    const words = await getRandomWords()
    //console.log((words.slice(0,10)).join(' '));
    wordsDisplayElements.innerText = words.slice(0,10).join(' ');
    wordsInputElements.value = null;
    words.split('').forEach(character => {
        const characterSpan = document.createElement('span')
        characterSpan.innerText = character
        wordsDisplayElements.appendChild(characterSpan)
    });
    
} 

generateNewWords();