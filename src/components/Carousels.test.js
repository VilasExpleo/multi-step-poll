// src/__tests__/Carousels.test.js
import { configureStore } from "@reduxjs/toolkit"
import "@testing-library/jest-dom/extend-expect"
import { fireEvent, render, screen } from "@testing-library/react"
import React from "react"
import { Provider as ReduxProvider } from "react-redux"
import Carousels from "../components/Carousels"
import { resetAnswers, setCurrentStepIndex } from "../store/actions"
import rootReducer from "../store/reducers" // Adjust path as needed

// Mock Redux store
const mockStore = configureStore({
	reducer: rootReducer,
	preloadedState: {
		poll: {
			currentStep: 0,
			answers: {},
		},
	},
})

const steps = [
	{
		title: "How was your week overall?",
		options: [
			{ icon: <span>👍</span>, label: "Very Satisfied" },
			{ icon: <span>😊</span>, label: "Satisfied" },
			{ icon: <span>👎</span>, label: "Dissatisfied" },
		],
	},
	// Add more steps if needed
]

describe("Carousels Component", () => {
	test("renders correctly with initial state", () => {
		render(
			<ReduxProvider store={mockStore}>
				<Carousels steps={steps} />
			</ReduxProvider>
		)

		// Check if the component renders the questions and answers
		expect(screen.getByText(/How was your week overall?/i)).toBeInTheDocument()
	})

	test("displays Summary when all steps are answered", () => {
		// Mock state with all answers
		const store = mockStore({
			poll: {
				currentStep: 0,
				answers: { 0: "Very Satisfied", 1: "Satisfied" }, // Adjust as needed
			},
		})

		render(
			<ReduxProvider store={store}>
				<Carousels steps={steps} />
			</ReduxProvider>
		)

		// Assuming Summary component contains a specific text or button
		expect(screen.getByText(/Summary/i)).toBeInTheDocument()
	})

	test("dispatches resetAnswers and setCurrentStepIndex on summary submit", () => {
		const store = mockStore({
			poll: {
				currentStep: 0,
				answers: { 0: "Very Satisfied", 1: "Satisfied" },
			},
		})

		render(
			<ReduxProvider store={store}>
				<Carousels steps={steps} />
			</ReduxProvider>
		)

		// Find and click the submit button in the Summary component
		fireEvent.click(screen.getByText(/Submit/i))

		// Ensure that actions are dispatched
		const actions = store.getActions()
		expect(actions).toContainEqual(setCurrentStepIndex(0))
		expect(actions).toContainEqual(resetAnswers())
	})
})
