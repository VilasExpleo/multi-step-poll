import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { setCurrentStepIndex } from "../store/actions"
import Answers from "./Answers"
import "./Carousels.css"
import Questions from "./Questions"
import Summary from "./Summary"
const Carousels = ({ steps }) => {
	const currentStep = useSelector((state) => state.poll.currentStep)
	const dispatch = useDispatch()
	const answers = useSelector((state) => state.poll.answers)
	const handelTitle = (e) => {
		dispatch(setCurrentStepIndex(e.target.value))
	}
	return (
		<div className="container">
			{answers && steps && Object.keys(answers).length === steps.length ? (
				<div className="row">
					<Summary />
				</div>
			) : (
				<div className="row">
					<div className="column column1">
						<div>
							{steps.map((step, index) => (
								<div key={index} className="displayRadio">
									<input
										type="radio"
										id={`step-${index}`}
										name="carousel-step"
										value={index}
										onChange={handelTitle}
									/>
								</div>
							))}
						</div>
						<Questions questions={steps[currentStep]?.props?.title} />
					</div>
					<div className="column column2">
						<Answers answers={steps[currentStep]} stepslength={steps.length} />
					</div>
				</div>
			)}
		</div>
	)
}

export default Carousels
