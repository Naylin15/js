import { saveNote } from '../src/saveNote';
import { displayNotes } from '../src/displayNotes/index';
import { checkNote } from '../src/checkNote';
jest.mock('../src/index');
jest.mock('../src/displayNotes/index');
jest.mock('../src/checkNote');

test('save note', () => {

    document.body.innerHTML ='<div id="notes"><article id="0"><div><div><div><input type="text" id="editInput-0" value="abcd"/><button class="ui positive icon button" id="saveButton-0"></button></div></div></div></article></div>';

    saveNote(document.getElementById('saveButton-0').parentElement);
    const saveButton = document.getElementById('saveButton-0');
    const editInput = document.getElementById('editInput-0');

    expect(editInput).toBe(null);
    expect(saveButton).toBe(null);
    expect(displayNotes).toHaveBeenCalled();
    expect(checkNote).toHaveBeenCalled();
});