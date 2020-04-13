let notes = [];

const form = document.getElementById('form-add');
form.addEventListener('submit', addNote);

function addNote(e) {  
    e.preventDefault()  
    let noteTitle = document.getElementById('noteTitle').value;
    let noteDescription = document.getElementById('noteDescription').value;

    notes.push({
        title: noteTitle,
        description: noteDescription
    })
    document.getElementById('form-add').reset();
    displayNotes();

}

function displayNotes() {

    let i = notes.length - 1;

    let noteContainer = document.createElement("article");
    noteContainer.setAttribute("class", "note");
    noteContainer.setAttribute("id", i)
    document.getElementById('notes').appendChild(noteContainer);

    let titleTag = document.createElement("h2");
    let titleContent = document.createTextNode(notes[i].title);
    titleTag.appendChild(titleContent);
        
    let descriptionTag = document.createElement("p");
    let descriptionContent = document.createTextNode(notes[i].description);
    descriptionTag.appendChild(descriptionContent);

    let removeButton = document.createElement("button");
    removeButton.setAttribute("class", "removeNote icon-bin");
    removeButton.setAttribute("onclick", "removeNote(this.parentElement.id)");
        
    let editButton = document.createElement("button");
    editButton.setAttribute("class", "editButton icon-edit");
    editButton.setAttribute("onclick", "editNote(this.parentElement.id)");
    
    document.getElementById(i).appendChild(titleTag);
    document.getElementById(i).appendChild(descriptionTag);
    document.getElementById(i).appendChild(removeButton);

    document.getElementById(i).appendChild(editButton);
}

function removeNote(parentId) {
    
    document.getElementById(parentId).remove();

    notes.splice(parentId, 1);
    updateNoteId();
}

function updateNoteId() {
    let notesId = document.getElementsByClassName("note");
    for(i=0; i < notesId.length; i++) {
        notesId[i].id = i;
    }
}

function editNote(parentId) {

    let titleEdit = document.createElement("input");
    titleEdit.setAttribute("type", "text");
    titleEdit.setAttribute("class", "titleEdit");
    titleEdit.setAttribute("id", "newTitle")
    titleEdit.setAttribute("value", notes[parentId].title);
        
    let descriptionEdit = document.createElement("input");
    descriptionEdit.setAttribute("type", "text");
    descriptionEdit.setAttribute("class", "descriptionEdit");
    descriptionEdit.setAttribute("id", "newDescription");
    descriptionEdit.setAttribute("value", notes[parentId].description); 

    let saveButton = document.createElement("button");
    saveButton.setAttribute("class", "saveChanges icon-save");
    saveButton.setAttribute("id", "saveButton-" + parentId);
    saveButton.setAttribute("onclick", "saveNote(this.id)");

    document.getElementById(parentId).appendChild(titleEdit);
    document.getElementById(parentId).appendChild(descriptionEdit);    
    document.getElementById(parentId).appendChild(saveButton);    
}

function saveNote(id) {
    let i = document.getElementById(id).parentElement.id;
    
    let siblings = document.getElementById(i).childNodes;
 
    let newTitle = document.getElementById("newTitle").value;
    notes[i].title = newTitle;

    let newDescription = document.getElementById("newDescription").value;
    notes[i].description = newDescription;

    siblings[0].innerHTML = notes[i].title;
    siblings[1].innerHTML = notes[i].description;
    document.getElementById("newTitle").remove();
    document.getElementById("newDescription").remove();
    document.getElementById("saveButton-" + i).remove();

}
