import React, { Component } from 'react';
import css from './FeedBackButtons.module.css';

class FeedbackButtons extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // changeGood = ()
  updateStatistics = () => {};

  render() {
    const {
      feedBackBtnsBox,
      feedbackBtnsTitle,
      feedbackBtnsList,
      feedbackBtnsItem,
      feedbackBtn,
    } = css;
    return (
      <div className={feedBackBtnsBox}>
        {/* <h2></h2> */}
        <p className={feedbackBtnsTitle}>Please leave feedback</p>
        <ul className={feedbackBtnsList}>
          <li className={feedbackBtnsItem}>
            <button type="button" className={feedbackBtn}>
              Good
            </button>
          </li>
          <li className={feedbackBtnsItem}>
            <button type="button" className={feedbackBtn}>
              Neutral
            </button>
          </li>
          <li className={feedbackBtnsItem}>
            <button type="button" className={feedbackBtn}>
              Bad
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

export default FeedbackButtons;
