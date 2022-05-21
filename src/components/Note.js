import "../css/note.css";
import deleteIcon from "../images/trash-outline.svg";
import editIcon from "../images/create-outline.svg";
import deleteNote from "../js/deleteNote.js";

function Note(props) {
	function handleDelete() {
		props.setNotes(deleteNote(props.id, props.notes));
	}

	function populateEditor() {
		props.setNote({
			id: props.id,
			title: props.title,
			body: props.body,
			lastModified: props.lastModified,
		});
		props.setEnableEditor(true);
		props.setViewMode(true);
	}

	function handleEdit() {
		populateEditor();
		props.setViewMode(false);
		props.setCreateMode(false);
		props.setEditMode(true);
	}

	const highlighedNote = props.filteredNotes.find((note) => note.id === props.id);

	return (
		<div className={`note ${highlighedNote ? "highlight" : ""}`}>
			<div className="content" onClick={populateEditor}>
				<h1 className="title">{props.title}</h1>
				<p className="body">{props.body}</p>
			</div>
			<div className="note-bottom">
				<p className="last-modified">Last modified: {props.lastModified}</p>
				<div className="edit-delete-images">
					<img
						src={editIcon}
						alt="edit note"
						className="edit-icon"
						onClick={handleEdit}
					/>
					<img
						src={deleteIcon}
						alt="delete note"
						className="delete-icon"
						onClick={handleDelete}
					/>
				</div>
			</div>
		</div>
	);
}

export default Note;
