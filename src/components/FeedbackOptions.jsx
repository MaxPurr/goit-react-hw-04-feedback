import PropTypes from 'prop-types';
import css from '../css/FeedbackOptions.module.css';
import clsx from 'clsx';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <div className={css.btn_container}>
      {options.map(option => (
        <button
          className={clsx(css.feedback_btn, css[option.toLowerCase()])}
          name={option.toLowerCase()}
          key={option.toLowerCase()}
          type="button"
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};
