import React, { useEffect } from "react";
import styles from "./pagina586.module.css";

const Pagina586 = ({ onValidar }) => {
  useEffect(() => { if (onValidar) onValidar(true); }, [onValidar]);

  return (
    <div className={styles.page586__container}>
      <header className={styles.page586__header}>
        <h1 className={styles.page586__title}>Real-life Dialogues</h1>
      </header>

      <main className={styles.page586__main}>
        {/* Hero (imagem grande - placeholder) */}
        <section className={styles.page586__hero}>
          <div className={styles.page586__heroImage} />
        </section>

        {/* Diálogo */}
        <section className={styles.page586__dialogueCard}>
          <div className={styles.page586__dialogue}>
            <p>
              <span className={styles.page586__speaker}>Amy:</span>
              <span className={styles.page586__line}>
                Hey, Mark! How was your recent trip to Italy?
              </span>
            </p>

            <p>
              <span className={`${styles.page586__speaker} ${styles["is-mark"]}`}>Mark:</span>
              <span className={`${styles.page586__line} ${styles["is-mark"]}`}>
                Oh, it was incredible, Amy! I’ve never experienced such a rich blend of history, culture, and delicious food.
              </span>
            </p>

            <p>
              <span className={styles.page586__speaker}>Amy:</span>
              <span className={styles.page586__line}>
                That sounds amazing! What’s the most memorable thing you’ve done?
              </span>
            </p>

            <p>
              <span className={`${styles.page586__speaker} ${styles["is-mark"]}`}>Mark:</span>
              <span className={`${styles.page586__line} ${styles["is-mark"]}`}>
                Well, I’ve always wanted to visit Rome, and I finally did. The Colosseum, the Vatican, and the ancient ruins were breathtaking. And the locals were so friendly!
              </span>
            </p>

            <p>
              <span className={styles.page586__speaker}>Amy:</span>
              <span className={styles.page586__line}>
                Have you already tried authentic Italian pizza and pasta?
              </span>
            </p>

            <p>
              <span className={`${styles.page586__speaker} ${styles["is-mark"]}`}>Mark:</span>
              <span className={`${styles.page586__line} ${styles["is-mark"]}`}>
                Absolutely! I’ve never had pasta that delicious before. And the pizza! I’ve already been to this amazing local pizzeria recommended by a friendly Italian we met at a cafe.
              </span>
            </p>

            <p>
              <span className={styles.page586__speaker}>Amy:</span>
              <span className={styles.page586__line}>
                That sounds fantastic! What about other local dishes?
              </span>
            </p>

            <p>
              <span className={`${styles.page586__speaker} ${styles["is-mark"]}`}>Mark:</span>
              <span className={`${styles.page586__line} ${styles["is-mark"]}`}>
                I’ve tried various regional specialties. The seafood in Cinque Terre was divine. And in Florence, I had the best gelato ever! I’ve never tasted anything like it.
              </span>
            </p>

            <p>
              <span className={styles.page586__speaker}>Amy:</span>
              <span className={styles.page586__line}>
                Did you explore any local markets or restaurants off the beaten path?
              </span>
            </p>

            <p>
              <span className={`${styles.page586__speaker} ${styles["is-mark"]}`}>Mark:</span>
              <span className={`${styles.page586__line} ${styles["is-mark"]}`}>
                Oh, yes! We wandered through local markets, tried street food, and found this charming little family-run restaurant in a hidden alley. The atmosphere was cozy, and the food was so authentic.
              </span>
            </p>

            <p>
              <span className={styles.page586__speaker}>Amy:</span>
              <span className={styles.page586__line}>
                Did you ever feel like a local during your travels?
              </span>
            </p>

            <p>
              <span className={`${styles.page586__speaker} ${styles["is-mark"]}`}>Mark:</span>
              <span className={`${styles.page586__line} ${styles["is-mark"]}`}>
                Surprisingly, yes. We engaged with locals, learned a few phrases in Italian, and even joined a cooking class. It added a whole new dimension to the trip.
              </span>
            </p>

            <p>
              <span className={styles.page586__speaker}>Amy:</span>
              <span className={styles.page586__line}>
                That’s awesome! Any advice for someone planning a similar trip?
              </span>
            </p>

            <p>
              <span className={`${styles.page586__speaker} ${styles["is-mark"]}`}>Mark:</span>
              <span className={`${styles.page586__line} ${styles["is-mark"]}`}>
                Definitely immerse yourself in the local culture. Talk to locals, try their food, and step away from touristy spots. It’s the best way to create unforgettable memories.
              </span>
            </p>

            <p>
              <span className={styles.page586__speaker}>Amy:</span>
              <span className={styles.page586__line}>
                Sounds like an incredible experience, Mark! I’ve never been to Italy, but now I’m inspired to plan a trip myself.
              </span>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pagina586;
