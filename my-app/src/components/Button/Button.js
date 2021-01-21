import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ feedbackType, onLeaveFeedback }) => {
  return (
    <button
      className={styles.btn}
      key={feedbackType}
      data-action={feedbackType}
      onClick={onLeaveFeedback}
    >
      {feedbackType}
    </button>
  );
};

Button.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default Button;
