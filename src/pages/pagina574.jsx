import React, { useEffect } from "react";
import styles from "./pagina574.module.css";

const Pagina574 = ({ onValidar }) => {
  useEffect(() => {
    if (onValidar) onValidar(true);
  }, [onValidar]);

  return (
    <div className={styles.page574__container}>
      <header className={styles.page574__header}>
        <h1 className={styles.page574__title}>Real-life Dialogues</h1>
      </header>

      <main className={styles.page574__main}>
        {/* ====== Bloco 1: In a Classroom Setting ====== */}
        <section className={styles.page574__card}>
          <figure className={styles.page574__imageWrapper}>
            <div className={styles.page574__imagePlaceholder} />
          </figure>

          <div className={styles.page574__dialogueBox}>
            <h3 className={styles.page574__topic}>In a Classroom Setting:</h3>

            <div className={styles.page574__dialogue}>
              <p>
                <span className={`${styles.page574__speaker} ${styles["is-teacher"]}`}>Teacher:</span>
                <span className={styles.page574__line}>
                  For your upcoming assignments, what topics will you be focusing on for your presentations?
                </span>
              </p>

              <p>
                <span className={`${styles.page574__speaker} ${styles["is-student"]}`}>Student:</span>
                <span className={`${styles.page574__line} ${styles["is-student"]}`}>
                  I’ll be researching renewable energy sources and their impact on climate change.
                </span>
              </p>

              <p>
                <span className={`${styles.page574__speaker} ${styles["is-teacher"]}`}>Teacher:</span>
                <span className={styles.page574__line}>
                  That’s a relevant and important topic. Will you be presenting any case studies or statistical data?
                </span>
              </p>

              <p>
                <span className={`${styles.page574__speaker} ${styles["is-student"]}`}>Student:</span>
                <span className={`${styles.page574__line} ${styles["is-student"]}`}>
                  Yes, I’ll incorporate both to provide a comprehensive understanding during my presentation.
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* ====== Bloco 2: Between Friends Planning a Trip ====== */}
        <section className={`${styles.page574__card} ${styles["is-reversed"]}`}>
          <div className={styles.page574__dialogueBox}>
            <h3 className={styles.page574__topic}>Between Friends Planning a Trip:</h3>

            <div className={styles.page574__dialogue}>
              <p>
                <span className={`${styles.page574__speaker} ${styles["is-grace"]}`}>Grace:</span>
                <span className={styles.page574__line}>
                  I can’t wait for our hiking trip next month! What gear will you be bringing along?
                </span>
              </p>

              <p>
                <span className={`${styles.page574__speaker} ${styles["is-zoe"]}`}>Zoe:</span>
                <span className={`${styles.page574__line} ${styles["is-zoe"]}`}>
                  I’ll be packing my tent, sleeping bag, and cooking equipment. How about you?
                </span>
              </p>

              <p>
                <span className={`${styles.page574__speaker} ${styles["is-grace"]}`}>Grace:</span>
                <span className={styles.page574__line}>
                  I’ll be bringing my hiking boots, waterproof jacket, and a first aid kit. Do you think we’ll encounter any challenging trails?
                </span>
              </p>

              <p>
                <span className={`${styles.page574__speaker} ${styles["is-zoe"]}`}>Zoe:</span>
                <span className={`${styles.page574__line} ${styles["is-zoe"]}`}>
                  Possibly, but it’ll be an adventure. We’ll be exploring some remote areas, so I’m excited to see what’s in store for us.
                </span>
              </p>
            </div>
          </div>

          <figure className={styles.page574__imageWrapper}>
            <div className={styles.page574__imagePlaceholder} />
          </figure>
        </section>

        {/* Nota */}
        <section className={styles.page574__note}>
          <p><strong>NOTE: Listening Comprehension and Pronunciation</strong></p>
          <p>
            Now, take a moment to focus on the dialogues(s). Pay attention to the way the speakers
            express themselves, and try to practice mimicking their pronunciation.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Pagina574;
