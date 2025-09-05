import React, { useEffect } from "react";
import styles from "./pagina590.module.css";

const Pagina590 = ({ onValidar }) => {
  useEffect(() => { if (onValidar) onValidar(true); }, [onValidar]);

  return (
    <div className={styles.page590__container}>
      <header className={styles.page590__header}>
        <h1 className={styles.page590__title}>Real-life Dialogues</h1>
      </header>

      <main className={styles.page590__main}>
        <section className={styles.page590__card}>
          {/* Imagem (placeholder — sem import) */}
          <figure className={styles.page590__imageWrapper}>
            <div className={styles.page590__imagePlaceholder} />
          </figure>

          {/* Diálogo */}
          <div className={styles.page590__dialogueBox}>
            <h3 className={styles.page590__topic}>Between Classmates</h3>

            <div className={styles.page590__dialogue}>
              <p>
                <span className={styles.page590__speaker}>David:</span>
                <span className={styles.page590__line}>
                  Hi, Lisa! How often do you visit the library to study?
                </span>
              </p>

              <p>
                <span className={`${styles.page590__speaker} ${styles["is-second"]}`}>Mark:</span>
                <span className={`${styles.page590__line} ${styles["is-second"]}`}>
                  I go there regularly, almost every day after classes. It helps me concentrate better.
                </span>
              </p>

              <p>
                <span className={styles.page590__speaker}>David:</span>
                <span className={styles.page590__line}>
                  I rarely study there. I prefer the café or my dorm room.
                </span>
              </p>

              <p>
                <span className={`${styles.page590__speaker} ${styles["is-second"]}`}>Mark:</span>
                <span className={`${styles.page590__line} ${styles["is-second"]}`}>
                  Yeah, everyone has their spot. Oh, do you often participate in the math club meetings?
                </span>
              </p>

              <p>
                <span className={styles.page590__speaker}>David:</span>
                <span className={styles.page590__line}>
                  Not really. I occasionally join when they have interesting discussions, maybe once a month or so.
                </span>
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pagina590;
