export default function createHTML(content) {
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
            content.siblings.forEach(element => {
                let sibling = createHTML(element);
                insideTag.insertAdjacentElement("afterend", sibling);
            });
        }
    }
    if (content.description) {
        let descriptionContent = document.createTextNode(content.description);
        newElement.appendChild(descriptionContent);
    }
    return newElement;
}