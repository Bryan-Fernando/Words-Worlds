import React, { useEffect } from "react";
import styles from "./pagina619.module.css";

const Pagina619 = ({ onValidar }) => {
  useEffect(() => { onValidar?.(true); }, [onValidar]);

  return (
    <div className={styles.page619__container}>
      <header>
        <h1 className={styles.page619__title}>DIALOGUES</h1>
      </header>

      {/* Introducing Yourself */}
      <section className={styles.page619__section}>
        <div className={styles.page619__box}>
          <div className={styles.page619__boxTitle}>Introducing Yourself</div>

          <div className={styles.page619__dialogue}>
            <p>
              <span className={styles.page619__speaker}>A:</span>
              <span>Hi, I’m Maria. What’s your name?</span>
            </p>
            <p>
              <span className={styles.page619__speaker}>B:</span>
              <span className={styles.isSecond}>Hi Maria, I’m João. Nice to meet you.</span>
            </p>
            <p>
              <span className={styles.page619__speaker}>A:</span>
              <span>Nice to meet you too. Where are you from?</span>
            </p>
            <p>
              <span className={styles.page619__speaker}>B:</span>
              <span className={styles.isSecond}>I’m from São Paulo. How about you?</span>
            </p>
            <p>
              <span className={styles.page619__speaker}>A:</span>
              <span>I’m from Rio de Janeiro. Do you live here now?</span>
            </p>
            <p>
              <span className={styles.page619__speaker}>B:</span>
              <span className={styles.isSecond}>Yes, I moved here last year for work.</span>
            </p>
          </div>
        </div>

        {/* Espaço reservado para a imagem */}
        <div className={styles.page619__img} />
      </section>

      {/* At a Restaurant */}
      <section className={styles.page619__section}>
        <div className={styles.page619__box}>
          <div className={styles.page619__boxTitle}>At a Restaurant</div>

          <div className={styles.page619__dialogue}>
            <p>
              <span className={styles.page619__speaker}>Waiter:</span>
              <span>Good evening! Are you ready to order?</span>
            </p>
            <p>
              <span className={styles.page619__speaker}>Customer:</span>
              <span className={styles.isSecond}>Yes, I’ll have the grilled chicken, please.</span>
            </p>
            <p>
              <span className={styles.page619__speaker}>Waiter:</span>
              <span>Would you like a side of rice or fries?</span>
            </p>
            <p>
              <span className={styles.page619__speaker}>Customer:</span>
              <span className={styles.isSecond}>I’ll have rice, thank you.</span>
            </p>
            <p>
              <span className={styles.page619__speaker}>Waiter:</span>
              <span>Anything to drink?</span>
            </p>
            <p>
              <span className={styles.page619__speaker}>Customer:</span>
              <span className={styles.isSecond}>Just water, please.</span>
            </p>
          </div>
        </div>

        {/* Espaço reservado para a imagem */}
        <div className={styles.page619__img} />
      </section>
    </div>
  );
};

export default Pagina619;
