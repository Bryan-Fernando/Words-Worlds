import React, { useEffect } from 'react';
import styles from './pagina517.module.css';

import pagina517imagem1 from '../assets/images/dialoguespagina14_imagem1.gif';
import pagina517imagem2 from '../assets/images/dialoguespagina14_imagem2.gif';
import pagina517imagem3 from '../assets/images/dialoguespagina14_imagem3.gif';

const Pagina517 = ({ onValidar }) => {
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
        {/* ROW 1 - imagem à esquerda */}
        <section className={styles.row}>
          <img src={pagina517imagem1} alt="Driving to dinner" className={styles.row__image} />
          <div className={styles.box}>
            <p className={styles.lineA}>
              <strong className={styles.nameA}>Susan:</strong> Where are we going for dinner?
            </p>
            <p className={styles.translationA}>Onde (nós) vamos jantar?</p>

            <p className={styles.lineB}>
              <strong className={styles.nameB}>John:</strong> We’re going to a Mexican restaurant.
            </p>
            <p className={styles.translationB}>(Nós) Vamos para um restaurante mexicano.</p>

            <p className={styles.lineA}>
              <strong className={styles.nameA}>Susan:</strong> Ok. Sounds good.
            </p>
            <p className={styles.translationA}>Ok. Parece bom.</p>
          </div>
        </section>

        {/* ROW 2 - imagem à direita */}
        <section className={`${styles.row} ${styles.rowReverse}`}>
          <div className={styles.box}>
            <p className={styles.lineA}>
              <strong className={styles.nameA}>Antony:</strong> Are Pamela and Paul coming to the party tonight?
            </p>
            <p className={styles.translationA}>Pam e Paul vêm à festa hoje à noite?</p>

            <p className={styles.lineB}>
              <strong className={styles.nameB}>Samuel:</strong> Yes, they will be here.
            </p>
            <p className={styles.translationB}>Sim, eles estarão aqui.</p>
          </div>
          <img src={pagina517imagem2} alt="Party tonight" className={styles.row__image} />
        </section>

        {/* ROW 3 - imagem à esquerda */}
        <section className={styles.row}>
          <img src={pagina517imagem3} alt="Talking about mom's job" className={styles.row__image} />
          <div className={styles.box}>
            <p className={styles.lineA}>
              <strong className={styles.nameA}>Victoria:</strong> What does your mom do?
            </p>
            <p className={styles.translationA}>O que tua (sua) mãe faz?</p>

            <p className={styles.lineB}>
              <strong className={styles.nameB}>Rachel:</strong> She is a chef at an Italian restaurant.
            </p>
            <p className={styles.translationB}>Ela é chef de um restaurante italiano.</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pagina517;
