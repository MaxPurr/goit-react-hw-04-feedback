import PropTypes from 'prop-types';
import css from '../css/Notification.module.css';

export const Notification = ({ message = 'There is no feedback' }) => {
  return (
    <div className={css.notification_container}>
      <p className={css.notification_text}>{message}</p>
    </div>
  );
};

Notification.propTypes = {
  message: PropTypes.string,
};
