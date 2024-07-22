const initialState = {
	currentStep: 0,
	answers: {},
}

const pollReducer = (state = initialState, action) => {
	switch (action.type) {
		case "NEXT_STEP":
			return {
				...state,
				currentStep: state.currentStep + 1,
			}
		case "PREV_STEP":
			return {
				...state,
				currentStep: state.currentStep - 1,
			}
		case "CURRENT_STEP":
			return {
				...state,
				currentStep: action.payload.index,
			}
		case "ANS_INDEX":
			return {
				...state,
				index: Object.values({
					...state.index,
					[action.payload.index]: action.payload.index,
				}),
			}
		case "SET_ANSWER":
			return {
				...state,
				answers: {
					...state.answers,
					[action.payload.question]: action.payload.answer,
				},
			}
		case "RESET_ANSWERS":
			const blankAnswers = Object.keys(state.answers).reduce((acc, key) => {
				acc[key] = ""
				return acc
			}, {})
			return {
				...state,
				answers: blankAnswers,
			}
		default:
			return state
	}
}

export default pollReducer
