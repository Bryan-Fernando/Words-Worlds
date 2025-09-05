import React, { useEffect } from "react";
import styles from "./pagina573.module.css";

const Pagina573 = ({ onValidar }) => {
  useEffect(() => {
    if (onValidar) onValidar(true);
  }, [onValidar]);

  return (
    <div className={styles.page573__container}>
      <header className={styles.page573__header}>
        <h1 className={styles.page573__title}>Real-life Dialogues</h1>
      </header>

      <main className={styles.page573__main}>
        {/* ====== Bloco 1: At a Dinner Party ====== */}
        <section className={styles.page573__card}>
          <figure className={styles.page573__imageWrapper}>
            <div className={styles.page573__imagePlaceholder} />
          </figure>

          <div className={styles.page573__dialogueBox}>
            <h3 className={styles.page573__topic}>At a Dinner Party:</h3>

            <div className={styles.page573__dialogue}>
              <p>
                <span className={`${styles.page573__speaker} ${styles["is-daniel"]}`}>Daniel:</span>
                <span className={styles.page573__line}>
                  What are your plans for next weekend?
                </span>
              </p>

              <p>
                <span className={`${styles.page573__speaker} ${styles["is-milla"]}`}>Milla:</span>
                <span className={`${styles.page573__line} ${styles["is-milla"]}`}>
                  I’ll be attending a friend’s wedding. How about you?
                </span>
              </p>

              <p>
                <span className={`${styles.page573__speaker} ${styles["is-daniel"]}`}>Daniel:</span>
                <span className={styles.page573__line}>
                  I’ll be traveling to Paris. My flight will be departing on Friday evening.
                </span>
              </p>

              <p>
                <span className={`${styles.page573__speaker} ${styles["is-milla"]}`}>Milla:</span>
                <span className={`${styles.page573__line} ${styles["is-milla"]}`}>
                  That sounds exciting! Will you be exploring the city or attending any events?
                </span>
              </p>

              <p>
                <span className={`${styles.page573__speaker} ${styles["is-daniel"]}`}>Daniel:</span>
                <span className={styles.page573__line}>
                  I’ll mostly be sightseeing and trying out different cuisines. I’m looking forward to it.
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* ====== Bloco 2: During a Business Meeting ====== */}
        <section className={`${styles.page573__card} ${styles["is-reversed"]}`}>
          <div className={styles.page573__dialogueBox}>
            <h3 className={styles.page573__topic}>During a Business Meeting:</h3>

            <div className={styles.page573__dialogue}>
              <p>
                <span className={`${styles.page573__speaker} ${styles["is-manager"]}`}>Manager:</span>
                <span className={styles.page573__line}>
                  We need to discuss the progress of the new project. What will you be working on next week?
                </span>
              </p>

              <p>
                <span className={`${styles.page573__speaker} ${styles["is-employee"]}`}>Employee:</span>
                <span className={`${styles.page573__line} ${styles["is-employee"]}`}>
                  I’ll be finalizing the budget report and conducting market research for our product.
                </span>
              </p>

              <p>
                <span className={`${styles.page573__speaker} ${styles["is-manager"]}`}>Manager:</span>
                <span className={styles.page573__line}>
                  Good to know. Will you need any additional resources or assistance?
                </span>
              </p>

              <p>
                <span className={`${styles.page573__speaker} ${styles["is-employee"]}`}>Employee:</span>
                <span className={`${styles.page573__line} ${styles["is-employee"]}`}>
                  I think I’ll manage, but I may require some data analysis support by midweek.
                </span>
              </p>
            </div>
          </div>

          <figure className={styles.page573__imageWrapper}>
            <div className={styles.page573__imagePlaceholder} />
          </figure>
        </section>

        {/* Nota */}
        <section className={styles.page573__note}>
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

export default Pagina573;
