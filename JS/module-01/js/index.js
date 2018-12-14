'use strict';


const adminLogin = 'admin';
const adminPassword = 'm4ngo1zh4ackz0r';

const loginInput = prompt('Пожалуйста, укажите логин');
const passwordInput = prompt('Пожалуйста, укажите пароль');

const messageCancelUser = 'Отменено пользователем!';
const messageWrongLogin = 'Доступ запрещен, неверный логин';
const messageCancel = 'Не тот пароль';
const messegeWrongLogin = 'Доступ запрещен, неверный логин!';
const messegeWrongPassword = 'Доступ запрещен, неверный пароль!';
const messegeWellcom = 'Добро пожаловать!';


const cancelLogin = loginInput === null;
const notCorrectLogin = loginInput !== adminLogin;
const correctLogin = loginInput === adminLogin;

const cancelPassword = passwordInput === null;
const notCorrectPassword = passwordInput !== adminPassword;
const correctPassword = passwordInput === adminPassword;

if (cancelLogin) {
    (messageCancelUser);
} else if (notCorrectLogin) {
    alert(messageWrongLogin);
} else if(correctLogin) {
    (passwordInput);
} else if (cancelPassword) {
    alert(messageCancelUser);
} else if (notCorrectPassword) {
    alert(notCorrectPassword);
} else if (correctPassword) {
    alert(messegeWellcom);
}