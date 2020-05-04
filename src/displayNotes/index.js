import { notes } from '../index';
import { removeNote } from '../removeNote';
import { editNote } from '../editNote/';
import createNoteArticle from './createNoteArticle'
import createFirstColumn from './createFirstColumn';
import createSecondColumn from './createSecondColumn';
import createNoteContainer from './createNoteContainer';

export function displayNotes() {
    let noteContainer = createNoteContainer();
    document.getElementById('notes').appendChild(noteContainer);
    for (let i=0; i < notes.length; i++){
        
        let noteArticle = createNoteArticle(i);
        document.getElementById('noteContainer').appendChild(noteArticle);
        
        let firstColumn = createFirstColumn(notes[i].title);
        document.getElementById(i).appendChild(firstColumn);
        
        let secondColumn = createSecondColumn(i);
        document.getElementById(i).appendChild(secondColumn);

        const removeNoteEvent = document.getElementById('removeButton-' + i);
        removeNoteEvent.addEventListener('click', function(){removeNote(this.parentElement)});
        const editNoteEvent = document.getElementById('editButton-' + i);
        editNoteEvent.addEventListener('click', function(){editNote(this.parentElement)});
    }
}
