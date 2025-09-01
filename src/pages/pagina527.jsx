import React, { useEffect } from 'react';
import styles from './pagina527.module.css';

import pagina527imagem1 from '../assets/images/dialoguespagina24_imagem1.gif';
import pagina527imagem2 from '../assets/images/dialoguespagina24_imagem2.gif';
import pagina527imagem3 from '../assets/images/dialoguespagina24_imagem3.gif';
import pagina527imagem4 from '../assets/images/dialoguespagina24_imagem4.gif';
import pagina527imagem5 from '../assets/images/dialoguespagina24_imagem5.gif';

const Pagina527 = ({ onValidar }) => {
  useEffect(() => { if (onValidar) onValidar(true); }, [onValidar]);

  return (
    <div className={styles.page__container}>
      <header className={styles.page__header}>
        <h1 className={styles.page__title}>Real-life Dialogues</h1>
      </header>

      <main className={styles.grid}>
        {/* 1 */}
        <section className={styles.item}>
          <img src={pagina527imagem1} alt="Two friends talking in a café" className={styles.item__image} />
          <div className={styles.caption}>
            <p>
              <strong className={styles.nameA}>Sam:</strong> Do you think I should apply for that job?
            </p>
            <p className={styles.textB}>
              <strong className={styles.nameB}>Emily:</strong> Absolutely! You should definitely go for it.
            </p>
          </div>
        </section>

        {/* 2 */}
        <section className={styles.item}>
          <img src={pagina527imagem2} alt="People serving food at a garden party" className={styles.item__image} />
          <div className={styles.caption}>
            <p>
              <strong className={styles.nameA}>Sophia:</strong> I shouldn’t have eaten that much cake at the party.
            </p>
            <p className={styles.textB}>
              <strong className={styles.nameB}>Liam:</strong> Yeah, maybe you ought to watch your portions next time.
            </p>
          </div>
        </section>

        {/* 3 */}
        <section className={styles.item}>
          <img src={pagina527imagem3} alt="Friends choosing transportation" className={styles.item__image} />
          <div className={styles.caption}>
            <p>
              <strong className={styles.nameA}>Jake:</strong> Should we take the bus or walk to the museum?
            </p>
            <p className={styles.textB}>
              <strong className={styles.nameB}>Amanda:</strong> We should take the bus, it’ll be faster.
            </p>
          </div>
        </section>

        {/* 4 */}
        <section className={styles.item}>
          <img src={pagina527imagem4} alt="Two people talking at a table" className={styles.item__image} />
          <div className={styles.caption}>
            <p>
              <strong className={styles.nameA}>Olivia:</strong> I think you should apologize to Sarah for what you said yesterday.
            </p>
            <p className={styles.textB}>
              <strong className={styles.nameB}>Ben:</strong> I agree, I’ll talk to her later today.
            </p>
          </div>
        </section>

        {/* 5 (linha final, ocupa uma coluna) */}
        <section className={styles.item}>
          <img src={pagina527imagem5} alt="Students chatting in a classroom" className={styles.item__image} />
          <div className={styles.caption}>
            <p>
              <strong className={styles.nameA}>Emma:</strong> Do you think I ought to tell them about the surprise party?
            </p>
            <p className={styles.textB}>
              <strong className={styles.nameB}>Nathan:</strong> No, you shouldn’t. It’s better to keep it a secret until the day.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pagina527;
