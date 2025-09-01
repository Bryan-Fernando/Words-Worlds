import React, { useEffect } from 'react';
import styles from './pagina526.module.css';

import pagina526imagem1 from '../assets/images/dialoguespagina23_imagem1.gif';
import pagina526imagem2 from '../assets/images/dialoguespagina23_imagem2.gif';
import pagina526imagem3 from '../assets/images/dialoguespagina23_imagem3.gif';
import pagina526imagem4 from '../assets/images/dialoguespagina23_imagem4.gif';

const Pagina526 = ({ onValidar }) => {
  useEffect(() => { if (onValidar) onValidar(true); }, [onValidar]);

  return (
    <div className={styles.page__container}>
      <header className={styles.page__header}>
        <h1 className={styles.page__title}>Real-life Dialogues</h1>
      </header>

      <main className={styles.rows}>
        {/* 1 — imagem à esquerda */}
        <section className={styles.row}>
          <img src={pagina526imagem1} alt="Leather jacket" className={styles.row__image} />
          <div className={styles.box}>
            <h3 className={styles.rowTitle}>Describing a Leather Jacket:</h3>
            <p className={styles.lineA}><strong className={styles.nameA}>George:</strong> Hey, check out my new jacket! I just bought it yesterday.</p>
            <p className={styles.lineB}><strong className={styles.nameB}>Sam:</strong> Wow, that's a sleek-looking jacket. Is it leather?</p>
            <p className={styles.lineA}><strong className={styles.nameA}>George:</strong> Yes, it's made of this soft, warm, black Italian leather.</p>
            <p className={styles.lineB}><strong className={styles.nameB}>Sam:</strong> It looks really stylish on you. Perfect for this chilly weather.</p>
          </div>
        </section>

        {/* 2 — imagem à direita */}
        <section className={`${styles.row} ${styles.rowReverse}`}>
          <div className={styles.box}>
            <h3 className={styles.rowTitle}>Talking About a New Car:</h3>
            <p className={styles.lineA}><strong className={styles.nameA}>Filip:</strong> Guess what? I finally got a new car!</p>
            <p className={styles.lineB}><strong className={styles.nameB}>Robert:</strong> No way! What did you get?</p>
            <p className={styles.lineA}><strong className={styles.nameA}>Filip:</strong> I got a shiny, red, sporty convertible.</p>
            <p className={styles.lineB}><strong className={styles.nameB}>Robert:</strong> That sounds amazing! I bet it's a blast to drive around in.</p>
          </div>
          <img src={pagina526imagem2} alt="New car" className={styles.row__image} />
        </section>

        {/* 3 — imagem à esquerda */}
        <section className={styles.row}>
          <img src={pagina526imagem3} alt="New smartphone" className={styles.row__image} />
          <div className={styles.box}>
            <h3 className={styles.rowTitle}>Discussing a New Smartphone:</h3>
            <p className={styles.lineA}><strong className={styles.nameA}>Mary:</strong> Have you seen the latest smartphone model?</p>
            <p className={styles.lineB}><strong className={styles.nameB}>Rahna:</strong> Not yet, what's special about it?</p>
            <p className={styles.lineA}><strong className={styles.nameA}>Mary:</strong> It's this sleek, slim, high-tech device with a brilliant display.</p>
            <p className={styles.lineB}><strong className={styles.nameB}>Rahna:</strong> Sounds impressive! I might have to upgrade soon.</p>
          </div>
        </section>

        {/* 4 — imagem à direita */}
        <section className={`${styles.row} ${styles.rowReverse}`}>
          <div className={styles.box}>
            <h3 className={styles.rowTitle}>Admiring a New Painting:</h3>
            <p className={styles.lineA}><strong className={styles.nameA}>Chris:</strong> I just got this beautiful painting for my living room.</p>
            <p className={styles.lineB}><strong className={styles.nameB}>Sasha:</strong> Oh, it's stunning! Who's the artist?</p>
            <p className={styles.lineA}><strong className={styles.nameA}>Chris:</strong> It's by a talented local painter. The colors are vibrant, the composition is striking, and the details are exquisite.</p>
            <p className={styles.lineB}><strong className={styles.nameB}>Sasha:</strong> It adds such a classy touch to your home decor.</p>
          </div>
          <img src={pagina526imagem4} alt="New painting" className={styles.row__image} />
        </section>
      </main>
    </div>
  );
};

export default Pagina526;
