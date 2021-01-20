import PropTypes from 'prop-types';
import Btn from '../Btn/Btn';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return options.map(option => Btn({ feedbackType: option, onLeaveFeedback }));
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
};
