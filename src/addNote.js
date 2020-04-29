import { notes } from './index.js';
import { checkNote } from './checkNote.js';

export var addNote = function(e) {  
    console.log("Hi from addNote " + notes)
    e.preventDefault();
    let noteTitle = document.getElementById('noteTitle').value;

    notes.push({
        title: noteTitle,
    });
    console.log(notes);
    document.getElementById('form-add').reset();
    checkNote();

}
