const lowestNumber = 90;
const highestNumber = 100;
const secretNumber = generateRandomNumber();

function generateRandomNumber() {
   var number = parseInt(Math.random() * highestNumber + 1)

   if (number < lowestNumber) {
      do {
         number = parseInt(Math.random() * highestNumber + 1)
      } while (number < lowestNumber);
   }
   return number
};

const lowestNumberElement = document.getElementById('lowest-value');
lowestNumberElement.innerHTML = lowestNumber;

const highestNumberElement = document.getElementById('highest-value');
highestNumberElement.innerHTML = highestNumber;
