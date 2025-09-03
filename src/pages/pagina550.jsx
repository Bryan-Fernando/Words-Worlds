import React, { useEffect } from 'react';
import styles from './pagina550.module.css';

const Pagina550 = ({ onValidar }) => {
  useEffect(() => { onValidar?.(true); }, [onValidar]);

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Real-life Dialogues</h1>

      <figure className={styles.heroWrap}>
        <img
          src="" /* sua imagem aqui */
          alt="Couple chatting at a cozy café at night"
          className={styles.hero}
        />
      </figure>

      <main className={styles.dialog}>
        <p className={styles.lineA}>
          <strong className={styles.nameA}>Olivia:</strong>{' '}
          It's such a lovely day outside, isn't it?
        </p>

        <p className={styles.lineB}>
          <strong className={styles.nameB}>Henry:</strong>{' '}
          Absolutely! You enjoy spending time outdoors, don't you?
        </p>

        <p className={styles.lineA}>
          <strong className={styles.nameA}>Olivia:</strong>{' '}
          Yes, I do. By the way, you've met our new neighbors, haven't you?
        </p>

        <p className={styles.lineB}>
          <strong className={styles.nameB}>Henry:</strong>{' '}
          No, not yet. I should go introduce myself. They just moved in recently, didn't they?
        </p>

        <p className={styles.lineA}>
          <strong className={styles.nameA}>Olivia:</strong>{' '}
          Yes, just last week. And you've been to the new café downtown, haven't you?
        </p>

        <p className={styles.lineB}>
          <strong className={styles.nameB}>Henry:</strong>{' '}
          Oh, not yet. Is it any good?
        </p>

        <p className={styles.lineA}>
          <strong className={styles.nameA}>Olivia:</strong>{' '}
          It's fantastic! You'll love the atmosphere. We can go together sometime, can't we?
        </p>

        <p className={styles.lineB}>
          <strong className={styles.nameB}>Henry:</strong>{' '}
          That sounds great! I'm free this weekend, are you?
        </p>
      </main>
    </div>
  );
};

export default Pagina550;
