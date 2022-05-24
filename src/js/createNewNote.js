import { nanoid } from "nanoid";

function createNewNote(title, body) {
	return {
		id: nanoid(),
		title: title,
		body: body,
		lastModified: new Date().toLocaleDateString(),
	};
}

export default createNewNote;
