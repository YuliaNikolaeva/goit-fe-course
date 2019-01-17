'use strict';

let userInput;
const numbers = [];
let total = 0;

do {
  userInput = prompt('Введите число', '');
  if (isNaN(Number(userInput))) {
    alert('Было введено не число, попробуйте еще раз');
  } else {
    numbers.push(Number(userInput));
  }
} while (userInput !== null);

for(let item of numbers) {
total += item;
}

alert(`Общая сумма чисел равна ${total}`);

