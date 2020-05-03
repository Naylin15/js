import { checkNote } from './checkNote';
import { notes } from './index';
// import { displayNotes } from './displayNotes.js';
console.log("hello from remove note");
export var removeNote = function(parent) {
    let parentId = parent.parentElement.parentElement.parentElement.id;
    document.getElementById(parentId).remove();

    notes.splice(parentId, 1);
    checkNote();
}

// export default removeNote;