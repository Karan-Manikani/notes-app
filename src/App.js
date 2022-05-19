import { useState, useEffect } from "react";

import Header from "./components/Header";
import AddNote from "./components/AddNote";
import Editor from "./components/Editor";

function App() {
	const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
	const [notes, setNotes] = useState([]); // <---- CHANGE THIS IN THE FUTURE!!!!!
	const [enableEditor, setEnableEditor] = useState(false);

	useEffect(() => {
		localStorage.setItem("notes", JSON.stringify(notes));
	}, [notes]);

	return (
		<div className="App">
			<Header />
			<AddNote setEnableEditor={setEnableEditor} />
			{enableEditor && <Editor notes={notes} setNotes={setNotes} />}
			<h1>Note</h1>
		</div>
	);
}

export default App;
