import { useState, useEffect } from "react";

import Header from "./components/Header";
import AddNote from "./components/AddNote";
import Editor from "./components/Editor";
import Note from "./components/Note";

import "./css/app.css";

function App() {
	const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
	const [notes, setNotes] = useState(storedNotes);
	const [enableEditor, setEnableEditor] = useState(false);

	useEffect(() => {
		localStorage.setItem("notes", JSON.stringify(notes));
	}, [notes]);

	const noteList = notes.map((note) => (
		<Note key={note.id} {...note} setNotes={setNotes} notes={notes} />
	));

	return (
		<div className="App">
			<Header />
			<AddNote setEnableEditor={setEnableEditor} />
			{enableEditor && <Editor notes={notes} setNotes={setNotes} />}
			<div className="notes">{noteList}</div>
		</div>
	);
}

export default App;
