export default class Notepad {
  constructor (notes = []) {
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
    const noteDelete = this._notes.splice(this.findNoteById(id), 1);
    // Сохранила в переменную, если в будущем удаленную заметку
    // нужно будет использовать
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

};