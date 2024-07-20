import { IconButton } from "@material-ui/core"
import { useDispatch, useSelector } from "react-redux"
import { setAnswer, setCurrentStepIndex } from "../store/actions"
const Answers = ({ answers, stepslength }) => {
	const currentStep = useSelector((state) => state.poll.currentStep)
	const dispatch = useDispatch()
	const handleOptionClick = (option) => {
		dispatch(setAnswer(answers.props.title, option.label))
		stepslength > currentStep && dispatch(setCurrentStepIndex(currentStep + 1))
	}

	return (
		<div>
			{stepslength}
			{answers?.props?.options?.map((option, index) => (
				<IconButton key={index} onClick={() => handleOptionClick(option)}>
					{option.icon}
					<span className="label">{option.label}</span>
				</IconButton>
			))}
		</div>
	)
}

export default Answers
