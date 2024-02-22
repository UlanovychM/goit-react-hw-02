import { useState } from 'react';

import './App.css';
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';

import Notification from './components/Notification/Notification';

function App() {
	const [count, setCount] = useState({
		good: 0,
		neutral: 0,
		bad: 0,
	});

	const updateFeedback = feedbackType => {
		switch (feedbackType) {
			case 'good':
				setCount({
					...count,
					good: count.good + 1,
				});
				break;
			case 'neutral':
				setCount({
					...count,
					neutral: count.neutral + 1,
				});
				break;
			case 'bad':
				setCount({ ...count, bad: count.bad + 1 });
				break;
			case 'reset':
				setCount({ good: 0, neutral: 0, bad: 0 });
				break;
			default:
				console.log(`Type feedback name - ${feedbackType} is undefined`);
		}
	};

	const { good, neutral, bad } = count;

	const totalFeedback = good + neutral + bad;

	return (
		<>
			<Description />
			<Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} />
			{totalFeedback >= 1 ? (
				<Feedback count={count} totalFeedback={totalFeedback} />
			) : (
				<Notification />
			)}
		</>
	);
}

export default App;