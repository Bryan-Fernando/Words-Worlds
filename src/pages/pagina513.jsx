import React, { useEffect } from 'react';
import styles from './pagina513.module.css';

import pagina513imagem1 from '../assets/images/dialoguespagina10_imagem1.gif';
import pagina513imagem2 from '../assets/images/dialoguespagina10_imagem2.gif';
import pagina513imagem3 from '../assets/images/dialoguespagina10_imagem3.gif';
//import pagina513imagem4 from '../assets/images/dialoguespagina10_imagem4.gif'; faltando

const Pagina513 = ({ onValidar }) => {
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
        {/* 1 */}
        <section className={styles.card}>
          <img src={pagina513imagem1} alt="Making a Suggestion" className={styles.card__image} />
          <h3 className={styles.card__title}>Making a Suggestion</h3>
          <div className={styles.dialogue}>
            <p><strong className={styles.nameA}>Alex:</strong> I’m so tired, Rachel. I don’t know what to do this weekend.</p>
            <p className={styles.textB}><strong className={styles.nameB}>Rachel:</strong> You could go for a relaxing hike in the nearby forest, Alex. It might help you unwind.</p>
          </div>
        </section>

        {/* 2 */}
        <section className={styles.card}>
          <img src={pagina513imagem2} alt="Giving a Recommendation" className={styles.card__image} />
          <h3 className={styles.card__title}>Giving a Recommendation</h3>
          <div className={styles.dialogue}>
            <p><strong className={styles.nameA}>Sophia:</strong> I need a good movie to watch tonight, Ethan.</p>
            <p className={styles.textB}><strong className={styles.nameB}>Ethan:</strong> You can’t go wrong with the new action movie that just came out, Sophia. It’s getting great reviews.</p>
          </div>
        </section>

        {/* 3 */}
        <section className={styles.card}>
          <img src={pagina513imagem3} alt="Seeking a Recommendation" className={styles.card__image} />
          <h3 className={styles.card__title}>Seeking a Recommendation</h3>
          <div className={styles.dialogue}>
            <p><strong className={styles.nameA}>Jacob:</strong> I’m thinking about trying a new restaurant for dinner, Emily.</p>
            <p className={styles.textB}><strong className={styles.nameB}>Emily:</strong> You could check out that new Italian place downtown, Jacob. I’ve heard their pasta is amazing.</p>
          </div>
        </section>

        {/* 4 */}
        <section className={styles.card}>
          <img src="" alt="Offering Assistance" className={styles.card__image} />
          <h3 className={styles.card__title}>Offering Assistance</h3>
          <div className={styles.dialogue}>
            <p><strong className={styles.nameA}>Liam:</strong> I’m struggling with this programming problem, Olivia.</p>
            <p className={styles.textB}><strong className={styles.nameB}>Olivia:</strong> I’ve dealt with similar issues before, Liam. Can I help you figure it out?</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pagina513;
