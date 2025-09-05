import React, { useEffect } from 'react';
import styles from './pagina560.module.css';

const Pagina560 = ({ onValidar }) => {
  useEffect(() => { onValidar?.(true); }, [onValidar]);

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Real-life Dialogues</h1>
      <h2 className={styles.subtitle}>Part 1 / 2</h2>

      <figure className={styles.heroWrap}>
        <img
          src="" /* sua imagem aqui */
          alt="Two friends chatting at the park"
          className={styles.hero}
        />
      </figure>

      <main className={styles.dialog}>
        <p className={styles.lineA}>
          <strong className={styles.nameA}>Alex:</strong>{' '}
          So, Maya, what kinds of things <em>did you used to</em> do for fun when you were younger?
        </p>

        <p className={styles.lineB}>
          <strong className={styles.nameB}>Maya:</strong>{' '}
          Well, I <em>used to</em> play the violin. I was really passionate about it. What about you?
        </p>

        <p className={styles.lineA}>
          <strong className={styles.nameA}>Alex:</strong>{' '}
          That's interesting! I <em>used to be</em> into skateboarding. Spent a lot of time at the skate park.
        </p>

        <p className={styles.lineB}>
          <strong className={styles.nameB}>Maya:</strong>{' '}
          That sounds like fun! Do you still skateboard now?
        </p>

        <p className={styles.lineA}>
          <strong className={styles.nameA}>Alex:</strong>{' '}
          Not as much as I <em>used to</em>. How about you? Do you still play the violin?
        </p>

        <p className={styles.lineB}>
          <strong className={styles.nameB}>Maya:</strong>{' '}
          I haven't played in a while. I <em>used to perform</em> in concerts, but life got busy with college.
        </p>

        <p className={styles.lineA}>
          <strong className={styles.nameA}>Alex:</strong>{' '}
          I get that. Speaking of college, what <em>did you use to</em> study?
        </p>
      </main>
    </div>
  );
};

export default Pagina560;
