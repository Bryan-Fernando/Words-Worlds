import React, { useEffect } from 'react';
import styles from './pagina529.module.css';

const Pagina529 = ({ onValidar }) => {
  useEffect(() => { if (onValidar) onValidar(true); }, [onValidar]);

  return (
    <div className={styles.page__container}>
      <header className={styles.page__header}>
        <h1 className={styles.page__title}>Real-life Dialogues</h1>
      </header>

      <section className={styles.panel}>
        <img
          src=""
          alt="Friends chatting on a park bench"
          className={styles.hero}
        />

        <div className={styles.dialogue}>
          <p className={styles.lineA}>
            <strong className={styles.nameA}>Bell</strong>:{' '}
            Hey, have you tried that new restaurant downtown?
          </p>
          <p className={styles.lineB}>
            <strong className={styles.nameB}>Joan</strong>:{' '}
            Yeah! I tried it last week. The food was amazing.
          </p>
          <p className={styles.lineA}>
            <strong className={styles.nameA}>Bell</strong>:{' '}
            Really? I haven’t gone there yet. How was the service?
          </p>
          <p className={styles.lineB}>
            <strong className={styles.nameB}>Joan</strong>:{' '}
            The service was excellent. They hired a really friendly staff.
          </p>
          <p className={styles.lineA}>
            <strong className={styles.nameA}>Bell</strong>:{' '}
            That sounds great. I think I’ll visit it this weekend.
          </p>
          <p className={styles.lineB}>
            <strong className={styles.nameB}>Joan</strong>:{' '}
            You should! I ate there twice already, and I’m planning to go again.
          </p>
          <p className={styles.lineA}>
            <strong className={styles.nameA}>Bell</strong>:{' '}
            Thanks for the recommendation! I’ll let you know how it goes after I go there.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Pagina529;
