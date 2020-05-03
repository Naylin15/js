import { notes } from './index';
import { checkNote } from './checkNote';

export var saveNote = function(parent) {
    let i = parent.parentElement.parentElement.parentElement.id;
    let newTitle = document.getElementById("editInput-" + i);
    notes[i].title = newTitle.value;

    document.getElementById("saveButton-" + i).remove();
    document.getElementById("editInput-" + i).remove();
    checkNote();

}