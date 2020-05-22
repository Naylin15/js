import createEditInput from '../../src/editNote/createEditInput';

test('create edit input', () => {
    document.body.innerHTML =
    '<div id="container">' +
    '</div>';
    let notes = [];
    notes.push({
        title: 'abc'
    });

    let editInput = createEditInput(0, notes[0].title);
    const divContainer = document.getElementById('container');
    divContainer.appendChild(editInput);

    expect(divContainer.innerHTML).toBe(
        '<div class="ui twelve wide column">' +
        '<div class="ui fluid input">' +
        '<input type="text" id="editInput-0" value="abc">' +
        '</div>' +
        '</div>'
    );
});