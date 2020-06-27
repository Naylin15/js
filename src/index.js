import { addNote } from './addNote';

export var notes = [];
document.addEventListener('DOMContentLoaded', function () {
    $('.ui.dropdown').dropdown();
    const form = document.getElementById('form-add');
    form.addEventListener('submit', addNote);
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


// function displayByCategories(categoryName) {
//     var categoryNotes = notes.filter(function(notes){
//         return notes.category === categoryName;
//     });
// }
