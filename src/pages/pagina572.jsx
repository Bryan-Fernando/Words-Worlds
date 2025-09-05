import React, { useEffect } from "react";
import styles from "./pagina572.module.css";

const Pagina572 = ({ onValidar }) => {
  useEffect(() => {
    if (onValidar) onValidar(true);
  }, [onValidar]);

  return (
    <div className={styles.page572__container}>
      <header className={styles.page572__header}>
        <h1 className={styles.page572__title}>Real Life Dialogue</h1>
      </header>

      <main className={styles.page572__main}>
        <section className={styles.page572__card}>
          {/* Imagem (placeholder) */}
          <figure className={styles.page572__imageWrapper}>
            <div className={styles.page572__imagePlaceholder} />
          </figure>

          {/* Diálogo */}
          <div className={styles.page572__dialogue}>
            <p>
              <span className={`${styles.page572__speaker} ${styles["is-coach"]}`}>Coach:</span>
              <span className={`${styles.page572__line} ${styles["is-coach"]}`}>
                Bruce, how’s your ankle?
              </span>
            </p>

            <p>
              <span className={`${styles.page572__speaker} ${styles["is-bruce"]}`}>Bruce:</span>
              <span className={styles.page572__line}>
                Hi, Coach. It’s much better, thanks.
              </span>
            </p>

            <p>
              <span className={`${styles.page572__speaker} ${styles["is-coach"]}`}>Coach:</span>
              <span className={`${styles.page572__line} ${styles["is-coach"]}`}>
                And those crutches?
              </span>
            </p>

            <p>
              <span className={`${styles.page572__speaker} ${styles["is-bruce"]}`}>Bruce:</span>
              <span className={styles.page572__line}>
                Today is the last day.
              </span>
            </p>

            <p>
              <span className={`${styles.page572__speaker} ${styles["is-coach"]}`}>Coach:</span>
              <span className={`${styles.page572__line} ${styles["is-coach"]}`}>
                That’s good. When are you going to join the team again?
              </span>
            </p>

            <p>
              <span className={`${styles.page572__speaker} ${styles["is-bruce"]}`}>Bruce:</span>
              <span className={styles.page572__line}>
                I’m not sure. The doctor told me it might be two or three weeks before I can walk and run normally.
              </span>
            </p>

            <p>
              <span className={`${styles.page572__speaker} ${styles["is-coach"]}`}>Coach:</span>
              <span className={`${styles.page572__line} ${styles["is-coach"]}`}>
                Well, the way things are going, we might not play the finals.
              </span>
            </p>

            <p>
              <span className={`${styles.page572__speaker} ${styles["is-bruce"]}`}>Bruce:</span>
              <span className={styles.page572__line}>
                Why is that?
              </span>
            </p>

            <p>
              <span className={`${styles.page572__speaker} ${styles["is-coach"]}`}>Coach:</span>
              <span className={`${styles.page572__line} ${styles["is-coach"]}`}>
                My best players may be out. First, you sprained your ankle. Then Jerry hurt himself in the practice and now Luke is sick. I don’t know if you three will be in good condition to play.
              </span>
            </p>
          </div>
        </section>

        {/* Nota */}
        <section className={styles.page572__note}>
          <p>
            <strong>NOTE: Listening Comprehension and Pronunciation</strong>
          </p>
          <p>
            Now, take a moment to focus on the dialogues(s). Pay attention to the way the speakers express themselves, and try to practice mimicking their pronunciation.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Pagina572;
