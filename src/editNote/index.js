import { notes } from '../index';
import { saveNote } from '../saveNote';
import createEditInput from './createEditInput';
import createSaveButton from './createSaveButton';

export function editNote(parent) {
    let parentId = parent.parentElement.parentElement.parentElement.id;
    document.getElementById("editButton-" + parentId).parentElement.remove();

    let siblings = document.getElementById(parentId).childNodes;
    let editInput = createEditInput(parentId, notes[parentId].title);
    siblings[0].firstChild.childNodes[1].remove();
    siblings[0].firstChild.childNodes[0].insertAdjacentElement("afterend", editInput);

    let saveButton = createSaveButton(parentId);
    siblings[1].childNodes[0].firstChild.insertAdjacentElement("afterend", saveButton);
    const saveButtonEvent = document.getElementById('saveButton-' + parentId);
    saveButtonEvent.addEventListener('click', function(){saveNote(this.parentElement)});
}