import FeedbackButtons from 'components/FeedbackButtons';
import Statistics from 'components/Statistics';
// import FeedbackButtons from "./FeedbackButtons/FeedbackButtons";

export const App = () => {
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
      <FeedbackButtons></FeedbackButtons>
      <Statistics></Statistics>
    </div>
  );
};
