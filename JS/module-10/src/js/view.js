import ref from './ref';
import {ICON_TYPES, NOTE_ACTIONS} from '../js/utils/constants';
import initialNotes from '../assets/notes.json';
import Notepad from './notepad-model';



const notepad = new Notepad(initialNotes);

// Создает элемент
const createElement = (tag, className) => {
  const createEl = document.createElement(tag);

  if (typeof className === 'string') {
    createEl.classList.add(className);
  } else {
    className.map(ElClassName => createEl.classList.add(ElClassName));
  }

  return createEl;
};


// Создает кнопку с иконкой
const createActionButton = (dataValue, textButton) => {
  const button = createElement('button', 'action');
  button.dataset.action = dataValue;

  const IconForButton = createElement('i', ['material-icons', 'action__icon']);
  IconForButton.textContent = textButton;

  button.append(IconForButton);

  return button;
};


// Создает текстовой блок
const createNoteContent = (note) => {
  const noteContentContainer = createElement('div', 'note__content');
  const title = createElement('h2', 'note__title');
  const innerText = createElement('p', 'note__body');

  title.textContent = note.title;
  innerText.textContent = note.body;

  noteContentContainer.append(title, innerText);

  return noteContentContainer;
};


// Создает футер и собирает комплект кнопок
const createNoteFooter = (note) => {
  const footer = createElement('footer', 'note__footer');
  const sectionPriorityButton = createElement('section', 'note__section');
  const notePriority = createElement('span', 'note__priority');

  switch (note.priority) {
    case 0:
    notePriority.textContent = 'Priority: Low';
    break;

    case 1:
    notePriority.textContent = 'Priority: Normal';
    break;

    case 2:
    notePriority.textContent = 'Priority: Hight';
    break;

    default:
    notePriority.textContent = 'Priority: Unknown';
  }

  const sectionActionsButton = createElement('section', 'note__section');

  sectionPriorityButton.append(
    createActionButton(NOTE_ACTIONS.DECREASE_PRIORITY, ICON_TYPES.ARROW_DOWN),
    createActionButton(NOTE_ACTIONS.INCREASE_PRIORITY, ICON_TYPES.ARROW_UP),
    notePriority,
  );

  sectionActionsButton.append(
    createActionButton(NOTE_ACTIONS.EDIT, ICON_TYPES.EDIT),
    createActionButton(NOTE_ACTIONS.DELETE, ICON_TYPES.DELETE),
  );

  footer.append(sectionPriorityButton, sectionActionsButton);

  return footer;
};


// Создает элемент списка <li> и собирает карточку записи
const createListItem = (note) => {
  const listItem = createElement('li', 'note-list__item');
  const noteContent = createElement('div', 'note');

  listItem.dataset.id = note.id;
 
  noteContent.append(createNoteContent(note), createNoteFooter(note));
  listItem.append(noteContent);

  return listItem;
};


// Добавляет элементы в <ul>
const renderNoteList = (listRef, notes) => {
  if (Array.isArray(notes)) {
    const renderList = notes.map(note => createListItem(note));
    listRef.append(...renderList);
  } else {
    listRef.append(createListItem(notes));
  };
};

renderNoteList(ref.list, initialNotes);

export {notepad, renderNoteList};