import React, { useEffect } from 'react';
import styles from './pagina520.module.css';

import pagina520imagem1 from '../assets/images/dialoguespagina17_imagem1.gif';
import pagina520imagem2 from '../assets/images/dialoguespagina17_imagem2.gif';
import pagina520imagem3 from '../assets/images/dialoguespagina17_imagem3.gif';
//import pagina520imagem4 from '../assets/images/dialoguespagina17_imagem4.gif'; faltando
import pagina520imagem5 from '../assets/images/dialoguespagina17_imagem5.gif';

const Pagina520 = ({ onValidar }) => {
  useEffect(() => { if (onValidar) onValidar(true); }, [onValidar]);

  return (
    <div className={styles.page__container}>
      <header className={styles.page__header}>
        <h1 className={styles.page__title}>Dialogues</h1>
        <h2 className={styles.page__subtitle}>Real-life Conversation</h2>
      </header>

      <main className={styles.rows}>
        {/* 1 - imagem à esquerda */}
        <section className={styles.row}>
          <img src={pagina520imagem1} alt="Friends hanging out at a café" className={styles.row__image} />
          <div className={styles.box}>
            <h3 className={styles.rowTitle}>Friends hanging out at a café.</h3>
            <p className={styles.lineA}><strong className={styles.nameA}>Lori:</strong> What are you doing this weekend?</p>
            <p className={styles.lineB}><strong className={styles.nameB}>Maggie:</strong> I’m meeting up with some old friends from college. We’re having a little reunion.</p>
          </div>
        </section>

        {/* 2 - imagem à direita */}
        <section className={`${styles.row} ${styles.rowReverse}`}>
          <div className={styles.box}>
            <h3 className={styles.rowTitle}>At a family gathering</h3>
            <p className={styles.lineA}><strong className={styles.nameA}>Kallil:</strong> Where’s Sarah?</p>
            <p className={styles.lineB}><strong className={styles.nameB}>Lyndi:</strong> She’s working on a project in her room. She’s painting a beautiful landscape!</p>
          </div>
          <img src={pagina520imagem2} alt="Family gathering" className={styles.row__image} />
        </section>

        {/* 3 - imagem à esquerda */}
        <section className={styles.row}>
          <img src={pagina520imagem3} alt="Two colleagues chatting at the office" className={styles.row__image} />
          <div className={styles.box}>
            <h3 className={styles.rowTitle}>Two colleagues chatting at the office</h3>
            <p className={styles.lineA}><strong className={styles.nameA}>Robert:</strong> How’s the new project coming along?</p>
            <p className={styles.lineB}><strong className={styles.nameB}>Amanda:</strong> It’s going well. Right now, we’re reviewing the data and making some initial observations.</p>
          </div>
        </section>

        {/* 4 - imagem à direita */}
        <section className={`${styles.row} ${styles.rowReverse}`}>
          <div className={styles.box}>
            <h3 className={styles.rowTitle}>Parent and child at home.</h3>
            <p className={styles.lineA}><strong className={styles.nameA}>Lucy:</strong> What’s that noise upstairs?</p>
            <p className={styles.lineB}><strong className={styles.nameB}>Charles:</strong> Oh, I’m playing video games with my friends online. We’re having a lot of fun!</p>
          </div>
          <img src="" alt="Parent and child at home" className={styles.row__image} />
        </section>

        {/* 5 - imagem à esquerda */}
        <section className={styles.row}>
          <img src={pagina520imagem5} alt="Couple getting ready for an event" className={styles.row__image} />
          <div className={styles.box}>
            <h3 className={styles.rowTitle}>Couple getting ready for an event</h3>
            <p className={styles.lineA}><strong className={styles.nameA}>Frank:</strong> Are you almost ready to leave?</p>
            <p className={styles.lineB}><strong className={styles.nameB}>Margot:</strong> Not yet. I’m still getting dressed and doing my makeup.</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pagina520;
