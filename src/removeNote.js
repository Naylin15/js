import { checkNote } from './checkNote';
import { notes } from './index';

export function removeNote(noteId) {
    document.getElementById(noteId).remove();
    notes.splice(noteId, 1);
    checkNote();
}
