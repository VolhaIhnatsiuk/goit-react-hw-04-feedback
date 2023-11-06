import css from './FeedbackOptions.module.css';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={css.list}>
      {options.map(option => {
        return (
          <li key={option}>
            <button onClick={onLeaveFeedback} className={css.btn} name={option}>
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
};