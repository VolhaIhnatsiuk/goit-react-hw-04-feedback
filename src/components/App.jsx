import React, { useState } from 'react';
import { Section } from './Feedback/Section/Section';
import { Statistics } from './Feedback/Statistics/Statistics';
import { FeedbackOptions } from './Feedback/FeedbackOptions/FeedbackOptions';
import { Notification } from './Feedback/Notification/Notification';

export const App = () => {
  const [goodValue, setGoodValue] = useState(0);
  const [neutralValue, setNeutralValue] = useState(0);
  const [badValue, setBadValue] = useState(0);

  const handleChangeStatist = evt => {
    switch (evt.target.name) {
      case 'good':
        setGoodValue(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutralValue(prevState => prevState + 1);
        break;
      case 'bad':
        setBadValue(prevState => prevState + 1);
        break;
      default:
        alert('Something went wrong...');
    }
  };

  const countTotalFeedback = () => {
    return goodValue + neutralValue + badValue;
  };
  
  const countPositiveFeedbackPercentage = () => {
    return Math.round((goodValue * 100) / countTotalFeedback());
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleChangeStatist}
        />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={goodValue}
          neutral={neutralValue}
          bad={badValue}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        >
          <Notification message="There is no feedback" />
        </Statistics>
      </Section>
    </>
  );
};
