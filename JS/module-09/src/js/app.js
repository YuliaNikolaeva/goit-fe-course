'use strict';

const PRIORITY_TYPES = {
  LOW: 0,
  NORMAL: 1,
  HIGH: 2,
};

const ICON_TYPES = {
  EDIT: 'edit',
  DELETE: 'delete',
  ARROW_DOWN: 'expand_more',
  ARROW_UP: 'expand_less',
};

const NOTE_ACTIONS = {
  DELETE: 'delete-note',
  EDIT: 'edit-note',
  INCREASE_PRIORITY: 'increase-priority',
  DECREASE_PRIORITY: 'decrease-priority',
};

const initialNotes = [
  {
    id: 'id-1',
    title: 'JavaScript essentials',
    body:
      'Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc',
    priority: PRIORITY_TYPES.HIGH,
  },
  {
    id: 'id-2',
    title: 'Refresh HTML and CSS',
    body:
      'Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.',
    priority: PRIORITY_TYPES.NORMAL,
  },
  {
    id: 'id-3',
    title: 'Get comfy with Frontend frameworks',
    body:
      'First should get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.',
    priority: PRIORITY_TYPES.NORMAL,
  },
  {
    id: 'id-4',
    title: 'Winter clothes',
    body:
      "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
    priority: PRIORITY_TYPES.LOW,
  },
];


class Notepad {

  static generateUniqueId = () =>
  Math.random()
    .toString(36)
    .substring(2, 15) +
  Math.random()
    .toString(36)
    .substring(2, 15);


  constructor (notes) {
    this._notes = notes;
  }

  get notes() {
    return this._notes;
  };

  findNoteById(id) {
    return this._notes.find(note => note.id === id);
  };

  saveNote(note) {
    this._notes.push(note)
  };

  deleteNote(id) {
    return this._notes.filter(note => note.id !== id);
  };

  updateNoteContent(id, updatedContent) {
    if(this.findNoteById(id)) {
        return this._notes[this._notes.indexOf(this.findNoteById(id))] = 
        {...this.findNoteById(id),...updatedContent};
    };
};

  updateNotePriority(id, priority) {
    return this.findNoteById(id).priority = priority;
  };

  filterNotesByQuery(query) {
    return this._notes.filter(note => note.title.toLowerCase().includes(query.toLowerCase()) ||
    note.body.toLowerCase().includes(query.toLowerCase()));
  };


  filterNotesByPriority(priority) {
    return this._notes.filter(note => note.priority === priority);
  };

}

const notepad = new Notepad(initialNotes);

//--------- REFERENTS ---------

const ref = {
  form: document.querySelector('.note-editor'),
  formInputTitle: document.querySelector('input.note-editor__input'),
  formInputBody: document.querySelector('textarea.note-editor__input'),
  search: document.querySelector('.search-form'),
  list: document.querySelector('.note-list'),
  listItem: document.querySelector('.note-list__item'),
 
}

//--------- UI ---------

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


//--------- HENDLERS ---------

// Проверяет поля формы,
// добавляет новую запись в массив заметок,
// отправляет заметку на рендеринг
const onSubmitAddNote = (event) => {
  event.preventDefault();

  const invalidFieldsForm = 
  ref.formInputTitle.value.trim().length === 0 ||
  ref.formInputBody.value.trim().length === 0;

  if(invalidFieldsForm) {
    alert('Пожалуйста, заполните все поля формы');
  } else {
    const newNote = {
      id: Notepad.generateUniqueId(),
      title: ref.formInputTitle.value,
      body: ref.formInputBody.value,
      priority: PRIORITY_TYPES.LOW,
    };

    notepad.saveNote(newNote);

    renderNoteList(ref.list, newNote);

    ref.form.reset();
  };
};


// Удаляет запись
const onPressButtonDeleteNote = () => {

  if(event.target.textContent !== 'delete') return;

  notepad.deleteNote(event.target.closest('.note-list__item').dataset.id);
  event.target.closest('.note-list__item').remove();
};

// Ищет по заголовку и телу записи
const onSearching = ({target}) => {
  ref.list.innerHTML = '';
  renderNoteList(ref.list, notepad.filterNotesByQuery(target.value));
};


//--------- EVENTS ---------

ref.form.addEventListener('submit', onSubmitAddNote);
ref.list.addEventListener('click', onPressButtonDeleteNote);
ref.search.addEventListener('input', onSearching);