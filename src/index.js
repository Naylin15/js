import { addNote } from './addNote.js';
//import { removeNote } from './removeNote.js';

export var notes = [];
const form = document.getElementById('form-add');
form.addEventListener('submit', addNote);
