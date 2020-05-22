import createHTML from '../createHtml';

export default function createSaveButton(parentId) {
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
    return saveButton;
}