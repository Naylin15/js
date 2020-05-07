export default function isFinished(checkedNote, editButton){
    if (checkedNote.checked) {
        checkedNote.parentElement.parentElement.parentElement.className = "column finished";
        editButton.className = "hide";
    } else {
        checkedNote.parentElement.parentElement.parentElement.className = "column";
        editButton.className = "ui secondary icon button";
    }
}