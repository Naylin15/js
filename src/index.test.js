import { changeTitle, addNoteToArray, removeObjectNote } from '../src/index';

test('change title', () => {
   let notes = [{title: "a"}];

   const note = changeTitle(0, "abc", notes);
   expect(note).toStrictEqual([{title: "abc"}]);

});

test('add note to array', () => {
    let notesArray = [];
    const note = addNoteToArray("abc", notesArray);

    expect(note).toStrictEqual([{ title: "abc"}]);

});

test('remove note from array', () => {
    let notesArray = [{title: "abc"}, {title: "def"}];
    const removedNote = removeObjectNote(0, notesArray);

     expect(removedNote).toStrictEqual([{ title: "def"}]);

});