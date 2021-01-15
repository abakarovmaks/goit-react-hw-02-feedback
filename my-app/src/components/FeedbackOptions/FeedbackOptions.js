import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const btn = ({ feedbackType, onLeaveFeedback }) => {
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

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return options.map(option => btn({ feedbackType: option, onLeaveFeedback }));
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
