import React, { useEffect } from "react";
import styles from "./pagina583.module.css";

const Pagina583 = ({ onValidar }) => {
  useEffect(() => { if (onValidar) onValidar(true); }, [onValidar]);

  return (
    <div className={styles.page583__container}>
      <header className={styles.page583__header}>
        <h1 className={styles.page583__title}>Real-life Dialogues</h1>
      </header>

      <main className={styles.page583__main}>
        {/* ===== Coluna 1 ===== */}
        <section className={styles.page583__card}>
          <figure className={styles.page583__imageWrapper}>
            <div className={styles.page583__imagePlaceholder} />
          </figure>

          <div className={styles.page583__dialogue}>
            <p>
              <span className={styles.page583__speaker}>Henry:</span>
              <span className={styles.page583__line}>
                Hey, do you use the internet a lot?
              </span>
            </p>

            <p>
              <span className={`${styles.page583__speaker} ${styles["is-second"]}`}>Liam:</span>
              <span className={`${styles.page583__line} ${styles["is-second"]}`}>
                Yeah, I’m always online. I browse, chat, and watch stuff.
              </span>
            </p>

            <p>
              <span className={styles.page583__speaker}>Henry:</span>
              <span className={styles.page583__line}>
                What about your computer? Is it fast?
              </span>
            </p>

            <p>
              <span className={`${styles.page583__speaker} ${styles["is-second"]}`}>Liam:</span>
              <span className={`${styles.page583__line} ${styles["is-second"]}`}>
                My laptop’s okay, not superfast but it gets the job done.
              </span>
            </p>

            <p>
              <span className={styles.page583__speaker}>Henry:</span>
              <span className={styles.page583__line}>
                How ’bout your phone? Got any cool apps?
              </span>
            </p>

            <p>
              <span className={`${styles.page583__speaker} ${styles["is-second"]}`}>Liam:</span>
              <span className={`${styles.page583__line} ${styles["is-second"]}`}>
                Oh, my cell phone’s loaded with apps. I play games and use social media daily.
              </span>
            </p>

            <p>
              <span className={styles.page583__speaker}>Henry:</span>
              <span className={styles.page583__line}>
                Do you own a tablet?
              </span>
            </p>

            <p>
              <span className={`${styles.page583__speaker} ${styles["is-second"]}`}>Liam:</span>
              <span className={`${styles.page583__line} ${styles["is-second"]}`}>
                Yeah, I have a tablet too. I read, stream, and sometimes work on it.
              </span>
            </p>

            <p>
              <span className={styles.page583__speaker}>Henry:</span>
              <span className={styles.page583__line}>
                What about smartwatches? Do you find them useful?
              </span>
            </p>

            <p>
              <span className={`${styles.page583__speaker} ${styles["is-second"]}`}>Liam:</span>
              <span className={`${styles.page583__line} ${styles["is-second"]}`}>
                My smartwatch? It tracks my steps, notifies me, and helps with fitness.
              </span>
            </p>

            <p>
              <span className={styles.page583__speaker}>Henry:</span>
              <span className={styles.page583__line}>
                That sounds neat. I should get one too!
              </span>
            </p>

            <p>
              <span className={`${styles.page583__speaker} ${styles["is-second"]}`}>Liam:</span>
              <span className={`${styles.page583__line} ${styles["is-second"]}`}>
                Definitely! They’re handy.
              </span>
            </p>
          </div>
        </section>

        {/* ===== Coluna 2 ===== */}
        <section className={styles.page583__card}>
          <figure className={styles.page583__imageWrapper}>
            <div className={styles.page583__imagePlaceholder} />
          </figure>

          <div className={styles.page583__dialogue}>
            <p>
              <span className={styles.page583__speaker}>Luna:</span>
              <span className={styles.page583__line}>
                How do you spend your weekdays?
              </span>
            </p>

            <p>
              <span className={`${styles.page583__speaker} ${styles["is-second"]}`}>Theodore:</span>
              <span className={`${styles.page583__line} ${styles["is-second"]}`}>
                I have a regular routine. I wake up early and have a quick breakfast. Then, I catch the bus to work.
              </span>
            </p>

            <p>
              <span className={styles.page583__speaker}>Luna:</span>
              <span className={styles.page583__line}>
                What time do you usually get to the office?
              </span>
            </p>

            <p>
              <span className={`${styles.page583__speaker} ${styles["is-second"]}`}>Theodore:</span>
              <span className={`${styles.page583__line} ${styles["is-second"]}`}>
                I arrive around 9 a.m. I start by checking emails and making a to-do list for the day.
              </span>
            </p>

            <p>
              <span className={styles.page583__speaker}>Luna:</span>
              <span className={styles.page583__line}>
                What do you do for lunch?
              </span>
            </p>

            <p>
              <span className={`${styles.page583__speaker} ${styles["is-second"]}`}>Theodore:</span>
              <span className={`${styles.page583__line} ${styles["is-second"]}`}>
                I usually bring lunch from home or grab something quick nearby. Then I continue work until around 5 p.m.
              </span>
            </p>

            <p>
              <span className={styles.page583__speaker}>Luna:</span>
              <span className={styles.page583__line}>
                And after work?
              </span>
            </p>

            <p>
              <span className={`${styles.page583__speaker} ${styles["is-second"]}`}>Theodore:</span>
              <span className={`${styles.page583__line} ${styles["is-second"]}`}>
                I head back home, have dinner, and relax. Sometimes I exercise before bedtime.
              </span>
            </p>

            <p>
              <span className={styles.page583__speaker}>Luna:</span>
              <span className={styles.page583__line}>
                Sounds like a busy day!
              </span>
            </p>

            <p>
              <span className={`${styles.page583__speaker} ${styles["is-second"]}`}>Theodore:</span>
              <span className={`${styles.page583__line} ${styles["is-second"]}`}>
                Yeah, but it’s my usual routine during the week.
              </span>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pagina583;
