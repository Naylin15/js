import { notes } from './index';
import { checkNote } from './checkNote';

export function addNote(e) {
    e.preventDefault();
    let noteTitle = document.getElementById('noteTitle').value;

    notes.push({
        title: noteTitle,
    });

    document.getElementById('form-add').reset();
    checkNote();
}
