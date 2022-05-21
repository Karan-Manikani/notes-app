import createNoteIcon from "../images/document-text-outline.svg";
import "../css/addNote.css";

function AddNote(props) {
	function handleClick() {
		props.setEnableEditor(true);
		props.setEditMode(false);
		props.setViewMode(false);
		props.setCreateMode(true);
	}

	return (
		<button className="create-new-note" type="button" onClick={handleClick}>
			<img src={createNoteIcon} alt="add icon" className="create-icon" />
			Create New Note
		</button>
	);
}

export default AddNote;
