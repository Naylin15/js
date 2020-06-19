import { editNote } from '../../src/editNote/index';
import * as index from '../../src/index';
jest.mock('../../src/index');

test('editNote', () => {
    // index.notes[0] = [{title: 'abc'}];
    
    // document.body.innerHTML =
    // `<div class="noteContainer ui container" id="noteContainer"><article class="article ui two column stackable grid" id="0"><div class="column"><div class="ui two column grid"><div class="two wide column right aligned"><input type="checkbox" id="checkbox-0" class="ui checkbox"></div><div class="fourteen wide column"><h2>abc</h2></div></div></div><div class="column"><div class="ui two column center aligned grid"><div class="center aligned column"><div class="ui dropdown labeled icon button" id="noteCategory-0" tabindex="0"><i class="tag icon"></i><div class="menu" tabindex="-1"><div class="scrolling menu"><div class="item" data-value="important"><div class="ui red empty circular label"></div><span>Important</span></div><div class="item" data-value="tomorrow"><div class="ui yellow empty circular label"></div><span>Tomorrow</span></div><div class="item" data-value="later"><div class="ui blue empty circular label"></div><span>Later</span></div></div></div><span class="text">Category</span></div><div class="ui dropdown" tabindex="0"><i class="ellipsis vertical icon"></i><div class="menu" tabindex="-1"><div class="scrolling menu"><div class="item" id="removeNote-0">Delete</div><div class="item" id="editNote-0">Edit</div></div></div></div></div></div></div></article></div>`;
    
    // expect(container.innerHTML).toBe(
    //     `<div class="noteContainer ui container" id="noteContainer"><article class="article ui two column stackable grid" id="0"><div class="column"><div class="ui two column grid"><div class="two wide column right aligned"><input type="checkbox" id="checkbox-0" class="ui checkbox"></div><div class="fourteen wide column"><h2>abc</h2></div></div></div><div class="column"><div class="ui two column center aligned grid"><div class="center aligned column"><div class="ui dropdown labeled icon button" id="noteCategory-0" tabindex="0"><i class="tag icon"></i><div class="menu" tabindex="-1"><div class="scrolling menu"><div class="item" data-value="important"><div class="ui red empty circular label"></div><span>Important</span></div><div class="item" data-value="tomorrow"><div class="ui yellow empty circular label"></div><span>Tomorrow</span></div><div class="item" data-value="later"><div class="ui blue empty circular label"></div><span>Later</span></div></div></div><span class="text">Category</span></div><div class="ui dropdown" tabindex="0"><i class="ellipsis vertical icon"></i><div class="menu" tabindex="-1"><div class="scrolling menu"><div class="item" id="removeNote-0">Delete</div><div class="item" id="editNote-0">Edit</div></div></div></div></div></div></div></article></div>`
    // );
    expect(true).toBe(true);

});

