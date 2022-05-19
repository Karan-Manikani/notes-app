import "../css/note.css";

function Note(props) {
	return (
		<div className="note">
			<div className="content">
				<h1 className="title">{props.title}</h1>
				<p className="body">{props.body}</p>
			</div>
		</div>
	);
}

export default Note;
