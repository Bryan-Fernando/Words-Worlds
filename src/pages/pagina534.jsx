import React, { useEffect } from 'react';
import styles from './pagina534.module.css';

const Pagina534 = ({ onValidar }) => {
  useEffect(() => { onValidar?.(true); }, [onValidar]);

  return (
    <div className={styles.page__container}>
      <header className={styles.page__header}>
        <h1 className={styles.page__title}>Real-life Dialogues</h1>
      </header>

      <h2 className={styles.sectionLabel}>Public Transport</h2>

      <figure className={styles.heroWrap}>
        <img
          src="" /* imagem do ônibus aqui */
          alt="People talking on a city bus"
          className={styles.hero}
        />
      </figure>

      <section className={styles.dialogueBlock}>
        <h3 className={styles.dialogueTitle}>On the Bus</h3>

        <div className={styles.dialogue}>
          <p className={styles.lineA}>
            <strong className={styles.nameA}>Mike</strong>:
            {' '}Excuse me, is this seat taken?
          </p>
          <p className={styles.lineB}>
            <strong className={styles.nameB}>Lisa</strong>:
            {' '}No, you're welcome to sit there.
          </p>

          <p className={styles.lineA}>
            <strong className={styles.nameA}>Mike</strong>:
            {' '}Thanks. I'm not very familiar with this route. Does it pass by the shopping mall?
          </p>
          <p className={styles.lineB}>
            <strong className={styles.nameB}>Lisa</strong>:
            {' '}Yes, it does. It's about three stops away. Just give me a heads-up when we're getting
            close, and I'll let you know.
          </p>

          <p className={styles.lineA}>
            <strong className={styles.nameA}>Mike</strong>:
            {' '}I appreciate it. I'm trying to catch a movie there in the afternoon.
          </p>
          <p className={styles.lineB}>
            <strong className={styles.nameB}>Lisa</strong>:
            {' '}Movies sound like a great idea. I might do the same if I get my errands done early.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Pagina534;

