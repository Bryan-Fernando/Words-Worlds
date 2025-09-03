// Pagina545.tsx
import React, { useEffect } from 'react';
import styles from './pagina545.module.css';

const Pagina545 = ({ onValidar, heroSrc = '' }) => {
  useEffect(() => { onValidar?.(true); }, [onValidar]);

  return (
    <div className={styles.page__container}>
      <header className={styles.page__header}>
        <h1 className={styles.page__title}>Real-life Dialogues</h1>
      </header>

      <h2 className={styles.sectionLabel}>Making Choices</h2>

      <figure className={styles.heroWrap}>
        <img
          src={heroSrc /* ex.: "/imgs/making-choices-sweater.jpg" */}
          alt="Customer choosing a sweater with a shop assistant"
          className={styles.hero}
        />
      </figure>

      <main className={styles.blocks}>
        <section className={styles.box}>
          <p className={styles.lineA}>
            <strong className={styles.nameA}>Sophia:</strong> I need a new sweater for the winter. Any suggestions?
          </p>
          <p className={styles.lineB}>
            <strong className={styles.nameB}>Shop Assistant:</strong> Of course! We have cozy sweaters in various colors. What color do you prefer?
          </p>
          <p className={styles.lineA}>
            <strong className={styles.nameA}>Sophia:</strong> I like neutral colors like gray or beige.
          </p>
          <p className={styles.lineB}>
            <strong className={styles.nameB}>Shop Assistant:</strong> Great, let me show you some options.
          </p>

          <p className={styles.stage}><em>(After browsing)</em></p>

          <p className={styles.lineA}>
            <strong className={styles.nameA}>Sophia:</strong> I really like this gray one. Can I try it on?
          </p>
          <p className={styles.lineB}>
            <strong className={styles.nameB}>Shop Assistant:</strong> Certainly, the fitting room is right over there.
          </p>

          <p className={styles.stage}><em>(After trying the sweater)</em></p>

          <p className={styles.lineA}>
            <strong className={styles.nameA}>Sophia:</strong> It's so warm and comfy. How much does it cost?
          </p>
          <p className={styles.lineB}>
            <strong className={styles.nameB}>Shop Assistant:</strong> That sweater is $45.
          </p>
          <p className={styles.lineA}>
            <strong className={styles.nameA}>Sophia:</strong> I'll buy it.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Pagina545;
