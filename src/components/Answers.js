import { IconButton } from "@material-ui/core"
import { useDispatch, useSelector } from "react-redux"
import { setAnswer, setAnswerIndex, setCurrentStepIndex } from "../store/actions"
const Answers = ({ answers, stepslength, totalAns }) => {
	const currentStep = useSelector((state) => state.poll.currentStep)
	const dispatch = useDispatch()
	const handleOptionClick = (option) => {
		console.log(answers.title, option.label)
		dispatch(setAnswer(answers.title, option.label))
		dispatch(setAnswerIndex(currentStep))
		if (stepslength > currentStep && totalAns < stepslength) dispatch(setCurrentStepIndex(Number(currentStep) + 1))
	}

	return (
		<div>
			{stepslength} -- {totalAns} --- {currentStep}
			{answers?.options?.map((option, index) => (
				<IconButton key={index} onClick={() => handleOptionClick(option)}>
					{option.icon}
					<span className="label">{option.label}</span>
				</IconButton>
			))}
		</div>
	)
}

export default Answers
