import React, { useEffect } from "react";
import styles from "./pagina616.module.css";

const Pagina616 = ({ onValidar }) => {
  useEffect(() => { onValidar?.(true); }, [onValidar]);

  return (
    <div className={styles.page616__container}>
      <header>
        <h1 className={styles.page616__title}>Real Life Dialogue</h1>
      </header>

      <main className={styles.page616__grid}>
        {/* Talking about Work/School */}
        <section className={styles.page616__card}>
          <div className={styles.page616__chip}>Talking about Work/School</div>
          <div className={styles.page616__content}>
            <div className={styles.page616__img} />
            <div className={styles.page616__dialogue}>
              <p><span className={styles.page616__speaker}>A:</span> <span>Where do you work or study?</span></p>
              <p><span className={styles.page616__speaker}>B:</span> <span className={styles.isSecond}>I work at a bookstore. How about you?</span></p>
              <p><span className={styles.page616__speaker}>A:</span> <span>I’m a student at the local high school.</span></p>
            </div>
          </div>
        </section>

        {/* Future Plans */}
        <section className={styles.page616__card}>
          <div className={styles.page616__chip}>Future Plans</div>
          <div className={styles.page616__content}>
            <div className={styles.page616__img} />
            <div className={styles.page616__dialogue}>
              <p><span className={styles.page616__speaker}>A:</span> <span>What are your plans for the weekend?</span></p>
              <p><span className={styles.page616__speaker}>B:</span> <span className={styles.isSecond}>I’m going to visit my grandparents. How about you?</span></p>
              <p><span className={styles.page616__speaker}>A:</span> <span>I’ll probably relax at home and watch some movies.</span></p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pagina616;
