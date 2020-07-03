import { removeNote } from '../src/removeNote';
import { checkNote } from '../src/checkNote';
import { displayNotes } from '../src/displayNotes/index';
jest.mock('../src/checkNote');
jest.mock('../src/displayNotes/index');

test('remove note', () => {

    document.body.innerHTML =
    '<div id="notes"><article class="article ui two column stackable grid" id="0"><div class="item" id="removeNote-0">Delete</div></article></div>';
    const removeNoteEvent = document.getElementById('removeNote-0');
    removeNoteEvent.addEventListener('click', function(){removeNote(0);});
    removeNoteEvent.click();

    let removedNote = document.getElementById('0');

    expect(removedNote).toBe(null);
    expect(checkNote).toHaveBeenCalled();
    expect(displayNotes).toHaveBeenCalled();
});