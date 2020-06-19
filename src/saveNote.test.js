import { saveNote } from '../src/saveNote';
import { notes } from '../src/index';
import * as index from '../src/index';
import * as check from '../src/checkNote';
jest.mock('../src/checkNote');
jest.mock('../src/index');

test('save note', () => {

    index.notes[0] = [{ title: 'abc' }];

    document.body.innerHTML ='<div id="notes"><article id="0"><div><div><div><input type="text" id="editInput-0" value="abcd"/><button class="ui positive icon button" id="saveButton-0"></button></div></div></div></article></div>';

    saveNote(document.getElementById('saveButton-0').parentElement);
    const editInput = document.getElementById('editInput-0');
    const saveButton = document.getElementById('saveButton-0');
    
    expect(editInput).toBe(null);
    expect(saveButton).toBe(null);
    expect(notes[0].title).toBe('abcd');
    expect(check.checkNote).toHaveBeenCalled();
});