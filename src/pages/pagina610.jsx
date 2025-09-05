import React, { useEffect } from "react";
import styles from "./pagina610.module.css";

const Pagina610 = ({ onValidar }) => {
  useEffect(() => { onValidar?.(true); }, [onValidar]);

  return (
    <div className={styles.page610__container}>
      <header>
        <h1 className={styles.page610__title}>Real Life Dialogue</h1>
      </header>

      <main className={styles.page610__grid}>
        {/* Talking to a Fellow Attendee at an Event */}
        <section className={styles.page610__card}>
          <div className={styles.page610__chip}>
            Talking to a Fellow Attendee at an Event
          </div>
          <div className={styles.page610__content}>
            <div className={styles.page610__img} />
            <div className={styles.page610__dialogue}>
              <p><span className={styles.page610__speaker}>Liam:</span> <span>Hello!</span></p>
              <p><span className={styles.page610__speaker}>Mia:</span> <span className={styles.isSecond}>Hi, I’m Mia.</span></p>
              <p><span className={styles.page610__speaker}>Liam:</span> <span>Liam. First time at one of these.</span></p>
              <p><span className={styles.page610__speaker}>Mia:</span> <span className={styles.isSecond}>Don’t worry, it’s fun!</span></p>
            </div>
          </div>
        </section>

        {/* Greeting a Friend's Sibling */}
        <section className={styles.page610__card}>
          <div className={styles.page610__chip}>Greeting a Friend&apos;s Sibling</div>
          <div className={styles.page610__content}>
            <div className={styles.page610__img} />
            <div className={styles.page610__dialogue}>
              <p><span className={styles.page610__speaker}>Emma:</span> <span>Hey!</span></p>
              <p><span className={styles.page610__speaker}>Benjamin:</span> <span className={styles.isSecond}>Oh, hey! I’m Benjamin.</span></p>
              <p><span className={styles.page610__speaker}>Emma:</span> <span>I’m Emma, a friend of Lisa’s.</span></p>
              <p><span className={styles.page610__speaker}>Benjamin:</span> <span className={styles.isSecond}>Nice to meet Lisa’s friends.</span></p>
            </div>
          </div>
        </section>

        {/* Meeting a Tourist */}
        <section className={styles.page610__card}>
          <div className={styles.page610__chip}>Meeting a Tourist</div>
          <div className={styles.page610__content}>
            <div className={styles.page610__img} />
            <div className={styles.page610__dialogue}>
              <p><span className={styles.page610__speaker}>Alex:</span> <span>Hi!</span></p>
              <p><span className={styles.page610__speaker}>William:</span> <span className={styles.isSecond}>Hello. I’m visiting from out of town.</span></p>
              <p><span className={styles.page610__speaker}>Alex:</span> <span>Welcome! I’m Alex, a local.</span></p>
              <p><span className={styles.page610__speaker}>William:</span> <span className={styles.isSecond}>Thanks, Alex. Any recommendations?</span></p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pagina610;
