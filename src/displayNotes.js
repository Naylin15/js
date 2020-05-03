import { notes } from './index';
import { removeNote } from './removeNote';

// question for gianfranco, when using webpack i was not defined
console.log("Hi from display notes");

var removeNoteEvent;

export var displayNotes = function() {
    let noteContainer = document.createElement("div");
    noteContainer.setAttribute("class", "note-container ui container");
    noteContainer.setAttribute("id", "noteContainer")
    document.getElementById('notes').appendChild(noteContainer);
    for (let i=0; i < notes.length; i++){
        
        let noteArticle = createHTML({
            type: "article",
            attributes: [
                {
                    type: "class",
                    value: "article ui two column stackable grid"
                },
                {
                    type: "id",
                    value: i
                }
            ]
        });
        document.getElementById('noteContainer').appendChild(noteArticle);
        
        let firstColumn = createHTML({
            type: "div",
            attributes: [{
                type: "class",
                value: "column"
            }],
            innerTag: {
                type: "div",
                attributes: [{
                    type: "class",
                    value: "ui two column grid"
                }],
                innerTag: {
                    type: "div",
                    attributes: [{
                        type: "class",
                        value: "two wide column right aligned"
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
                                value: "ui checkbox"
                            }
                        ]
                    }
                },
                siblings: {
                    type: "div",
                    attributes: [{
                        type: "class",
                        value: "fourteen wide column"
                    }],
                    innerTag: {
                        type: "h2",
                        description: notes[i].title
                    }
                }
            }
        });
        document.getElementById(i).appendChild(firstColumn);
        
        let secondColumn = createHTML({
            type: "div",
            attributes: [{
                type: "class",
                value: "column"
            }],
            innerTag: {
                type: "div",
                attributes: [{
                    type: "class",
                    value: "ui three column center aligned grid"
                }],
                innerTag: {
                    type: "div",
                    attributes: [{
                        type: "class",
                        value: "center aligned column"
                    }],
                    innerTag: {
                        type: "button",
                        attributes: [
                            {
                                type: "class",
                                value: "ui negative icon button"
                            },
                            {
                                type: "id",
                                value: "removeButton-" + i
                            }
                            // ,
                            // {
                            //     type: "onclick",
                            //     value: "removeNote(this.parentElement)"
                            // }
                        ],
                        innerTag: {
                            type: "i",
                            attributes: [{
                                type: "class",
                                value: "trash alternate icon"
                            }]
                        }
                    }
                },
                siblings: {
                    type: "div",
                    attributes: [{
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
                                type: "id",
                                value: "editButton-" + i
                            },
                            {
                                type: "onclick",
                                value: "editNote(this.parentElement)"
                            }
                        ],
                        innerTag: {
                            type: "i",
                            attributes: [{
                                type: "class",
                                value: "edit outline icon"
                            }]
                        }
                    }
                }
            }
        });
        document.getElementById(i).appendChild(secondColumn);
        removeNoteEvent = document.getElementById('removeNote-' + i);
        console.log(remoteNoteEvent);
        removeNoteEvent.addEventListener('onclick', function(){console.log("Hi on click")});
    }
}

export var createHTML = function(content) {
    let newElement = document.createElement(content.type);
    if (content.attributes) {
        content.attributes.forEach(attribute => {
            newElement.setAttribute(attribute.type, attribute.value);
            
        });
    }
    if (content.innerTag){
        let insideTag = createHTML(content.innerTag);
        newElement.appendChild(insideTag);
        if(content.siblings) {
            let sibling = createHTML(content.siblings);
            insideTag.insertAdjacentElement("afterend", sibling);
        }
    }
    if (content.description) {
        let descriptionContent = document.createTextNode(content.description);
        newElement.appendChild(descriptionContent);
    }
    return newElement;
}