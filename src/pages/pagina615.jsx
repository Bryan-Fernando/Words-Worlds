import React, { useEffect } from "react";
import styles from "./pagina615.module.css";

const Pagina615 = ({ onValidar }) => {
  useEffect(() => { onValidar?.(true); }, [onValidar]);

  return (
    <div className={styles.page615__container}>
      <header>
        <h1 className={styles.page615__title}>Real Life Dialogue</h1>
      </header>

      <main className={styles.page615__grid}>
        {/* Daily Routine */}
        <section className={styles.page615__card}>
          <div className={styles.page615__chip}>Daily Routine</div>
          <div className={styles.page615__content}>
            <div className={styles.page615__img} />
            <div className={styles.page615__dialogue}>
              <p><span className={styles.page615__speaker}>A:</span> <span>What do you do every morning?</span></p>
              <p><span className={styles.page615__speaker}>B:</span> <span className={styles.isSecond}>I wake up, brush my teeth, and have breakfast. How about you?</span></p>
              <p><span className={styles.page615__speaker}>A:</span> <span>I usually exercise and then get ready for the day.</span></p>
            </div>
          </div>
        </section>

        {/* Hobbies */}
        <section className={styles.page615__card}>
          <div className={styles.page615__chip}>Hobbies</div>
          <div className={styles.page615__content}>
            <div className={styles.page615__img} />
            <div className={styles.page615__dialogue}>
              <p><span className={styles.page615__speaker}>A:</span> <span>What hobbies do you enjoy?</span></p>
              <p><span className={styles.page615__speaker}>B:</span> <span className={styles.isSecond}>I play the guitar and read books. What about you?</span></p>
              <p><span className={styles.page615__speaker}>A:</span> <span>I like painting and going for walks in the park.</span></p>
            </div>
          </div>
        </section>

        {/* Family and Relationships */}
        <section className={styles.page615__card}>
          <div className={styles.page615__chip}>Family and Relationships</div>
          <div className={styles.page615__content}>
            <div className={styles.page615__img} />
            <div className={styles.page615__dialogue}>
              <p><span className={styles.page615__speaker}>A:</span> <span>How many people are there in your family?</span></p>
              <p><span className={styles.page615__speaker}>B:</span> <span className={styles.isSecond}>I have two siblings and my parents. How about you?</span></p>
              <p><span className={styles.page615__speaker}>A:</span> <span>I live with my mom and my younger sister.</span></p>
            </div>
          </div>
        </section>

        {/* Describing People */}
        <section className={styles.page615__card}>
          <div className={styles.page615__chip}>Describing People</div>
          <div className={styles.page615__content}>
            <div className={styles.page615__img} />
            <div className={styles.page615__dialogue}>
              <p><span className={styles.page615__speaker}>A:</span> <span>Can you describe your best friend?</span></p>
              <p><span className={styles.page615__speaker}>B:</span> <span className={styles.isSecond}>Sure! She&apos;s tall with long brown hair and green eyes.</span></p>
              <p><span className={styles.page615__speaker}>A:</span> <span>My best friend is really funny and always smiling.</span></p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pagina615;
