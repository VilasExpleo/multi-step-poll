import { SpeakerNotesSharp, SpeakerNotesTwoTone, SpeakerPhoneRounded } from "@material-ui/icons" // Replace with actual icons
import React from "react"
import { Provider } from "react-redux"
import "./App.css"
import Carousels from "./components/Carousels"
import store from "./store"

function App() {
	const steps = [
		{
			title: "How was your week overall?",
			options: [
				{ icon: <SpeakerPhoneRounded />, label: "Very Satisfied" },
				{ icon: <SpeakerNotesSharp />, label: "Satisfied" },
				{ icon: <SpeakerNotesTwoTone />, label: "Dissatisfied" },
			],
		},
		{
			title: "1How was your week overall dsyysyyy?",
			options: [
				{ icon: <SpeakerPhoneRounded />, label: "Very Satisfied" },
				{ icon: <SpeakerNotesSharp />, label: "Satisfied" },
				{ icon: <SpeakerNotesTwoTone />, label: "Dissatisfied" },
			],
		},
		{
			title: "2How was your week overall dsyysyyy?",
			options: [
				{ icon: <SpeakerPhoneRounded />, label: "Very Satisfied" },
				{ icon: <SpeakerNotesSharp />, label: "Satisfied" },
				{ icon: <SpeakerNotesTwoTone />, label: "Dissatisfied" },
			],
		},
		{
			title: "3How was your week overall dsyysyyy?",
			options: [
				{ icon: <SpeakerPhoneRounded />, label: "Very Satisfied" },
				{ icon: <SpeakerNotesSharp />, label: "Satisfied" },
				{ icon: <SpeakerNotesTwoTone />, label: "Dissatisfied" },
			],
		},
		{
			title: "5How was your week overall dsyysyyy?",
			options: [
				{ icon: <SpeakerPhoneRounded />, label: "Very Satisfied" },
				{ icon: <SpeakerNotesSharp />, label: "Satisfied" },
				{ icon: <SpeakerNotesTwoTone />, label: "Dissatisfied" },
			],
		},
	]

	return (
		<Provider store={store}>
			<div className="App">
				<Carousels steps={steps} />
			</div>
		</Provider>
	)
}

export default App
