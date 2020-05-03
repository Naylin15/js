function warningMessage(parentId) {
    let warning = createHTML({
        type: "div",
        attributes: [
            {
                type: "class",
                value: "ui centered row"
            }
        ],
        innerTag: {
            type: "div",
            attributes: [
                {
                    type: "class",
                    value: "ui warning message"
                },
            ],
            innerTag: {
                type: "i",
                attributes: [
                    {
                        type: "class",
                        value: "close icon"
                    },
                    {
                        type: "onclick",
                        value: "closeMessage(this.parentElement)"
                    }
                ]
            },
            siblings: {
                type: "div",
                attributes: [
                    {
                        type: "class",
                        value: "header"
                    }
                ],
                description: "Warning! The note is already being edited"
            }
        }
    });
    document.getElementById(parentId).appendChild(warning);

    setTimeout(function() {
        $(".alertMessage").fadeOut("3000", warning.remove());
    }, 3000
    );
}