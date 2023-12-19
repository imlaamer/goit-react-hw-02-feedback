import React, { Component } from 'react';
import Section from 'components/Section';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import Notification from 'components/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    // total: 0,
    // positiveFeedbacks: 0,
  };

  options = Object.keys(this.state);

  onLeaveFeedback = option => {
    this.setState(prevState => {
      return { [option]: prevState[option] + 1 };
    });
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.ceil((this.state.good * 100) / this.countTotalFeedback());
  };

  // countTotalFeedback = () => {
  //   this.setState(prevState => {
  //     return { total: prevState.good + prevState.neutral + prevState.bad };
  //   });
  // };

  // countPositiveFeedbackPercentage = () => {
  //   this.setState(prevState => {
  //     return {
  //       positiveFeedbacks: Math.ceil((prevState.good * 100) / prevState.total),
  //     };
  //   });
  // };

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
            borderRadius: 20,
            boxShadow:
              'rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px',
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
              <Statistics
                {...this.state}
                total={this.countTotalFeedback()}
                positiveFeedbacks={this.countPositiveFeedbackPercentage()}
              ></Statistics>
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
