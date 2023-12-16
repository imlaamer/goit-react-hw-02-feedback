import css from './FeedbackBtns.module.css';
// import

import React from 'react';

function FeedbackBtns({ handleCountGood, handleCountNeutral, handleCountBad }) {
  const {
    feedBackBtnsBox,
    feedbackBtnsTitle,
    feedbackBtnsList,
    feedbackBtnsItem,
    feedbackBtn,
  } = css;
  return (
    <div className={feedBackBtnsBox}>
      <p className={feedbackBtnsTitle}>Please leave feedback</p>
      <ul className={feedbackBtnsList}>
        <li className={feedbackBtnsItem}>
          <button
            type="button"
            className={feedbackBtn}
            onClick={() => handleCountGood()}
          >
            Good
          </button>
        </li>
        <li className={feedbackBtnsItem}>
          <button
            type="button"
            className={feedbackBtn}
            onClick={() => handleCountNeutral()}
          >
            Neutral
          </button>
        </li>
        <li className={feedbackBtnsItem}>
          <button
            type="button"
            className={feedbackBtn}
            onClick={() => handleCountBad()}
          >
            Bad
          </button>
        </li>
      </ul>
    </div>
  );
}

export default FeedbackBtns;
