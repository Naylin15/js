import { addNote } from './addNote';
import { displayNotes } from './displayNotes';
import { checkNote } from './checkNote';

export var notes = [];

document.addEventListener('DOMContentLoaded', function () {
    $('.ui.dropdown').dropdown();
    const form = document.getElementById('form-add');
    form.addEventListener('submit', addNote);
    
    const categories = document.getElementById('categories');
    categories.addEventListener('click', function(){
        const noteCategory = $('#categories').dropdown('get value');
        displayByCategories(noteCategory);
    });
});

export function changeTitle(i, title) {
    let newArray = notes;
    newArray[i].title = title;
    return newArray;
}

export function addNoteToArray(noteTitle) {
    let newArray = notes;
    newArray.push({
        title: noteTitle,
    });
    return newArray;
}

export function removeObjectNote(i) {
    let newArray = notes;
    newArray.splice(i, 1);
    return newArray;
}


function displayByCategories(categoryName) {
    checkNote();
    if (categoryName == "all") {
        displayNotes(notes);
    } else {
        let categoryNotes = notes.filter(function(notes) {
            return notes.category === categoryName;
        });
        displayNotes(categoryNotes);
    }
}
