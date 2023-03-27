import PropTypes from 'prop-types';
import css from '../css/Section.module.css';

export const Section = ({ title = '', children }) => {
  return (
    <section className={css.section}>
      <h3 className={css.title}>{title}</h3>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
};
