import React, { useEffect } from "react";
import styles from "./pagina592.module.css";

const Pagina592 = ({ onValidar }) => {
  useEffect(() => { if (onValidar) onValidar(true); }, [onValidar]);

  return (
    <div className={styles.page592__container}>
      <header className={styles.page592__header}>
        <h1 className={styles.page592__title}>Real Life Dialogue</h1>
      </header>

      <main className={styles.page592__main}>
        {/* Hero (placeholder) */}
        <section className={styles.page592__hero}>
          <div className={styles.page592__heroImage} />
        </section>

        {/* Diálogo */}
        <section className={styles.page592__dialogueCard}>
          <div className={styles.page592__dialogue}>
            <p>
              <span className={styles.page592__speaker}>Claudia:</span>
              <span className={styles.page592__line}>
                Hey, Beth! Do you travel often?
              </span>
            </p>

            <p>
              <span className={`${styles.page592__speaker} ${styles["is-beth"]}`}>Beth:</span>
              <span className={`${styles.page592__line} ${styles["is-beth"]}`}>
                Hi, Claudia! Yes, I travel quite frequently. I usually go on a trip every couple of months.
              </span>
            </p>

            <p>
              <span className={styles.page592__speaker}>Claudia:</span>
              <span className={styles.page592__line}>
                Wow, that’s impressive! Where do you usually go?
              </span>
            </p>

            <p>
              <span className={`${styles.page592__speaker} ${styles["is-beth"]}`}>Beth:</span>
              <span className={`${styles.page592__line} ${styles["is-beth"]}`}>
                I typically visit different countries in Europe. I love exploring new cultures and trying new foods.
              </span>
            </p>

            <p>
              <span className={styles.page592__speaker}>Claudia:</span>
              <span className={styles.page592__line}>
                That sounds amazing! How do you afford to travel so often?
              </span>
            </p>

            <p>
              <span className={`${styles.page592__speaker} ${styles["is-beth"]}`}>Beth:</span>
              <span className={`${styles.page592__line} ${styles["is-beth"]}`}>
                Well, I budget carefully and save money specifically for travel. Plus, I take advantage of deals and discounts whenever I can.
              </span>
            </p>

            <p>
              <span className={styles.page592__speaker}>Claudia:</span>
              <span className={styles.page592__line}>
                That’s smart! Do you travel alone or with friends?
              </span>
            </p>

            <p>
              <span className={`${styles.page592__speaker} ${styles["is-beth"]}`}>Beth:</span>
              <span className={`${styles.page592__line} ${styles["is-beth"]}`}>
                It depends. Sometimes I go solo to have my own adventure, but other times I travel with friends or family for a more social experience.
              </span>
            </p>

            <p>
              <span className={styles.page592__speaker}>Claudia:</span>
              <span className={styles.page592__line}>
                I wish I could travel as much as you do!
              </span>
            </p>

            <p>
              <span className={`${styles.page592__speaker} ${styles["is-beth"]}`}>Beth:</span>
              <span className={`${styles.page592__line} ${styles["is-beth"]}`}>
                You can! Just start planning and saving, and before you know it, you’ll be off on your own adventures too.
              </span>
            </p>
          </div>
        </section>

        {/* Rodapé: Study Notes + Word Bank */}
        <section className={styles.page592__infoGrid}>
          <div className={styles.page592__card}>
            <div className={styles.page592__cardHeader}>Study Notes</div>
            <div className={styles.page592__cardBody}>
              <p className={styles.page592__label}>
                Introduzindo:<span className={styles.page592__dash}> can – could – will</span>
              </p>
            </div>
          </div>

          <div className={styles.page592__card}>
            <div className={styles.page592__cardHeader}>Word Bank</div>
            <div className={styles.page592__cardBody}>
              <p className={styles.page592__wbRow}>
                <span className={styles.page592__wbEn}>go solo</span> – ir sozinho
              </p>
              <p className={styles.page592__wbRow}>
                <span className={styles.page592__wbEn}>to budget</span> – planejar
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pagina592;
