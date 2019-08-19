import {renderNoteList} from './view';
import ref from './ref';
import {PRIORITY_TYPES} from '../js/utils/constants';
import Notepad from './notepad-model';
import initialNotes from '../assets/notes.json';

const shortid = require('shortid');

const notepad = new Notepad(initialNotes);

renderNoteList(ref.list, initialNotes);


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
      id: shortid.generate(),
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