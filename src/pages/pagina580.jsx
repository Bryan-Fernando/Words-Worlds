import React, { useEffect } from "react";
import styles from "./pagina580.module.css";

const Pagina580 = ({ onValidar }) => {
  useEffect(() => { if (onValidar) onValidar(true); }, [onValidar]);

  return (
    <div className={styles.page580__container}>
      <header className={styles.page580__header}>
        <h1 className={styles.page580__title}>Real-life Dialogues</h1>
      </header>

      <main className={styles.page580__main}>
        {/* ====== Diálogo 1 ====== */}
        <section className={styles.page580__card}>
          <div className={styles.page580__dialogueBox}>
            <div className={styles.page580__dialogue}>
              <p>
                <span className={`${styles.page580__speaker} ${styles["is-ana"]}`}>Ana:</span>
                <span className={styles.page580__line}>
                  Hi! I’m Ana Teresa. I’m from Ariquemes (RO).
                </span>
              </p>
              <p>
                <span className={`${styles.page580__speaker} ${styles["is-heitor"]}`}>Heitor:</span>
                <span className={`${styles.page580__line} ${styles["is-heitor"]}`}>
                  Hello! My name is Heitor.
                </span>
              </p>
              <p>
                <span className={`${styles.page580__speaker} ${styles["is-ana"]}`}>Ana:</span>
                <span className={styles.page580__line}>
                  Are you from Curitiba?
                </span>
              </p>
              <p>
                <span className={`${styles.page580__speaker} ${styles["is-heitor"]}`}>Heitor:</span>
                <span className={`${styles.page580__line} ${styles["is-heitor"]}`}>
                  No, I’m not. I’m from RJ.
                </span>
              </p>
              <p>
                <span className={`${styles.page580__speaker} ${styles["is-ana"]}`}>Ana:</span>
                <span className={styles.page580__line}>
                  Nice meeting you.
                </span>
              </p>
              <p>
                <span className={`${styles.page580__speaker} ${styles["is-heitor"]}`}>Heitor:</span>
                <span className={`${styles.page580__line} ${styles["is-heitor"]}`}>
                  Nice meeting you too.
                </span>
              </p>
            </div>

            <div className={styles.page580__divider} />
          </div>

          <figure className={styles.page580__imageWrapper}>
            <div className={styles.page580__imagePlaceholder} />
          </figure>
        </section>

        {/* ====== Diálogo 2 ====== */}
        <section className={`${styles.page580__card} ${styles["is-reversed"]}`}>
          <figure className={styles.page580__imageWrapper}>
            <div className={styles.page580__imagePlaceholder} />
          </figure>

          <div className={styles.page580__dialogueBox}>
            <div className={styles.page580__dialogue}>
              <p>
                <span className={`${styles.page580__speaker} ${styles["is-martha"]}`}>Martha:</span>
                <span className={styles.page580__line}>
                  Hello! I’m Martha.
                </span>
              </p>
              <p>
                <span className={`${styles.page580__speaker} ${styles["is-jully"]}`}>Jully:</span>
                <span className={`${styles.page580__line} ${styles["is-jully"]}`}>
                  Hello! I’m Jully.
                </span>
              </p>
              <p>
                <span className={`${styles.page580__speaker} ${styles["is-martha"]}`}>Martha:</span>
                <span className={styles.page580__line}>
                  It’s nice to meet you. Where are you from?
                </span>
              </p>
              <p>
                <span className={`${styles.page580__speaker} ${styles["is-jully"]}`}>Jully:</span>
                <span className={`${styles.page580__line} ${styles["is-jully"]}`}>
                  I’m from Rome, and you?
                </span>
              </p>
              <p>
                <span className={`${styles.page580__speaker} ${styles["is-martha"]}`}>Martha:</span>
                <span className={styles.page580__line}>
                  I’m from L.A.
                </span>
              </p>
              <p>
                <span className={`${styles.page580__speaker} ${styles["is-jully"]}`}>Jully:</span>
                <span className={`${styles.page580__line} ${styles["is-jully"]}`}>
                  Cool!
                </span>
              </p>
            </div>

            <div className={styles.page580__divider} />
          </div>
        </section>

        {/* ====== Diálogo 3 ====== */}
        <section className={styles.page580__card}>
          <div className={styles.page580__dialogueBox}>
            <div className={styles.page580__dialogue}>
              <p>
                <span className={`${styles.page580__speaker} ${styles["is-hendric"]}`}>Hendric:</span>
                <span className={`${styles.page580__line} ${styles["is-hendric"]}`}>
                  Hello! I’m Hendric. How are you?
                </span>
              </p>
              <p>
                <span className={`${styles.page580__speaker} ${styles["is-lillian"]}`}>Lillian:</span>
                <span className={styles.page580__line}>
                  I’m good. My name’s Lillian.
                </span>
              </p>
              <p>
                <span className={`${styles.page580__speaker} ${styles["is-hendric"]}`}>Hendric:</span>
                <span className={`${styles.page580__line} ${styles["is-hendric"]}`}>
                  Are you a student?
                </span>
              </p>
              <p>
                <span className={`${styles.page580__speaker} ${styles["is-lillian"]}`}>Lillian:</span>
                <span className={styles.page580__line}>
                  No, I’m a teacher’s assistant.
                </span>
              </p>
              <p>
                <span className={`${styles.page580__speaker} ${styles["is-hendric"]}`}>Hendric:</span>
                <span className={`${styles.page580__line} ${styles["is-hendric"]}`}>
                  Oh! I’m happy to meet you.
                </span>
              </p>
              <p>
                <span className={`${styles.page580__speaker} ${styles["is-lillian"]}`}>Lillian:</span>
                <span className={styles.page580__line}>
                  My pleasure.
                </span>
              </p>
            </div>
          </div>

          <figure className={styles.page580__imageWrapper}>
            <div className={styles.page580__imagePlaceholder} />
          </figure>
        </section>
      </main>
    </div>
  );
};

export default Pagina580;
