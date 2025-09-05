import React, { useEffect } from "react";
import styles from "./pagina609.module.css";

const Pagina609 = ({ onValidar }) => {
  useEffect(() => { onValidar?.(true); }, [onValidar]);

  return (
    <div className={styles.page609__container}>
      <header>
        <h1 className={styles.page609__title}>Real Life Dialogue</h1>
      </header>

      <main className={styles.page609__grid}>
        {/* Talking to a Store Clerk */}
        <section className={styles.page609__card}>
          <div className={styles.page609__chip}>Talking to a Store Clerk</div>
          <div className={styles.page609__content}>
            <div className={styles.page609__img} />
            <div className={styles.page609__dialogue}>
              <p><span className={styles.page609__speaker}>Billy:</span> <span>Hello!</span></p>
              <p><span className={styles.page609__speaker}>Samuel:</span> <span className={styles.isSecond}>Hi there! How can I help you?</span></p>
              <p><span className={styles.page609__speaker}>Billy:</span> <span>I’m looking for a birthday gift.</span></p>
              <p><span className={styles.page609__speaker}>Samuel:</span> <span className={styles.isSecond}>Sure thing. Whose birthday is it?</span></p>
              <p><span className={styles.page609__speaker}>Billy:</span> <span>It’s my sister’s. She’s turning 25.</span></p>
            </div>
          </div>
        </section>

        {/* Greeting a Friend's Friend */}
        <section className={styles.page609__card}>
          <div className={styles.page609__chip}>Greeting a Friend&apos;s Friend</div>
          <div className={styles.page609__content}>
            <div className={styles.page609__img} />
            <div className={styles.page609__dialogue}>
              <p><span className={styles.page609__speaker}>Daniel:</span> <span>Hey!</span></p>
              <p><span className={styles.page609__speaker}>James:</span> <span className={styles.isSecond}>Hi, I’m James.</span></p>
              <p><span className={styles.page609__speaker}>Daniel:</span> <span>I’m Daniel. A friend of Sarah’s.</span></p>
              <p><span className={styles.page609__speaker}>James:</span> <span className={styles.isSecond}>Nice to meet you, James.</span></p>
            </div>
          </div>
        </section>

        {/* Starting a Conversation at a Park */}
        <section className={styles.page609__card}>
          <div className={styles.page609__chip}>Starting a Conversation at a Park</div>
          <div className={styles.page609__content}>
            <div className={styles.page609__img} />
            <div className={styles.page609__dialogue}>
              <p><span className={styles.page609__speaker}>Charlotte:</span> <span>Hello!</span></p>
              <p><span className={styles.page609__speaker}>Michael:</span> <span className={styles.isSecond}>Hi. Lovely day, isn’t it?</span></p>
              <p><span className={styles.page609__speaker}>Charlotte:</span> <span>Definitely. I’m Charlotte, by the way.</span></p>
              <p><span className={styles.page609__speaker}>Michael:</span> <span className={styles.isSecond}>I’m Michael, but you can call me Mike.</span></p>
            </div>
          </div>
        </section>

        {/* Meeting a Classmate for a Group Project */}
        <section className={styles.page609__card}>
          <div className={styles.page609__chip}>Meeting a Classmate for a Group Project</div>
          <div className={styles.page609__content}>
            <div className={styles.page609__img} />
            <div className={styles.page609__dialogue}>
              <p><span className={styles.page609__speaker}>Ethan:</span> <span>Hey!</span></p>
              <p><span className={styles.page609__speaker}>Chris:</span> <span className={styles.isSecond}>Hi there. Are you in our group?</span></p>
              <p><span className={styles.page609__speaker}>Ethan:</span> <span>Yes, I’m Alex.</span></p>
              <p><span className={styles.page609__speaker}>Chris:</span> <span className={styles.isSecond}>Cool. I’m Chris. Let’s get to class.</span></p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pagina609;
