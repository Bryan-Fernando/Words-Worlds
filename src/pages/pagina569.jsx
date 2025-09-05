import React, { useEffect } from "react";
import styles from "./pagina569.module.css";

const Pagina569 = ({ onValidar }) => {
  // libera a navegação caso sua estrutura valide páginas
  useEffect(() => {
    if (onValidar) onValidar(true);
  }, [onValidar]);

  return (
    <div className={styles.page569__container}>
      <header className={styles.page569__header}>
        <h1 className={styles.page569__title}>Real Life Dialogue</h1>
      </header>

      <main className={styles.page569__main}>
        <section className={styles.page569__card}>
          <div className={styles.page569__dialogue}>
            <p>
              <span className={`${styles.page569__speaker} ${styles["is-rita"]}`}>Rita:</span>
              <span className={styles.page569__line}>
                Hey, did you go on any cool vacations last year?
              </span>
            </p>

            <p>
              <span className={`${styles.page569__speaker} ${styles["is-neto"]}`}>Neto:</span>
              <span className={`${styles.page569__line} ${styles["is-neto"]}`}>
                Yeah, I went to Bali! It was amazing. The beaches were beautiful,
                and the weather was perfect.
              </span>
            </p>

            <p>
              <span className={`${styles.page569__speaker} ${styles["is-rita"]}`}>Rita:</span>
              <span className={styles.page569__line}>
                Nice! What did you do there?
              </span>
            </p>

            <p>
              <span className={`${styles.page569__speaker} ${styles["is-neto"]}`}>Neto:</span>
              <span className={`${styles.page569__line} ${styles["is-neto"]}`}>
                I explored the temples, tried surfing for the first time, and hiked
                up a volcano. It was quite an adventure!
              </span>
            </p>

            <p>
              <span className={`${styles.page569__speaker} ${styles["is-rita"]}`}>Rita:</span>
              <span className={styles.page569__line}>
                Sounds fantastic! I went to Europe. I visited Paris and Rome.
              </span>
            </p>

            <p>
              <span className={`${styles.page569__speaker} ${styles["is-neto"]}`}>Neto:</span>
              <span className={`${styles.page569__line} ${styles["is-neto"]}`}>
                Wow, those are iconic cities! What was your favorite part?
              </span>
            </p>

            <p>
              <span className={`${styles.page569__speaker} ${styles["is-rita"]}`}>Rita:</span>
              <span className={styles.page569__line}>
                Definitely seeing the Eiffel Tower lit up at night in Paris. It was
                breathtaking.
              </span>
            </p>

            <p>
              <span className={`${styles.page569__speaker} ${styles["is-neto"]}`}>Neto:</span>
              <span className={`${styles.page569__line} ${styles["is-neto"]}`}>
                I bet! Did you try any new foods?
              </span>
            </p>

            <p>
              <span className={`${styles.page569__speaker} ${styles["is-rita"]}`}>Rita:</span>
              <span className={styles.page569__line}>
                Oh yeah, I had authentic Italian pizza in Rome and croissants in
                Paris. They were delicious!
              </span>
            </p>

            <p>
              <span className={`${styles.page569__speaker} ${styles["is-neto"]}`}>Neto:</span>
              <span className={`${styles.page569__line} ${styles["is-neto"]}`}>
                That sounds amazing. We should plan a trip together sometime!
              </span>
            </p>

            <p>
              <span className={`${styles.page569__speaker} ${styles["is-rita"]}`}>Rita:</span>
              <span className={styles.page569__line}>
                Absolutely! Where do you want to go next?
              </span>
            </p>
          </div>

          <figure className={styles.page569__imageWrapper}>
            
          </figure>
        </section>
      </main>
    </div>
  );
};

export default Pagina569;
