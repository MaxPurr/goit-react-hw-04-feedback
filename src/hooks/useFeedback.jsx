import { useState } from 'react';

export const useFeedback = (goodValue, neutralValue, badValue) => {
  const [good, setGood] = useState(goodValue);
  const [neutral, setNeutral] = useState(neutralValue);
  const [bad, setBad] = useState(badValue);
  const leaveFeedback = name => {
    switch (name) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      default:
        setBad(bad + 1);
        break;
    }
  };
  return { good, neutral, bad, leaveFeedback };
};
