import { IconButton } from "@material-ui/core"
import React from "react"
import { useDispatch } from "react-redux"
import { setAnswer } from "../store/actions"
import "./Step.css"

const Step = ({ title, options }) => {
	const dispatch = useDispatch()

	const handleOptionClick = (option) => {
		dispatch(setAnswer(title, option.label))
	}

	return (
		<div className="step">
			{/* <h2>{title}</h2> */}
			<div style={{ display: "flex" }}>
				<div>
					<h2>{title}</h2>
				</div>
				<div className="options">
					{options.map((option, index) => (
						<IconButton key={index} onClick={() => handleOptionClick(option)}>
							{option.icon}
							<span className="label">{option.label}</span>
						</IconButton>
					))}
				</div>
			</div>
		</div>
	)
}

export default Step
