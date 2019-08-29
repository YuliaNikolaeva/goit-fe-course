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

  saveNote(note) {
    const promiseSaveNote = new Promise((resolve, reject) => {
      setTimeout(() => {
        this._notes.push(note);
        const addNoteinStorage = localStorage.setItem('allNotes', JSON.stringify(this._notes));

        resolve(this._notes);
        reject('ERR: note not added');
      }, 0);
    });

    promiseSaveNote
    .then((val) => {
      // return val
      console.log(val)
    })

    .catch((err) => {
      console.log(err)
    })

  };

  deleteNote(id) {
    const promiseDeleteNote = new Promise((resolve, reject) => {
      setTimeout(() => {
        const noteDelete = this._notes.splice(this.findNoteById(id), 1);

        resolve(this._notes); 
        reject('ERR: note not deleted');
      }, 0);
    });

    promiseDeleteNote
    .then((val) => {
      // return val
      console.log(val)
      
    })

    .catch((err) => {
      console.log(err)
    })
  };



  // deleteNote(id) {
  //   const noteDelete = this._notes.splice(this.findNoteById(id), 1);
  //   // Сохранила в переменную, если в будущем удаленную заметку
  //   // нужно будет использовать
  // };

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