// Pagina543.tsx
import React, { useEffect } from 'react';
import styles from './pagina543.module.css';

const Pagina543 = ({ onValidar, heroSrc = '' }) => {
  useEffect(() => { onValidar?.(true); }, [onValidar]);

  return (
    <div className={styles.page__container}>
      <header className={styles.page__header}>
        <h1 className={styles.page__title}>Real-life Dialogues</h1>
      </header>

      <h2 className={styles.sectionLabel}>At the Clothing Store</h2>

      <figure className={styles.heroWrap}>
        <img
          src={heroSrc /* ex.: "/imgs/clothing-store-3.jpg" */}
          alt="Friends shopping outside a clothing store"
          className={styles.hero}
        />
      </figure>

      <main className={styles.blocks}>
        <section className={styles.box}>
          <p className={styles.lineA}>
            <strong className={styles.nameA}>Alice:</strong> Hi, I'm looking for a dress for a party. Can you help me?
          </p>
          <p className={styles.lineB}>
            <strong className={styles.nameB}>Shop Assistant:</strong> Of course! We have a variety of dresses. What color and size are you looking for?
          </p>
          <p className={styles.lineA}>
            <strong className={styles.nameA}>Alice:</strong> I'd like something in blue, size medium.
          </p>
          <p className={styles.lineB}>
            <strong className={styles.nameB}>Shop Assistant:</strong> Great! Here's a blue dress in medium. Do you want to try it on?
          </p>
          <p className={styles.lineA}>
            <strong className={styles.nameA}>Alice:</strong> Yes, please.
          </p>

          <p className={styles.stage}><em>(After trying the dress)</em></p>

          <p className={styles.lineA}>
            <strong className={styles.nameA}>Alice:</strong> It fits nicely. How much is it?
          </p>
          <p className={styles.lineB}>
            <strong className={styles.nameB}>Shop Assistant:</strong> That dress is $50.
          </p>
          <p className={styles.lineA}>
            <strong className={styles.nameA}>Alice:</strong> Okay, I'll take it.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Pagina543;
