import React, { useEffect } from "react";
import styles from "./pagina605.module.css";

const Pagina605 = ({ onValidar }) => {
  useEffect(() => { onValidar?.(true); }, [onValidar]);

  return (
    <div className={styles.page605__container}>
      <header>
        <h1 className={styles.page605__title}>Real Life Dialogue</h1>
      </header>

      <main className={styles.page605__grid}>
        {/* FAMILY */}
        <section className={styles.page605__card}>
          <div className={styles.page605__chip}>Family</div>
          <div className={styles.page605__content}>
            <div className={styles.page605__img} />
            <div className={styles.page605__dialogue}>
              <p><span className={styles.page605__speaker}>Lucy:</span> <span>Hi, Mom! What are you doing?</span></p>
              <p><span className={styles.page605__speaker}>Mom:</span> <span className={styles.isSecond}>Hi, Lucy! I’m reading a book. How was your day at school?</span></p>
              <p><span className={styles.page605__speaker}>Lucy:</span> <span>It was good. I drew a picture in art class.</span></p>
              <p><span className={styles.page605__speaker}>Mom:</span> <span className={styles.isSecond}>That sounds fun. And where’s Tim?</span></p>
              <p><span className={styles.page605__speaker}>Lucy:</span> <span>He’s in the backyard playing soccer with Dad.</span></p>
              <p><span className={styles.page605__speaker}>Mom:</span> <span className={styles.isSecond}>Great! Let’s all have dinner together when they finish.</span></p>
            </div>
          </div>
        </section>

        {/* ANIMALS */}
        <section className={styles.page605__card}>
          <div className={styles.page605__chip}>Animals</div>
          <div className={styles.page605__content}>
            <div className={styles.page605__img} />
            <div className={styles.page605__dialogue}>
              <p><span className={styles.page605__speaker}>Tom:</span> <span>Look, Dad! There’s a big elephant near the lake.</span></p>
              <p><span className={styles.page605__speaker}>Dad:</span> <span className={styles.isSecond}>Yes, Tom, elephants are amazing animals.</span></p>
              <p><span className={styles.page605__speaker}>Tom:</span> <span>What do they eat?</span></p>
              <p><span className={styles.page605__speaker}>Dad:</span> <span className={styles.isSecond}>They eat lots of hay and fruits. And see those tall giraffes over there?</span></p>
              <p><span className={styles.page605__speaker}>Tom:</span> <span>Wow! They have long necks.</span></p>
              <p><span className={styles.page605__speaker}>Dad:</span> <span className={styles.isSecond}>Yes, they do. Giraffes are the tallest animals in the world.</span></p>
            </div>
          </div>
        </section>

        {/* FOOD AND EATING */}
        <section className={styles.page605__card}>
          <div className={styles.page605__chip}>Food and Eating</div>
          <div className={styles.page605__content}>
            <div className={styles.page605__img} />
            <div className={styles.page605__dialogue}>
              <p><span className={styles.page605__speaker}>Sarah:</span> <span>What’s for breakfast today, Mom?</span></p>
              <p><span className={styles.page605__speaker}>Mom:</span> <span className={styles.isSecond}>We have cereal with milk and some toast with jam.</span></p>
              <p><span className={styles.page605__speaker}>Sarah:</span> <span>Yummy! I like toast with jam.</span></p>
              <p><span className={styles.page605__speaker}>Dad:</span> <span className={styles.isSecond}>Don’t forget to eat your banana for a healthy start.</span></p>
              <p><span className={styles.page605__speaker}>Sarah:</span> <span>Thanks, Dad! I love bananas.</span></p>
            </div>
          </div>
        </section>

        {/* MY DAILY ROUTINE */}
        <section className={styles.page605__card}>
          <div className={styles.page605__chip}>My Daily Routine</div>
          <div className={styles.page605__content}>
            <div className={styles.page605__img} />
            <div className={styles.page605__dialogue}>
              <p><span className={styles.page605__speaker}>Alex:</span> <span>Hi, Jenny! What’s your daily routine?</span></p>
              <p><span className={styles.page605__speaker}>Jenny:</span> <span className={styles.isSecond}>Well, I wake up, brush my teeth, and have breakfast.</span></p>
              <p><span className={styles.page605__speaker}>Alex:</span> <span>That’s like my routine! What do you do after school?</span></p>
              <p><span className={styles.page605__speaker}>Jenny:</span> <span className={styles.isSecond}>I do my homework, and then I play with my dog.</span></p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pagina605;
