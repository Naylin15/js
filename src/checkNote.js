import { displayNotes } from './displayNotes.js';

export var checkNote = function() {
    let check = document.getElementById('noteContainer');
    
    if (check) {
        check.remove();
        displayNotes();
    } else {
        displayNotes();
    }
}