import React, { useEffect } from 'react';
import styles from './pagina557.module.css';

const Pagina557 = ({ onValidar }) => {
  useEffect(() => { onValidar?.(true); }, [onValidar]);

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Real-life Dialogues</h1>
      <h2 className={styles.subtitle}>Part 2 / 2</h2>

      <figure className={styles.heroWrap}>
        <img
          src="" /* sua imagem aqui */
          alt="Two friends talking over coffee"
          className={styles.hero}
        />
      </figure>

      <main className={styles.dialog}>
        <p className={styles.lineA}>
          <strong className={styles.nameA}>Victoria:</strong>{' '}
          Interesting! I do feel like I've been in a creative mood lately. Maybe there's
          something to this horoscope thing after all.
        </p>

        <p className={styles.lineB}>
          <strong className={styles.nameB}>Julia:</strong>{' '}
          See, the stars know what they're talking about! Plus, it's always fun to read
          those quirky horoscope predictions.
        </p>

        <p className={styles.lineA}>
          <strong className={styles.nameA}>Victoria:</strong>{' '}
          True, true. What's your sign, Victoria?
        </p>

        <p className={styles.lineB}>
          <strong className={styles.nameB}>Julia:</strong>{' '}
          I'm a Gemini. Apparently, we're supposed to be curious and adaptable. Explains
          why I'm always up for trying new things!
        </p>

        <p className={styles.lineA}>
          <strong className={styles.nameA}>Victoria:</strong>{' '}
          That makes sense. No wonder we get along so well – you keep things interesting!
        </p>

        <p className={styles.lineB}>
          <strong className={styles.nameB}>Julia:</strong>{' '}
          Absolutely! So, are you hoping for any birthday presents in particular?
        </p>

        <p className={styles.lineA}>
          <strong className={styles.nameA}>Victoria:</strong>{' '}
          Hmm, good question. I haven't really thought about it. I guess I just want to
          spend time with the people I care about.
        </p>

        <p className={styles.lineB}>
          <strong className={styles.nameB}>Julia:</strong>{' '}
          That's the best gift of all. I'll make sure to bring something thoughtful along
          with the decorations.
        </p>

        <p className={styles.lineA}>
          <strong className={styles.nameA}>Victoria:</strong>{' '}
          Thanks, Julia! I can't wait for my birthday celebration. It's going to be a blast!
        </p>
      </main>
    </div>
  );
};

export default Pagina557;
