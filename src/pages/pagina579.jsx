import React, { useEffect } from "react";
import styles from "./pagina579.module.css";

const Pagina579 = ({ onValidar }) => {
  useEffect(() => { if (onValidar) onValidar(true); }, [onValidar]);

  return (
    <div className={styles.page579__container}>
      <header className={styles.page579__header}>
        <h1 className={styles.page579__title}>Real-life Dialogues</h1>
      </header>

      <main className={styles.page579__main}>
        {/* ====== Diálogo 1 ====== */}
        <section className={styles.page579__card}>
          <figure className={styles.page579__imageWrapper}>
            <div className={styles.page579__imagePlaceholder} />
          </figure>

          <div className={styles.page579__dialogueBox}>
            <h3 className={styles.page579__topic}>1.</h3>

            <div className={styles.page579__dialogue}>
              <p>
                <span className={`${styles.page579__speaker} ${styles["is-mj"]}`}>Mary Jane:</span>
                <span className={styles.page579__line}>
                  Hi. I’m Mary Jane but you can call me M.J.
                </span>
              </p>

              <p>
                <span className={`${styles.page579__speaker} ${styles["is-joshua"]}`}>Joshua:</span>
                <span className={`${styles.page579__line} ${styles["is-joshua"]}`}>
                  Hi, M.J. I’m Joshua Kings. Call me Josh.
                </span>
              </p>

              <p>
                <span className={`${styles.page579__speaker} ${styles["is-mj"]}`}>Mary Jane:</span>
                <span className={styles.page579__line}>
                  Nice meeting you Josh.
                </span>
              </p>

              <p>
                <span className={`${styles.page579__speaker} ${styles["is-joshua"]}`}>Joshua:</span>
                <span className={`${styles.page579__line} ${styles["is-joshua"]}`}>
                  Nice meeting you, too.
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* ====== Diálogo 2 ====== */}
        <section className={styles.page579__card}>
          <figure className={styles.page579__imageWrapper}>
            <div className={styles.page579__imagePlaceholder} />
          </figure>

          <div className={styles.page579__dialogueBox}>
            <h3 className={styles.page579__topic}>2.</h3>

            <div className={styles.page579__dialogue}>
              <p>
                <span className={`${styles.page579__speaker} ${styles["is-mj"]}`}>Mary Jane:</span>
                <span className={styles.page579__line}>
                  Josh, this is my friend Ashley.
                </span>
              </p>

              <p>
                <span className={`${styles.page579__speaker} ${styles["is-joshua"]}`}>Josh:</span>
                <span className={`${styles.page579__line} ${styles["is-joshua"]}`}>
                  Hey, Ashley, nice to meet you.
                </span>
              </p>

              <p>
                <span className={`${styles.page579__speaker} ${styles["is-ashley"]}`}>Ashley:</span>
                <span className={styles.page579__line}>
                  Hey, Josh, nice to meet you, too.
                </span>
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pagina579;
