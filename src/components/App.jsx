import { useState, useEffect } from 'react';
import { useFeedback } from '../hooks/useFeedback';
import { Section } from './Section';
import { Statistics } from './Statistics';
import { FeedbackOptions } from './FeedbackOptions';
import { Notification } from './Notification';
import { countTotalFeedback } from '../functions/countTotalFeedback';
import { countPositiveFeedbackPercentage } from '../functions/countPositiveFeedbackPercentage';
import css from '../css/Container.module.css';

export const App = () => {
  const { good, neutral, bad, leaveFeedback } = useFeedback(0, 0, 0);
  const [total, setTotal] = useState(0);
  const [positivePercentage, setPositivePercentage] = useState(0);

  useEffect(() => {
    setTotal(countTotalFeedback({ good, neutral, bad }));
  }, [good, neutral, bad]);

  useEffect(() => {
    setPositivePercentage(
      countPositiveFeedbackPercentage({ good, neutral, bad })
    );
  }, [good, neutral, bad]);

  const onLeaveFeedback = evt => {
    leaveFeedback(evt.target.name);
  };

  return (
    <div className={css.container}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['Good', 'Neutral', 'Bad']}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </div>
  );
};
