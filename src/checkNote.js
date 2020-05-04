import { displayNotes } from './displayNotes/';

export function checkNote() {
    let check = document.getElementById('noteContainer');
    
    if (check) {
        check.remove();
        displayNotes();
    } else {
        displayNotes();
    }
}