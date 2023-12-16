import React, { Component } from 'react';
import Section from 'components/Section';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import Notification from 'components/Notification';

class App extends Component {
  options = ['good', 'neutral', 'bad'];

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positiveFeedbacks: 0,
  };

  onLeaveFeedback = option => {
    this.setState({ [option]: this.state[option] + 1 });
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback = () => {
    this.setState(prevState => {
      return { total: prevState.good + prevState.neutral + prevState.bad };
    });
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(prevState => {
      return {
        positiveFeedbacks: Math.ceil(
          ((prevState.good + prevState.neutral) * 100) / prevState.total
        ),
      };
    });
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <div
          style={{
            width: 400,
            padding: 20,
            display: 'flex',
            flexDirection: 'column',
            gap: 30,
            border: '1px solid rgba(128, 128, 128, 0.225)',
          }}
        >
          <Section title="Please leave feedback">
            <FeedbackOptions
              onLeaveFeedback={this.onLeaveFeedback}
              options={this.options}
            ></FeedbackOptions>
          </Section>

          <Section title="Statistics">
            {this.options.some(option => this.state[option] !== 0) ? (
              <Statistics {...this.state}></Statistics>
            ) : (
              <Notification message="There is no feedback"></Notification>
            )}
          </Section>
        </div>
      </div>
    );
  }
}

export default App;
