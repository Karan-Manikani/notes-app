import "../css/editor.css";
import resetIcon from "../images/refresh-outline.svg";
import saveIcon from "../images/save-outline.svg";
import createNewNote from "../createNewNote";
import { useState } from "react";

function Editor(props) {
	const [note, setNote] = useState({
		title: "",
		body: "",
	});

	function handleChange(event) {
		const { name, value } = event.target;
		setNote((prevNote) => {
			return {
				...prevNote,
				[name]: value,
			};
		});
	}

	function handleSave() {
		const newNote = createNewNote(note.title, note.body);
		props.setNotes((prevNotes) => [...prevNotes, newNote]);
	}

	function handleReset() {
		setNote({
			title: "",
			body: "",
		});
	}

	return (
		<div className="editor">
			<div className="vertical-line"></div>
			<h2>New Note</h2>
			<form id="note-entry">
				<input
					type="text"
					placeholder="Note Title"
					className="title-input"
					onChange={handleChange}
					name="title"
					value={note.title}
				></input>
				<textarea
					className="body-input"
					form="note-entry"
					placeholder="Type something..."
					onChange={handleChange}
					name="body"
					value={note.body}
				></textarea>
				<div className="buttons">
					<button type="button" className="save-button" onClick={handleSave}>
						Save
						<img src={saveIcon} alt="save" />
					</button>
					<button type="button" className="reset-button" onClick={handleReset}>
						Reset
						<img src={resetIcon} alt="reset" />
					</button>
				</div>
			</form>
		</div>
	);
}

export default Editor;
