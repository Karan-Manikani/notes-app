import "../css/note.css";
import deleteIcon from "../images/trash-outline.svg";
import deleteNote from "../deleteNote.js";

function Note(props) {
	function handleDelete() {
		props.setNotes(deleteNote(props.id, props.notes));
	}

	return (
		<div className="note">
			<div className="content">
				<h1 className="title">{props.title}</h1>
				<p className="body">{props.body}</p>
			</div>
			<div className="note-bottom">
				<p className="last-modified">Last modified: {props.lastModified}</p>
				<img src={deleteIcon} alt="delete" className="delete-icon" onClick={handleDelete} />
			</div>
		</div>
	);
}

export default Note;
