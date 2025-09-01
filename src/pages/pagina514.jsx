import React, { useEffect } from 'react';
import styles from './pagina514.module.css';

import pagina514imagem1 from '../assets/images/dialoguespagina11_imagem1.gif';
//import pagina514imagem2 from '../assets/images/dialoguespagina11_imagem2.gif'; faltando
//import pagina514imagem3 from '../assets/images/dialoguespagina11_imagem3.gif'; faltando
//import pagina514imagem4 from '../assets/images/dialoguespagina11_imagem4.gif'; faltando

const Pagina514 = ({ onValidar }) => {
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
        {/* 1 - Seeking Help */}
        <section className={styles.card}>
          <img src={pagina514imagem1} alt="Seeking Help" className={styles.card__image} />
          <h3 className={styles.card__title}>Seeking Help</h3>
          <div className={styles.dialogue}>
            <p>
              <strong className={styles.nameA}>Mason:</strong> I can't seem to find my keys anywhere, Ava.
            </p>
            <p className={styles.textB}>
              <strong className={styles.nameB}>Ava:</strong> Could they be on the kitchen counter? I saw them there earlier.
            </p>
          </div>
        </section>

        {/* 2 - Making a Polite Request */}
        <section className={styles.card}>
          <img src="" alt="Making a Polite Request" className={styles.card__image} />
          <h3 className={styles.card__title}>Making a Polite Request</h3>
          <div className={styles.dialogue}>
            <p>
              <strong className={styles.nameA}>Chloe:</strong> I'm running a bit late for the meeting, Justin. Could you save me a seat?
            </p>
            <p className={styles.textB}>
              <strong className={styles.nameB}>Justin:</strong> Of course, Chloe. I can reserve a seat for you.
            </p>
          </div>
        </section>

        {/* 3 - Offering a Suggestion */}
        <section className={styles.card}>
          <img src="" alt="Offering a Suggestion" className={styles.card__image} />
          <h3 className={styles.card__title}>Offering a Suggestion</h3>
          <div className={styles.dialogue}>
            <p>
              <strong className={styles.nameA}>Noah:</strong> I don't know what to get for my mom's birthday, Lily.
            </p>
            <p className={styles.textB}>
              <strong className={styles.nameB}>Lily:</strong> You could consider buying her a nice bouquet of flowers, Noah. Moms usually love that.
            </p>
          </div>
        </section>

        {/* 4 - Responding to a Suggestion */}
        <section className={styles.card}>
          <img src="" alt="Responding to a Suggestion" className={styles.card__image} />
          <h3 className={styles.card__title}>Responding to a Suggestion</h3>
          <div className={styles.dialogue}>
            <p>
              <strong className={styles.nameA}>Emma:</strong> I'm not sure where to go on vacation this year,
            </p>
            <p className={styles.textB}>
              <strong className={styles.nameB}>Lucas:</strong> You could explore a tropical beach destination, Emma. It's always a great way to unwind.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pagina514;
