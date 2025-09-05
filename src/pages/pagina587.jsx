import React, { useEffect } from "react";
import styles from "./pagina587.module.css";

const Pagina587 = ({ onValidar }) => {
  useEffect(() => { if (onValidar) onValidar(true); }, [onValidar]);

  return (
    <div className={styles.page587__container}>
      <header className={styles.page587__header}>
        <h1 className={styles.page587__title}>Real-life Dialogues</h1>
      </header>

      <main className={styles.page587__main}>
        {/* Hero image (placeholder, sem import) */}
        <section className={styles.page587__hero}>
          <div className={styles.page587__heroImage} />
        </section>

        {/* Lista de diálogos em “balões” */}
        <section className={styles.page587__list}>
          {/* 1 */}
          <div className={styles.page587__bubble}>
            <p className={styles.page587__row}>
              <span className={`${styles.page587__speaker} ${styles["is-first"]}`}>Sue:</span>
              <span className={styles.page587__line}>Have you ever been to Paris?</span>
            </p>
            <p className={styles.page587__row}>
              <span className={styles.page587__speaker}>John:</span>
              <span className={styles.page587__line}>
                No, I’ve never been, but I’ve always wanted to visit.
              </span>
            </p>
          </div>

          {/* 2 */}
          <div className={styles.page587__bubble}>
            <p className={styles.page587__row}>
              <span className={`${styles.page587__speaker} ${styles["is-first"]}`}>Emily:</span>
              <span className={styles.page587__line}>Have you already finished your homework?</span>
            </p>
            <p className={styles.page587__row}>
              <span className={styles.page587__speaker}>Alex:</span>
              <span className={styles.page587__line}>
                Yes, I’ve already completed it. I did it right after school.
              </span>
            </p>
          </div>

          {/* 3 */}
          <div className={styles.page587__bubble}>
            <p className={styles.page587__row}>
              <span className={`${styles.page587__speaker} ${styles["is-first"]}`}>Mark:</span>
              <span className={styles.page587__line}>Have you ever tried sushi?</span>
            </p>
            <p className={styles.page587__row}>
              <span className={styles.page587__speaker}>Lisa:</span>
              <span className={styles.page587__line}>
                No, I’ve never tried it. Is it good?
              </span>
            </p>
          </div>

          {/* 4 */}
          <div className={styles.page587__bubble}>
            <p className={styles.page587__row}>
              <span className={`${styles.page587__speaker} ${styles["is-first"]}`}>Chris:</span>
              <span className={styles.page587__line}>Have you already met our new neighbors?</span>
            </p>
            <p className={styles.page587__row}>
              <span className={styles.page587__speaker}>Megan:</span>
              <span className={styles.page587__line}>
                Yes, I’ve already met them. They seem really nice.
              </span>
            </p>
          </div>

          {/* 5 */}
          <div className={styles.page587__bubble}>
            <p className={styles.page587__row}>
              <span className={`${styles.page587__speaker} ${styles["is-first"]}`}>Tom:</span>
              <span className={styles.page587__line}>Have you ever ridden a hot air balloon?</span>
            </p>
            <p className={styles.page587__row}>
              <span className={styles.page587__speaker}>Jenny:</span>
              <span className={styles.page587__line}>
                No, I’ve never done that. It’s on my bucket list, though.
              </span>
            </p>
          </div>

          {/* 6 */}
          <div className={styles.page587__bubble}>
            <p className={styles.page587__row}>
              <span className={`${styles.page587__speaker} ${styles["is-first"]}`}>Laura:</span>
              <span className={styles.page587__line}>Have you already seen the latest movie?</span>
            </p>
            <p className={styles.page587__row}>
              <span className={styles.page587__speaker}>Mike:</span>
              <span className={styles.page587__line}>
                No, I haven’t seen it yet. Is it worth watching?
              </span>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pagina587;
