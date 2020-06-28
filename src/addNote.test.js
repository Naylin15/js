import { addNote } from '../src/addNote';
import * as index from '../src/index';
import * as check from '../src/checkNote';
jest.mock('../src/checkNote');
jest.mock('../src/index');
jest.mock('../src/displayNotes/index');


test('add note', () => {
    document.body.innerHTML =
    `<form id="form-add">
    <input type="text" name="noteTitle" id="noteTitle" value="abc">
    <button type="submit" id="button">Add</button>
    </form>
    <div id="notes">
    </div>`;

    const form = document.getElementById('form-add');
    form.addEventListener('submit', addNote);
    const addButton = document.getElementById('button');
    addButton.click();

    expect(index.addNoteToArray).toHaveBeenCalledWith("abc");
    expect(check.checkNote).toHaveBeenCalled();

});