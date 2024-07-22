import React from "react"
import { Provider } from "react-redux"
import "./App.css"
import Carousels from "./components/Carousels"
import steps from "./data/stpes"
import store from "./store"

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<Carousels steps={steps} />
			</div>
		</Provider>
	)
}

export default App
