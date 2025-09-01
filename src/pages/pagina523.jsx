import React, { useEffect } from 'react';
import styles from './pagina523.module.css';

//import pagina523imagem1 from '../assets/images/dialoguespagina20_imagem1.gif'; Faltando
//import pagina523imagem2 from '../assets/images/dialoguespagina20_imagem2.gif'; Faltando
import pagina523imagem3 from '../assets/images/dialoguespagina20_imagem3.gif';
//import pagina523imagem4 from '../assets/images/dialoguespagina20_imagem4.gif'; Faltando

const Pagina523 = ({ onValidar }) => {
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
          <img src="" alt="Taking the Bus" className={styles.row__image} />
          <div className={styles.box}>
            <h3 className={styles.rowTitle}>Taking the Bus</h3>
            <p className={styles.lineA}><strong className={styles.nameA}>A:</strong> How do you usually get to work?</p>
            <p className={styles.lineB}><strong className={styles.nameB}>B:</strong> I take the bus. It's convenient, and the stop is just around the corner from my place. What about you?</p>
            <p className={styles.lineA}><strong className={styles.nameA}>A:</strong> I drive. It’s a bit faster, but parking is always a hassle.</p>
          </div>
        </section>

        {/* 2 — imagem à direita */}
        <section className={`${styles.row} ${styles.rowReverse}`}>
          <div className={styles.box}>
            <h3 className={styles.rowTitle}>Cycling</h3>
            <p className={styles.lineA}><strong className={styles.nameA}>A:</strong> Do you drive to school every day?</p>
            <p className={styles.lineB}><strong className={styles.nameB}>B:</strong> Nah, I prefer cycling. It's great exercise, plus I don't have to worry about parking or traffic.</p>
            <p className={styles.lineA}><strong className={styles.nameA}>A:</strong> That's awesome! I wish I could do that, but my school is too far.</p>
          </div>
          <img src="" alt="Cycling" className={styles.row__image} />
        </section>

        {/* 3 — imagem à esquerda */}
        <section className={styles.row}>
          <img src={pagina523imagem3} alt="Walking" className={styles.row__image} />
          <div className={styles.box}>
            <h3 className={styles.rowTitle}>Walking</h3>
            <p className={styles.lineA}><strong className={styles.nameA}>A:</strong> How far is your workplace from here?</p>
            <p className={styles.lineB}><strong className={styles.nameB}>B:</strong> It's not too far, just a 15-minute walk. I find it relaxing, especially in the morning.</p>
            <p className={styles.lineA}><strong className={styles.nameA}>A:</strong> That sounds nice. I wish mine were within walking distance.</p>
          </div>
        </section>

        {/* 4 — imagem à direita */}
        <section className={`${styles.row} ${styles.rowReverse}`}>
          <div className={styles.box}>
            <h3 className={styles.rowTitle}>Train Commute</h3>
            <p className={styles.lineA}><strong className={styles.nameA}>A:</strong> What's your daily commute like?</p>
            <p className={styles.lineB}><strong className={styles.nameB}>B:</strong> I take the train. It's a bit crowded during rush hour, but it's reliable and gets me to work on time.</p>
            <p className={styles.lineA}><strong className={styles.nameA}>A:</strong> Trains are so convenient, especially for longer distances.</p>
          </div>
          <img src="" alt="Train Commute" className={styles.row__image} />
        </section>

      </main>
    </div>
  );
};

export default Pagina523;
