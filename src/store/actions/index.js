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

export const setAnswer = (question, answer) => ({
	type: "SET_ANSWER",
	payload: { question, answer },
})
