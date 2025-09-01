import React, { useEffect } from 'react';
import styles from './pagina521.module.css';

//import pagina521imagem1 from '../assets/images/dialoguespagina18_imagem1.gif'; Faltando
//import pagina521imagem2 from '../assets/images/dialoguespagina18_imagem2.gif'; Faltando
import pagina521imagem3 from '../assets/images/dialoguespagina18_imagem3.gif';
import pagina521imagem4 from '../assets/images/dialoguespagina18_imagem4.gif';
import pagina521imagem5 from '../assets/images/dialoguespagina18_imagem5.gif';

const Pagina521 = ({ onValidar }) => {
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
          <img src="" alt="At the Market" className={styles.row__image} />
          <div className={styles.box}>
            <h3 className={styles.rowTitle}>At the Market</h3>
            <p className={styles.lineA}><strong className={styles.nameA}>Clerk:</strong> Yes, it’s in aisle 3.</p>
            <p className={styles.lineB}><strong className={styles.nameB}>Customer:</strong> Thank you! Where are apples?</p>
            <p className={styles.lineA}><strong className={styles.nameA}>Clerk:</strong> They’re in the produce section.</p>
            <p className={styles.lineB}><strong className={styles.nameB}>Customer:</strong> I’ll take a kilogram of rice and six apples, please.</p>
          </div>
        </section>

        {/* 2 — imagem à direita */}
        <section className={`${styles.row} ${styles.rowReverse}`}>
          <div className={styles.box}>
            <h3 className={styles.rowTitle}>At the café</h3>
            <p className={styles.lineA}><strong className={styles.nameA}>Server:</strong> What do you want?</p>
            <p className={styles.lineB}><strong className={styles.nameB}>Customer:</strong> A cup of coffee, please.</p>
            <p className={styles.lineA}><strong className={styles.nameA}>Server:</strong> With sugar or milk?</p>
            <p className={styles.lineB}><strong className={styles.nameB}>Customer:</strong> Yes, a spoonful of sugar and a splash of milk.</p>
            <p className={styles.lineA}><strong className={styles.nameA}>Server:</strong> Anything else?</p>
            <p className={styles.lineB}><strong className={styles.nameB}>Customer:</strong> A slice of chocolate cake, please.</p>
          </div>
          <img src="" alt="At the café" className={styles.row__image} />
        </section>

        {/* 3 — imagem à esquerda */}
        <section className={styles.row}>
          <img src={pagina521imagem3} alt="Shopping" className={styles.row__image} />
          <div className={styles.box}>
            <h3 className={styles.rowTitle}>Shopping</h3>
            <p className={styles.lineA}><strong className={styles.nameA}>Customer:</strong> Hi, do you have shirts in blue?</p>
            <p className={styles.lineB}><strong className={styles.nameB}>Shopkeeper:</strong> Yes, they’re right over here.</p>
            <p className={styles.lineA}><strong className={styles.nameA}>Customer:</strong> Great, I’ll take two blue shirts, please.</p>
          </div>
        </section>

        {/* 4 — imagem à direita */}
        <section className={`${styles.row} ${styles.rowReverse}`}>
          <div className={styles.box}>
            <h3 className={styles.rowTitle}>Cooking</h3>
            <p className={styles.lineA}><strong className={styles.nameA}>A:</strong> What are you cooking?</p>
            <p className={styles.lineB}><strong className={styles.nameB}>B:</strong> Pasta with tomato sauce.</p>
            <p className={styles.lineA}><strong className={styles.nameA}>A:</strong> Can I have some?</p>
            <p className={styles.lineB}><strong className={styles.nameB}>B:</strong> Sure, I’ll make two dishes.</p>
          </div>
          <img src={pagina521imagem4} alt="Cooking at home" className={styles.row__image} />
        </section>

        {/* 5 — imagem à esquerda */}
        <section className={styles.row}>
          <img src={pagina521imagem5} alt="Organizing tasks" className={styles.row__image} />
          <div className={styles.box}>
            <h3 className={styles.rowTitle}>Organizing tasks</h3>
            <p className={styles.lineA}><strong className={styles.nameA}>Organizer:</strong> How much time do we have left for preparation?</p>
            <p className={styles.lineB}><strong className={styles.nameB}>Assistant:</strong> We have two days.</p>
            <p className={styles.lineA}><strong className={styles.nameA}>Organizer:</strong> Okay, let’s make a list of tasks.</p>
            <p className={styles.lineB}><strong className={styles.nameB}>Assistant:</strong> Sure, I’ll write down the tasks on paper.</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pagina521;
