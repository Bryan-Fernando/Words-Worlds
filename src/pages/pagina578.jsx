import React, { useEffect } from "react";
import styles from "./pagina578.module.css";

const Pagina578 = ({ onValidar }) => {
  useEffect(() => { if (onValidar) onValidar(true); }, [onValidar]);

  return (
    <div className={styles.page578__container}>
      <header className={styles.page578__header}>
        <h1 className={styles.page578__title}>Real-life Dialogues</h1>
      </header>

      <main className={styles.page578__main}>
        {/* ====== Bloco 1: Preparing for a Dinner Party ====== */}
        <section className={styles.page578__card}>
          <figure className={styles.page578__imageWrapper}>
            <div className={styles.page578__imagePlaceholder} />
          </figure>

          <div className={styles.page578__dialogueBox}>
            <h3 className={styles.page578__topic}>Preparing for a Dinner Party:</h3>

            <div className={styles.page578__dialogue}>
              <p>
                <span className={`${styles.page578__speaker} ${styles["is-lizzie"]}`}>Lizzie:</span>
                <span className={styles.page578__line}>
                  What’s been keeping you busy in the kitchen before our friends show up?
                </span>
              </p>

              <p>
                <span className={`${styles.page578__speaker} ${styles["is-leo"]}`}>Leo:</span>
                <span className={`${styles.page578__line} ${styles["is-leo"]}`}>
                  Ha, well, I’ll have been cooking since noon, trying to whip up something fancy.
                </span>
              </p>

              <p>
                <span className={`${styles.page578__speaker} ${styles["is-lizzie"]}`}>Lizzie:</span>
                <span className={styles.page578__line}>
                  I can already smell the aroma from here. I’m sure it’ll be worth the effort.
                </span>
              </p>

              <p>
                <span className={`${styles.page578__speaker} ${styles["is-leo"]}`}>Leo:</span>
                <span className={`${styles.page578__line} ${styles["is-leo"]}`}>
                  Thanks! Fingers crossed everything turns out delicious.
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* ====== Bloco 2: Discussing Exam Preparation ====== */}
        <section className={`${styles.page578__card} ${styles["is-reversed"]}`}>
          <div className={styles.page578__dialogueBox}>
            <h3 className={styles.page578__topic}>Discussing Exam Preparation:</h3>

            <div className={styles.page578__dialogue}>
              <p>
                <span className={`${styles.page578__speaker} ${styles["is-nanda"]}`}>Nanda:</span>
                <span className={styles.page578__line}>
                  How much time have you spent hitting the books before the exam kicks off?
                </span>
              </p>

              <p>
                <span className={`${styles.page578__speaker} ${styles["is-carol"]}`}>Carol:</span>
                <span className={`${styles.page578__line} ${styles["is-carol"]}`}>
                  Oh, I’ll have been buried in textbooks and notes for weeks, but I’m still feeling the jitters.
                </span>
              </p>

              <p>
                <span className={`${styles.page578__speaker} ${styles["is-nanda"]}`}>Nanda:</span>
                <span className={styles.page578__line}>
                  Don’t sweat it! You’ve put in the hard yards, so trust in your preparation.
                </span>
              </p>

              <p>
                <span className={`${styles.page578__speaker} ${styles["is-carol"]}`}>Carol:</span>
                <span className={`${styles.page578__line} ${styles["is-carol"]}`}>
                  I hope so. Thanks for the vote of confidence.
                </span>
              </p>
            </div>
          </div>

          <figure className={styles.page578__imageWrapper}>
            <div className={styles.page578__imagePlaceholder} />
          </figure>
        </section>
      </main>
    </div>
  );
};

export default Pagina578;
