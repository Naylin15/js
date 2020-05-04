import { checkNote } from './checkNote';
import { notes } from './index';

export function removeNote(parent) {
    let parentId = parent.parentElement.parentElement.parentElement.id;
    document.getElementById(parentId).remove();

    notes.splice(parentId, 1);
    checkNote();
}
