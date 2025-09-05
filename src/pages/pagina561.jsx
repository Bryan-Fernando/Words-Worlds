import React, { useEffect } from 'react';
import styles from './pagina561.module.css';

const Pagina561 = ({ onValidar }) => {
  useEffect(() => { onValidar?.(true); }, [onValidar]);

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Real-life Dialogues</h1>
      <h2 className={styles.subtitle}>Part 2 / 2</h2>

      <figure className={styles.heroWrap}>
        <img
          src="" /* sua imagem aqui */
          alt="Friends chatting at the park"
          className={styles.hero}
        />
      </figure>

      <main className={styles.dialog}>
        <p className={styles.lineB}>
          <strong className={styles.nameB}>Maya:</strong>{' '}
          <em>I used to study</em> biology, but I switched to environmental science last year.
          It's more aligned with my interests.
        </p>

        <p className={styles.lineA}>
          <strong className={styles.nameA}>Alex:</strong>{' '}
          That's cool! <em>I used to study</em> computer science, but I'm considering a shift to
          graphic design now.
        </p>

        <p className={styles.lineB}>
          <strong className={styles.nameB}>Maya:</strong>{' '}
          Graphic design sounds fascinating! What made you decide to switch?
        </p>

        <p className={styles.lineA}>
          <strong className={styles.nameA}>Alex:</strong>{' '}
          <em>I used to spend</em> a lot of time creating digital art as a hobby, and I realized
          I wanted to pursue it further.
        </p>

        <p className={styles.lineB}>
          <strong className={styles.nameB}>Maya:</strong>{' '}
          That's a great reason to make a change! Do you still create art?
        </p>

        <p className={styles.lineA}>
          <strong className={styles.nameA}>Alex:</strong>{' '}
          Not as often as I <em>used to</em>, but I'm hoping to get back into it soon.
        </p>

        <p className={styles.lineB}>
          <strong className={styles.nameB}>Maya:</strong>{' '}
          You should! It's always nice to revisit old hobbies.
        </p>
      </main>
    </div>
  );
};

export default Pagina561;
