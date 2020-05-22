import { notes } from '../index';

export default function addCategoy(id, categoryValue) {
    notes[id].category = categoryValue;
    console.log(notes[id]);
}