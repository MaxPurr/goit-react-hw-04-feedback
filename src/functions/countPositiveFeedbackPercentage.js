import { countTotalFeedback } from './countTotalFeedback';

export const countPositiveFeedbackPercentage = (state) => {
    return Math.round(state.good / countTotalFeedback(state) * 100);
};