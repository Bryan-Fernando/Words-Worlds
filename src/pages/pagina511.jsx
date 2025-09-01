import React, { useEffect } from 'react';
import styles from './pagina511.module.css';


import pagina511imagem1 from '../assets/images/dialoguespagina8_imagem1.gif';
import pagina511imagem2 from '../assets/images/dialoguespagina8_imagem2.gif';

const Pagina511 = ({ onValidar }) => {
  useEffect(() => {
    if (onValidar) onValidar(true);
  }, [onValidar]);

  return (
    <div className={styles.page__container}>
      <header className={styles.page__header}>
        <h1 className={styles.page__title}>Dialogues</h1>
        <h2 className={styles.page__subtitle}>Real-life Conversation</h2>
      </header>

      <main className={styles.page__grid}>
        {/* Card 1 */}
        <section className={styles.card}>
          <div className={styles.badge}>Talking about Science Experiments</div>
          <img src={pagina511imagem1} alt="Talking about Science Experiments" className={styles.card__image} />

          <div className={styles.dialogue}>
            <p className={`${styles.bubble} ${styles.bubbleA}`}>
              <strong>Joseph:</strong> Did you enjoy the science experiment today?
            </p>
            <p className={`${styles.bubble} ${styles.bubbleB}`}>
              <strong>Willian:</strong> Yeah, it was cool! Mixing colors to make new ones was fun.
            </p>
            <p className={`${styles.bubble} ${styles.bubbleA}`}>
              <strong>Joseph:</strong> I liked it too. What's your favorite science topic?
            </p>
            <p className={`${styles.bubble} ${styles.bubbleB}`}>
              <strong>Willian:</strong> I really like learning about animals and their habitats.
            </p>
            <p className={`${styles.bubble} ${styles.bubbleA}`}>
              <strong>Joseph:</strong> Me too! Next week, we're going to study the solar system.
            </p>
            <p className={`${styles.bubble} ${styles.bubbleB}`}>
              <strong>Willian:</strong> Awesome, I can't wait.
            </p>
          </div>
        </section>

        {/* Card 2 */}
        <section className={styles.card}>
          <div className={styles.badge}>Planning for History Project</div>
          <img src={pagina511imagem2} alt="Planning for History Project" className={styles.card__image} />

          <div className={styles.dialogue}>
            <p className={`${styles.bubble} ${styles.bubbleA}`}>
              <strong>Karen:</strong> Have you heard about the history project?
            </p>
            <p className={`${styles.bubble} ${styles.bubbleB}`}>
              <strong>Lisa:</strong> Yes, we have to research a famous person from the past.
            </p>
            <p className={`${styles.bubble} ${styles.bubbleA}`}>
              <strong>Karen:</strong> I'm thinking of choosing Leonardo da Vinci. How about you?
            </p>
            <p className={`${styles.bubble} ${styles.bubbleB}`}>
              <strong>Lisa:</strong> I'm interested in Amelia Earhart. Let's share our findings!
            </p>
            <p className={`${styles.bubble} ${styles.bubbleA}`}>
              <strong>Karen:</strong> That's a great idea. We can make a presentation together.
            </p>
            <p className={`${styles.bubble} ${styles.bubbleB}`}>
              <strong>Lisa:</strong> Perfect, let's start gathering information.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pagina511;
