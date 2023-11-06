import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
  children,
}) => {
  return (
    <div className={css.container}>
      {total === 0 ? (
        children
      ) : (
        <ul className={css.statList}>
          <li>
            <span className={css.statItem}>Good: {good}</span>
          </li>
          <li>
            <span className={css.statItem}>Neutral: {neutral}</span>
          </li>
          <li>
            <span className={css.statItem}>Bad: {bad}</span>
          </li>
          <li>
            <span className={css.statItem}>Total: {total}</span>
          </li>
          <li>
            <span className={css.statItem}>
              Positive feedback: {positivePercentage || 0}%
            </span>
          </li>
        </ul>
      )}
    </div>
  );
};