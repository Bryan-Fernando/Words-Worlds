import React, { useEffect } from 'react';
import styles from './pagina554.module.css';

const Pagina554 = ({ onValidar }) => {
  useEffect(() => { onValidar?.(true); }, [onValidar]);

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Real-life Dialogues</h1>
      <h2 className={styles.subtitle}>Part 1 / 2</h2>

      <figure className={styles.heroWrap}>
        <img
          src="" /* sua imagem aqui */
          alt="Old friends meeting and talking on the street"
          className={styles.hero}
        />
      </figure>

      <main className={styles.dialog}>
        <p className={styles.lineA}>
          <strong className={styles.nameA}>Ana:</strong>{' '}
          Chris! It's been so long since we caught up. How have you been?
        </p>

        <p className={styles.lineB}>
          <strong className={styles.nameB}>Chris:</strong>{' '}
          Ana! I know, it feels like a lifetime. I've been good, busy with work and life.
          How about you?
        </p>

        <p className={styles.lineA}>
          <strong className={styles.nameA}>Ana:</strong>{' '}
          Likewise. Life has been a roller coaster, but there have been some incredible
          moments. By the time we last met, I had just started my own business.
        </p>

        <p className={styles.lineB}>
          <strong className={styles.nameB}>Chris:</strong>{' '}
          No way! That's amazing. What kind of business did you start?
        </p>

        <p className={styles.lineA}>
          <strong className={styles.nameA}>Ana:</strong>{' '}
          It's a small design studio. By the time we last saw each other, I had already
          secured a few clients and was working on some exciting projects. The journey
          from then to now has been challenging but fulfilling.
        </p>

        <p className={styles.lineB}>
          <strong className={styles.nameB}>Chris:</strong>{' '}
          I can imagine. By the way, have you ever thought about expanding your business?
        </p>

        <p className={styles.lineA}>
          <strong className={styles.nameA}>Ana:</strong>{' '}
          Yes, actually. By the time we last caught up, I had already considered it. Now,
          I'm in the early stages of planning to open a second branch in a different city.
        </p>

        <p className={styles.lineB}>
          <strong className={styles.nameB}>Chris:</strong>{' '}
          That's a big step. I'm impressed! Speaking of changes, do you remember our road
          trip back in college?
        </p>
      </main>
    </div>
  );
};

export default Pagina554;
