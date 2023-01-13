const guessElement = document.getElementById('guess');
const guessButton = document.getElementById('guess-button');

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;


const recognition = new SpeechRecognition();

recognition.lang = 'pt-br';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(e) {
   guess = e.results[0][0].transcript
   display(guess)
   checkGuess(guess)
};

function display(guess) {
   guessElement.innerHTML = 
   `
   <div>you said:</div>
      <span class="box">${guess}</span>
      `
   };

function checkGuess(guess) {
   const guessNumber = +guess

   if (Number.isNaN(guessNumber)) {
      guessElement.innerHTML += '<div>Invalid number</div>'
   } else if (guessNumber > highestNumber || guessNumber < lowestNumber) {
      guessElement.innerHTML += '<div>Number is out of range</div>'
   } else if (guessNumber === secretNumber) {
      document.body.innerHTML =
      `
      <h2>Correct!</h2>
      <h3>The secret number was ${secretNumber}</h3>
      <button class="button" id="play-again">Play again</button>
      `  
   } else if (guessNumber > secretNumber) {
      guessElement.innerHTML += '<div>The secret number is lower <i class="fa-solid fa-down-long"></i></div>'
   } else if (guessNumber < secretNumber) {
      guessElement.innerHTML += '<div>The secret number is higher <i class="fa-solid fa-up-long"></i></div>'
   }
   
};

guessButton.addEventListener('click', () => recognition.start());
document.body.addEventListener('click', e => {
   if (e.target.id == 'play-again') {
      window.location.reload()
   }
});