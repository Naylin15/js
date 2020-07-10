import { checkNote } from './checkNote';
import { notes, removeObjectNote } from './index';
import { displayNotes } from './displayNotes';

export function removeNote(noteId) {
    document.getElementById(noteId).remove();
    checkNote();
    displayNotes(removeObjectNote(noteId, notes));
}
