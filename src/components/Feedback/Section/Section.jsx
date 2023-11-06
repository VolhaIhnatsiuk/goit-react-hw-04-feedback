import css from './Section.module.css';

export const Section = ({ title, children }) => {
  return (
    <section className={css.container}>
      <p className={css.title}>{title}</p>
      {children}
    </section>
  );
};