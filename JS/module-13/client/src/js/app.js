import MicroModal from 'micromodal';
import {Notyf} from 'notyf';
import 'notyf/notyf.min.css';

import ref from './ref';
import {PRIORITY_TYPES, NOTIFICATION_MESSAGES} from '../js/utils/constants';
import {createItemTemplate} from '../js/view';
import Notepad from './notepad-model';


const notyf = new Notyf();

const showForm = () => {
  MicroModal.show('note-editor-modal');
};

const notepad = new Notepad();

const saveNoteInLocalStorage = () => {
  localStorage.setItem('title', ref.formInputTitle.value);
  localStorage.setItem('body', ref.formInputBody.value);
};

ref.formInputTitle.value = localStorage.getItem('title') || '';
ref.formInputBody.value = localStorage.getItem('body') || '';

const getNotepad = () => {
  notepad.get().then(notes => {
    createItemTemplate(ref.list, notes)
  });
};

getNotepad();

// Проверяет поля формы, добавляет новую запись 
const onSubmitAddNote = (event) => {
  event.preventDefault();

  const invalidFieldsForm = 
  ref.formInputTitle.value.trim().length === 0 ||
  ref.formInputBody.value.trim().length === 0;

  if(invalidFieldsForm) {
    notyf.error(NOTIFICATION_MESSAGES.EDITOR_FIELDS_EMPTY);

  } else {
    const newNote = {
      title: ref.formInputTitle.value,
      body: ref.formInputBody.value,
      priority: PRIORITY_TYPES.LOW,
    };

    notepad.saveNote(newNote);
    createItemTemplate(ref.list, newNote);
    notyf.success(NOTIFICATION_MESSAGES.NOTE_ADDED_SUCCESS);

    ref.form.reset();
    MicroModal.close('note-editor-modal');
  };
};


// Удаляет запись
const onPressButtonDeleteNote = () => {

  if(event.target.textContent !== 'delete') return;

  notepad.deleteNote(event.target.closest('.note-list__item').dataset.id);
  event.target.closest('.note-list__item').remove();

  notyf.success(NOTIFICATION_MESSAGES.NOTE_DELETED_SUCCESS);
};

// Ищет по заголовку и телу записи
const onSearching = ({target}) => {
  ref.list.innerHTML = '';
  
  createItemTemplate(ref.list, notepad.filterNotesByQuery(target.value)); 
  
};


//--------- EVENTS ---------

ref.form.addEventListener('submit', onSubmitAddNote);
ref.form.addEventListener('keyup', saveNoteInLocalStorage);
ref.list.addEventListener('click', onPressButtonDeleteNote);
ref.search.addEventListener('input', onSearching);
ref.btnOpenForm.addEventListener('click', showForm);
