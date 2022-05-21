import { useState, useEffect } from "react";
import "./css/app.css";
import Header from "./components/Header";
import AddNote from "./components/AddNote";
import Editor from "./components/Editor";
import Note from "./components/Note";
import searchNote from "./js/searchNote";

function App() {
	const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];

	const [notes, setNotes] = useState(storedNotes);
	const [enableEditor, setEnableEditor] = useState(false);
	const [search, setSearch] = useState("");
	const [filteredNotes, setFilteredNotes] = useState([]);
	const [editMode, setEditMode] = useState(false);
	const [viewMode, setViewMode] = useState(false);
	const [createMode, setCreateMode] = useState(false);
	const [note, setNote] = useState({
		id: "",
		title: "",
		body: "",
		lastModified: "",
	});

	useEffect(() => {
		localStorage.setItem("notes", JSON.stringify(notes));
	}, [notes]);

	useEffect(() => {
		setFilteredNotes(searchNote(search, notes));
	}, [search, notes]);

	const noteList = notes.map((note) => (
		<Note
			key={note.id}
			{...note}
			setNotes={setNotes}
			notes={notes}
			filteredNotes={filteredNotes}
			note={note}
			setNote={setNote}
			setEnableEditor={setEnableEditor}
			setEditMode={setEditMode}
			setViewMode={setViewMode}
			setCreateMode={setCreateMode}
		/>
	));

	return (
		<div className="App">
			<Header
				notes={notes}
				search={search}
				setSearch={setSearch}
				filteredNotes={filteredNotes}
				setFilteredNotes={setFilteredNotes}
			/>
			<AddNote
				setEnableEditor={setEnableEditor}
				setEditMode={setEditMode}
				setViewMode={setViewMode}
				setCreateMode={setCreateMode}
			/>
			{enableEditor && (
				<Editor
					notes={notes}
					setNotes={setNotes}
					note={note}
					setNote={setNote}
					setEnableEditor={setEnableEditor}
					editMode={editMode}
					setEditMode={setEditMode}
					viewMode={viewMode}
					setViewMode={setViewMode}
					createMode={createMode}
					setCreateMode={setCreateMode}
				/>
			)}
			<div className="notes">{noteList}</div>
		</div>
	);
}

export default App;
