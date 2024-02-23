import PropTypes from 'prop-types';
import clsx from 'clsx';
import css from './Feedback.module.css';

const Feedback = ({ count, totalFeedback }) => {
	const { good, neutral, bad } = count;

	return (
		<>
			<ul className={clsx(css.feedback)}>
				<li>
					<p>Good: {good}</p>
				</li>
				<li>
					<p>Neutral: {neutral}</p>
				</li>
				<li>
					<p>Bad: {bad}</p>
				</li>
				<li>
					<p>Total: {totalFeedback}</p>
				</li>
				<li>
					<p>
						Positive:
						{`${Math.round(((good + neutral) / totalFeedback) * 100)}%`}
					</p>
				</li>
			</ul>
		</>
	);
};

export default Feedback;

Feedback.propTypes = {
	count: PropTypes.object,
	totalFeedback: PropTypes.number,
};
