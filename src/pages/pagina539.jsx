import React, { useEffect } from 'react';
import styles from './pagina539.module.css';

const Pagina539 = ({ onValidar }) => {
  useEffect(() => { onValidar?.(true); }, [onValidar]);

  return (
    <div className={styles.page__container}>
      <header className={styles.page__header}>
        <h1 className={styles.page__title}>Real-life Dialogues</h1>
      </header>

      <main className={styles.grid}>
        {/* Coluna 1 */}
        <section className={styles.card}>
          <img
            src=""
            alt="Family being seated at a restaurant"
            className={styles.cardImage}
          />
          <div className={styles.cardBody}>
            <h3 className={styles.cardTitle}>Seating and Ordering</h3>

            <p className={styles.lineA}>
              <strong className={styles.nameA}>Hostess:</strong>{' '}
              Good evening! How many people are in your party?
            </p>
            <p className={styles.lineB}>
              <strong className={styles.nameB}>Couple:</strong>{' '}
              There are four of us - two adults and our two kids.
            </p>
            <p className={styles.lineA}>
              <strong className={styles.nameA}>Hostess:</strong>{' '}
              Right this way, please. Here are your menus.
            </p>
            <p className={styles.lineB}>
              <strong className={styles.nameB}>Couple:</strong>{' '}
              Thank you.
            </p>
          </div>
        </section>

        {/* Coluna 2 */}
        <section className={styles.card}>
          <img
            src=""
            alt="Waiter taking orders from a family"
            className={styles.cardImage}
          />
          <div className={styles.cardBody}>
            <h3 className={styles.cardTitle}>Ordering Drinks and Kids' Meals</h3>

            <p className={styles.lineA}>
              <strong className={styles.nameA}>Waiter:</strong>{' '}
              Welcome to our restaurant. Have you decided on your drinks?
            </p>
            <p className={styles.lineB}>
              <strong className={styles.nameB}>Dad:</strong>{' '}
              I'll have iced tea, and my wife will have a lemonade. For the kids, can we get two apple juices?
            </p>
            <p className={styles.lineA}>
              <strong className={styles.nameA}>Waiter:</strong>{' '}
              Absolutely. And would you like to order the kids' meals now?
            </p>
            <p className={styles.lineB}>
              <strong className={styles.nameB}>Mom:</strong>{' '}
              Yes, please. Two kids' cheeseburgers, both with fries.
            </p>
            <p className={styles.lineA}>
              <strong className={styles.nameA}>Waiter:</strong>{' '}
              Got it. I'll put that in right away.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pagina539;
