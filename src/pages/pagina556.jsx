import React, { useEffect } from 'react';
import styles from './pagina556.module.css';

const Pagina556 = ({ onValidar }) => {
  useEffect(() => { onValidar?.(true); }, [onValidar]);

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Real-life Dialogues</h1>
      <h2 className={styles.subtitle}>Part 1 / 2</h2>

      <figure className={styles.heroWrap}>
        <img
          src="" /* sua imagem aqui */
          alt="Two friends chatting over coffee at a table"
          className={styles.hero}
        />
      </figure>

      <main className={styles.dialog}>
        <p className={styles.lineA}>
          <strong className={styles.nameA}>Victoria:</strong>{' '}
          Hey Julia, guess what? My birthday is just around the corner!
        </p>

        <p className={styles.lineB}>
          <strong className={styles.nameB}>Julia:</strong>{' '}
          No way! When is it?
        </p>

        <p className={styles.lineA}>
          <strong className={styles.nameA}>Victoria:</strong>{' '}
          It's next week, on the 7th. I'm so excited!
        </p>

        <p className={styles.lineB}>
          <strong className={styles.nameB}>Julia:</strong>{' '}
          That's awesome! We need to plan something special. Any preferences on how you want to
          celebrate?
        </p>

        <p className={styles.lineA}>
          <strong className={styles.nameA}>Victoria:</strong>{' '}
          Hmm, I was thinking of having a small get-together at my place with close friends.
          Nothing too fancy, just good company and lots of laughter.
        </p>

        <p className={styles.lineB}>
          <strong className={styles.nameB}>Julia:</strong>{' '}
          Perfect! I'll bring some decorations, and we can have a little birthday bash. By the way,
          have you ever checked out your horoscope for your birthday?
        </p>

        <p className={styles.lineA}>
          <strong className={styles.nameA}>Victoria:</strong>{' '}
          Not really, I'm not into that stuff. What does it say about Pisces?
        </p>

        <p className={styles.lineB}>
          <strong className={styles.nameB}>Julia:</strong>{' '}
          Well, Pisces are known to have an imaginative and compassionate nature. The stars suggest
          that you might be feeling more creative and emotionally in tune around your birthday.
        </p>
      </main>
    </div>
  );
};

export default Pagina556;
