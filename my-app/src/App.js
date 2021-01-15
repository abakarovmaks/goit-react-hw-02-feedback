import './App.css';
import React, { Component } from 'react';
import Container from './components/Container/Container';
import Section from './components/Section/Section';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Notification from './components/Notification/Notification';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total === 0 ? 0 : Math.floor((good / total) * 100);
  }

  handleFeedback = ({ target }) => {
    const feedbackType = target.dataset.action;
    this.setState(prevState => ({
      [feedbackType]: prevState[feedbackType] + 1,
    }));
    target.blur();
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = ['good', 'neutral', 'bad'];

    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback given!" />
          )}
        </Section>
      </Container>
    );
  }
}
