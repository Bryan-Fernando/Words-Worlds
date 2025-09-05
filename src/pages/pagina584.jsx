import React, { useEffect } from "react";
import styles from "./pagina584.module.css";

const Pagina584 = ({ onValidar }) => {
  useEffect(() => { if (onValidar) onValidar(true); }, [onValidar]);

  return (
    <div className={styles.page584__container}>
      <header className={styles.page584__header}>
        <h1 className={styles.page584__title}>Real-life Dialogues</h1>
      </header>

      <main className={styles.page584__main}>
        {/* ===== Coluna 1 ===== */}
        <section className={styles.page584__card}>
          <figure className={styles.page584__imageWrapper}>
            <div className={styles.page584__imagePlaceholder} />
          </figure>

          <div className={styles.page584__dialogue}>
            <p>
              <span className={styles.page584__speaker}>Olivia:</span>
              <span className={styles.page584__line}>
                What’s your daily routine like?
              </span>
            </p>

            <p>
              <span className={`${styles.page584__speaker} ${styles["is-second"]}`}>Amelia:</span>
              <span className={`${styles.page584__line} ${styles["is-second"]}`}>
                Well, I wake up early every morning. I have breakfast, then I go for a run.
              </span>
            </p>

            <p>
              <span className={styles.page584__speaker}>Olivia:</span>
              <span className={styles.page584__line}>
                That sounds healthy. What do you do after your run?
              </span>
            </p>

            <p>
              <span className={`${styles.page584__speaker} ${styles["is-second"]}`}>Amelia:</span>
              <span className={`${styles.page584__line} ${styles["is-second"]}`}>
                I take a shower and get ready for work. I usually leave home by 8:30.
              </span>
            </p>

            <p>
              <span className={styles.page584__speaker}>Olivia:</span>
              <span className={styles.page584__line}>
                What about evenings?
              </span>
            </p>

            <p>
              <span className={`${styles.page584__speaker} ${styles["is-second"]}`}>Amelia:</span>
              <span className={`${styles.page584__line} ${styles["is-second"]}`}>
                In the evenings, I cook dinner, watch some TV, and then read before going to bed.
              </span>
            </p>

            <p>
              <span className={styles.page584__speaker}>Olivia:</span>
              <span className={styles.page584__line}>
                Do you do this every day?
              </span>
            </p>

            <p>
              <span className={`${styles.page584__speaker} ${styles["is-second"]}`}>Amelia:</span>
              <span className={`${styles.page584__line} ${styles["is-second"]}`}>
                Yeah, it’s pretty much my routine.
              </span>
            </p>
          </div>
        </section>

        {/* ===== Coluna 2 ===== */}
        <section className={styles.page584__card}>
          <figure className={styles.page584__imageWrapper}>
            <div className={styles.page584__imagePlaceholder} />
          </figure>

          <div className={styles.page584__dialogue}>
            <p>
              <span className={styles.page584__speaker}>Elijah:</span>
              <span className={styles.page584__line}>
                Do you use social media?
              </span>
            </p>

            <p>
              <span className={`${styles.page584__speaker} ${styles["is-second"]}`}>Ramon:</span>
              <span className={`${styles.page584__line} ${styles["is-second"]}`}>
                Yes, I use it every day. I post photos, chat with friends, and follow pages.
              </span>
            </p>

            <p>
              <span className={styles.page584__speaker}>Elijah:</span>
              <span className={styles.page584__line}>
                Which platforms do you use?
              </span>
            </p>

            <p>
              <span className={`${styles.page584__speaker} ${styles["is-second"]}`}>Ramon:</span>
              <span className={`${styles.page584__line} ${styles["is-second"]}`}>
                I use Instagram and Facebook. I also check Twitter occasionally.
              </span>
            </p>

            <p>
              <span className={styles.page584__speaker}>Elijah:</span>
              <span className={styles.page584__line}>
                What do you do on Instagram?
              </span>
            </p>

            <p>
              <span className={`${styles.page584__speaker} ${styles["is-second"]}`}>Ramon:</span>
              <span className={`${styles.page584__line} ${styles["is-second"]}`}>
                I share moments from my day and follow interesting accounts.
              </span>
            </p>

            <p>
              <span className={styles.page584__speaker}>Elijah:</span>
              <span className={styles.page584__line}>
                How often do you check your socials?
              </span>
            </p>

            <p>
              <span className={`${styles.page584__speaker} ${styles["is-second"]}`}>Ramon:</span>
              <span className={`${styles.page584__line} ${styles["is-second"]}`}>
                I check them several times daily. It’s part of my routine.
              </span>
            </p>

            <p>
              <span className={styles.page584__speaker}>Elijah:</span>
              <span className={styles.page584__line}>
                Do you like sharing stories?
              </span>
            </p>

            <p>
              <span className={`${styles.page584__speaker} ${styles["is-second"]}`}>Ramon:</span>
              <span className={`${styles.page584__line} ${styles["is-second"]}`}>
                Yeah, I enjoy it. It’s a way to update everyone.
              </span>
            </p>

            <p>
              <span className={styles.page584__speaker}>Elijah:</span>
              <span className={styles.page584__line}>
                I should try that too. Social media seems interesting.
              </span>
            </p>

            <p>
              <span className={`${styles.page584__speaker} ${styles["is-second"]}`}>Ramon:</span>
              <span className={`${styles.page584__line} ${styles["is-second"]}`}>
                It keeps us connected.
              </span>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pagina584;
