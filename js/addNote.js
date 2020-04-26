var addNote = function(e) {  
    e.preventDefault()  
    let noteTitle = document.getElementById('noteTitle').value;

    notes.push({
        title: noteTitle,
    })
    document.getElementById('form-add').reset();
    checkNote();

}