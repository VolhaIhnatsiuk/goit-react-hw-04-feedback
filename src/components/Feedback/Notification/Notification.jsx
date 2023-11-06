import css from './Notification.module.css';

export const Notification = ({ message }) => {
  return (
    <div className={css.container}>
      <p className={css.notification}>{message}</p>
    </div>
  );
};
