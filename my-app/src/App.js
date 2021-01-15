import './App.css';
import React, { Component } from 'react';
import Container from './components/Container/Container';
import Section from './components/Section/Section';
import Statistics from './components/Statistics/Statistics';
import Notification from './components/Notification/Notification';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // countTotalFeedback() {
  //   const { good, neutral, bad } = this.state;

  //   return bad + good + neutral;
  // }

  render() {
    return (
      <Container>
        <Section title="Please leave feedback" />
        <Section title="Statistics" />
        <Statistics />
        <Notification message="No feedback given!" />
      </Container>
    );
  }
}
