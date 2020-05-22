import createNoteArticle from '../../src/displayNotes/createNoteArticle';

test('create second column', () => {
    document.body.innerHTML =
    '<div id="container">' +
    '</div>';

    let noteArticle = createNoteArticle(0);
    const divContainer = document.getElementById('container');
    divContainer.appendChild(noteArticle);

    expect(divContainer.innerHTML).toBe(
        '<article class="article ui two column stackable grid" id="0">' +
        '</article>');
});