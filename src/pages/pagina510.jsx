import React, { useEffect } from 'react';
import styles from './pagina510.module.css';

import pagina510imagem1 from '../assets/images/dialoguespagina7_imagem1.gif';
import pagina510imagem2 from '../assets/images/dialoguespagina7_imagem2.gif';

const Pagina510 = ({ onValidar }) => {
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
          <img src={pagina510imagem1} alt="Cooking Plans" className={styles.card__image} />
          <h3 className={styles.card__title}>Cooking Plans</h3>

          <div className={styles.dialogue}>
            <p>
              <strong className={styles.nameA}>Emily:</strong> What’s on the menu for tonight? It
              smells delicious!
            </p>
            <p className={styles.textB}>
              <strong className={styles.nameB}>Anthony:</strong> Thanks! I’m going to make a
              special homemade lasagna for dinner.
            </p>
            <p>
              <strong className={styles.nameA}>Emily:</strong> I can’t wait to taste it. I’m going
              to try out a new dessert recipe for dessert.
            </p>
          </div>
        </section>

        {/* Card 2 */}
        <section className={styles.card}>
          <img src={pagina510imagem2} alt="Learning a Musical Instrument" className={styles.card__image} />
          <h3 className={styles.card__title}>Learning a Musical Instrument</h3>

          <div className={styles.dialogue}>
            <p>
              <strong className={styles.nameA}>Brian:</strong> You’ve got a guitar? Are you
              planning to learn how to play it?
            </p>
            <p className={styles.textB}>
              <strong className={styles.nameB}>Laura:</strong> Absolutely! I’m going to take guitar
              lessons and hopefully play some songs soon.
            </p>
            <p>
              <strong className={styles.nameA}>Brian:</strong> That’s exciting! I’m going to dust
              off my old keyboard and start practicing again.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pagina510;
