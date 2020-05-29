import { removeNote } from '../src/removeNote';
import { notes } from '../src/index';


test('remove note', () => {
    jest.spyOn(notes, 'splice');

    document.body.innerHTML =
    '<div id="notes">' +
    `<article class="article ui two column stackable grid" id="0">
    <div class="item" id="removeNote-0">Delete</div>
    </article>` +
    '</div>';
    const removeNoteEvent = document.getElementById('removeNote-0');
    removeNoteEvent.addEventListener('click', function(){removeNote(0);});
    removeNoteEvent.click();

    let removedNote = document.getElementById('0');

    expect(removedNote).toBe(null);
    expect(notes.splice).toHaveBeenCalledWith(0, 1);
});