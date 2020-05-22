import createHTML from '../createHtml';

export default function createNoteArticle(id) {
    let noteArticle = createHTML({
        type: "article",
            attributes: [
                {
                    type: "class",
                    value: "article ui two column stackable grid"
                },
                {
                    type: "id",
                    value: id
                }
            ]
    });
    return noteArticle;
}