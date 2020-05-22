require('../../semantic/out/components/dropdown');
const $ = require('jquery');
// jest.dontMock('jquery');
// jest.dontMock('../../semantic/out/components/dropdown');
import createSecondColumn from '../../src/displayNotes/createSecondColumn';

test('create second column', () => {
    document.body.innerHTML =
    '<div id="0">' +
    '</div>';
    

    let secondColumn = createSecondColumn(0);
    const divContainer = document.getElementById('0');
    divContainer.appendChild(secondColumn);
    $('.ui.dropdown').dropdown();
    

    expect(divContainer.innerHTML).toBe(
        '<div class="column">' +
            '<div class="ui two column center aligned grid">' +
                '<div class="center aligned column">' +
                    '<div class="ui dropdown" tabindex="0">' +
                    '<i class="tag icon"></i>'+
                    '<div class="menu" tabindex="-1">' +
                    '<div class="scrolling menu">' +
                    '<div class="item">' +
                    '<div class="ui red empty circular label"></div><span>Important</span></div>' +
                    '<div class="item">' +
                    '<div class="ui blue empty circular label"></div><span>Later</span></div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '<div class="ui dropdown" tabindex="0">' +
                    '<i class="ellipsis vertical icon"></i>' +
                    '<div class="menu" tabindex="-1">' +
                    '<div class="scrolling menu">' +
                    '<div class="item" id="removeNote-0">Delete</div>' +
                    '<div class="item" id="editNote-0">Edit</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</div>');
});