import { addNote } from './addNote';
// import { removeNote } from './removeNote';

export var notes = [];
const form = document.getElementById('form-add');
form.addEventListener('submit', addNote);
