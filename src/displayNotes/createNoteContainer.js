import { createHTML } from '../createHtml'

export default function createNoteContainer() {
    let noteContainer = createHTML ({
        type: "div",
            attributes: [
                {
                    type: "class",
                    value: "noteContainer ui container"
                },
                {
                    type: "id",
                    value: "noteContainer"
                }
            ]
    });

    return noteContainer;
}
