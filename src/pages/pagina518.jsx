import React, { useEffect } from 'react';
import styles from './pagina518.module.css';

import pagina518imagem1 from '../assets/images/dialoguespagina15_imagem1.gif';
import pagina518imagem2 from '../assets/images/dialoguespagina15_imagem2.gif';

const Pagina518 = ({ onValidar }) => {
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
        {/* ROW 1 — imagem à direita */}
        <section className={`${styles.row} ${styles.rowReverse}`}>
          <div className={styles.box}>
            <p className={styles.lineA}>
              <strong className={styles.nameA}>Susan:</strong> How old is your dad?
            </p>
            <p className={styles.translationA}>Quantos anos tem teu (seu) pai?</p>

            <p className={styles.lineB}>
              <strong className={styles.nameB}>Emily:</strong> He is 45 years old.
            </p>
            <p className={styles.translationB}>Ele tem 45 anos.</p>
          </div>
          <img src={pagina518imagem1} alt="Conversation in the living room" className={styles.row__image} />
        </section>

        {/* ROW 2 — imagem à esquerda */}
        <section className={styles.row}>
          <img src={pagina518imagem2} alt="Band playing music" className={styles.row__image} />
          <div className={styles.box}>
            <p className={styles.lineA}>
              <strong className={styles.nameA}>Victoria:</strong> You guys are amazing musicians!
            </p>
            <p className={styles.translationA}>Vocês são músicos incríveis!</p>

            <p className={styles.lineB}>
              <strong className={styles.nameB}>Mathew:</strong> Thank you! We practice a lot.
            </p>
            <p className={styles.translationB}>Obrigado! (Nós) praticamos muito.</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pagina518;
