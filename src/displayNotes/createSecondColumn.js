import { createHTML } from '../createHtml'

export default function createSecondColumn(parentId) {
    let newSecondColumn = createHTML ({
        type: "div",
            attributes: [{
                type: "class",
                value: "column"
            }],
            innerTag: {
                type: "div",
                attributes: [{
                    type: "class",
                    value: "ui two column center aligned grid"
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
                                value: "removeButton-" + parentId
                            }
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
                                value: "editButton-" + parentId
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
    return newSecondColumn;
}