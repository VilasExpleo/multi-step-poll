import { ThemeProvider } from "@material-ui/core/styles"
import { SpeakerNotesSharp, SpeakerNotesTwoTone, SpeakerPhoneRounded } from "@material-ui/icons" // Replace with actual icons
import React from "react"
import { Provider } from "react-redux"
import "./App.css"
import Carousels from "./components/Carousels"
import Step from "./components/Step"
import store from "./store"
import theme from "./theme"

function App() {
	const steps = [
		<Step
			title="How satisfied are you with our service?"
			options={[
				{ icon: <SpeakerPhoneRounded />, label: "Very Satisfied" },
				{ icon: <SpeakerNotesSharp />, label: "Satisfied" },
				{ icon: <SpeakerNotesTwoTone />, label: "Dissatisfied" },
			]}
		/>,
		<Step
			title="1 Would you recommend our service to others?"
			options={[
				{ icon: <SpeakerNotesTwoTone />, label: "Definitely" },
				{ icon: <SpeakerNotesTwoTone />, label: "Maybe" },
				{ icon: <SpeakerNotesTwoTone />, label: "No" },
			]}
		/>,
		<Step
			title="2 Would you recommend our service to others?"
			options={[
				{ icon: <SpeakerNotesTwoTone />, label: "Definitely" },
				{ icon: <SpeakerNotesTwoTone />, label: "Maybe" },
				{ icon: <SpeakerNotesTwoTone />, label: "No" },
			]}
		/>,
		<Step
			title="3 Would you recommend our service to others?"
			options={[
				{ icon: <SpeakerNotesTwoTone />, label: "Definitely" },
				{ icon: <SpeakerNotesTwoTone />, label: "Maybe" },
				{ icon: <SpeakerNotesTwoTone />, label: "No" },
			]}
		/>,
		<Step
			title="4 Would you recommend our service to others?"
			options={[
				{ icon: <SpeakerNotesTwoTone />, label: "Definitely" },
				{ icon: <SpeakerNotesTwoTone />, label: "Maybe" },
				{ icon: <SpeakerNotesTwoTone />, label: "No" },
			]}
		/>,
	]

	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<div className="App">
					<Carousels steps={steps} />
					{/* <Carousel steps={steps} /> */}
				</div>
			</ThemeProvider>
		</Provider>
	)
}

export default App
