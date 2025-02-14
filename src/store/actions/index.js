export const nextStep = () => ({
	type: "NEXT_STEP",
})

export const prevStep = () => ({
	type: "PREV_STEP",
})

export const setCurrentStepIndex = (index) => ({
	type: "CURRENT_STEP",
	payload: { index },
})

export const setAnswerIndex = (index) => ({
	type: "ANS_INDEX",
	payload: { index },
})

export const setAnswer = (question, answer) => ({
	type: "SET_ANSWER",
	payload: { question, answer },
})

export const resetAnswers = () => {
	return {
		type: "RESET_ANSWERS",
	}
}
