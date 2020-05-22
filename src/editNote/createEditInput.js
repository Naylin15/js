import createHTML from '../createHtml';

export default function createEditInput(parentId, title) {
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
                        value: title
                    }
                ]
            }
        }
    });
    return editInput;
}