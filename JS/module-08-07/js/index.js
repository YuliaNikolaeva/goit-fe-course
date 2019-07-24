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


const root = document.querySelector('#root');

const createDivBox = (i) => {
  const divBox = document.createElement('div');
  divBox.classList.add('box');
  divBox.style.display = 'inline-block';
  divBox.style.margin = 10 + 'px';

  divBox.style.background = makeColor();
  divBox.style.width = makeWidth(30, 10, i);
  divBox.style.height = makeHeight(30, 10, i);

  return divBox;
};

const makeColor = () => {
  const [r, g, b] = [
    Math.round(Math.random() * 255),
    Math.round(Math.random() * 255),
    Math.round(Math.random() * 255),
  ];

  const randomColor = `rgb(${r}, ${g}, ${b})`;
  return randomColor;
};


const makeWidth = (width, step, i) => {
  let widthDiv = width;
  widthDiv = widthDiv + (i * step)  + 'px';
  return widthDiv;
}

const makeHeight = (height, step, i) => {
  let heightDiv = height;
  heightDiv = height + (i * step)  + 'px';
  return heightDiv;
}


const createBoxes = (num) => {
  for (let i = 0; i < num; i+=1) {

    root.appendChild(createDivBox(i));

  };
};

createBoxes(4);
