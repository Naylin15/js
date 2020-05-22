jest.mock('../src/index');
import { addNote } from '../src/addNote';
test('add note', () => {
    document.body.innerHTML =
    `<form id="add-form">
    <input type="text" name="noteTitle" id="noteTitle" value="abc">
    <button type="submit" id="button">Add</button>
    </form>
    <div id="notes">
    </div>`;
    
    let notes = [];

    const addButton = document.getElementById('button');
    addButton.click();


    expect(notes[0].title).toBe('abc');
});