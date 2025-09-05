import React, { useEffect } from "react";
import styles from "./pagina588.module.css";

const Pagina588 = ({ onValidar }) => {
  useEffect(() => { if (onValidar) onValidar(true); }, [onValidar]);

  return (
    <div className={styles.page588__container}>
      <header className={styles.page588__header}>
        <h1 className={styles.page588__title}>Real-life Dialogues</h1>
      </header>

      <main className={styles.page588__main}>
        {/* Hero (placeholder) */}
        <section className={styles.page588__hero}>
          <div className={styles.page588__heroImage} />
        </section>

        {/* Balões de diálogo */}
        <section className={styles.page588__list}>
          {/* 1 */}
          <div className={styles.page588__bubble}>
            <p className={styles.page588__row}>
              <span className={`${styles.page588__speaker} ${styles["is-first"]}`}>David:</span>
              <span className={styles.page588__line}>Have you ever traveled to Asia?</span>
            </p>
            <p className={styles.page588__row}>
              <span className={styles.page588__speaker}>Jessica:</span>
              <span className={styles.page588__line}>
                No, I’ve never been, but I plan to go someday.
              </span>
            </p>
          </div>

          {/* 2 */}
          <div className={styles.page588__bubble}>
            <p className={styles.page588__row}>
              <span className={`${styles.page588__speaker} ${styles["is-first"]}`}>Rachel:</span>
              <span className={styles.page588__line}>Have you already had lunch?</span>
            </p>
            <p className={styles.page588__row}>
              <span className={styles.page588__speaker}>Brian:</span>
              <span className={styles.page588__line}>
                Yes, I’ve already eaten. I had a sandwich earlier.
              </span>
            </p>
          </div>

          {/* 3 */}
          <div className={styles.page588__bubble}>
            <p className={styles.page588__row}>
              <span className={`${styles.page588__speaker} ${styles["is-first"]}`}>Tina:</span>
              <span className={styles.page588__line}>Have you ever run a marathon?</span>
            </p>
            <p className={styles.page588__row}>
              <span className={styles.page588__speaker}>Jake:</span>
              <span className={styles.page588__line}>
                No, I’ve never run one, but I’ve thought about training for one.
              </span>
            </p>
          </div>

          {/* 4 */}
          <div className={styles.page588__bubble}>
            <p className={styles.page588__row}>
              <span className={`${styles.page588__speaker} ${styles["is-first"]}`}>Alex:</span>
              <span className={styles.page588__line}>Have you already applied for that job?</span>
            </p>
            <p className={styles.page588__row}>
              <span className={styles.page588__speaker}>Lisa:</span>
              <span className={styles.page588__line}>
                Yes, I’ve already submitted my application. Now, I’m waiting to hear back.
              </span>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pagina588;
