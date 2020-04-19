let notes = [];

const form = document.getElementById('form-add');
form.addEventListener('submit', addNote);

function addNote(e) {  
    e.preventDefault()  
    let noteTitle = document.getElementById('noteTitle').value;

    notes.push({
        title: noteTitle,
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
        
        let noteArticle = createHTML({
            type: "article",
            attributes: [
                {
                    type: "class",
                    value: "note grid-x grid-margin-x"
                },
                {
                    type: "id",
                    value: i
                }
            ]
        });
        document.getElementById('noteContainer').appendChild(noteArticle);
        
        let checkbox = createHTML({
            type: "input",
            attributes: [
                {
                    type: "type",
                    value: "checkbox"
                },
                {
                    type: "class",
                    value: "checkbox small-2"
                }
            ]
        });
        document.getElementById(i).appendChild(checkbox);
        
        let titleTag = createHTML({
            type: "h2",
            attributes: [
                {
                    type: "class",
                    value: "small-2 medium-4 cell"
                }
            ],
            description: notes[i].title
        });
        document.getElementById(i).appendChild(titleTag);
        
        let removeButton = createHTML({
            type: "button",
            attributes: [
                {
                    type: "class",
                    value: "removeNote icon-bin alert button"
                },
                {
                    type: "onclick",
                    value: "removeNote(this.parentElement.id)"
                }
            ]
        });
        document.getElementById(i).appendChild(removeButton);
        
        let editButton = createHTML({
            type: "button",
            attributes: [
                {
                    type: "class",
                    value: "editButton icon-edit button"
                },
                {
                    type: "onclick",
                    value: "editNote(this.parentElement.id)"
                }
            ]
        });
        document.getElementById(i).appendChild(editButton);
    }

}

function createHTML(content) {
    let newElement = document.createElement(content.type);
    if (content.attributes) {
        content.attributes.forEach(attribute => {
            newElement.setAttribute(attribute.type, attribute.value);
            
        });
    }
    if (content.description) {
        let descriptionContent = document.createTextNode(content.description);
        newElement.appendChild(descriptionContent);

    }
    return newElement;
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
    
        let saveButton = createHTML({
            type: "button",
            attributes: [
                {
                    type: "class",
                    value: "saveChanges icon-save success button"
                },
                {
                    type: "id",
                    value: "saveButton-" + parentId
                },
                {
                    type: "onclick",
                    value: "saveNote(this.id)"
                }
            ]
        });
        document.getElementById(parentId).appendChild(saveButton);    
      
    } else {
        warningMessage(parentId);
    }
}

function warningMessage(parentId) {
    let warning = createHTML({
        type: "div",
        attributes: [
            {
                type: "class",
                value: "alertMessage callout warning small-12"
            },
            {
                type: "data-closable"
            }
        ]
    });
    document.getElementById(parentId).appendChild(warning);

    let warningHeader = createHTML({
        type: "h5",
        description: "Warning"
    });
    warning.appendChild(warningHeader);

    let warningContent = createHTML({
        type: "p",
        description: "The note is alredy being edited"
    });
    warning.appendChild(warningContent);

    let closeButton = createHTML({
        type: "button",
        attributes: [
            {
                type: "class",
                value: "close-button"
            },
            {
                type: "type",
                value: "button"
            },
            {
                type: "data-close"
            }
        ],
        description: "x"
    });
    warning.appendChild(closeButton);

    setTimeout(function() {
        $(".alertMessage").fadeOut("3000", warning.remove());
    }, 3000
    );
}

function saveNote(id) {
    let i = document.getElementById(id).parentElement.id;
    
    let siblings = document.getElementById(i).childNodes;
 
    notes[i].title = siblings[1].innerHTML;

    siblings[1].removeAttribute("contentEditable");
    document.getElementById("saveButton-" + i).remove();
}
