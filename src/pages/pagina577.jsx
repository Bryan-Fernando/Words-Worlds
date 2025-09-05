import React, { useEffect } from "react";
import styles from "./pagina577.module.css";

const Pagina577 = ({ onValidar }) => {
  useEffect(() => {
    if (onValidar) onValidar(true);
  }, [onValidar]);

  return (
    <div className={styles.page577__container}>
      <header className={styles.page577__header}>
        <h1 className={styles.page577__title}>Real-life Dialogues</h1>
      </header>

      <main className={styles.page577__main}>
        {/* ====== Bloco 1: Chatting at a Gathering ====== */}
        <section className={styles.page577__card}>
          <figure className={styles.page577__imageWrapper}>
            <div className={styles.page577__imagePlaceholder} />
          </figure>

          <div className={styles.page577__dialogueBox}>
            <h3 className={styles.page577__topic}>Chatting at a Gathering:</h3>

            <div className={styles.page577__dialogue}>
              <p>
                <span className={`${styles.page577__speaker} ${styles["is-maggie"]}`}>Maggie:</span>
                <span className={styles.page577__line}>
                  So, what will you have been up to when the party wraps up?
                </span>
              </p>

              <p>
                <span className={`${styles.page577__speaker} ${styles["is-james"]}`}>James:</span>
                <span className={`${styles.page577__line} ${styles["is-james"]}`}>
                  Oh, I reckon I’ll have been catching up with everyone for a good while, maybe a couple of hours.
                </span>
              </p>

              <p>
                <span className={`${styles.page577__speaker} ${styles["is-maggie"]}`}>Maggie:</span>
                <span className={styles.page577__line}>
                  Sounds like you’re having a blast. Enjoying yourself?
                </span>
              </p>

              <p>
                <span className={`${styles.page577__speaker} ${styles["is-james"]}`}>James:</span>
                <span className={`${styles.page577__line} ${styles["is-james"]}`}>
                  Absolutely! Time flies when you’re having fun.
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* ====== Bloco 2: Planning a Road Trip ====== */}
        <section className={`${styles.page577__card} ${styles["is-reversed"]}`}>
          <div className={styles.page577__dialogueBox}>
            <h3 className={styles.page577__topic}>Planning a Road Trip:</h3>

            <div className={styles.page577__dialogue}>
              <p>
                <span className={`${styles.page577__speaker} ${styles["is-adam"]}`}>Adam:</span>
                <span className={styles.page577__line}>
                  How long will it take you to reach the next town?
                </span>
              </p>

              <p>
                <span className={`${styles.page577__speaker} ${styles["is-judith"]}`}>Judith:</span>
                <span className={`${styles.page577__line} ${styles["is-judith"]}`}>
                  Well, if all goes smoothly, I’ll have been driving for about five hours.
                </span>
              </p>

              <p>
                <span className={`${styles.page577__speaker} ${styles["is-adam"]}`}>Adam:</span>
                <span className={styles.page577__line}>
                  You might want to stretch your legs when you get there.
                </span>
              </p>

              <p>
                <span className={`${styles.page577__speaker} ${styles["is-judith"]}`}>Judith:</span>
                <span className={`${styles.page577__line} ${styles["is-judith"]}`}>
                  Definitely. A pit stop sounds like a good idea.
                </span>
              </p>
            </div>
          </div>

          <figure className={styles.page577__imageWrapper}>
            <div className={styles.page577__imagePlaceholder} />
          </figure>
        </section>

        {/* Nota */}
        <section className={styles.page577__note}>
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

export default Pagina577;
