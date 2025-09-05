import React, { useEffect } from "react";
import styles from "./pagina613.module.css";

const Pagina613 = ({ onValidar }) => {
  useEffect(() => { onValidar?.(true); }, [onValidar]);

  return (
    <div className={styles.page613__container}>
      <header>
        <h1 className={styles.page613__title}>Real Life Dialogue</h1>
      </header>

      <main className={styles.page613__grid}>
        {/* Fruits and Vegetables */}
        <section className={styles.page613__card}>
          <div className={styles.page613__chip}>Fruits and Vegetables</div>
          <div className={styles.page613__content}>
            <div className={styles.page613__img} />
            <div className={styles.page613__dialogue}>
              <p><span className={styles.page613__speaker}>Kate:</span> <span>Mom, what fruits should we buy at the market?</span></p>
              <p><span className={styles.page613__speaker}>Mom:</span> <span className={styles.isSecond}>Let’s get some apples, bananas, and grapes.</span></p>
              <p><span className={styles.page613__speaker}>Kate:</span> <span>Can we also buy carrots for a snack?</span></p>
              <p><span className={styles.page613__speaker}>Mom:</span> <span className={styles.isSecond}>Of course, Kate. Carrots are healthy.</span></p>
            </div>
          </div>
        </section>

        {/* Community Helpers */}
        <section className={styles.page613__card}>
          <div className={styles.page613__chip}>Community Helpers</div>
          <div className={styles.page613__content}>
            <div className={styles.page613__img} />
            <div className={styles.page613__dialogue}>
              <p><span className={styles.page613__speaker}>Jake:</span> <span>Dad, what does a firefighter do?</span></p>
              <p><span className={styles.page613__speaker}>Dad:</span> <span className={styles.isSecond}>Firefighters help put out fires and rescue people from danger.</span></p>
              <p><span className={styles.page613__speaker}>Jake:</span> <span>They are heroes, right?</span></p>
              <p><span className={styles.page613__speaker}>Dad:</span> <span className={styles.isSecond}>Yes, they are. They help keep us safe.</span></p>
            </div>
          </div>
        </section>

        {/* Travel */}
        <section className={styles.page613__card}>
          <div className={styles.page613__chip}>Travel</div>
          <div className={styles.page613__content}>
            <div className={styles.page613__img} />
            <div className={styles.page613__dialogue}>
              <p><span className={styles.page613__speaker}>Sarah:</span> <span>Mom, where are we going on vacation this year?</span></p>
              <p><span className={styles.page613__speaker}>Mom:</span> <span className={styles.isSecond}>We’re going to the beach, Sarah.</span></p>
              <p><span className={styles.page613__speaker}>Sarah:</span> <span>Yay! I love the beach. When are we leaving?</span></p>
              <p><span className={styles.page613__speaker}>Mom:</span> <span className={styles.isSecond}>We’re leaving on Friday, so we need to pack our bags.</span></p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pagina613;
