import createNoteIcon from "../images/create-outline.svg";
import "../css/addNote.css";

function AddNote(props) {
	function handleClick() {
		props.setEnableEditor((prevEnableEditor) => !prevEnableEditor);
	}

	return (
		<button className="create-new-note" type="button" onClick={handleClick}>
			<img src={createNoteIcon} alt="add icon" className="create-icon" />
			Create New Note
		</button>
	);
}

export default AddNote;
