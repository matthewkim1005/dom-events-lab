/*-------------------------------- Constants --------------------------------*/

const buttons = document.querySelectorAll('.button');
const calculator = document.querySelector('#calculator');
const display = document.querySelector('.display');

/*-------------------------------- Variables --------------------------------*/

let currentValue = '';
let total = '';
let operatorSign = '';

/*------------------------ Cached Element References ------------------------*/

display.append(currentValue);

/*----------------------------- Event Listeners -----------------------------*/

//adds a assigns and adds a function to all the buttons
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      console.log(event.target.innerText);
    });
  });

calculator.addEventListener('click', (event) => {
    //console.log(event.target.innerText);
    display.innerHTML = '';
    if (event.target.className === 'button number') {
      currentValue += event.target.innerText;
      display.innerHTML = currentValue;
    } else if (event.target.className === 'button operator') {
        operator(event.target.innerHTML);
    } else if (event.target.className === 'button equals') {
        equal();
    }

    if (event.target.classList.contains('number')) {

    }
  });
    
/*-------------------------------- Functions --------------------------------*/

function clearDisplay() {
  display.innerHTML = '';
  currentValue = '';
}

function resetCalculator() {
  display.innerHTML = '';
  currentValue = '';
  total = '';
  operatorSign = ''
}

function operator(op) {
  total = Number(currentValue);
  if (op === '+') {
    operatorSign = '+';
  } else if (op === '-') {
    operatorSign = '-';
  } else if (op === '*') {
    operatorSign = '*';
  } else if (op === '/') {
    operatorSign = '/';
  } else if (op === 'C') {
    resetCalculator();
  }
  clearDisplay();
  display.innerHTML = operatorSign;
}

function equal() {
  if (currentValue === '') {
    display.innerHTML = 0;
  } else if (operatorSign === '+') {
    total += Number(currentValue);
    display.innerHTML = total;
  } else if (operatorSign === '-') {
    total -= Number(currentValue);
    display.innerHTML = total;
  } else if (operatorSign === '*') {
    total *= Number(currentValue);
    display.innerHTML = total;
  } else if (operatorSign === '/') {
    total /= Number(currentValue);
    display.innerHTML = total;
  }
  currentValue = total;
}