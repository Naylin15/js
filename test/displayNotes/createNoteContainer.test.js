import createNoteContainer from '../../src/displayNotes/createNoteContainer';

test('create second column', () => {
    document.body.innerHTML =
    '<div id="container">' +
    '</div>';

    let noteContainer = createNoteContainer();
    const divContainer = document.getElementById('container');
    divContainer.appendChild(noteContainer);

    expect(divContainer.innerHTML).toBe(
        '<div class="noteContainer ui container" id="noteContainer">' +
        '</div>');
});

// import { displayNotes } from '../../src/displayNotes';

// test('create note', () => {
//     document.body.innerHTML =
//     '<div id="notes">' +
//     '</div>';
//     let notes = [];
//     notes.push({
//         title: 'abc'
//     });

//     let note = displayNotes();
//     const divContainer = document.getElementById('notes');
//     divContainer.appendChild(note);

//     expect(divContainer.innerHTML).toBe(
//         '<div class="noteContainer ui container" id="noteContainer">' +
//         '<article class="article ui two column stackable grid" id="0">' +
//         '<div class="column"><div class="ui two column grid"><div class="two wide column right aligned"><input type="checkbox" id="checkbox-0" class="ui checkbox"></div><div class="fourteen wide column"><h2>abc</h2></div></div></div>' +
//         '<div class="column">' +
//             '<div class="ui two column center aligned grid">' +
//                 '<div class="center aligned column">' +
//                     '<div class="ui dropdown" tabindex="0">' +
//                     '<i class="tag icon"></i>'+
//                     '<div class="menu" tabindex="-1">' +
//                     '<div class="scrolling menu">' +
//                     '<div class="item">' +
//                     '<div class="ui red empty circular label"></div><span>Important</span></div>' +
//                     '<div class="item">' +
//                     '<div class="ui blue empty circular label"></div><span>Later</span></div>' +
//                     '</div>' +
//                     '</div>' +
//                     '</div>' +
//                     '<div class="ui dropdown" tabindex="0">' +
//                     '<i class="ellipsis vertical icon"></i>' +
//                     '<div class="menu" tabindex="-1">' +
//                     '<div class="scrolling menu">' +
//                     '<div class="item" id="removeNote-0">Delete</div>' +
//                     '<div class="item" id="editNote-0">Edit</div>' +
//                     '</div>' +
//                     '</div>' +
//                     '</div>' +
//                 '</div>' +
//             '</div>' +
//         '</div>' +
//         '</article>' +
//         '</div>'
//     );
// });

// import { editNote } from '../../src/editNote/index';

// test('edit note', () => {
//     document.body.innerHTML =
//     '<div id="container">' +
//     '<article class="article ui two column stackable grid" id="0"><div class="column"><div class="ui two column grid"><div class="two wide column right aligned"><input type="checkbox" id="checkbox-0" class="ui checkbox"></div><div class="fourteen wide column"><h2>abc</h2></div></div></div><div class="column"><div class="ui two column center aligned grid"><div class="center aligned column"><div class="ui dropdown" tabindex="0"><i class="tag icon"></i><div class="menu" tabindex="-1"><div class="scrolling menu"><div class="item"><div class="ui red empty circular label"></div><span>Important</span></div><div class="item"><div class="ui blue empty circular label"></div><span>Later</span></div></div></div></div><div class="ui dropdown" tabindex="0"><i class="ellipsis vertical icon"></i><div class="menu" tabindex="-1"><div class="scrolling menu"><div class="item" id="removeNote-0">Delete</div><div class="item" id="editNote-0">Edit</div></div></div></div></div></div></div></article>' +
//     '</div>';
    

//     let editingNote = editNote(0);
//     const divContainer = document.getElementById('container');
//     divContainer.appendChild(editingNote);

//     expect(divContainer.innerHTML).toBe(
//         '<article class="article ui two column stackable grid" id="0"><div class="column"><div class="ui two column grid"><div class="two wide column right aligned"><input type="checkbox" id="checkbox-0" class="ui checkbox"></div><div class="ui twelve wide column"><div class="ui fluid input"><input type="text" id="editInput-0" value="abc"></div></div></div></div><div class="column"><div class="ui two column center aligned grid"><div class="column"><button class="ui positive icon button" id="saveButton-0"><i class="save outline icon"></i></button></div><div class="center aligned column"><div class="ui dropdown" tabindex="0"><i class="tag icon"></i><div class="menu" tabindex="-1"><div class="scrolling menu"><div class="item"><div class="ui red empty circular label"></div><span>Important</span></div><div class="item"><div class="ui blue empty circular label"></div><span>Later</span></div></div></div></div><div class="ui dropdown active visible" tabindex="0"><i class="ellipsis vertical icon"></i><div class="menu transition visible" tabindex="-1" style="display: block !important;"></div></div></div></div></div></article>'
//     );
// });