import createFirstColumn from '../../src/displayNotes/createFirstColumn';

test('create first column', () => {
    document.body.innerHTML = '<div id="container"></div>';
    const title = 'abc';

    let firstColumn = createFirstColumn(0, title);
    const divContainer = document.getElementById('container');
    divContainer.appendChild(firstColumn);

    expect(divContainer.innerHTML).toBe('<div class="column"><div class="ui two column grid"><div class="two wide column right aligned"><input type="checkbox" id="checkbox-0" class="ui checkbox"></div><div class="fourteen wide column"><h2>abc</h2></div></div></div>');
});