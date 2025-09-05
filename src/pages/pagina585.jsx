import React, { useEffect } from "react";
import styles from "./pagina585.module.css";

const Pagina585 = ({ onValidar }) => {
  useEffect(() => { if (onValidar) onValidar(true); }, [onValidar]);

  return (
    <div className={styles.page585__container}>
      <header className={styles.page585__header}>
        <h1 className={styles.page585__title}>Real-life Dialogues</h1>
      </header>

      <main className={styles.page585__main}>
        {/* ===== Coluna 1 ===== */}
        <section className={styles.page585__card}>
          <figure className={styles.page585__imageWrapper}>
            <div className={styles.page585__imagePlaceholder} />
          </figure>

          <div className={styles.page585__dialogue}>
            <p>
              <span className={styles.page585__speaker}>Rafael:</span>
              <span className={styles.page585__line}>
                How do you usually get around the city?
              </span>
            </p>
            <p>
              <span className={`${styles.page585__speaker} ${styles["is-second"]}`}>Lucy:</span>
              <span className={`${styles.page585__line} ${styles["is-second"]}`}>
                I take the bus or the subway most of the time.
              </span>
            </p>
            <p>
              <span className={styles.page585__speaker}>Rafael:</span>
              <span className={styles.page585__line}>
                What time do you catch the bus?
              </span>
            </p>
            <p>
              <span className={`${styles.page585__speaker} ${styles["is-second"]}`}>Lucy:</span>
              <span className={`${styles.page585__line} ${styles["is-second"]}`}>
                I usually catch the 8:00 bus to work.
              </span>
            </p>
            <p>
              <span className={styles.page585__speaker}>Rafael:</span>
              <span className={styles.page585__line}>
                Is it usually crowded?
              </span>
            </p>
            <p>
              <span className={`${styles.page585__speaker} ${styles["is-second"]}`}>Lucy:</span>
              <span className={`${styles.page585__line} ${styles["is-second"]}`}>
                Yeah, it can get pretty crowded during rush hour.
              </span>
            </p>
            <p>
              <span className={styles.page585__speaker}>Rafael:</span>
              <span className={styles.page585__line}>
                How long does the ride take?
              </span>
            </p>
            <p>
              <span className={`${styles.page585__speaker} ${styles["is-second"]}`}>Lucy:</span>
              <span className={`${styles.page585__line} ${styles["is-second"]}`}>
                It takes about 30 minutes if the traffic isn’t too bad.
              </span>
            </p>
            <p>
              <span className={styles.page585__speaker}>Rafael:</span>
              <span className={styles.page585__line}>
                And how about getting back home?
              </span>
            </p>
            <p>
              <span className={`${styles.page585__speaker} ${styles["is-second"]}`}>Lucy:</span>
              <span className={`${styles.page585__line} ${styles["is-second"]}`}>
                I take the 5:30 bus back. It’s a routine for me.
              </span>
            </p>
          </div>
        </section>

        {/* ===== Coluna 2 ===== */}
        <section className={styles.page585__card}>
          <figure className={styles.page585__imageWrapper}>
            <div className={styles.page585__imagePlaceholder} />
          </figure>

          <div className={styles.page585__dialogue}>
            <p>
              <span className={styles.page585__speaker}>Brian:</span>
              <span className={styles.page585__line}>
                How do you commute to work?
              </span>
            </p>
            <p>
              <span className={`${styles.page585__speaker} ${styles["is-second"]}`}>Cindy:</span>
              <span className={`${styles.page585__line} ${styles["is-second"]}`}>
                I prefer taking the train. It’s more comfortable for me.
              </span>
            </p>
            <p>
              <span className={styles.page585__speaker}>Brian:</span>
              <span className={styles.page585__line}>
                What time does your train leave?
              </span>
            </p>
            <p>
              <span className={`${styles.page585__speaker} ${styles["is-second"]}`}>Cindy:</span>
              <span className={`${styles.page585__line} ${styles["is-second"]}`}>
                My train leaves at 7:45 in the morning.
              </span>
            </p>
            <p>
              <span className={styles.page585__speaker}>Brian:</span>
              <span className={styles.page585__line}>
                Do you have to transfer?
              </span>
            </p>
            <p>
              <span className={`${styles.page585__speaker} ${styles["is-second"]}`}>Cindy:</span>
              <span className={`${styles.page585__line} ${styles["is-second"]}`}>
                No, it’s a direct route. I reach my destination without transfers.
              </span>
            </p>
            <p>
              <span className={styles.page585__speaker}>Brian:</span>
              <span className={styles.page585__line}>
                How long is the journey?
              </span>
            </p>
            <p>
              <span className={`${styles.page585__speaker} ${styles["is-second"]}`}>Cindy:</span>
              <span className={`${styles.page585__line} ${styles["is-second"]}`}>
                It usually takes around 40 minutes.
              </span>
            </p>
            <p>
              <span className={styles.page585__speaker}>Brian:</span>
              <span className={styles.page585__line}>
                What about after work?
              </span>
            </p>
            <p>
              <span className={`${styles.page585__speaker} ${styles["is-second"]}`}>Cindy:</span>
              <span className={`${styles.page585__line} ${styles["is-second"]}`}>
                I catch the 5:15 train back home. It’s convenient for me.
              </span>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pagina585;
