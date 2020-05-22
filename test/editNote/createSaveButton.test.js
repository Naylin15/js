import createSaveButton from '../../src/editNote/createSaveButton';

test('create save button', () => {
    document.body.innerHTML =
    '<div id="container">' +
    '</div>';

    let saveButton = createSaveButton(0);
    const divContainer = document.getElementById('container');
    divContainer.appendChild(saveButton);

    expect(divContainer.innerHTML).toBe(
        '<div class="column">' +
        '<button class="ui positive icon button" id="saveButton-0">' +
        '<i class="save outline icon">' +
        '</i>' +
        '</button>' +
        '</div>'
    );
});