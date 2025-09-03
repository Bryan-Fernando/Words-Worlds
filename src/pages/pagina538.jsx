import React, { useEffect } from 'react';
import styles from './pagina538.module.css';

const Pagina538 = ({ onValidar }) => {
  useEffect(() => { onValidar?.(true); }, [onValidar]);

  return (
    <div className={styles.page__container}>
      <header className={styles.page__header}>
        <h1 className={styles.page__title}>Real-life Dialogues</h1>
      </header>

      <h2 className={styles.sectionLabel}>Checking In At Hotel</h2>

      <figure className={styles.heroWrap}>
        <img
          src="" /* sua imagem aqui */
          alt="Front-desk clerk helping a guest at a hotel"
          className={styles.hero}
        />
      </figure>

      <main className={styles.blocks}>

        {/* 1 */}
        <section className={styles.box}>
          <h3 className={styles.boxTitle}>Expressing Appreciation</h3>
          <p className={styles.lineA}>
            <strong className={styles.nameA}>Guest:</strong>
            {' '}Thank you for your help.
          </p>
          <p className={styles.lineB}>
            <strong className={styles.nameB}>Front Desk Clerk:</strong>
            {' '}You're welcome! If you need anything during your stay, don't hesitate to ask.
          </p>
        </section>

        {/* 2 */}
        <section className={styles.box}>
          <h3 className={styles.boxTitle}>Asking for Restaurant Recommendations</h3>
          <p className={styles.lineA}>
            <strong className={styles.nameA}>Guest:</strong>
            {' '}Could you recommend a good restaurant nearby?
          </p>
          <p className={styles.lineB}>
            <strong className={styles.nameB}>Front Desk Clerk:</strong>
            {' '}Certainly. There's a great Italian restaurant just a few blocks away.
            I can provide you with directions.
          </p>
        </section>

      </main>
    </div>
  );
};

export default Pagina538;
