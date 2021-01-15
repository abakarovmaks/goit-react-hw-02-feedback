import './App.css';
import React, { Component } from 'react';
import Container from './components/Container/Container';
import Section from './components/Section/Section';
import Statistics from './components/Statistics/Statistics';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <Container>
        <Section title="Please leave feedback" />
        <Section title="Statistics" />
        <Statistics />
      </Container>
    );
  }
}
