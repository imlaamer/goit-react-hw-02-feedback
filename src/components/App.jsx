import Feedback from 'components/Feedback';
import Statistics from 'components/Feedback/Statistics';
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
      <Feedback></Feedback>
    </div>
  );
};
