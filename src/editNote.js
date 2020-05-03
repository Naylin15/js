import { notes } from './index';
import { createHTML } from './displayNotes';
import { warningMessage } from './warningMessage';

function editNote(parent) {
    let parentId = parent.parentElement.parentElement.parentElement.id;
    let saveButton = document.getElementById("saveButton-" + parentId);
    document.getElementById("editButton-" + parentId).remove();

    if(saveButton == null) {
        let siblings = document.getElementById(parentId).childNodes;
        let editInput = createHTML({
            type: "div",
            attributes: [
                {
                    type: "class",
                    value: "ui twelve wide column"
                }
            ],
            innerTag: {
                type: "div",
                attributes: [
                    {
                        type: "class",
                        value: "ui fluid input"
                    }
                ],
                innerTag: {
                    type: "input",
                    attributes: [
                        {
                            type: "type",
                            value: "text"
                        },
                        {
                            type: "id",
                            value: "editInput-" + parentId
                        },
                        {
                            type: "value",
                            value: notes[parentId].title
                        }
                    ]
                }
            }
        });
        siblings[0].firstChild.childNodes[1].remove();
        siblings[0].firstChild.childNodes[0].insertAdjacentElement("afterend", editInput);
        
        let saveButton = createHTML({
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
                            value: "ui positive icon button"
                        },
                        {
                            type: "id",
                            value: "saveButton-" + parentId
                        },
                        {
                            type: "onclick",
                            value: "saveNote(this.parentElement)"
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
                }
            });
            siblings[1].firstChild.childNodes[1].insertAdjacentElement("afterend", saveButton);
      
    } else {
        warningMessage(parentId);
    }
}