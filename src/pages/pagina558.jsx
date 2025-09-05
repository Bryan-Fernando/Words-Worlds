import React, { useEffect } from 'react';
import styles from './pagina558.module.css';

const Pagina558 = ({ onValidar }) => {
  useEffect(() => { onValidar?.(true); }, [onValidar]);

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Real-life Dialogues</h1>
      <h2 className={styles.subtitle}>Part 1 / 2</h2>

      <figure className={styles.heroWrap}>
        <img
          src="" /* sua imagem aqui */
          alt="Friends talking and having dinner at a cozy restaurant"
          className={styles.hero}
        />
      </figure>

      <main className={styles.dialog}>
        <p className={styles.lineA}>
          <strong className={styles.nameA}>Jake:</strong>{' '}
          Hey, Lisa! It's been ages since we caught up. How have you been?
        </p>

        <p className={styles.lineB}>
          <strong className={styles.nameB}>Lisa:</strong>{' '}
          I've been good, Jake! Busy with work, you know. But today, let's forget about work
          and enjoy this dinner.
        </p>

        <p className={styles.lineA}>
          <strong className={styles.nameA}>Jake:</strong>{' '}
          Absolutely! By the way, have you heard about the new restaurant in town?
        </p>

        <p className={styles.lineB}>
          <strong className={styles.nameB}>Lisa:</strong>{' '}
          Oh, you mean the one that just opened up last week? Yes, I've heard about it,
          but I haven't had the chance to check it out yet. Have you been?
        </p>

        <p className={styles.lineA}>
          <strong className={styles.nameA}>Jake:</strong>{' '}
          Yeah, I went there last night with some colleagues. It's called "Gastronomy Delights."
          You won't believe how amazing the menu is.
        </p>

        <p className={styles.lineB}>
          <strong className={styles.nameB}>Lisa:</strong>{' '}
          Really? What's so special about it?
        </p>

        <p className={styles.lineA}>
          <strong className={styles.nameA}>Jake:</strong>{' '}
          Well, for starters, the appetizers are out of this world. I tried their signature dish,
          the Tempura Prawns with a tangy mango salsa. It's a taste explosion!
        </p>

        <p className={styles.lineB}>
          <strong className={styles.nameB}>Lisa:</strong>{' '}
          That sounds delicious! I haven't had a good prawn dish in ages. What about the main course?
        </p>
      </main>
    </div>
  );
};

export default Pagina558;
