import React from 'react';
import PropTypes from 'prop-types';
import styles from './Btn.module.css';

const Btn = ({ feedbackType, onLeaveFeedback }) => {
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

Btn.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default Btn;
