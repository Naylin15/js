import { notes } from './index';
import { checkNote } from './checkNote';

export var addNote = function(e) {  
    console.log("Hi from addNote ")
    e.preventDefault();
    let noteTitle = document.getElementById('noteTitle').value;

    notes.push({
        title: noteTitle,
    });
    console.log(notes);
    document.getElementById('form-add').reset();
    checkNote();

}
