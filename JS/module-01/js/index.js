'use strict';

const adminLogin = 'admin';
const adminPassword = 'm4ngo1zh4ackz0r';
const loginInput = 'Пожалуйста, укажите логин';
const passInput = 'Пожалуйста, укажите пароль';
const messageCancelUser = 'Отменено пользователем!';
const messageWrongLogin = 'Доступ запрещен, неверный логин';
const messаgeWrongPassword = 'Доступ запрещен, неверный пароль!';
const messageWelcome = 'Добро пожаловать!';

const enterLoginInput = prompt(loginInput);
if (enterLoginInput === adminLogin) {
 const enterPassInput = prompt(passInput); {
    if (enterPassInput === adminPassword) {
      alert(messageWelcome);
    } else if (enterPassInput === null) {
      alert(messageCancelUser);
    } else {
      alert(messаgeWrongPassword);
    }
}
} else if (enterLoginInput === null) {
    alert(messageCancelUser);
} else {
    alert(messageWrongLogin);
}
