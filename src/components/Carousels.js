import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { resetAnswers, setCurrentStepIndex } from "../store/actions"
import Answers from "./Answers"
import "./Carousels.css"
import Questions from "./Questions"
import Summary from "./Summary"

const Carousels = ({ steps }) => {
	const dispatch = useDispatch()
	const [reloadKey, setReloadKey] = useState(0)
	const currentStep = useSelector((state) => state.poll.currentStep)
	let answers = useSelector((state) => state.poll.answers)

	const handelTitle = (e) => {
		dispatch(setCurrentStepIndex(e.target.value))
	}
	const reloadComponent = () => {
		alert("zxc")
		setReloadKey((prevKey) => prevKey + 1)
		dispatch(resetAnswers())
		answers = {}
		console.log(answers)
		console.log(Object.keys(answers).length, steps.length)
	}

	return (
		<div className="container" key={reloadKey}>
			{answers && steps && Object.keys(answers).length === steps.length ? (
				<div className="row">
					<Summary reloadParent={reloadComponent} />
				</div>
			) : (
				<div className="row">
					<div className="column column1">
						<div style={{ padding: "20px" }}>
							{steps.map((step, index) => (
								<div key={index} className="displayRadio">
									<input
										type="radio"
										id={`step-${index}`}
										name="carousel-step"
										value={index}
										onChange={handelTitle}
										style={{
											width: "20px",
											height: "20px",
											marginRight: "5px",
										}}
										checked={index == currentStep}
									/>
								</div>
							))}
						</div>
						<Questions questions={steps[currentStep]?.title} />
					</div>
					<div className="column column2">
						<Answers
							answers={steps[currentStep]}
							stepslength={steps.length}
							totalAns={Object.keys(answers).length}
						/>
					</div>
				</div>
			)}
		</div>
	)
}

export default Carousels
