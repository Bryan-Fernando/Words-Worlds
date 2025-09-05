import React, { useEffect } from "react";
import styles from "./pagina608.module.css";

const Pagina608 = ({ onValidar }) => {
  useEffect(() => { onValidar?.(true); }, [onValidar]);

  return (
    <div className={styles.page608__container}>
      <header>
        <h1 className={styles.page608__title}>Real Life Dialogue</h1>
      </header>

      <main className={styles.page608__grid}>
        {/* Starting a Conversation at a Social Event */}
        <section className={styles.page608__card}>
          <div className={styles.page608__chip}>
            Starting a Conversation at a Social Event
          </div>
          <div className={styles.page608__content}>
            <div className={styles.page608__img} />
            <div className={styles.page608__dialogue}>
              <p><span className={styles.page608__speaker}>Emily:</span> <span>Hello!</span></p>
              <p><span className={styles.page608__speaker}>Mike:</span> <span className={styles.isSecond}>Hi, I’m Mike.</span></p>
              <p><span className={styles.page608__speaker}>Emily:</span> <span>Emily. First time here.</span></p>
              <p><span className={styles.page608__speaker}>Mike:</span> <span className={styles.isSecond}>No worries, Emily. Everyone’s friendly.</span></p>
            </div>
          </div>
        </section>

        {/* Meeting a New Neighbor */}
        <section className={styles.page608__card}>
          <div className={styles.page608__chip}>Meeting a New Neighbor</div>
          <div className={styles.page608__content}>
            <div className={styles.page608__img} />
            <div className={styles.page608__dialogue}>
              <p><span className={styles.page608__speaker}>Alex:</span> <span>Hi there!</span></p>
              <p><span className={styles.page608__speaker}>Sarah:</span> <span className={styles.isSecond}>Hello!</span></p>
              <p><span className={styles.page608__speaker}>Alex:</span> <span>I’m Alex, your new neighbor.</span></p>
              <p><span className={styles.page608__speaker}>Sarah:</span> <span className={styles.isSecond}>Nice to meet you, Alex. I’m Sarah.</span></p>
            </div>
          </div>
        </section>

        {/* Catching Up with a Classmate */}
        <section className={styles.page608__card}>
          <div className={styles.page608__chip}>Catching Up with a Classmate</div>
          <div className={styles.page608__content}>
            <div className={styles.page608__img} />
            <div className={styles.page608__dialogue}>
              <p><span className={styles.page608__speaker}>Harper:</span> <span>Hey!</span></p>
              <p><span className={styles.page608__speaker}>Rick:</span> <span className={styles.isSecond}>Oh, hey!</span></p>
              <p><span className={styles.page608__speaker}>Harper:</span> <span>It’s been a while. How have you been?</span></p>
              <p><span className={styles.page608__speaker}>Rick:</span> <span className={styles.isSecond}>Pretty good. You?</span></p>
            </div>
          </div>
        </section>

        {/* Meeting a New Team Member */}
        <section className={styles.page608__card}>
          <div className={styles.page608__chip}>Meeting a New Team Member</div>
          <div className={styles.page608__content}>
            <div className={styles.page608__img} />
            <div className={styles.page608__dialogue}>
              <p><span className={styles.page608__speaker}>Mark:</span> <span>Hi!</span></p>
              <p><span className={styles.page608__speaker}>Henry:</span> <span className={styles.isSecond}>Hello, I’m Jennifer.</span></p>
              <p><span className={styles.page608__speaker}>Mark:</span> <span>Mark. Just joined the team.</span></p>
              <p><span className={styles.page608__speaker}>Henry:</span> <span className={styles.isSecond}>Welcome aboard, Mark.</span></p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pagina608;
