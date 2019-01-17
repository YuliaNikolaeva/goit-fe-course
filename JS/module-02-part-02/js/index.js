'use strict';


const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd', '111'];
let attempts = 3;
let userInput;


do {
  userInput = prompt('Введите пароль', '');
  attempts -= 1;
  const hasPassword = passwords.includes(userInput);

  if (hasPassword) {
    alert('Добро пожаловать!')
    break
  } else if (attempts === 0) {
    alert('У вас закончились попытки, аккаунт заблокирован!');
    break;
  } else if (userInput === null) {
    break
  } else {
    alert(`Неверный пароль, у вас осталось ${attempts} попыток`);
  }

} while (userInput !== null && attempts > 0);
