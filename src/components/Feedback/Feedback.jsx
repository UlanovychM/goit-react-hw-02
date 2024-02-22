import PropTypes from 'prop-types';

const Feedback = ({ count, totalFeedback }) => {
	const { good, neutral, bad } = count;

	return (
		<>
			<p>Good: {good}</p>
			<p>Neutral: {neutral}</p>
			<p>Bad: {bad}</p>
			<p>Total: {totalFeedback}</p>
			<p>
				Positive:
				{`${Math.round(((good + neutral) / totalFeedback) * 100)}%`}
			</p>
		</>
	);
};

export default Feedback;

Feedback.propTypes = {
	count: PropTypes.number,
	totalFeedback: PropTypes.number,
};
