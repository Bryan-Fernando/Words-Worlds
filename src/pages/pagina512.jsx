import React, { useEffect } from 'react';
import styles from './pagina512.module.css';

import pagina512imagem1 from '../assets/images/dialoguespagina9_imagem1.gif';
//import pagina512imagem2 from '../assets/images/dialoguespagina9_imagem2.gif'; faltando

const Pagina512 = ({ onValidar }) => {
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
          <div className={styles.badge}>Talking about English Class</div>
          <img src={pagina512imagem1} alt="Talking about English Class" className={styles.card__image} />

          <div className={styles.dialogue}>
            <p className={`${styles.bubble} ${styles.bubbleA}`}>
              <strong>Sarah:</strong> Hi, do you like English class?
            </p>
            <p className={`${styles.bubble} ${styles.bubbleB}`}>
              <strong>Alex:</strong> Yes, I do! Learning new words is fun.
            </p>
            <p className={`${styles.bubble} ${styles.bubbleA}`}>
              <strong>Sarah:</strong> I agree. How about grammar? Is it easy for you?
            </p>
            <p className={`${styles.bubble} ${styles.bubbleB}`}>
              <strong>Alex:</strong> Not always, but our teacher explains it well.
            </p>
            <p className={`${styles.bubble} ${styles.bubbleA}`}>
              <strong>Sarah:</strong> That's good. What's your favorite activity in English?
            </p>
            <p className={`${styles.bubble} ${styles.bubbleB}`}>
              <strong>Alex:</strong> I like reading short stories. How about you?
            </p>
            <p className={`${styles.bubble} ${styles.bubbleA}`}>
              <strong>Sarah:</strong> I enjoy writing sentences. Maybe we can practice together sometime.
            </p>
            <p className={`${styles.bubble} ${styles.bubbleB}`}>
              <strong>Alex:</strong> Sure, that sounds like a plan!
            </p>
          </div>
        </section>

        {/* Card 2 */}
        <section className={styles.card}>
          <div className={styles.badge}>Discussing Math Homework</div>
          <img src="" alt="Discussing Math Homework" className={styles.card__image} />

          <div className={styles.dialogue}>
            <p className={`${styles.bubble} ${styles.bubbleA}`}>
              <strong>David:</strong> Hey, did you finish the math homework?
            </p>
            <p className={`${styles.bubble} ${styles.bubbleB}`}>
              <strong>Jennifer:</strong> Yes, I did. It was about addition and subtraction.
            </p>
            <p className={`${styles.bubble} ${styles.bubbleA}`}>
              <strong>David:</strong> Oh, those are easy for me. But division is a bit tricky.
            </p>
            <p className={`${styles.bubble} ${styles.bubbleB}`}>
              <strong>Jennifer:</strong> I can help you with that. Let's study together before the test.
            </p>
            <p className={`${styles.bubble} ${styles.bubbleA}`}>
              <strong>David:</strong> Thanks, that would be great! Math is more fun with friends.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pagina512;
