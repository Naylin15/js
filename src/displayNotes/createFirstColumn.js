import createHTML from '../createHtml';

export default function createFirstColumn(parentId, title) {
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
                                type: "id",
                                value: "checkbox-" + parentId
                            },
                            {
                                type: "class",
                                value: "ui checkbox"
                            }
                        ]
                    }
                },
                siblings: [{
                    type: "div",
                    attributes: [{
                        type: "class",
                        value: "fourteen wide column"
                    }],
                    innerTag: {
                        type: "h2",
                        description: title
                    }
                }]
            }
    });
    return firstColumn;
}