import React, { useEffect } from "react";
import styles from "./pagina612.module.css";

const Pagina612 = ({ onValidar }) => {
  useEffect(() => { onValidar?.(true); }, [onValidar]);

  return (
    <div className={styles.page612__container}>
      <header>
        <h1 className={styles.page612__title}>Real Life Dialogue</h1>
      </header>

      <main className={styles.page612__grid}>
        {/* Health and Feelings */}
        <section className={styles.page612__card}>
          <div className={styles.page612__chip}>Health and Feelings</div>
          <div className={styles.page612__content}>
            <div className={styles.page612__img} />
            <div className={styles.page612__dialogue}>
              <p><span className={styles.page612__speaker}>Tim:</span> <span>Mom, I don’t feel well.</span></p>
              <p><span className={styles.page612__speaker}>Mom:</span> <span className={styles.isSecond}>Oh, Tim. Are you feeling sick?</span></p>
              <p><span className={styles.page612__speaker}>Tim:</span> <span>Yes, my tummy hurts.</span></p>
              <p><span className={styles.page612__speaker}>Mom:</span> <span className={styles.isSecond}>Let’s go to the doctor to get you checked.</span></p>
            </div>
          </div>
        </section>

        {/* Nature and Seasons */}
        <section className={styles.page612__card}>
          <div className={styles.page612__chip}>Nature and Seasons</div>
          <div className={styles.page612__content}>
            <div className={styles.page612__img} />
            <div className={styles.page612__dialogue}>
              <p><span className={styles.page612__speaker}>Mia:</span> <span>Look, Mom! The leaves are changing color.</span></p>
              <p><span className={styles.page612__speaker}>Mom:</span> <span className={styles.isSecond}>Yes, Mia. It’s because it’s autumn.</span></p>
              <p><span className={styles.page612__speaker}>Mia:</span> <span>Will it snow in winter?</span></p>
              <p><span className={styles.page612__speaker}>Mom:</span> <span className={styles.isSecond}>Yes, in winter, we might have snow.</span></p>
            </div>
          </div>
        </section>

        {/* Holidays and Celebrations */}
        <section className={styles.page612__card}>
          <div className={styles.page612__chip}>Holidays and Celebrations</div>
          <div className={styles.page612__content}>
            <div className={styles.page612__img} />
            <div className={styles.page612__dialogue}>
              <p><span className={styles.page612__speaker}>Lucy:</span> <span>Dad, when is my birthday?</span></p>
              <p><span className={styles.page612__speaker}>Dad:</span> <span className={styles.isSecond}>Your birthday is on June 10th, Lucy.</span></p>
              <p><span className={styles.page612__speaker}>Lucy:</span> <span>That’s in summer, right?</span></p>
              <p><span className={styles.page612__speaker}>Dad:</span> <span className={styles.isSecond}>Yes, it is. We can have a fun summer party.</span></p>
            </div>
          </div>
        </section>

        {/* School and Classroom */}
        <section className={styles.page612__card}>
          <div className={styles.page612__chip}>School and Classroom</div>
          <div className={styles.page612__content}>
            <div className={styles.page612__img} />
            <div className={styles.page612__dialogue}>
              <p><span className={styles.page612__speaker}>Teacher:</span> <span>Good morning, class. Let’s start our lesson.</span></p>
              <p><span className={styles.page612__speaker}>Emma:</span> <span className={styles.isSecond}>Miss, where do I sit?</span></p>
              <p><span className={styles.page612__speaker}>Teacher:</span> <span>You can sit in the empty desk next to Lucy.</span></p>
              <p><span className={styles.page612__speaker}>Emma:</span> <span className={styles.isSecond}>Hi, Tom! I’m Lucy.</span></p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pagina612;
