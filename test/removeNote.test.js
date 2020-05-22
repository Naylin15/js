import { removeNote } from '../src/removeNote';

test('remove note', () => {
    document.body.innerHTML =
    '<div id="notes">' +
    '</div>';
    let notes = [];
    notes.push({
        title: 'abc'
    },
    {
        title: 'def'
    });

    let removingNote = removeNote(0);
    const divContainer = document.getElementById('notes');
    divContainer.appendChild(removingNote);
    let headerTag = document.getElementById(0).childNodes[0].childNodes[0].childNodes[1];
    expect(headerTag.innerHTML).toBe(
        '<h2>def</h2>'
    );
});