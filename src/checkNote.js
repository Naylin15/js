export function removeNotes() {
    let check = document.getElementById('noteContainer');
    
    if (check) {
        check.remove();
    }
}