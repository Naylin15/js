import { addNote } from './addNote';

export var notes = [];
const form = document.getElementById('form-add');
form.addEventListener('submit', addNote);
