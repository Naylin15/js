import { checkNote } from '../src/checkNote';

test('check note with noteContainer', () => {
    document.body.innerHTML = `<div id="noteContainer"></div>`;
    checkNote();
    let noteContainer = document.getElementById('noteContainer');
    expect(noteContainer).toBe(null);
});


test('check note without noteContainer', () => {
    let noteContainer = document.getElementById('noteContainer');
    checkNote();
    expect(noteContainer).toBe(null);
});