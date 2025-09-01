import React, { useEffect } from 'react';
import styles from './pagina515.module.css';

import pagina515imagem1 from '../assets/images/dialoguespagina12_imagem1.gif';
import pagina515imagem2 from '../assets/images/dialoguespagina12_imagem2.gif';

const Pagina515 = ({ onValidar }) => {
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
        {/* 1 - Making a Request for Feedback */}
        <section className={styles.card}>
          <img src={pagina515imagem1} alt="Making a Request for Feedback" className={styles.card__image} />
          <h3 className={styles.card__title}>Making a Request for Feedback</h3>
          <div className={styles.dialogue}>
            <p>
              <strong className={styles.nameA}>Aiden:</strong> I’ve been practicing this song on the
              guitar. Can I play it for you, Mia?
            </p>
            <p className={styles.textB}>
              <strong className={styles.nameB}>Mia:</strong> Sure, I’d love to hear it, Aiden!
              Could you also teach me some chords?
            </p>
          </div>
        </section>

        {/* 2 - Seeking Advice */}
        <section className={styles.card}>
          <img src={pagina515imagem2} alt="Seeking Advice" className={styles.card__image} />
          <h3 className={styles.card__title}>Seeking Advice</h3>
          <div className={styles.dialogue}>
            <p>
              <strong className={styles.nameA}>Hannah:</strong> I’ve been having trouble
              concentrating during my study sessions, Daniel.
            </p>
            <p className={styles.textB}>
              <strong className={styles.nameB}>Daniel:</strong> You can try creating a designated
              study space, Hannah. Could that help improve your focus?
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pagina515;
