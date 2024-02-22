import PropTypes from 'prop-types';
const Options = ({ updateFeedback, totalFeedback }) => {
	return (
		<>
			<ul>
				<li>
					<button
						name='good'
						type='button'
						onClick={() => updateFeedback('good')}
					>
						Good
					</button>
				</li>
				<li>
					<button
						name='neutral'
						type='button'
						onClick={() => updateFeedback('neutral')}
					>
						Neutral
					</button>
				</li>
				<li>
					<button
						name='bad'
						type='button'
						onClick={() => updateFeedback('bad')}
					>
						Bad
					</button>
				</li>
				{totalFeedback >= 1 ? (
					<li>
						<button
							name='reset'
							type='button'
							onClick={() => updateFeedback('reset')}
						>
							Reset
						</button>
					</li>
				) : (
					''
				)}
			</ul>
		</>
	);
};

export default Options;

Options.propTypes = {
	updateFeedback: PropTypes.func,
	totalFeedback: PropTypes.number,
};
