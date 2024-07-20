import { IconButton } from "@material-ui/core"
import React from "react"
import "./Step.css"

const Step = ({ title, options }) => {
	return (
		<div className="step">
			<div>
				<div>
					<h2>{title}</h2>
				</div>
				<div className="options">
					{options.map((option, index) => (
						<IconButton key={index}></IconButton>
					))}
				</div>
			</div>
		</div>
	)
}

export default Step
