import { createHTML } from '../createHtml';

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
                        type: "div",
                        attributes: [{
                                type: "class",
                                value: "ui dropdown"
                            }],
                        innerTag: {
                            type: "i",
                            attributes: [{
                                type: "class",
                                value: "tag icon"
                            }]
                        },
                        siblings: {
                            type: "div",
                            attributes: [{
                                type: "class",
                                value: "menu"
                            }],
                            innerTag: {
                                type: "div",
                                attributes: [{
                                    type: "class",
                                    value: "scrolling menu"
                                }],
                                innerTag: {
                                    type: "div",
                                    attributes: [{
                                        type: "class",
                                        value: "item"
                                    }],
                                    innerTag: {
                                        type: "div",
                                        attributes: [{
                                            type: "class",
                                            value: "ui red empty circular label"
                                        }]
                                    },
                                    siblings: {
                                        type: "span",
                                        description: "Important"
                                    }
                                },
                                siblings: {
                                    type: "div",
                                    attributes: [{
                                        type: "class",
                                        value: "item"
                                    }],
                                    innerTag: {
                                        type: "div",
                                        attributes: [{
                                            type: "class",
                                            value: "ui blue empty circular label"
                                        }]
                                    },
                                    siblings: {
                                        type: "span",
                                        description: "Later"
                                    }
                                }
                            }
                        }
                    },
                    siblings: {
                        type: "div",
                        attributes: [{
                                type: "class",
                                value: "ui dropdown"
                            }],
                        innerTag: {
                            type: "i",
                            attributes: [{
                                type: "class",
                                value: "ellipsis vertical icon"
                            }]
                        },
                        siblings: {
                            type: "div",
                            attributes: [{
                                type: "class",
                                value: "menu"
                            }],
                            innerTag: {
                                type: "div",
                                attributes: [{
                                    type: "class",
                                    value: "scrolling menu"
                                }],
                                innerTag: {
                                    type: "div",
                                    attributes: [{
                                        type: "class",
                                        value: "item"
                                    },
                                    {
                                        type: "id",
                                        value: "removeNote-" + parentId
                                    }],
                                    description: "Delete"
                                },
                                siblings: {
                                    type: "div",
                                    attributes: [{
                                        type: "class",
                                        value: "item"
                                    },
                                    {
                                        type: "id",
                                        value: "editNote-" + parentId
                                    }],
                                    description: "Edit"
                                }
                            }
                        }
                    }
                },
            }
    });
    return newSecondColumn;
}