import React, { useEffect } from 'react';
import styles from './pagina541.module.css';

const Pagina541 = ({ onValidar }) => {
  useEffect(() => { onValidar?.(true); }, [onValidar]);

  return (
    <div className={styles.page__container}>
      <header className={styles.page__header}>
        <h1 className={styles.page__title}>Real-life Dialogues</h1>
      </header>

      <h2 className={styles.sectionLabel}>Shopping for Clothes</h2>

      <figure className={styles.heroWrap}>
        <img
          src="" /* sua imagem aqui */
          alt="Friends shopping for clothes at a store"
          className={styles.hero}
        />
      </figure>

      <main className={styles.blocks}>
        {/* 1 */}
        <section className={styles.box}>
          <h3 className={styles.boxTitle}>Inquiring about Price</h3>
          <p className={styles.lineA}>
            <strong className={styles.nameA}>Customer:</strong> Hello, how much is this shirt?
          </p>
          <p className={styles.lineB}>
            <strong className={styles.nameB}>Shopkeeper:</strong> This shirt costs R$50.
          </p>
          <p className={styles.lineA}>
            <strong className={styles.nameA}>Customer:</strong> Does that price include tax?
          </p>
          <p className={styles.lineB}>
            <strong className={styles.nameB}>Shopkeeper:</strong> Yes, the price includes tax.
          </p>
        </section>

        {/* 2 */}
        <section className={styles.box}>
          <h3 className={styles.boxTitle}>Asking about Sizes</h3>
          <p className={styles.lineA}>
            <strong className={styles.nameA}>Customer:</strong> Excuse me, do you have this dress in a medium size?
          </p>
          <p className={styles.lineB}>
            <strong className={styles.nameB}>Shopkeeper:</strong> Yes, we do have it in medium. Would you like to try it on?
          </p>
          <p className={styles.lineA}>
            <strong className={styles.nameA}>Customer:</strong> Sure, I'll try it on.
          </p>
        </section>

        {/* 3 */}
        <section className={styles.box}>
          <h3 className={styles.boxTitle}>Choosing a T-Shirt</h3>
          <p className={styles.lineA}>
            <strong className={styles.nameA}>Customer:</strong> I like this t-shirt. Is it available in different colors?
          </p>
          <p className={styles.lineB}>
            <strong className={styles.nameB}>Shopkeeper:</strong> Yes, it comes in blue, black, and white. Which color would you prefer?
          </p>
          <p className={styles.lineA}>
            <strong className={styles.nameA}>Customer:</strong> I'll take the blue one.
          </p>
        </section>

        {/* 4 */}
        <section className={styles.box}>
          <h3 className={styles.boxTitle}>Looking at Jeans</h3>
          <p className={styles.lineA}>
            <strong className={styles.nameA}>Customer:</strong> These jeans look nice. What's the price?
          </p>
          <p className={styles.lineB}>
            <strong className={styles.nameB}>Shopkeeper:</strong> The jeans are R$80.
          </p>
          <p className={styles.lineA}>
            <strong className={styles.nameA}>Customer:</strong> And after tax?
          </p>
          <p className={styles.lineB}>
            <strong className={styles.nameB}>Shopkeeper:</strong> With tax, they'll be R$92.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Pagina541;
