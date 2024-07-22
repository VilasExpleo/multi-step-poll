import { Button } from "@material-ui/core"
import axios from "axios"
import React from "react"
import { useSelector } from "react-redux"
// import { resetAnswers } from "../store/actions"
import "./Summary.css"

const Summary = ({ onSubmit }) => {
	//const dispatch = useDispatch()
	const answers = useSelector((state) => state.poll.answers)

	const handleSubmit = async () => {
		try {
			await axios.post("https://jsonplaceholder.typicode.com/posts", answers)
			alert("Data submitted successfully!")
			//dispatch(resetAnswers())
			onSubmit()
		} catch (error) {
			console.error("Error submitting data:", error)
		}
	}

	return (
		<div className="summary">
			<h2>Summary</h2>
			<ul>
				{Object.entries(answers).map(([question, answer], index) => (
					<li key={index}>
						<strong>{question}</strong>: {answer}
					</li>
				))}
			</ul>
			<Button variant="contained" color="primary" onClick={handleSubmit}>
				Submit
			</Button>
		</div>
	)
}

export default Summary
