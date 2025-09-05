import React, { useEffect } from "react";
import styles from "./pagina591.module.css";

const Pagina591 = ({ onValidar }) => {
  useEffect(() => { if (onValidar) onValidar(true); }, [onValidar]);

  return (
    <div className={styles.page591__container}>
      <header className={styles.page591__header}>
        <h1 className={styles.page591__title}>Real Life Dialogue</h1>
      </header>

      <main className={styles.page591__main}>
        {/* ===== Coluna Esquerda ===== */}
        <section className={styles.page591__left}>
          <figure className={styles.page591__imageStraight} />
          
          <div className={styles.page591__block}>
            <h3 className={styles.page591__name}>Rob</h3>

            <p className={styles.page591__line}>
              <span className={`${styles.page591__tag} ${styles["is-a"]}`}>A:</span>
              <span className={styles.page591__text}>What do you do?</span>
            </p>

            <p className={styles.page591__line}>
              <span className={`${styles.page591__tag} ${styles["is-a"]}`}>A:</span>
              <span className={styles.page591__text}>Where do you work?</span>
            </p>

            <p className={styles.page591__line}>
              <span className={`${styles.page591__tag} ${styles["is-a"]}`}>A:</span>
              <span className={styles.page591__text}>Do you enjoy it?</span>
            </p>

            <p className={styles.page591__line}>
              <span className={`${styles.page591__tag} ${styles["is-a"]}`}>A:</span>
              <span className={styles.page591__text}>What about the hours?</span>
            </p>
          </div>
        </section>

        {/* ===== Coluna Direita ===== */}
        <section className={styles.page591__right}>
          <div className={styles.page591__imageTiltWrapper}>
            <figure className={styles.page591__imageTilt} />
          </div>

          <div className={styles.page591__block}>
            <h3 className={styles.page591__name}>Jane</h3>

            <p className={styles.page591__line}>
              <span className={styles.page591__tag}>B:</span>
              <span className={styles.page591__text}>I’m a nurse.</span>
            </p>

            <p className={styles.page591__line}>
              <span className={styles.page591__tag}>B:</span>
              <span className={styles.page591__text}>
                Well, I take care of patients in the City hospital. I give them medication,
                check their vitals, and help with any procedures they need.
              </span>
            </p>

            <p className={styles.page591__line}>
              <span className={styles.page591__tag}>B:</span>
              <span className={styles.page591__text}>
                Absolutely! It’s incredible. I’m making a difference in people’s lives,
                even on the toughest days.
              </span>
            </p>

            <p className={styles.page591__line}>
              <span className={styles.page591__tag}>B:</span>
              <span className={styles.page591__text}>
                Challenging. I work different shifts, including nights and weekends, but the
                flexibility allows me to balance work with my personal life.
              </span>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pagina591;
