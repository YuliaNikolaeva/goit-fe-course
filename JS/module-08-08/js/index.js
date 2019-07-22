'use strict';

/*
  В HTML-документе уже есть тег с id="root" (вкладка HTML)
  
  Создайте функцию createBoxes(num), которая принимает 1 параметр num - число.
  
  Функция создает столько div, сколько указано в num и возвращает их в одном
  общем контейнере. После чего необходимо повесить результат работы функции
  в div с id="#root"
  
  Каждый div:
    - Имеет случайный rgb цвет фона
    - Размеры самого первого div - 30px на 30px.
    - Каждый следующий div после первого, должен быть шире и выше предыдущего
      на 10px
*/


//создать переменную рут
// создать возможность плодить 5 одимнаковых элементом
// создать возможность добавления элемента в рут
// создать стиль первого квадрата
// создать стиль добавления размера
// создать генератор цвета
// прикрутить генератор цвета к самому цвету


const num = 4;

const root = document.querySelector('#root');
console.log(root);

const arrDiv = Array(num).fill('div');

const createDiv = (el) => {
  const newDiv = document.createElement(el);
  newDiv.classList.add('box');
  return root.append(newDiv);
}


const elOfDiv = arrDiv.map(el => createDiv(el));


const makeColor = () => {
  const [r, g, b] = [
    Math.round(Math.random() * 255), 
    Math.round(Math.random() * 255), 
    Math.round(Math.random() * 255),
  ];
  const randomColor = `rgb(${r}, ${g}, ${b})`;
  return randomColor;
}

root.firstElementChild.classList.add('first');
root.firstElementChild.classList.remove('box');

const first = root.firstElementChild;
first.style.background = makeColor();

const arrBox = Array.from(document.body.querySelectorAll('.box'));

const addColorToBox = arrBox.forEach(elBox => elBox.style.background = makeColor());


const createSize = (val) => {
  const a = val += 10;
  const b = `${a}px`;
  return b;
}


const addWidth = arrBox.forEach(elBox => elBox.style.width = createSize(30, 10));
const addHeight = arrBox.forEach(elBox => elBox.style.height = createSize(30, 10));



// const num = 3;

// const root = document.querySelector('#root');
// console.log(root);

// const arrDiv = Array(num).fill('div');

// const createDiv = (el) => {
//   const newDiv = document.createElement(el);
//   newDiv.classList.add('box');
//   return root.append(newDiv);
// }


// const elOfDiv = arrDiv.map(el => createDiv(el));


// const makeColor = () => {
//   const [r, g, b] = [
//     Math.round(Math.random() * 255), 
//     Math.round(Math.random() * 255), 
//     Math.round(Math.random() * 255),
//   ];
//   const randomColor = `rgb(${r}, ${g}, ${b})`;
//   return randomColor;
// }

// root.firstElementChild.classList.add('first');
// root.firstElementChild.classList.remove('box');

// const first = root.firstElementChild;
// first.style.background = makeColor();

// const arrBox = Array.from(document.body.querySelectorAll('.box'));

// const addColorToBox = arrBox.forEach(elBox => elBox.style.background = makeColor());


// const createSize = (val) => {
//   const a = val += 10;
//   const b = `${a}px`;
//   return b;
// }


// const addWidth = arrBox.forEach(elBox => elBox.style.width = createSize(30, 10));
// const addHeight = arrBox.forEach(elBox => elBox.style.height = createSize(30, 10));






