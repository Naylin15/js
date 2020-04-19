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
    checkNote();

}

function checkNote() {
    let check = document.getElementById('noteContainer');
    
    if (check) {
        check.remove();
        displayNotes();
    } else {
        displayNotes();
    }
}

function displayNotes() {

    let noteContainer = document.createElement("div");
    noteContainer.setAttribute("class", "noteContainer grid-container");
    noteContainer.setAttribute("id", "noteContainer")
    document.getElementById('notes').appendChild(noteContainer);

    for (i=0; i < notes.length; i++){

        let noteArticle = document.createElement("article");
        noteArticle.setAttribute("class", "note grid-x grid-margin-x");
        noteArticle.setAttribute("id", i)
        document.getElementById('noteContainer').appendChild(noteArticle);
        
        let checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("class", " checkbox small-2")
        
        let titleTag = document.createElement("h2");
        let titleContent = document.createTextNode(notes[i].title);
        titleTag.setAttribute("class", "small-2 medium-4 cell");
        titleTag.appendChild(titleContent);
        
        let descriptionTag = document.createElement("p");
        let descriptionContent = document.createTextNode(notes[i].description);
        descriptionTag.setAttribute("class", "small-2 medium-4 cell");
        descriptionTag.appendChild(descriptionContent);
    
        let removeButton = document.createElement("button");
        removeButton.setAttribute("class", "removeNote icon-bin alert button");
        removeButton.setAttribute("onclick", "removeNote(this.parentElement.id)");
            
        let editButton = document.createElement("button");
        editButton.setAttribute("class", "editButton icon-edit button");
        editButton.setAttribute("onclick", "editNote(this.parentElement.id)");

        document.getElementById(i).appendChild(checkbox);
        document.getElementById(i).appendChild(titleTag);
        document.getElementById(i).appendChild(descriptionTag);
        document.getElementById(i).appendChild(removeButton);
    
        document.getElementById(i).appendChild(editButton);
    }

}

function removeNote(parentId) {
    
    document.getElementById(parentId).remove();

    notes.splice(parentId, 1);
    checkNote();
}

function editNote(parentId) {

    let saveButton = document.getElementById("saveButton-" + parentId);

    if(saveButton == null) {
        let siblings = document.getElementById(parentId).childNodes;
        siblings[1].contentEditable = true;
        siblings[2].contentEditable = true;
    
        let saveButton = document.createElement("button");
        saveButton.setAttribute("class", "saveChanges icon-save success button");
        saveButton.setAttribute("id", "saveButton-" + parentId);
        saveButton.setAttribute("onclick", "saveNote(this.id)");
      
        document.getElementById(parentId).appendChild(saveButton);    
    } else {
        warningMessage(parentId);
    
    }

}

function warningMessage(parentId) {

    let warning = document.createElement("div");
    warning.setAttribute("class", "alertMessage callout warning small-12");
    warning.setAttribute("data-closable", "")

    let header = document.createElement("h5");
    header.innerHTML = "Warning";

    let paragraph = document.createElement("p");
    paragraph.innerHTML = "The note is alredy being edited";
    
    let closeButton = document.createElement("button");
    closeButton.setAttribute("class", "close-button");
    closeButton.setAttribute("type", "button");
    closeButton.setAttribute("data-close", "");
    closeButton.innerHTML = "x";

    document.getElementById(parentId).appendChild(warning);
    warning.appendChild(header);
    warning.appendChild(paragraph);
    warning.appendChild(closeButton);
    
}

function saveNote(id) {
    let i = document.getElementById(id).parentElement.id;
    
    let siblings = document.getElementById(i).childNodes;
 
    notes[i].title = siblings[1].innerHTML;
    notes[i].description = siblings[2].innerHTML;

    siblings[1].removeAttribute("contentEditable");
    siblings[2].removeAttribute("contentEditable");
    document.getElementById("saveButton-" + i).remove();

}
