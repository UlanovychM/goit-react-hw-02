import PropTypes from 'prop-types';
import clsx from 'clsx';
import css from './Options.module.css';

const Options = ({ updateFeedback, totalFeedback }) => {
	return (
		<>
			<ul className={clsx(css.option)}>
				<li>
					<button
						className={clsx(css.optionBtn)}
						name='good'
						type='button'
						onClick={() => updateFeedback('good')}
					>
						Good
					</button>
				</li>
				<li>
					<button
						className={clsx(css.optionBtn)}
						name='neutral'
						type='button'
						onClick={() => updateFeedback('neutral')}
					>
						Neutral
					</button>
				</li>
				<li>
					<button
						className={clsx(css.optionBtn)}
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
							className={clsx(css.optionBtn)}
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
