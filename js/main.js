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
    noteContainer.setAttribute("class", "noteContainer ui container");
    noteContainer.setAttribute("id", "noteContainer")
    document.getElementById('notes').appendChild(noteContainer);

    for (i=0; i < notes.length; i++){
        
        let noteArticle = createHTML({
            type: "article",
            attributes: [
                {
                    type: "class",
                    value: "ui equal width centered center aligned grid"
                },
                {
                    type: "id",
                    value: i
                }
            ]
        });
        document.getElementById('noteContainer').appendChild(noteArticle);
        
        let checkbox = createHTML({
            type: "div",
            attributes: [
                {
                    type: "class",
                    value: "column"
                }],
            innerTag: {
                type: "input",
                attributes: [
                    {
                        type: "type",
                        value: "checkbox"
                    },
                    {
                        type: "class",
                        value: "checkbox"
                    }
                ]
            }
        });
        document.getElementById(i).appendChild(checkbox);

        let titleTag = createHTML({
            type: "div",
            attributes: [
                {
                    type: "class",
                    value: "column"
                }],
            innerTag: {
                type: "h2",
                description: notes[i].title
            },
        });
        document.getElementById(i).appendChild(titleTag);
        
        let removeButton = createHTML({
            type: "div",
            attributes: [
                {
                    type: "class",
                    value: "column"
                }],
            innerTag: {
                type: "button",
                attributes: [
                    {
                        type: "class",
                        value: "ui negative icon button"
                    },
                    {
                        type: "onclick",
                        value: "removeNote(this.parentElement)"
                    }
                ],
                innerTag: {
                    type: "i",
                    attributes: [
                        {
                            type: "class",
                            value: "trash alternate icon"
                        }
                    ]
                }
            }
        });
        document.getElementById(i).appendChild(removeButton);
        
        let editButton = createHTML({
            type: "div",
            attributes: [
                {
                    type: "class",
                    value: "column"
                }],
            innerTag: {
                type: "button",
                attributes: [
                    {
                        type: "class",
                        value: "ui secondary icon button"
                    },
                    {
                        type: "onclick",
                        value: "editNote(this.parentElement)"
                    }
                ],
                innerTag: {
                    type: "i",
                    attributes: [
                        {
                            type: "class",
                            value: "edit outline icon"
                        }
                    ]
                }
            }
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
    if (content.innerTag){
        let insideTag = createHTML(content.innerTag);
        newElement.appendChild(insideTag);
    }
    if (content.description) {
        let descriptionContent = document.createTextNode(content.description);
        newElement.appendChild(descriptionContent);
    }
    return newElement;
}

function removeNote(parent) {
    let parentId = parent.parentElement.id;
    document.getElementById(parentId).remove();

    notes.splice(parentId, 1);
    checkNote();
}

function editNote(parent) {
    let parentId = parent.parentElement.id;
    let saveButton = document.getElementById("saveButton-" + parentId);

    if(saveButton == null) {
        let siblings = document.getElementById(parentId).childNodes;

        let editInput = createHTML({
            type: "input",
            attributes: [
                {
                    type: "id",
                    value: "editInput-" + parentId
                },
                {
                    type: "value",
                    value: notes[parentId].title
                }
            ]
        });
        // function insertAfter(newNode, referenceNode) {
            test = siblings[0].nextSibling;
            console.log("test " + test)
            test.parentNode.insertBefore(editInput, siblings[1].nextSibling);
        // }
        document.getElementById(parentId).appendChild(editInput);
        siblings[1].remove();
    
        let saveButton = createHTML({
            type: "button",
            attributes: [
                {
                    type: "class",
                    value: "ui positive icon button"
                },
                {
                    type: "id",
                    value: "saveButton-" + parentId
                },
                {
                    type: "onclick",
                    value: "saveNote(this.id)"
                }
            ],
            innerTag: {
                type: "i",
                attributes: [
                    {
                        type: "class",
                        value: "save outline icon"
                    }
                ]
            }
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
    
    let newTitle = document.getElementById("editInput-" + i);
    notes[i].title = newTitle.value;

    document.getElementById("saveButton-" + i).remove();
    document.getElementById("editInput-" + i).remove();
    checkNote();

}
