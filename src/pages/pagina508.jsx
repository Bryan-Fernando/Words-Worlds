import React, { useEffect } from 'react';
import styles from './pagina508.module.css';

import pagina508imagem1 from '../assets/images/dialoguespagina1_imagem5.gif';
import pagina508imagem2 from '../assets/images/dialoguespagina5_imagem2.gif';
import pagina508imagem3 from '../assets/images/dialoguespagina5_imagem3.gif';
import pagina508imagem4 from '../assets/images/dialoguespagina5_imagem4.gif';

const Pagina508 = ({ onValidar }) => {
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
          <img src={pagina508imagem1} alt="Making Weekend Plans" className={styles.card__image} />
          <h3 className={styles.card__title}>Making Weekend Plans</h3>

          <div className={styles.dialogue}>
            <p>
              <strong className={styles.nameA}>Ana:</strong> Hey, do you have any plans for the weekend?
            </p>
            <p className={styles.textB}>
              <strong className={styles.nameB}>Mathew:</strong> Yes, I'm actually going to watch a
              movie on Saturday evening. How about you?
            </p>
            <p>
              <strong className={styles.nameA}>Ana:</strong> Sounds fun! I'm going to visit my
              parents. Maybe we can catch up later?
            </p>
          </div>
        </section>

        {/* Card 2 */}
        <section className={styles.card}>
          <img src={pagina508imagem2} alt="Career Plans" className={styles.card__image} />
          <h3 className={styles.card__title}>Career Plans</h3>

          <div className={styles.dialogue}>
            <p>
              <strong className={styles.nameA}>Thomas:</strong> What are your career plans for the
              next few years?
            </p>
            <p className={styles.textB}>
              <strong className={styles.nameB}>Susan:</strong> Well, I'm going to start my own
              business. I've been preparing for it for a while.
            </p>
            <p>
              <strong className={styles.nameA}>Thomas:</strong> That's ambitious! I'm going to
              further my education and pursue a master's degree.
            </p>
          </div>
        </section>

        {/* Card 3 */}
        <section className={styles.card}>
          <img src={pagina508imagem3} alt="Travel Plans" className={styles.card__image} />
          <h3 className={styles.card__title}>Travel Plans</h3>

          <div className={styles.dialogue}>
            <p>
              <strong className={styles.nameA}>Karen:</strong> Have you thought about your summer
              vacation yet?
            </p>
            <p className={styles.textB}>
              <strong className={styles.nameB}>Sarah:</strong> Absolutely, I'm going to travel to
              Thailand with my family. We're all excited!
            </p>
            <p>
              <strong className={styles.nameA}>Karen:</strong> Wow, that sounds amazing. I'm going
              to visit some national parks and go.
            </p>
          </div>
        </section>

        {/* Card 4 */}
        <section className={styles.card}>
          <img src={pagina508imagem4} alt="Moving to a New City" className={styles.card__image} />
          <h3 className={styles.card__title}>Moving to a New City</h3>

          <div className={styles.dialogue}>
            <p>
              <strong className={styles.nameA}>Charles:</strong> I heard you're planning to move to
              a new city. Is that true?
            </p>
            <p className={styles.textB}>
              <strong className={styles.nameB}>James:</strong> Yes, you're right. I'm going to move
              to New York for a job opportunity.
            </p>
            <p>
              <strong className={styles.nameA}>Charles:</strong> That's a big step! I'm going to
              help you with the moving process if you need.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pagina508;
