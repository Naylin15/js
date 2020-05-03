// const addNote = require("./addNote.js")

// // index.js

// let notes = [];

// const form = document.getElementById('form-add');
// form.addEventListener('submit', addNote);

// // addNote.js

// function addNote(e) {  
//     e.preventDefault()  
//     let noteTitle = document.getElementById('noteTitle').value;

//     notes.push({
//         title: noteTitle,
//     })
//     document.getElementById('form-add').reset();
//     checkNote();

// }

// // checkNote.js

// function checkNote() {
//     let check = document.getElementById('noteContainer');
    
//     if (check) {
//         check.remove();
//         displayNotes();
//     } else {
//         displayNotes();
//     }
// }

// // removeNote.js


function removeNote(parent) {
    let parentId = parent.parentElement.parentElement.parentElement.id;
    document.getElementById(parentId).remove();

    notes.splice(parentId, 1);
    checkNote();
}

// // editNote.js

// function editNote(parent) {
//     let parentId = parent.parentElement.parentElement.parentElement.id;
//     let saveButton = document.getElementById("saveButton-" + parentId);

//     if(saveButton == null) {
//         let siblings = document.getElementById(parentId).childNodes;
//         let editInput = createHTML({
//             type: "div",
//             attributes: [
//                 {
//                     type: "class",
//                     value: "ui twelve wide column"
//                 }
//             ],
//             innerTag: {
//                 type: "div",
//                 attributes: [
//                     {
//                         type: "class",
//                         value: "ui fluid input"
//                     }
//                 ],
//                 innerTag: {
//                     type: "input",
//                     attributes: [
//                         {
//                             type: "type",
//                             value: "text"
//                         },
//                         {
//                             type: "id",
//                             value: "editInput-" + parentId
//                         },
//                         {
//                             type: "value",
//                             value: notes[parentId].title
//                         }
//                     ]
//                 }
//             }
//         });
//         siblings[0].firstChild.childNodes[1].remove();
//         siblings[0].firstChild.childNodes[0].insertAdjacentElement("afterend", editInput);
        
//         let saveButton = createHTML({
//             type: "div",
//             attributes: [
//                 {
//                     type: "class",
//                     value: "column"
//                 }],
//                 innerTag: {
//                     type: "button",
//                     attributes: [
//                         {
//                             type: "class",
//                             value: "ui positive icon button"
//                         },
//                         {
//                             type: "id",
//                             value: "saveButton-" + parentId
//                         },
//                         {
//                             type: "onclick",
//                             value: "saveNote(this.parentElement)"
//                         }
//                     ],
//                     innerTag: {
//                         type: "i",
//                         attributes: [
//                             {
//                                 type: "class",
//                                 value: "save outline icon"
//                             }
//                         ]
//                     }
//                 }
//             });
//             siblings[1].firstChild.childNodes[1].insertAdjacentElement("afterend", saveButton);
      
//     } else {
//         warningMessage(parentId);
//     }
// }

// // warning Message

// function warningMessage(parentId) {
//     let warning = createHTML({
//         type: "div",
//         attributes: [
//             {
//                 type: "class",
//                 value: "ui centered row"
//             }
//         ],
//         innerTag: {
//             type: "div",
//             attributes: [
//                 {
//                     type: "class",
//                     value: "ui warning message"
//                 },
//             ],
//             innerTag: {
//                 type: "i",
//                 attributes: [
//                     {
//                         type: "class",
//                         value: "close icon"
//                     },
//                     {
//                         type: "onclick",
//                         value: "closeMessage(this.parentElement)"
//                     }
//                 ]
//             },
//             siblings: {
//                 type: "div",
//                 attributes: [
//                     {
//                         type: "class",
//                         value: "header"
//                     }
//                 ],
//                 description: "Warning! The note is already being edited"
//             }
//         }
//     });
//     document.getElementById(parentId).appendChild(warning);

//     setTimeout(function() {
//         $(".alertMessage").fadeOut("3000", warning.remove());
//     }, 3000
//     );
// }

// // closeMessage.js

// function closeMessage(parent) {
//     parent.parentElement.remove();
// }

// // saveNote.js

// function saveNote(parent) {
//     let i = parent.parentElement.parentElement.parentElement.id;
//     let newTitle = document.getElementById("editInput-" + i);
//     notes[i].title = newTitle.value;

//     document.getElementById("saveButton-" + i).remove();
//     document.getElementById("editInput-" + i).remove();
//     checkNote();

// }
