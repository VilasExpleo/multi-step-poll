import SentimentSatisfiedAltIcon from "@material-ui/icons/SentimentSatisfiedAlt"
import ThumbDownIcon from "@material-ui/icons/ThumbDown"
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt"

const steps = [
	{
		title: "How was your week overall?",
		options: [
			{ icon: <ThumbUpAltIcon style={{ color: "d4d40b" }} />, label: "Very Satisfied" },
			{ icon: <SentimentSatisfiedAltIcon />, label: "Satisfied" },
			{ icon: <ThumbDownIcon />, label: "Dissatisfied" },
		],
	},
	{
		title: "How do you feel about the workload this week?",
		options: [
			{ icon: <ThumbUpAltIcon />, label: "Very Satisfied" },
			{ icon: <SentimentSatisfiedAltIcon />, label: "Satisfied" },
			{ icon: <ThumbDownIcon />, label: "Dissatisfied" },
		],
	},
	{
		title: "How do you feel about your productivity this week?",
		options: [
			{ icon: <ThumbUpAltIcon />, label: "Very Satisfied" },
			{ icon: <SentimentSatisfiedAltIcon />, label: "Satisfied" },
			{ icon: <ThumbDownIcon />, label: "Dissatisfied" },
		],
	},
	{
		title: "Do you feel like workplace distractions are a problem for you this week?",
		options: [
			{ icon: <ThumbUpAltIcon />, label: "Very Satisfied" },
			{ icon: <SentimentSatisfiedAltIcon />, label: "Satisfied" },
			{ icon: <ThumbDownIcon />, label: "Dissatisfied" },
		],
	},
	{
		title: "Are you feeling positive about the direction of our project?",
		options: [
			{ icon: <ThumbUpAltIcon />, label: "Very Satisfied" },
			{ icon: <SentimentSatisfiedAltIcon />, label: "Satisfied" },
			{ icon: <ThumbDownIcon />, label: "Dissatisfied" },
		],
	},
]

export default steps
