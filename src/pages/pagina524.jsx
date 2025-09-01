import React, { useEffect } from 'react';
import styles from './pagina524.module.css';

import pagina524imagem1 from '../assets/images/dialoguespagina21_imagem1.gif';
//import pagina524imagem2 from '../assets/images/dialoguespagina21_imagem2.gif'; Faltando

const Pagina524 = ({ onValidar }) => {
  useEffect(() => { if (onValidar) onValidar(true); }, [onValidar]);

  return (
    <div className={styles.page__container}>
      <header className={styles.page__header}>
        <h1 className={styles.page__title}>Dialogues</h1>
        <h2 className={styles.page__subtitle}>Real-life Conversation</h2>
      </header>

      <main className={styles.rows}>
        {/* 1 — imagem à esquerda */}
        <section className={styles.row}>
          <img src={pagina524imagem1} alt="Ride-Sharing" className={styles.row__image} />
          <div className={styles.box}>
            <h3 className={styles.rowTitle}>Ride-Sharing</h3>
            <p className={styles.lineA}>
              <strong className={styles.nameA}>A:</strong> How do you usually get around the city?
            </p>
            <p className={styles.lineB}>
              <strong className={styles.nameB}>B:</strong> I use ride-sharing apps most of the time.
              It's convenient when I don't feel like driving myself.
            </p>
            <p className={styles.lineA}>
              <strong className={styles.nameA}>A:</strong> That's cool! I've heard they're pretty efficient.
            </p>
          </div>
        </section>

        {/* 2 — imagem à direita */}
        <section className={`${styles.row} ${styles.rowReverse}`}>
          <div className={styles.box}>
            <h3 className={styles.rowTitle}>Scooter/Motorbike</h3>
            <p className={styles.lineA}>
              <strong className={styles.nameA}>A:</strong> Do you own a car?
            </p>
            <p className={styles.lineB}>
              <strong className={styles.nameB}>B:</strong> No, I prefer riding my scooter. It's quicker
              to maneuver through traffic and find parking.
            </p>
            <p className={styles.lineA}>
              <strong className={styles.nameA}>A:</strong> That sounds fun! I've always been a bit
              nervous about riding a scooter.
            </p>
          </div>
          <img src="" alt="Scooter or motorbike" className={styles.row__image} />
        </section>
      </main>
    </div>
  );
};

export default Pagina524;
