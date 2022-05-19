function deleteNote(id, notesArray) {
	const newNotes = notesArray.filer((note) => note.id !== id);
	return newNotes;
}

export default deleteNote;
