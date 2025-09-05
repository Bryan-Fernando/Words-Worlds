import React, { useEffect } from "react";
import styles from "./pagina622.module.css";

const Pagina622 = ({ onValidar }) => {
  useEffect(() => { onValidar?.(true); }, [onValidar]);

  return (
    <div className={styles.page622__container}>
      <h1 className={styles.page622__title}>DIALOGUES</h1>

      <section className={styles.page622__section}>
        <div className={styles.page622__box}>
          <div className={styles.page622__boxTitle}>
            Making Complaints (Advanced Level)
          </div>

          <div className={styles.page622__dialogue}>
            <p>
              <span className={styles.page622__speaker}>Customer:</span>
              <span>
                Hello, I’d like to make a complaint about my internet connection.
              </span>
            </p>

            <p>
              <span className={styles.page622__speaker}>Agent:</span>
              <span className={styles.isSecond}>
                I’m sorry to hear that. What seems to be the issue?
              </span>
            </p>

            <p>
              <span className={styles.page622__speaker}>Customer:</span>
              <span>
                It’s been very slow for the past week, and I can’t even load
                websites properly.
              </span>
            </p>

            <p>
              <span className={styles.page622__speaker}>Agent:</span>
              <span className={styles.isSecond}>
                I understand. Have you tried restarting your router?
              </span>
            </p>

            <p>
              <span className={styles.page622__speaker}>Customer:</span>
              <span>
                Yes, several times, but the problem persists.
              </span>
            </p>

            <p>
              <span className={styles.page622__speaker}>Agent:</span>
              <span className={styles.isSecond}>
                I’ll send a technician to check the connection. When would be a
                good time?
              </span>
            </p>
          </div>
        </div>

        {/* Espaço reservado para a imagem */}
        <div className={styles.page622__img} />
      </section>
    </div>
  );
};

export default Pagina622;
