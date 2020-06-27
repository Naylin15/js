import { checkNote } from './checkNote';
import { displayNotes } from './displayNotes';
import { addNoteToArray } from './index';

export function addNote(e) {
    e.preventDefault();
    let noteTitle = document.getElementById('noteTitle').value;

    let notesArray = addNoteToArray(noteTitle);

    document.getElementById('form-add').reset();
    checkNote();
    displayNotes(notesArray);
}
