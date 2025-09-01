import React, { useEffect } from 'react';
import styles from './pagina522.module.css';

//import pagina522imagem1 from '../assets/images/dialoguespagina19_imagem1.gif'; Faltando
//import pagina522imagem2 from '../assets/images/dialoguespagina19_imagem2.gif'; Faltando
import pagina522imagem3 from '../assets/images/dialoguespagina19_imagem3.gif';
//import pagina522imagem4 from '../assets/images/dialoguespagina19_imagem4.gif'; Faltando
//import pagina522imagem5 from '../assets/images/dialoguespagina19_imagem5.gif'; Faltando

const Pagina522 = ({ onValidar }) => {
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
          <img src="" alt="Walking to School" className={styles.row__image} />
          <div className={styles.box}>
            <h3 className={styles.rowTitle}>Walking to School</h3>
            <p className={styles.lineA}><strong className={styles.nameA}>A:</strong> How do you get to school every day?</p>
            <p className={styles.lineB}><strong className={styles.nameB}>B:</strong> I walk. It's just a ten-minute stroll from my house.</p>
            <p className={styles.lineA}><strong className={styles.nameA}>A:</strong> That's nice and healthy! I wish I lived closer to my school.</p>
          </div>
        </section>

        {/* 2 — imagem à direita */}
        <section className={`${styles.row} ${styles.rowReverse}`}>
          <div className={styles.box}>
            <h3 className={styles.rowTitle}>Taking the Subway</h3>
            <p className={styles.lineA}><strong className={styles.nameA}>A:</strong> What's your usual way to work?</p>
            <p className={styles.lineB}><strong className={styles.nameB}>B:</strong> I take the subway. It's quick and there's a station right near my office.</p>
            <p className={styles.lineA}><strong className={styles.nameA}>A:</strong> Subways are so efficient, especially during rush hour.</p>
          </div>
          <img src="" alt="Taking the Subway" className={styles.row__image} />
        </section>

        {/* 3 — imagem à esquerda */}
        <section className={styles.row}>
          <img src={pagina522imagem3} alt="Driving to Work" className={styles.row__image} />
          <div className={styles.box}>
            <h3 className={styles.rowTitle}>Driving to Work</h3>
            <p className={styles.lineA}><strong className={styles.nameA}>A:</strong> How do you travel to work?</p>
            <p className={styles.lineB}><strong className={styles.nameB}>B:</strong> I drive. It's convenient, but parking can be a hassle sometimes.</p>
            <p className={styles.lineA}><strong className={styles.nameA}>A:</strong> I agree, finding parking spots can be a headache.</p>
          </div>
        </section>

        {/* 4 — imagem à direita */}
        <section className={`${styles.row} ${styles.rowReverse}`}>
          <div className={styles.box}>
            <h3 className={styles.rowTitle}>Cycling to the Park</h3>
            <p className={styles.lineA}><strong className={styles.nameA}>A:</strong> Do you ride your bike often?</p>
            <p className={styles.lineB}><strong className={styles.nameB}>B:</strong> Yes, I cycle to the park every weekend. It's relaxing and keeps me fit.</p>
            <p className={styles.lineA}><strong className={styles.nameA}>A:</strong> Cycling is a great way to enjoy the outdoors.</p>
          </div>
          <img src="" alt="Cycling to the Park" className={styles.row__image} />
        </section>

        {/* 5 — imagem à esquerda */}
        <section className={styles.row}>
          <img src="" alt="Using Ride-Sharing Apps" className={styles.row__image} />
          <div className={styles.box}>
            <h3 className={styles.rowTitle}>Using Ride-Sharing Apps</h3>
            <p className={styles.lineA}><strong className={styles.nameA}>A:</strong> How do you usually go out in the evenings?</p>
            <p className={styles.lineB}><strong className={styles.nameB}>B:</strong> I use ride-sharing apps. They're convenient, and I don't have to worry about parking.</p>
            <p className={styles.lineA}><strong className={styles.nameA}>A:</strong> That sounds practical, especially in busy areas.</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pagina522;
