import React, { useEffect } from "react";
import styles from "./pagina620.module.css";

const Pagina620 = ({ onValidar }) => {
  useEffect(() => { onValidar?.(true); }, [onValidar]);

  return (
    <div className={styles.page620__container}>
      <header>
        <h1 className={styles.page620__title}>DIALOGUES</h1>
      </header>

      {/* Talking About Plans */}
      <section className={styles.page620__section}>
        <div className={styles.page620__box}>
          <div className={styles.page620__boxTitle}>Talking About Plans</div>

          <div className={styles.page620__dialogue}>
            <p><span className={styles.page620__speaker}>A:</span><span>What are you doing this weekend?</span></p>
            <p><span className={styles.page620__speaker}>B:</span><span className={styles.isSecond}>I’m going to visit my family in the countryside.</span></p>
            <p><span className={styles.page620__speaker}>A:</span><span>That sounds fun! How long will you stay?</span></p>
            <p><span className={styles.page620__speaker}>B:</span><span className={styles.isSecond}>I’ll stay for two days. How about you? Any plans?</span></p>
            <p><span className={styles.page620__speaker}>A:</span><span>I’m planning to go to the beach if the weather is good.</span></p>
          </div>
        </div>

        {/* Espaço reservado para a imagem */}
        <div className={styles.page620__img} />
      </section>

      {/* Making an Appointment */}
      <section className={styles.page620__section}>
        <div className={styles.page620__box}>
          <div className={styles.page620__boxTitle}>Making an Appointment</div>

          <div className={styles.page620__dialogue}>
            <p><span className={styles.page620__speaker}>Receptionist:</span><span>Good morning, Dr. Silva’s office. How can I help you?</span></p>
            <p><span className={styles.page620__speaker}>Patient:</span><span className={styles.isSecond}>Hi, I’d like to schedule an appointment, please.</span></p>
            <p><span className={styles.page620__speaker}>Receptionist:</span><span>Sure. When would you like to come in?</span></p>
            <p><span className={styles.page620__speaker}>Patient:</span><span className={styles.isSecond}>Is there anything available next Monday?</span></p>
            <p><span className={styles.page620__speaker}>Receptionist:</span><span>Let me check… Yes, we have a slot at 10 a.m. Does that work for you?</span></p>
            <p><span className={styles.page620__speaker}>Patient:</span><span className={styles.isSecond}>Yes, that’s perfect. Thank you!</span></p>
          </div>
        </div>

        {/* Espaço reservado para a imagem */}
        <div className={styles.page620__img} />
      </section>
    </div>
  );
};

export default Pagina620;
