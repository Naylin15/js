import isFinished from '../../src/displayNotes/finishedStyle';

test('add styles to finished notes', () => {
    document.body.innerHTML =
    '<div class="column" id="divColumn">' +
    '<div class="ui two column grid">' +
    '<div class="two wide column right aligned">' +
    '<input type="checkbox" id="checkbox-0" class="ui checkbox">' +
    '</div>' +
    '</div>' +
    '</div>' +
    '<div class="column">' +
    '<div class="ui two column center aligned grid">' +
    '<div class="center aligned column">' +
    '<div class="ui dropdown"><i class="ellipsis vertical icon"></i>' +
    '<div class="menu">' +
    '<div class="scrolling menu">' +
    '<div class="item" id="removeNote-0">Delete</div>' +
    '<div class="item" id="editNote-0">Edit</div></div>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>';

    const divClass = document.getElementById('divColumn');
    const editNote = document.getElementById('editNote-0');
    const noteIsFinished = document.getElementById('checkbox-0');
    noteIsFinished.addEventListener( 'change', function() {
        isFinished(noteIsFinished, editNote);
    });

    noteIsFinished.click();

    expect(divClass.className).toBe('column finished');
    expect(editNote.className).toBe('hide');
});