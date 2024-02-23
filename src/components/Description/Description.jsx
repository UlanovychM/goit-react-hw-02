import clsx from 'clsx';
import css from './Description.module.css';

const Description = () => {
	return (
		<>
			<h1 className={clsx(css.tittle)}>Sip Happens Café.</h1>
			<p className={clsx(css.tittle__dscr)}>
				Please leave your feedback about our service by selecting one of the
				options below.
			</p>
		</>
	);
};

export default Description;
