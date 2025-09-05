import React, { useEffect } from "react";
import styles from "./pagina571.module.css";

const Pagina571 = ({ onValidar }) => {
  useEffect(() => {
    if (onValidar) onValidar(true);
  }, [onValidar]);

  return (
    <div className={styles.page571__container}>
      <header className={styles.page571__header}>
        <h1 className={styles.page571__title}>Real-life Dialogues</h1>
      </header>

      {/* Imagem (placeholder, sem import) */}
      <section className={styles.page571__hero}>
        <div className={styles.page571__imagePlaceholder} />
      </section>

      {/* Diálogo */}
      <main className={styles.page571__main}>
        <h2 className={styles.page571__subtitle}>A Complicated Situation</h2>

        <div className={styles.page571__dialogue}>
          <p>
            <span className={`${styles.page571__speaker} ${styles["is-susan"]}`}>Susan:</span>
            <span className={styles.page571__line}>
              Hey, did you catch up with Peter yesterday?
            </span>
          </p>

          <p>
            <span className={`${styles.page571__speaker} ${styles["is-jesica"]}`}>Jesica:</span>
            <span className={`${styles.page571__line} ${styles["is-jesica"]}`}>
              Yeah, I did. What happened to him?
            </span>
          </p>

          <p>
            <span className={`${styles.page571__speaker} ${styles["is-susan"]}`}>Susan:</span>
            <span className={styles.page571__line}>
              Well, you know Jake, right? He’s the one who talked to Peter about the whole situation.
            </span>
          </p>

          <p>
            <span className={`${styles.page571__speaker} ${styles["is-jesica"]}`}>Jesica:</span>
            <span className={`${styles.page571__line} ${styles["is-jesica"]}`}>
              Jake? Who’s always with Mark?
            </span>
          </p>

          <p>
            <span className={`${styles.page571__speaker} ${styles["is-susan"]}`}>Susan:</span>
            <span className={styles.page571__line}>
              Exactly. Apparently, Jake confronted Peter about his sudden change of interest.
            </span>
          </p>

          <p>
            <span className={`${styles.page571__speaker} ${styles["is-jesica"]}`}>Jesica:</span>
            <span className={`${styles.page571__line} ${styles["is-jesica"]}`}>
              What did Peter say? Who else knows about this?
            </span>
          </p>

          <p>
            <span className={`${styles.page571__speaker} ${styles["is-susan"]}`}>Susan:</span>
            <span className={styles.page571__line}>
              Peter didn’t say much. It seems like he’s keeping it under wraps. As for who knows, not many people.
              Just Jake and a few others who happened to be there.
            </span>
          </p>

          <p>
            <span className={`${styles.page571__speaker} ${styles["is-jesica"]}`}>Jesica:</span>
            <span className={`${styles.page571__line} ${styles["is-jesica"]}`}>
              What a complicated situation. What’s Emily going to do when she finds out?
            </span>
          </p>

          <p>
            <span className={`${styles.page571__speaker} ${styles["is-susan"]}`}>Susan:</span>
            <span className={styles.page571__line}>
              I have no idea. Who would’ve thought Peter would be so careless with people’s feelings?
            </span>
          </p>

          <p>
            <span className={`${styles.page571__speaker} ${styles["is-jesica"]}`}>Jesica:</span>
            <span className={`${styles.page571__line} ${styles["is-jesica"]}`}>
              Yeah, and without even considering what impact it might have on Emily. What a mess.
            </span>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Pagina571;
