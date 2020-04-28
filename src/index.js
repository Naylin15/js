import { addNote } from './addNote.js';

export var notes = [];
console.log("Hi from index.js ");
console.log(notes);
const form = document.getElementById('form-add');
form.addEventListener('submit', addNote);
