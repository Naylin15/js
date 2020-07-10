import { checkNote } from './checkNote';
import { displayNotes } from './displayNotes';
import { notes, addNoteToArray } from './index';

export function addNote(e) {
    e.preventDefault();
    let noteTitle = document.getElementById('noteTitle').value;

    let notesArray = addNoteToArray(noteTitle, notes);

    document.getElementById('form-add').reset();
    checkNote();
    displayNotes(notesArray);
}
