import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { nextStep, prevStep } from "../store/actions"
import "./Carousel.css"

const Carousel = ({ steps }) => {
	const [currentSetValue, setCurrentSetValue] = useState(0)
	const [selectedValue, setSelectedValue] = useState(0)
	const dispatch = useDispatch()
	const currentStep = useSelector((state) => state.poll.currentStep)

	const next = () => {
		dispatch(nextStep())
	}

	const prev = () => {
		dispatch(prevStep())
	}
	const preNext = () => {
		if (currentSetValue <= currentStep) {
			dispatch(nextStep())
		} else {
			dispatch(prevStep())
		}
		setCurrentSetValue(currentStep)
	}
	const handelTitle = (e) => {
		console.log(e.target.value)

		//steps[currentStep]
	}
	return (
		<div className="carousel">
			{/* <button onClick={prev} className="carousel-button">
				Prev {console.log(steps, currentStep)}
			</button>
			<button onClick={next} className="carousel-button">
				Next
			</button> */}
			<div>
				{steps.map((step, index) => (
					<div key={index}>
						<input
							type="radio"
							id={`step-${index}`}
							name="carousel-step"
							value={index}
							onChange={handelTitle}
							// You may want to handle change events here if needed
						/>
					</div>
				))}
			</div>
			<button onClick={preNext} className="carousel-button">
				Next pre
			</button>
			<div className="carousel-content">{steps[currentStep]}</div>
		</div>
	)
}

export default Carousel
