import { checkNote } from '../src/checkNote';
import * as display from '../src/displayNotes/index';
jest.mock('../src/displayNotes/');

test('check note with noteContainer', () => {
    document.body.innerHTML =
    `<div id="noteContainer">
    </div>`;
    checkNote();
    let check = document.getElementById('noteContainer');
    expect(check).toBe(null);
    expect(display.displayNotes).toBeCalled();
});


test('check note without noteContainer', () => {
    checkNote();
    expect(display.displayNotes).toHaveBeenCalled();
});