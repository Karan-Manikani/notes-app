import { nanoid } from "nanoid";

function createNewNote(title, body) {
	return {
		id: nanoid(),
		title: title,
		body: body,
		lastModified: document.lastModified.split(" ")[0],
	};
}

export default createNewNote;
