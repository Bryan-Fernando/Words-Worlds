import React, { useEffect } from "react";
import styles from "./pagina575.module.css";

const Pagina575 = ({ onValidar }) => {
  useEffect(() => {
    if (onValidar) onValidar(true);
  }, [onValidar]);

  return (
    <div className={styles.page575__container}>
      <header className={styles.page575__header}>
        <h1 className={styles.page575__title}>Real-life Dialogues</h1>
      </header>

      <main className={styles.page575__main}>
        {/* ====== Bloco 1: Planning a Party ====== */}
        <section className={styles.page575__card}>
          <figure className={styles.page575__imageWrapper}>
            <div className={styles.page575__imagePlaceholder} />
          </figure>

          <div className={styles.page575__dialogueBox}>
            <h3 className={styles.page575__topic}>Planning a Party:</h3>

            <div className={styles.page575__dialogue}>
              <p>
                <span className={`${styles.page575__speaker} ${styles["is-emma"]}`}>Emma:</span>
                <span className={styles.page575__line}>
                  Have you finished preparing for the party?
                </span>
              </p>

              <p>
                <span className={`${styles.page575__speaker} ${styles["is-rita"]}`}>Rita:</span>
                <span className={`${styles.page575__line} ${styles["is-rita"]}`}>
                  Not yet, but by tomorrow evening, <strong>I will have decorated</strong> the entire place.
                </span>
              </p>

              <p>
                <span className={`${styles.page575__speaker} ${styles["is-emma"]}`}>Emma:</span>
                <span className={styles.page575__line}>
                  Great! By then, <strong>I will have cooked</strong> all the food, and everything will be ready for the guests.
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* ====== Bloco 2: Completing a Project ====== */}
        <section className={`${styles.page575__card} ${styles["is-reversed"]}`}>
          <div className={styles.page575__dialogueBox}>
            <h3 className={styles.page575__topic}>Completing a Project:</h3>

            <div className={styles.page575__dialogue}>
              <p>
                <span className={`${styles.page575__speaker} ${styles["is-emily"]}`}>Emily:</span>
                <span className={styles.page575__line}>
                  How’s the project coming along?
                </span>
              </p>

              <p>
                <span className={`${styles.page575__speaker} ${styles["is-david"]}`}>David:</span>
                <span className={`${styles.page575__line} ${styles["is-david"]}`}>
                  It’s going well. By next week, <strong>I will have completed</strong> all the research.
                </span>
              </p>

              <p>
                <span className={`${styles.page575__speaker} ${styles["is-emily"]}`}>Emily:</span>
                <span className={styles.page575__line}>
                  That’s fantastic! By then, <strong>I will have finalized the presentation</strong>, and we’ll be ready for the meeting.
                </span>
              </p>
            </div>
          </div>

          <figure className={styles.page575__imageWrapper}>
            <div className={styles.page575__imagePlaceholder} />
          </figure>
        </section>

        {/* Nota */}
        <section className={styles.page575__note}>
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

export default Pagina575;
