function searchNote(search, notesArray) {
	if (search === "") {
		return [];
	}
	const filteredNotes = notesArray.filter(
		(element) =>
			element.title.toLowerCase().includes(search.toLowerCase()) ||
			element.body.toLowerCase().includes(search.toLowerCase())
	);

	return filteredNotes;
}

export default searchNote;
