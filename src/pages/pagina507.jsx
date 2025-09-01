import React, { useEffect } from 'react';
import styles from './pagina507.module.css';

import pagina507imagem1 from '../assets/images/dialoguespagina4_imagem1.gif';
import pagina507imagem2 from '../assets/images/dialoguespagina4_imagem2.gif';
import pagina507imagem3 from '../assets/images/dialoguespagina4_imagem3.gif';

const Pagina507 = ({ onValidar }) => {
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
          <img src={pagina507imagem1} alt="Hometown" className={styles.card__image} />
          <h3 className={styles.card__title}>Hometown</h3>
          <div className={styles.dialogue}>
            <p><span className={styles.speakerA}>A:</span> Where are you from?</p>
            <p><span className={styles.speakerB}>B:</span> I’m from New York. How about you?</p>
            <p><span className={styles.speakerA}>A:</span> I’m originally from Tokyo, but I live here now.</p>
          </div>
        </section>

        {/* Card 2 */}
        <section className={styles.card}>
          <img src={pagina507imagem2} alt="Future Plans" className={styles.card__image} />
          <h3 className={styles.card__title}>Future Plans</h3>
          <div className={styles.dialogue}>
            <p><span className={styles.speakerA}>A:</span> What are your plans for the future?</p>
            <p><span className={styles.speakerB}>B:</span> I’m hoping to start my own business someday. How about you?</p>
            <p><span className={styles.speakerA}>A:</span> I want to continue studying and maybe travel more.</p>
          </div>
        </section>

        {/* Card 3 */}
        <section className={styles.card}>
          <img src={pagina507imagem3} alt="Asking for Directions" className={styles.card__image} />
          <h3 className={styles.card__title}>Asking for Directions</h3>
          <div className={styles.dialogue}>
            <p><span className={styles.speakerA}>A:</span> Excuse me, can you help me find the nearest bus stop?</p>
            <p><span className={styles.speakerB}>B:</span> Of course! It’s just down this street, on your left.</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pagina507;
