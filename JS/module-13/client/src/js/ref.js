const ref = {
  form: document.querySelector('.note-editor'),
  formInputTitle: document.querySelector('input.note-editor__input'),
  formInputBody: document.querySelector('textarea.note-editor__input'),
  search: document.querySelector('.search-form'),
  list: document.querySelector('.note-list'),
  listItem: document.querySelector('.note-list__item'),
  btnOpenForm: document.querySelector('.page-header__button[data-action="open-editor"]'),
  btnFormSubmit: document.querySelector('.modal__btn[type="submit"]'),
};

export default ref;