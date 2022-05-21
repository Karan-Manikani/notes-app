import "../css/editor.css";
import resetIcon from "../images/refresh-outline.svg";
import saveIcon from "../images/save-outline.svg";
import closeIcon from "../images/close-circle-outline.svg";
import createNewNote from "../js/createNewNote";

function Editor(props) {
	function handleChange(event) {
		const { name, value } = event.target;
		props.setNote((prevNote) => {
			return {
				...prevNote,
				[name]: value,
			};
		});
	}

	function handleSave() {
		if (props.editMode) {
			const updatedNotes = props.notes.map((updatedNote) => {
				if (updatedNote.id === props.note.id) {
					return {
						...props.note,
						lastModified: document.lastModified.split(" ")[0],
					};
				}
				return updatedNote;
			});
			props.setNotes(updatedNotes);
			props.setEditMode(false);
			props.setViewMode(true);
			return;
		}
		const newNote = createNewNote(props.note.title, props.note.body);
		props.setNotes((prevNotes) => [...prevNotes, newNote]);
		props.setCreateMode(true);
		handleReset();
	}

	function handleReset() {
		props.setNote({
			id: "",
			title: "",
			body: "",
			lastModified: "",
		});
	}

	function displayHeading() {
		if (props.viewMode) {
			return <h2 className="editor-heading">Viewing Mode</h2>;
		} else if (props.editMode) {
			return <h2 className="editor-heading">Editing Mode</h2>;
		} else if (props.createMode) {
			return <h2 className="editor-heading">New Note</h2>;
		}
	}

	function closeEditor() {
		props.setEnableEditor(false);
	}

	return (
		<div className="editor">
			<div className="vertical-line"></div>
			<div className="editor-top">
				{displayHeading()}
				<img src={closeIcon} alt="close editor" onClick={closeEditor} />
			</div>
			<form id="note-entry">
				<input
					type="text"
					placeholder="Note Title"
					className="title-input"
					onChange={handleChange}
					name="title"
					value={props.note.title}
				></input>
				<textarea
					className="body-input"
					form="note-entry"
					placeholder="Type something..."
					onChange={handleChange}
					name="body"
					value={props.note.body}
				></textarea>
				<div className="buttons">
					{!props.viewMode && (
						<button type="button" className="save-button" onClick={handleSave}>
							Save
							<img src={saveIcon} alt="save" />
						</button>
					)}
					{!props.viewMode && (
						<button type="button" className="reset-button" onClick={handleReset}>
							Reset
							<img src={resetIcon} alt="reset" />
						</button>
					)}
				</div>
			</form>
		</div>
	);
}

export default Editor;
