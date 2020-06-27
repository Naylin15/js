import { changeTitle } from './index';
import { checkNote } from './checkNote';
import { displayNotes } from './displayNotes';

export function saveNote(parent) {
    let i = parent.parentElement.parentElement.parentElement.id;
    let newTitle = document.getElementById("editInput-" + i);

    document.getElementById("saveButton-" + i).remove();
    document.getElementById("editInput-" + i).remove();
    checkNote();
    displayNotes(changeTitle(i, newTitle.value));
}