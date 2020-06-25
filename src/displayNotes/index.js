import { removeNote } from '../removeNote';
import { editNote } from '../editNote/';
import isFinished from './finishedStyle';
import createNoteArticle from './createNoteArticle';
import createFirstColumn from './createFirstColumn';
import createSecondColumn from './createSecondColumn';
import createNoteContainer from './createNoteContainer';
import addCategory from  '../noteCategory/addCategory';

export function displayNotes(notesArray) {
    let noteContainer = createNoteContainer();
    document.getElementById('notes').appendChild(noteContainer);
    for (let i=0; i < notesArray.length; i++){
        
        let noteArticle = createNoteArticle(i);
        document.getElementById('noteContainer').appendChild(noteArticle);
        
        let firstColumn = createFirstColumn(i, notesArray[i].title);
        document.getElementById(i).appendChild(firstColumn);
        
        let secondColumn = createSecondColumn(i);
        document.getElementById(i).appendChild(secondColumn);
        $('.ui.dropdown').dropdown();

        const removeNoteEvent = document.getElementById('removeNote-' + i);
        removeNoteEvent.addEventListener('click', function(){removeNote(i);});
        const editNoteEvent = document.getElementById('editNote-' + i);
        editNoteEvent.addEventListener('click', function(){editNote(i);});
        const noteIsFinished = document.getElementById('checkbox-' + i);
        noteIsFinished.addEventListener( 'change', function() {
            isFinished(noteIsFinished, editNoteEvent);
        });
        const noteCategory = document.getElementById('noteCategory-' + i);
        noteCategory.addEventListener('click', function(){
            const noteC = $('#noteCategory-' + i).dropdown('get value');
            if (noteC !== "") {
               notesArray[i] = addCategory(notesArray[i], noteC);
            }
        });
    }
}
