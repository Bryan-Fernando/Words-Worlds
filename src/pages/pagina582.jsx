import React, { useEffect } from "react";
import styles from "./pagina582.module.css";

const Pagina582 = ({ onValidar }) => {
  useEffect(() => { if (onValidar) onValidar(true); }, [onValidar]);

  return (
    <div className={styles.page582__container}>
      <header className={styles.page582__header}>
        <h1 className={styles.page582__title}>Real-life Dialogues</h1>
      </header>

      <main className={styles.page582__main}>
        {/* Imagens lado a lado (placeholders) */}
        <section className={styles.page582__hero}>
          <div className={styles.page582__img} />
          <div className={styles.page582__img} />
        </section>

        {/* Diálogo */}
        <section className={styles.page582__dialogue}>
          <p>
            <span className={`${styles.page582__speaker} ${styles["is-maria"]}`}>Maria Emília:</span>
            <span className={styles.page582__line}>Good morning. I’m Mrs Sousa.</span>
          </p>

          <p>
            <span className={`${styles.page582__speaker} ${styles["is-clerk"]}`}>Clerk:</span>
            <span className={`${styles.page582__line} ${styles["is-clerk"]}`}>I’m sorry. Mrs or Ms?</span>
          </p>

          <p>
            <span className={`${styles.page582__speaker} ${styles["is-maria"]}`}>Maria Emília:</span>
            <span className={styles.page582__line}>Mrs.</span>
          </p>

          <p>
            <span className={`${styles.page582__speaker} ${styles["is-clerk"]}`}>Clerk:</span>
            <span className={`${styles.page582__line} ${styles["is-clerk"]}`}>
              Thank you, Mrs Sousa. How do you spell your last name?
            </span>
          </p>

          <p>
            <span className={`${styles.page582__speaker} ${styles["is-maria"]}`}>Maria Emília:</span>
            <span className={styles.page582__line}>S-O-U-S-A.</span>
          </p>

          <p>
            <span className={`${styles.page582__speaker} ${styles["is-clerk"]}`}>Clerk:</span>
            <span className={`${styles.page582__line} ${styles["is-clerk"]}`}>And what’s your full name?</span>
          </p>

          <p>
            <span className={`${styles.page582__speaker} ${styles["is-maria"]}`}>Maria Emília:</span>
            <span className={styles.page582__line}>Maria Emília de Sousa.</span>
          </p>

          <p>
            <span className={`${styles.page582__speaker} ${styles["is-clerk"]}`}>Clerk:</span>
            <span className={`${styles.page582__line} ${styles["is-clerk"]}`}>
              Thanks, how do you spell your middle name? E-M-E-L-I-A?
            </span>
          </p>

          <p>
            <span className={`${styles.page582__speaker} ${styles["is-maria"]}`}>Maria Emília:</span>
            <span className={styles.page582__line}>No, E-M-Í-L-I-A.</span>
          </p>
        </section>
      </main>
    </div>
  );
};

export default Pagina582;
