// Pagina544.tsx
import React, { useEffect } from 'react';
import styles from './pagina544.module.css';

const Pagina544 = ({ onValidar, heroSrc = '' }) => {
  useEffect(() => { onValidar?.(true); }, [onValidar]);

  return (
    <div className={styles.page__container}>
      <header className={styles.page__header}>
        <h1 className={styles.page__title}>Real-life Dialogues</h1>
      </header>

      <h2 className={styles.sectionLabel}>Asking for Assistance</h2>

      <figure className={styles.heroWrap}>
        <img
          src={heroSrc /* ex.: "/imgs/jeans-assistance.jpg" */}
          alt="Customer asking for assistance in a clothing store"
          className={styles.hero}
        />
      </figure>

      <main className={styles.blocks}>
        <section className={styles.box}>
          <p className={styles.lineA}>
            <strong className={styles.nameA}>Ben:</strong> Excuse me, can you help me find a pair of jeans?
          </p>
          <p className={styles.lineB}>
            <strong className={styles.nameB}>Shop Assistant:</strong> Of course, I'd be happy to help. Are you looking for a specific color or style?
          </p>
          <p className={styles.lineA}>
            <strong className={styles.nameA}>Ben:</strong> I prefer dark blue and a slim fit.
          </p>
          <p className={styles.lineB}>
            <strong className={styles.nameB}>Shop Assistant:</strong> We have a few options in dark blue and slim fit. Follow me.
          </p>

          <p className={styles.stage}><em>(At the jeans section)</em></p>

          <p className={styles.lineB}>
            <strong className={styles.nameB}>Shop Assistant:</strong> Here are the dark blue slim-fit jeans. What size are you?
          </p>
          <p className={styles.lineA}>
            <strong className={styles.nameA}>Ben:</strong> I'm a size 32.
          </p>
          <p className={styles.lineB}>
            <strong className={styles.nameB}>Shop Assistant:</strong> Here's a size 32. Feel free to try them on and see how they fit.
          </p>
          <p className={styles.lineA}>
            <strong className={styles.nameA}>Ben:</strong> These fit well. How much do they cost?
          </p>
          <p className={styles.lineB}>
            <strong className={styles.nameB}>Shop Assistant:</strong> They're on sale for $40 right now.
          </p>
          <p className={styles.lineA}>
            <strong className={styles.nameA}>Ben:</strong> I'll take them.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Pagina544;
