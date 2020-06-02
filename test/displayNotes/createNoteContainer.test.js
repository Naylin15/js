import createNoteContainer from '../../src/displayNotes/createNoteContainer';

test('create second column', () => {
    document.body.innerHTML = '<div id="container"></div>';

    let noteContainer = createNoteContainer();
    const divContainer = document.getElementById('container');
    divContainer.appendChild(noteContainer);

    expect(divContainer.innerHTML).toBe('<div class="noteContainer ui container" id="noteContainer"></div>');
});