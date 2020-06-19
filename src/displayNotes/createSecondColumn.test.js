import createSecondColumn from '../../src/displayNotes/createSecondColumn';

test('create second column', () => {
    document.body.innerHTML = '<div id="0"></div>';

    let secondColumn = createSecondColumn(0);
    const divContainer = document.getElementById('0');
    divContainer.appendChild(secondColumn);

    expect(divContainer.innerHTML).toBe(`<div class="column"><div class="ui two column center aligned grid"><div class="center aligned column"><div class="ui dropdown labeled icon button" id="noteCategory-0"><i class="tag icon"></i><div class="menu"><div class="scrolling menu"><div class="item" data-value="important"><div class="ui red empty circular label"></div><span>Important</span></div><div class="item" data-value="tomorrow"><div class="ui yellow empty circular label"></div><span>Tomorrow</span></div><div class="item" data-value="later"><div class="ui blue empty circular label"></div><span>Later</span></div></div></div><span class="text">Category</span></div><div class="ui dropdown"><i class="ellipsis vertical icon"></i><div class="menu"><div class="scrolling menu"><div class="item" id="removeNote-0">Delete</div><div class="item" id="editNote-0">Edit</div></div></div></div></div></div></div>`);
});