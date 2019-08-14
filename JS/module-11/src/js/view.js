import ref from './ref';
import initialNotes from '../assets/notes.json';
import Notepad from './notepad-model';
import cardTemplate from '../templates/card.hbs';


const notepad = new Notepad(initialNotes);

const priorityText = (obj) => {
    switch (obj.priority) {
    case 0:
      obj.priority = 'Low';
    break;

    case 1:
      obj.priority = 'Normal';
    break;

    case 2:
      obj.priority = 'Hight';
    break;

    default:
      obj.priority = 'Unknown';
  }
}

const createItemTemplate = (list, cards) => {
  if (Array.isArray(cards)) {
  cards.map(card => priorityText(card));

  list.insertAdjacentHTML('beforeend',
  cards.map(card => cardTemplate(card)).join(''));

  } else {
    priorityText(cards);
    list.insertAdjacentHTML('beforeend', cardTemplate(cards));
  };

};

createItemTemplate(ref.list, initialNotes);


export {createItemTemplate, notepad};