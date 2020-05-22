export default function isFinished(checkedNote, editNote){
    if (checkedNote.checked) {
        checkedNote.parentElement.parentElement.parentElement.className = "column finished";
        editNote.className = "hide";
    } else {
        checkedNote.parentElement.parentElement.parentElement.className = "column";
        editNote.className = "item";
    }
}