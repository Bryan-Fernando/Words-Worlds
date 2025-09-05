import React, { useEffect } from "react";
import styles from "./pagina607.module.css";

const Pagina607 = ({ onValidar }) => {
  useEffect(() => { onValidar?.(true); }, [onValidar]);

  return (
    <div className={styles.page607__container}>
      <header>
        <h1 className={styles.page607__title}>Real Life Dialogue</h1>
      </header>

      <main className={styles.page607__grid}>
        {/* Meeting Someone for the First Time */}
        <section className={styles.page607__card}>
          <div className={styles.page607__chip}>Meeting Someone for the First Time</div>
          <div className={styles.page607__content}>
            <div className={styles.page607__img} />
            <div className={styles.page607__dialogue}>
              <p><span className={styles.page607__speaker}>Alex:</span> <span>Hi!</span></p>
              <p><span className={styles.page607__speaker}>Sarah:</span> <span className={styles.isSecond}>Hello!</span></p>
              <p><span className={styles.page607__speaker}>Alex:</span> <span>I’m Alex.</span></p>
              <p><span className={styles.page607__speaker}>Sarah:</span> <span className={styles.isSecond}>Nice to meet you, Alex. I’m Sarah.</span></p>
            </div>
          </div>
        </section>

        {/* Casual Greeting */}
        <section className={styles.page607__card}>
          <div className={styles.page607__chip}>Casual Greeting</div>
          <div className={styles.page607__content}>
            <div className={styles.page607__img} />
            <div className={styles.page607__dialogue}>
              <p><span className={styles.page607__speaker}>Brenda:</span> <span>Hey there!</span></p>
              <p><span className={styles.page607__speaker}>Peter:</span> <span className={styles.isSecond}>Hi!</span></p>
              <p><span className={styles.page607__speaker}>Brenda:</span> <span>How’s your day?</span></p>
              <p><span className={styles.page607__speaker}>Peter:</span> <span className={styles.isSecond}>Not bad, thanks. How about you?</span></p>
            </div>
          </div>
        </section>

        {/* Reconnecting with a Friend */}
        <section className={styles.page607__card}>
          <div className={styles.page607__chip}>Reconnecting with a Friend</div>
          <div className={styles.page607__content}>
            <div className={styles.page607__img} />
            <div className={styles.page607__dialogue}>
              <p><span className={styles.page607__speaker}>Lisa:</span> <span>Hi!</span></p>
              <p><span className={styles.page607__speaker}>John:</span> <span className={styles.isSecond}>Oh, hey!</span></p>
              <p><span className={styles.page607__speaker}>Lisa:</span> <span>Long time no see. How have you been?</span></p>
              <p><span className={styles.page607__speaker}>John:</span> <span className={styles.isSecond}>I’ve been good. You?</span></p>
            </div>
          </div>
        </section>

        {/* Meeting in a Professional Setting */}
        <section className={styles.page607__card}>
          <div className={styles.page607__chip}>Meeting in a Professional Setting</div>
          <div className={styles.page607__content}>
            <div className={styles.page607__img} />
            <div className={styles.page607__dialogue}>
              <p><span className={styles.page607__speaker}>Mark:</span> <span>Good morning!</span></p>
              <p><span className={styles.page607__speaker}>Jennifer:</span> <span className={styles.isSecond}>Hello! I’m Jennifer.</span></p>
              <p><span className={styles.page607__speaker}>Mark:</span> <span>Mark. Nice to meet you.</span></p>
              <p><span className={styles.page607__speaker}>Jennifer:</span> <span className={styles.isSecond}>Nice meeting you too, Mark.</span></p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pagina607;
