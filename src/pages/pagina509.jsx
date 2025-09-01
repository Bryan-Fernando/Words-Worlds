import React, { useEffect } from 'react';
import styles from './pagina509.module.css';

import pagina509imagem1 from '../assets/images/dialoguespagina6_imagem1.gif';
import pagina509imagem2 from '../assets/images/dialoguespagina6_imagem2.gif';
import pagina509imagem3 from '../assets/images/dialoguespagina6_imagem3.gif';
import pagina509imagem4 from '../assets/images/dialoguespagina6_imagem4.gif';

const Pagina509 = ({ onValidar }) => {
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
          <img src={pagina509imagem1} alt="Home Renovation Plans" className={styles.card__image} />
          <h3 className={styles.card__title}>Home Renovation Plans</h3>

          <div className={styles.dialogue}>
            <p>
              <strong className={styles.nameA}>Richard:</strong> Your house looks great! Did you
              just renovate it?
            </p>
            <p className={styles.textB}>
              <strong className={styles.nameB}>Linda:</strong> Thank you! Yes, we're going to
              renovate the entire place. It's been a long time coming.
            </p>
            <p>
              <strong className={styles.nameA}>Richard:</strong> The results are fantastic. I'm
              going to redecorate my living room next month.
            </p>
          </div>
        </section>

        {/* Card 2 */}
        <section className={styles.card}>
          <img src={pagina509imagem2} alt="Fitness Goals" className={styles.card__image} />
          <h3 className={styles.card__title}>Fitness Goals</h3>

          <div className={styles.dialogue}>
            <p>
              <strong className={styles.nameA}>Patricia:</strong> You've been hitting the gym a lot
              lately. What's your goal?
            </p>
            <p className={styles.textB}>
              <strong className={styles.nameB}>Michael:</strong> I'm going to participate in a
              marathon next year, so I'm training hard for it.
            </p>
            <p>
              <strong className={styles.nameA}>Patricia:</strong> That's impressive dedication! I'm
              going to start yoga classes to improve my flexibility.
            </p>
          </div>
        </section>

        {/* Card 3 */}
        <section className={styles.card}>
          <img src={pagina509imagem3} alt="Wedding Plans" className={styles.card__image} />
          <h3 className={styles.card__title}>Wedding Plans</h3>

          <div className={styles.dialogue}>
            <p>
              <strong className={styles.nameA}>Amanda:</strong> I heard you're engaged!
              Congratulations! Have you set a wedding date yet?
            </p>
            <p className={styles.textB}>
              <strong className={styles.nameB}>Andrew:</strong> Thank you! Yes, we're going to get
              married in October next year.
            </p>
            <p>
              <strong className={styles.nameA}>Amanda:</strong> That gives you plenty of time to
              plan. I'm going to help with the preparations if you need me.
            </p>
          </div>
        </section>

        {/* Card 4 */}
        <section className={styles.card}>
          <img src={pagina509imagem4} alt="Buying a New Car" className={styles.card__image} />
          <h3 className={styles.card__title}>Buying a New Car</h3>

          <div className={styles.dialogue}>
            <p>
              <strong className={styles.nameA}>Kenneth:</strong> Are you getting a new car?
            </p>
            <p className={styles.textB}>
              <strong className={styles.nameB}>Steven:</strong> Yes, I'm going to buy a new car for
              my birthday. This one's been giving me trouble.
            </p>
            <p>
              <strong className={styles.nameA}>Kenneth:</strong> Smart choice! I'm going to start
              saving up for a new car too.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pagina509;
