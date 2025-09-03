import React, { useEffect } from 'react';
import styles from './pagina533.module.css';

const Pagina533 = ({ onValidar }) => {
  useEffect(() => { onValidar?.(true); }, [onValidar]);

  return (
    <div className={styles.page__container}>
      <header className={styles.page__header}>
        <h1 className={styles.page__title}>Real-life Dialogues</h1>
      </header>

      <h2 className={styles.sectionLabel}>Public Transport</h2>

      <figure className={styles.heroWrap}>
        <img
          src="" /* sua imagem aqui */
          alt="Two people waiting and chatting at a bus stop"
          className={styles.hero}
        />
      </figure>

      <section className={styles.dialogueBlock}>
        <h3 className={styles.dialogueTitle}>Waiting at the Bus Stop</h3>

        <div className={styles.dialogue}>
          <p className={styles.lineA}>
            <strong className={styles.nameA}>Alex</strong>:
            Hey there, is this the bus stop for Route 15?
          </p>
          <p className={styles.lineB}>
            <strong className={styles.nameB}>Emily</strong>:
            Yep, that's right! The 15 should be here in about 10 minutes.
          </p>

          <p className={styles.lineA}>
            <strong className={styles.nameA}>Alex</strong>:
            Great, thanks. I'm new in town, so I'm still getting used to the bus system.
          </p>
          <p className={styles.lineB}>
            <strong className={styles.nameB}>Emily</strong>:
            No problem! It's pretty straightforward once you get the hang of it.
            Where are you headed?
          </p>

          <p className={styles.lineA}>
            <strong className={styles.nameA}>Alex</strong>:
            I'm trying to get to the downtown area. Any recommendations on places to visit?
          </p>
          <p className={styles.lineB}>
            <strong className={styles.nameB}>Emily</strong>:
            Sure thing! You'll definitely want to check out the local art gallery and the park.
            Oh, and there's a fantastic bakery on Elm Street.
          </p>

          <p className={styles.lineA}>
            <strong className={styles.nameA}>Alex</strong>:
            Sounds awesome, I'll make a note of that. How often do these buses run?
          </p>
          <p className={styles.lineB}>
            <strong className={styles.nameB}>Emily</strong>:
            Usually every 15 to 20 minutes during peak hours. Just be sure to check the
            schedule to avoid waiting too long.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Pagina533;
