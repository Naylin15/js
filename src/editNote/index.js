import { notes } from '../index';
import { saveNote } from '../saveNote';
import createEditInput from './createEditInput';
import createSaveButton from './createSaveButton';

export function editNote(noteId) {
    document.getElementById("editNote-" + noteId).parentElement.remove();

    let siblings = document.getElementById(noteId).childNodes;
    console.log(siblings);
    let editInput = createEditInput(noteId, notes[noteId].title);
    siblings[0].firstChild.childNodes[1].remove();
    siblings[0].firstChild.childNodes[0].insertAdjacentElement("afterend", editInput);

    let saveButton = createSaveButton(noteId);
    siblings[1].childNodes[0].firstChild.insertAdjacentElement("beforebegin", saveButton);
    const saveButtonEvent = document.getElementById('saveButton-' + noteId);
    saveButtonEvent.addEventListener('click', function(){saveNote(this.parentElement);});
}