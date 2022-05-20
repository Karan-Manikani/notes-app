function deleteNote(id, notesArray) {
	const newNotes = notesArray.filter((note) => note.id !== id);
	return newNotes;
}

export default deleteNote;
