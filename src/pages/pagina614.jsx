import React, { useEffect } from "react";
import styles from "./pagina614.module.css";

const Pagina614 = ({ onValidar }) => {
  useEffect(() => { onValidar?.(true); }, [onValidar]);

  return (
    <div className={styles.page614__container}>
      <header>
        <h1 className={styles.page614__title}>Real Life Dialogue</h1>
      </header>

      <main className={styles.page614__grid}>
        {/* Talking about Places */}
        <section className={styles.page614__card}>
          <div className={styles.page614__chip}>Talking about Places</div>
          <div className={styles.page614__content}>
            <div className={styles.page614__img} />
            <div className={styles.page614__dialogue}>
              <p><span className={styles.page614__speaker}>A:</span> <span>What’s your favorite place to visit?</span></p>
              <p><span className={styles.page614__speaker}>B:</span> <span className={styles.isSecond}>I love going to the beach. How about you?</span></p>
              <p><span className={styles.page614__speaker}>A:</span> <span>I enjoy spending time in the mountains.</span></p>
            </div>
          </div>
        </section>

        {/* Likes and Dislikes */}
        <section className={styles.page614__card}>
          <div className={styles.page614__chip}>Likes and Dislikes</div>
          <div className={styles.page614__content}>
            <div className={styles.page614__img} />
            <div className={styles.page614__dialogue}>
              <p><span className={styles.page614__speaker}>A:</span> <span>What kind of movies do you like?</span></p>
              <p><span className={styles.page614__speaker}>B:</span> <span className={styles.isSecond}>I like action movies. How about you?</span></p>
              <p><span className={styles.page614__speaker}>A:</span> <span>I don’t really like horror movies, but I enjoy comedies.</span></p>
            </div>
          </div>
        </section>

        {/* Talking about the Weather */}
        <section className={styles.page614__card}>
          <div className={styles.page614__chip}>Talking about the Weather</div>
          <div className={styles.page614__content}>
            <div className={styles.page614__img} />
            <div className={styles.page614__dialogue}>
              <p><span className={styles.page614__speaker}>A:</span> <span>What’s the weather like today?</span></p>
              <p><span className={styles.page614__speaker}>B:</span> <span className={styles.isSecond}>It’s sunny and warm. How about where you are?</span></p>
              <p><span className={styles.page614__speaker}>A:</span> <span>It’s a bit cloudy, but not too cold.</span></p>
            </div>
          </div>
        </section>

        {/* Describing Food */}
        <section className={styles.page614__card}>
          <div className={styles.page614__chip}>Describing Food</div>
          <div className={styles.page614__content}>
            <div className={styles.page614__img} />
            <div className={styles.page614__dialogue}>
              <p><span className={styles.page614__speaker}>A:</span> <span>What’s your favorite food?</span></p>
              <p><span className={styles.page614__speaker}>B:</span> <span className={styles.isSecond}>I love pizza and hamburgers. How about you?</span></p>
              <p><span className={styles.page614__speaker}>A:</span> <span>I enjoy eating salads and fruits.</span></p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pagina614;
