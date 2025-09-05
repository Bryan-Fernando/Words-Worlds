import React, { useEffect } from "react";
import styles from "./pagina606.module.css";

const Pagina606 = ({ onValidar }) => {
  useEffect(() => { onValidar?.(true); }, [onValidar]);

  return (
    <div className={styles.page606__container}>
      <header>
        <h1 className={styles.page606__title}>Real Life Dialogue</h1>
      </header>

      <main className={styles.page606__grid}>
        {/* Colors and Shapes */}
        <section className={styles.page606__card}>
          <div className={styles.page606__chip}>Colors and Shapes</div>
          <div className={styles.page606__content}>
            <div className={styles.page606__img} />
            <div className={styles.page606__dialogue}>
              <p><span className={styles.page606__speaker}>Emma:</span> <span>Look at this red apple, Tommy!</span></p>
              <p><span className={styles.page606__speaker}>Tommy:</span> <span className={styles.isSecond}>It’s so bright. And what shape is it?</span></p>
              <p><span className={styles.page606__speaker}>Emma:</span> <span>It’s round like a ball. What about this blue sky?</span></p>
              <p><span className={styles.page606__speaker}>Tommy:</span> <span className={styles.isSecond}>It’s big and blue. And the sun is yellow.</span></p>
              <p><span className={styles.page606__speaker}>Emma:</span> <span>Yes, it is. Colors and shapes are everywhere!</span></p>
            </div>
          </div>
        </section>

        {/* The Weather */}
        <section className={styles.page606__card}>
          <div className={styles.page606__chip}>The Weather</div>
          <div className={styles.page606__content}>
            <div className={styles.page606__img} />
            <div className={styles.page606__dialogue}>
              <p><span className={styles.page606__speaker}>Lily:</span> <span>Mom, what’s the weather like today?</span></p>
              <p><span className={styles.page606__speaker}>Mom:</span> <span className={styles.isSecond}>It’s a bit cloudy, Lily.</span></p>
              <p><span className={styles.page606__speaker}>Lily:</span> <span>Will it rain?</span></p>
              <p><span className={styles.page606__speaker}>Mom:</span> <span className={styles.isSecond}>It might later, so we’ll take an umbrella when we go out.</span></p>
              <p><span className={styles.page606__speaker}>Lily:</span> <span>Okay, Mom. Let’s be prepared.</span></p>
            </div>
          </div>
        </section>

        {/* Greetings and Introductions */}
        <section className={styles.page606__card}>
          <div className={styles.page606__chip}>Greetings and Introductions</div>
          <div className={styles.page606__content}>
            <div className={styles.page606__img} />
            <div className={styles.page606__dialogue}>
              <p><span className={styles.page606__speaker}>Sarah:</span> <span>Hello, my name is Sarah. What’s your name?</span></p>
              <p><span className={styles.page606__speaker}>Emily:</span> <span className={styles.isSecond}>Hi, Sarah. I’m Emily. Nice to meet you!</span></p>
              <p><span className={styles.page606__speaker}>Sarah:</span> <span>Nice to meet you too, Emily. How’s your day?</span></p>
              <p><span className={styles.page606__speaker}>Emily:</span> <span className={styles.isSecond}>It’s good. How about yours, Sarah?</span></p>
              <p><span className={styles.page606__speaker}>Sarah:</span> <span>My day is going well, thank you.</span></p>
            </div>
          </div>
        </section>

        {/* At the Park */}
        <section className={styles.page606__card}>
          <div className={styles.page606__chip}>At the Park</div>
          <div className={styles.page606__content}>
            <div className={styles.page606__img} />
            <div className={styles.page606__dialogue}>
              <p><span className={styles.page606__speaker}>Ben:</span> <span>Let’s go to the park, Amy!</span></p>
              <p><span className={styles.page606__speaker}>Amy:</span> <span className={styles.isSecond}>Sure, Ben. What can we do there?</span></p>
              <p><span className={styles.page606__speaker}>Ben:</span> <span>We can swing on the swings and slide down the slide.</span></p>
              <p><span className={styles.page606__speaker}>Amy:</span> <span className={styles.isSecond}>That sounds like fun! Can we have a picnic too?</span></p>
              <p><span className={styles.page606__speaker}>Ben:</span> <span>Of course, Amy. We can run on the grass and eat sandwiches.</span></p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pagina606;
