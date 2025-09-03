import React, { useEffect } from 'react';
import styles from './pagina540.module.css';

const Pagina540 = ({ onValidar }) => {
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
            src="" /* imagem 1 */
            alt="Waiter talking to a couple at a restaurant"
            className={styles.cardImage}
          />
          <div className={styles.cardBody}>
            <h3 className={styles.cardTitle}>Asking for Recommendations</h3>

            <p className={styles.lineA}>
              <strong className={styles.nameA}>Mom:</strong>{' '}
              Could you suggest some vegetarian options?
            </p>
            <p className={styles.lineB}>
              <strong className={styles.nameB}>Waiter:</strong>{' '}
              Certainly. Our vegetable stir-fry and spinach pasta are popular choices.
            </p>
            <p className={styles.lineA}>
              <strong className={styles.nameA}>Dad:</strong>{' '}
              I’ll go with the vegetable stir-fry.
            </p>
            <p className={styles.lineB}>
              <strong className={styles.nameB}>Mom:</strong>{' '}
              And I’ll have the spinach pasta.
            </p>
          </div>
        </section>

        {/* Coluna 2 */}
        <section className={styles.card}>
          <img
            src="" /* imagem 2 */
            alt="Waiter taking a special request from a guest"
            className={styles.cardImage}
          />
          <div className={styles.cardBody}>
            <h3 className={styles.cardTitle}>Special Requests</h3>

            <p className={styles.lineA}>
              <strong className={styles.nameA}>Dad:</strong>{' '}
              Can I get the chicken sandwich, but without onions, please?
            </p>
            <p className={styles.lineB}>
              <strong className={styles.nameB}>Waiter:</strong>{' '}
              Of course, no onions on the chicken sandwich. Noted.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pagina540;
