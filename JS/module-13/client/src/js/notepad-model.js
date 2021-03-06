import * as api from './services/api';


export default class Notepad {
  constructor () {
    this._notes = [];
  }

  get() {
    return api.getNotes()
    .then(notes => {
      this._notes = notes;

      return  this._notes;
    });
  };

  findNoteById(id) {
    return this._notes.find(note => note.id === id);
  };

  saveNote(note) {
    return api.saveNote(note)
    .then(savedNote => {
      this._notes.push(savedNote);

      return savedNote;
    });
  };

  deleteNote(id) {
    return api.delNote(id)
    .then(() => {
      this._notes = this._notes.filter(note => note.id !== id);
    });
  };

  updateNoteContent(id, updatedContent) {
    if(this.findNoteById(id)) {
        return this._notes[this._notes.indexOf(this.findNoteById(id))] = 
        {...this.findNoteById(id),...updatedContent};
    };
  };

  updateNotePriority(id, priority) {
    return this.findNoteById(id).priority = priority
  };

  filterNotesByQuery(query) {
    return this._notes.filter(note => note.title.toLowerCase().includes(query.toLowerCase()) ||
    note.body.toLowerCase().includes(query.toLowerCase()));
  };

  filterNotesByPriority(priority) {
    return this._notes.filter(note => note.priority === priority);
  };
};