import React, { Component } from 'react';
import FeedbackBtns from './FeedbackBtns/FeedbackBtns';
import Statistics from 'components/Feedback/Statistics';
import css from './FeedBack.module.css';

class Feedback extends Component {
  static defaultProps = {
    initialValue: 0,
    step: 1,
  };

  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
    total: this.props.initialValue,
    positiveFeedbacks: this.props.initialValue,
  };

  // handleUpdateStatistics = (e, mark) => {
  //   this.setState(prevState => {
  //     return { mark: prevState.mark + this.props.step };
  //   });
  // };

  handleCountGood = () => {
    this.setState(prevState => {
      return { good: prevState.good + this.props.step };
    });
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };
  handleCountNeutral = () => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + this.props.step };
    });
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };
  handleCountBad = () => {
    this.setState(prevState => {
      return { bad: prevState.bad + this.props.step };
    });
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

  // total  - 100%
  //positiveFeedbacks = x%
  //positiveFeedbacks = x%

  //total - 100%
  //(good + neutral)  - x

  render() {
    const { feedbackContainer } = css;
    return (
      <div className={feedbackContainer}>
        <FeedbackBtns
          handleCountGood={this.handleCountGood}
          handleCountNeutral={this.handleCountNeutral}
          handleCountBad={this.handleCountBad}
          countTotalFeedback={this.countTotalFeedback}
          // handleUpdateStatistics={this.handleUpdateStatistics}
        ></FeedbackBtns>
        <Statistics {...this.state}></Statistics>
      </div>
    );
  }
}

export default Feedback;
