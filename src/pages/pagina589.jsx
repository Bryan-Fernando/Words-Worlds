import React, { useEffect } from "react";
import styles from "./pagina589.module.css";

const Pagina589 = ({ onValidar }) => {
  useEffect(() => { if (onValidar) onValidar(true); }, [onValidar]);

  return (
    <div className={styles.page589__container}>
      <header className={styles.page589__header}>
        <h1 className={styles.page589__title}>Real-life Dialogues</h1>
      </header>

      <main className={styles.page589__main}>
        {/* ====== Between Friends ====== */}
        <section className={styles.page589__card}>
          <figure className={styles.page589__imageWrapper}>
            <div className={styles.page589__imagePlaceholder} />
          </figure>

          <div className={styles.page589__dialogueBox}>
            <h3 className={styles.page589__topic}>Between Friends</h3>

            <div className={styles.page589__dialogue}>
              <p>
                <span className={styles.page589__speaker}>Noah:</span>
                <span className={styles.page589__line}>
                  Hey, Alex! How’s your new job at the tech company?
                </span>
              </p>
              <p>
                <span className={`${styles.page589__speaker} ${styles["is-second"]}`}>Alex:</span>
                <span className={`${styles.page589__line} ${styles["is-second"]}`}>
                  It’s going well, Sophie! I usually start my day with breakfast and head to the
                  office. I attend morning meetings and work on coding projects in the afternoon.
                </span>
              </p>
              <p>
                <span className={styles.page589__speaker}>Noah:</span>
                <span className={styles.page589__line}>
                  Busy schedule! Do you have team outings often?
                </span>
              </p>
              <p>
                <span className={`${styles.page589__speaker} ${styles["is-second"]}`}>Alex:</span>
                <span className={`${styles.page589__line} ${styles["is-second"]}`}>
                  Rarely, maybe once every few months. But when we do, it’s a blast! And how about your
                  dance classes?
                </span>
              </p>
              <p>
                <span className={styles.page589__speaker}>Noah:</span>
                <span className={styles.page589__line}>
                  I go three times a week. I rarely miss a session now. It’s become a routine I enjoy.
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* ====== Between Co-workers ====== */}
        <section className={`${styles.page589__card} ${styles["is-reversed"]}`}>
          <div className={styles.page589__dialogueBox}>
            <h3 className={styles.page589__topic}>Between Co-workers</h3>

            <div className={styles.page589__dialogue}>
              <p>
                <span className={styles.page589__speaker}>Emma:</span>
                <span className={styles.page589__line}>
                  Sophie, do you eat lunch in the cafeteria?
                </span>
              </p>
              <p>
                <span className={`${styles.page589__speaker} ${styles["is-second"]}`}>Sophie:</span>
                <span className={`${styles.page589__line} ${styles["is-second"]}`}>
                  I seldom eat there. I prefer bringing my lunch from home. It’s quieter.
                </span>
              </p>
              <p>
                <span className={styles.page589__speaker}>Emma:</span>
                <span className={styles.page589__line}>
                  How often do you check emails?
                </span>
              </p>
              <p>
                <span className={`${styles.page589__speaker} ${styles["is-second"]}`}>Sophie:</span>
                <span className={`${styles.page589__line} ${styles["is-second"]}`}>
                  I check them constantly throughout the day. It’s part of my routine. And you, Emma?
                </span>
              </p>
              <p>
                <span className={styles.page589__speaker}>Emma:</span>
                <span className={styles.page589__line}>
                  I usually check them in the morning and then in the afternoon. I don’t like being
                  glued to my inbox.
                </span>
              </p>
            </div>
          </div>

          <figure className={styles.page589__imageWrapper}>
            <div className={styles.page589__imagePlaceholder} />
          </figure>
        </section>
      </main>
    </div>
  );
};

export default Pagina589;
