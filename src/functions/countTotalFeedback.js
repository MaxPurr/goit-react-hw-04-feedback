export const countTotalFeedback = (state) => {
    let total = (Object.values(state)).reduce((previous, value) => {
        return previous + value;
    }, 0);
    return total;
};