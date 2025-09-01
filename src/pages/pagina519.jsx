import React, { useEffect } from 'react';
import styles from './pagina519.module.css';

import pagina519imagem1 from '../assets/images/dialoguespagina16_imagem1.gif';
import pagina519imagem2 from '../assets/images/dialoguespagina16_imagem2.gif';
// import pagina519imagem3 from '../assets/images/dialoguespagina16_imagem3.gif'; errada
// import pagina519imagem4 from '../assets/images/dialoguespagina16_imagem4.gif'; errada
// import pagina519imagem5 from '../assets/images/dialoguespagina16_imagem5.gif'; faltando

const Pagina519 = ({ onValidar }) => {
  useEffect(() => {
    if (onValidar) onValidar(true);
  }, [onValidar]);

  return (
    <div className={styles.page__container}>
      <header className={styles.page__header}>
        <h1 className={styles.page__title}>Dialogues</h1>
        <h2 className={styles.page__subtitle}>Real-life Conversation</h2>
      </header>

      <main className={styles.rows}>
        {/* 1 - imagem à esquerda */}
        <section className={styles.row}>
          <img src={pagina519imagem1} alt="Interviewer and candidate" className={styles.row__image} />
          <div className={styles.box}>
            <h3 className={styles.rowTitle}>Interviewer and candidate</h3>
            <p className={styles.lineA}>
              <strong className={styles.nameA}>Lia:</strong> Can you tell me about your current job?
            </p>
            <p className={styles.lineB}>
              <strong className={styles.nameB}>Amanda:</strong> Of course. Currently, I’m working as a marketing
              coordinator for a tech company.
            </p>
          </div>
        </section>

        {/* 2 - imagem à direita */}
        <section className={`${styles.row} ${styles.rowReverse}`}>
          <div className={styles.box}>
            <h3 className={styles.rowTitle}>Roommates discussing chores</h3>
            <p className={styles.lineA}>
              <strong className={styles.nameA}>Noah:</strong> What are you doing?
            </p>
            <p className={styles.lineB}>
              <strong className={styles.nameB}>Carol:</strong> I’m finishing up some laundry right now.
            </p>
          </div>
          <img src={pagina519imagem2} alt="Roommates discussing chores" className={styles.row__image} />
        </section>

        {/* 3 - imagem à esquerda */}
        <section className={styles.row}>
          <img src="" alt="Sibling talking about plans" className={styles.row__image} />
          <div className={styles.box}>
            <h3 className={styles.rowTitle}>Sibling talking about plans</h3>
            <p className={styles.lineA}>
              <strong className={styles.nameA}>Hillary:</strong> What are you and Tom up to this evening?
            </p>
            <p className={styles.lineB}>
              <strong className={styles.nameB}>Ezekiel:</strong> We’re going to the movies. We’re catching the latest
              superhero film.
            </p>
          </div>
        </section>

        {/* 4 - imagem à direita */}
        <section className={`${styles.row} ${styles.rowReverse}`}>
          <div className={styles.box}>
            <h3 className={styles.rowTitle}>Friends talking about a fitness routine</h3>
            <p className={styles.lineA}>
              <strong className={styles.nameA}>Adam:</strong> How are you staying fit these days?
            </p>
            <p className={styles.lineB}>
              <strong className={styles.nameB}>Melissa:</strong> I’m going to the gym regularly and also taking yoga
              classes twice a week.
            </p>
          </div>
          <img src="" alt="Friends talking about a fitness routine" className={styles.row__image} />
        </section>

        {/* 5 - imagem à esquerda */}
        <section className={styles.row}>
          <img src="" alt="Shopping buddies at a mall" className={styles.row__image} />
          <div className={styles.box}>
            <h3 className={styles.rowTitle}>Shopping buddies at a mall</h3>
            <p className={styles.lineA}>
              <strong className={styles.nameA}>Kayky:</strong> What are you looking for?
            </p>
            <p className={styles.lineB}>
              <strong className={styles.nameB}>Mirelly:</strong> I’m browsing for a new pair of shoes. I’m thinking
              about getting some comfortable sneakers.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pagina519;
