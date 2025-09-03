// Pagina542.tsx
import React, { useEffect } from 'react';
import styles from './pagina542.module.css';

const Pagina542 = ({ onValidar, heroSrc = '' }) => {
  useEffect(() => { onValidar?.(true); }, [onValidar]);

  return (
    <div className={styles.page__container}>
      <header className={styles.page__header}>
        <h1 className={styles.page__title}>Real-life Dialogues</h1>
      </header>

      <h2 className={styles.sectionLabel}>Shopping for Clothes</h2>

      <main className={styles.blocks}>
        {/* 1 */}
        <section className={styles.box}>
          <h3 className={styles.boxTitle}>Paying for Items</h3>
          <p className={styles.lineB}>
            <strong className={styles.nameB}>Shopkeeper:</strong> Did you find everything you were looking for?
          </p>
          <p className={styles.lineA}>
            <strong className={styles.nameA}>Customer:</strong> Yes, I did. How much do I owe you?
          </p>
          <p className={styles.lineB}>
            <strong className={styles.nameB}>Shopkeeper:</strong> Your total is R$120, including tax.
          </p>
          <p className={styles.lineA}>
            <strong className={styles.nameA}>Customer:</strong> Here's R$150.
          </p>
          <p className={styles.lineB}>
            <strong className={styles.nameB}>Shopkeeper:</strong> Thank you. Here's your change and receipt.
          </p>
        </section>

        {/* 2 */}
        <section className={styles.box}>
          <h3 className={styles.boxTitle}>Trying on a Jacket</h3>
          <p className={styles.lineA}>
            <strong className={styles.nameA}>Customer:</strong> I'm interested in this jacket. Can I try it on?
          </p>
          <p className={styles.lineB}>
            <strong className={styles.nameB}>Shopkeeper:</strong> Of course. The fitting rooms are right over there.
          </p>
          <p className={styles.lineA}>
            <strong className={styles.nameA}>Customer:</strong> Thank you. I'll be back after trying it on.
          </p>
        </section>

        {/* 3 */}
        <section className={styles.box}>
          <h3 className={styles.boxTitle}>Asking About Return Policy</h3>
          <p className={styles.lineA}>
            <strong className={styles.nameA}>Customer:</strong> What's your return policy if the clothes don't fit?
          </p>
          <p className={styles.lineB}>
            <strong className={styles.nameB}>Shopkeeper:</strong> You can return or exchange items within 30 days with the receipt.
          </p>
          <p className={styles.lineA}>
            <strong className={styles.nameA}>Customer:</strong> That's good to know. Thank you.
          </p>
        </section>

        {/* 4 */}
        <section className={styles.box}>
          <h3 className={styles.boxTitle}>Choosing Accessories</h3>
          <p className={styles.lineA}>
            <strong className={styles.nameA}>Customer:</strong> I'm looking for a belt to go with these pants. Do you have any?
          </p>
          <p className={styles.lineB}>
            <strong className={styles.nameB}>Shopkeeper:</strong> Yes, we have a variety of belts right here. They range from R$20 to R$40.
          </p>
          <p className={styles.lineA}>
            <strong className={styles.nameA}>Customer:</strong> I'll take this one for R$25.
          </p>
        </section>
      </main>

      {/* Hero no rodapé, como na referência */}
      <figure className={styles.heroWrap}>
        <img
          src={heroSrc /* ex.: "/imgs/shopping-counter.jpg" */}
          alt="Customer paying for items at the counter"
          className={styles.hero}
        />
      </figure>
    </div>
  );
};

export default Pagina542;
