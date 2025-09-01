import React, { useEffect } from 'react';
import styles from './pagina516.module.css';

import pagina516imagem1 from '../assets/images/dialoguespagina13_imagem1.gif';
import pagina516imagem2 from '../assets/images/dialoguespagina13_imagem2.gif';
//import pagina516imagem3 from '../assets/images/dialoguespagina13_imagem3.gif'; faltando

const Pagina516 = ({ onValidar }) => {
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
        {/* Row 1 */}
        <section className={styles.row}>
          <img src={pagina516imagem1} alt="Reading preference" className={styles.row__image} />
          <div className={styles.box}>
            <p className={styles.lineA}>
              <strong className={styles.nameA}>Daniel:</strong> Do you like to read books?
            </p>
            <p className={styles.translationA}>Você gosta de ler livros?</p>

            <p className={styles.lineB}>
              <strong className={styles.nameB}>Olivia:</strong> Yes, I love reading.
            </p>
            <p className={styles.translationB}>Sim, eu amo ler.</p>
          </div>
        </section>

        {/* Row 2 */}
        <section className={styles.row}>
          <img src={pagina516imagem2} alt="Drawing and painting" className={styles.row__image} />
          <div className={styles.box}>
            <p className={styles.lineA}>
              <strong className={styles.nameA}>Emily:</strong> I love to draw. What about you?
            </p>
            <p className={styles.translationA}>Eu adoro desenhar. E você?</p>

            <p className={styles.lineB}>
              <strong className={styles.nameB}>Henry:</strong> I enjoy painting.
            </p>
            <p className={styles.translationB}>Eu gosto muito de pintar.</p>
          </div>
        </section>

        {/* Row 3 */}
        <section className={styles.row}>
          <img src="" alt="Bus stop conversation" className={styles.row__image} />
          <div className={styles.box}>
            <p className={styles.lineA}>
              <strong className={styles.nameA}>Helena:</strong> Excuse-me, do you know when the next
              bus to downtown arrives?
            </p>
            <p className={styles.translationA}>
              Com licença, você sabe quando chega o próximo ônibus para o centro?
            </p>

            <p className={styles.lineB}>
              <strong className={styles.nameB}>Paul:</strong> It is scheduled to arrive in 15 minutes.
            </p>
            <p className={styles.translationB}>Está programado para chegar em 15 minutos.</p>

            <p className={styles.lineA}>
              <strong className={styles.nameA}>Helena:</strong> Thanks!
            </p>
            <p className={styles.translationA}>Obrigado!</p>

            <p className={styles.lineB}>
              <strong className={styles.nameB}>Paul:</strong> You're welcome!
            </p>
            <p className={styles.translationB}>De nada!</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pagina516;
