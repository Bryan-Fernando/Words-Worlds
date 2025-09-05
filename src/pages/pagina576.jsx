import React, { useEffect } from "react";
import styles from "./pagina576.module.css";

const Pagina576 = ({ onValidar }) => {
  useEffect(() => {
    if (onValidar) onValidar(true);
  }, [onValidar]);

  return (
    <div className={styles.page576__container}>
      <header className={styles.page576__header}>
        <h1 className={styles.page576__title}>Real-life Dialogues</h1>
      </header>

      <main className={styles.page576__main}>
        {/* ====== Bloco 1: Arranging Travel Plans ====== */}
        <section className={styles.page576__card}>
          <figure className={styles.page576__imageWrapper}>
            <div className={styles.page576__imagePlaceholder} />
          </figure>

          <div className={styles.page576__dialogueBox}>
            <h3 className={styles.page576__topic}>Arranging Travel Plans:</h3>

            <div className={styles.page576__dialogue}>
              <p>
                <span className={`${styles.page576__speaker} ${styles["is-mark"]}`}>Mark:</span>
                <span className={styles.page576__line}>
                  Have you sorted out our travel arrangements for the conference?
                </span>
              </p>

              <p>
                <span className={`${styles.page576__speaker} ${styles["is-lisa"]}`}>Lisa:</span>
                <span className={`${styles.page576__line} ${styles["is-lisa"]}`}>
                  Yes, by Friday, <strong>I will have booked</strong> our flights and reserved hotel rooms.
                </span>
              </p>

              <p>
                <span className={`${styles.page576__speaker} ${styles["is-mark"]}`}>Mark:</span>
                <span className={styles.page576__line}>
                  Excellent! By then, <strong>I will have prepared</strong> our itinerary, and we’ll be all set for the trip.
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* ====== Bloco 2: Preparing for a Move ====== */}
        <section className={`${styles.page576__card} ${styles["is-reversed"]}`}>
          <div className={styles.page576__dialogueBox}>
            <h3 className={styles.page576__topic}>Preparing for a Move:</h3>

            <div className={styles.page576__dialogue}>
              <p>
                <span className={`${styles.page576__speaker} ${styles["is-alex"]}`}>Alex:</span>
                <span className={styles.page576__line}>
                  Are you ready for the big move next month?
                </span>
              </p>

              <p>
                <span className={`${styles.page576__speaker} ${styles["is-emma"]}`}>Emma:</span>
                <span className={`${styles.page576__line} ${styles["is-emma"]}`}>
                  Not quite yet, but by the end of this week, <strong>I will have packed</strong> all our belongings.
                </span>
              </p>

              <p>
                <span className={`${styles.page576__speaker} ${styles["is-alex"]}`}>Alex:</span>
                <span className={styles.page576__line}>
                  That’s a relief! By then, <strong>I will have arranged</strong> for the moving company, and we’ll be ready to go.
                </span>
              </p>
            </div>
          </div>

          <figure className={styles.page576__imageWrapper}>
            <div className={styles.page576__imagePlaceholder} />
          </figure>
        </section>

        {/* Nota */}
        <section className={styles.page576__note}>
          <p><strong>NOTE: Listening Comprehension and Pronunciation</strong></p>
          <p>
            Now, take a moment to focus on the dialogues(s). Pay attention to the way the speakers
            express themselves, and try to practice mimicking their pronunciation.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Pagina576;
