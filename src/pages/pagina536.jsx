import React, { useEffect } from 'react';
import styles from './pagina536.module.css';

const Pagina536 = ({ onValidar }) => {
  useEffect(() => { onValidar?.(true); }, [onValidar]);

  return (
    <div className={styles.page__container}>
      <header className={styles.page__header}>
        <h1 className={styles.page__title}>Real-life Dialogues</h1>
      </header>

      <h2 className={styles.sectionLabel}>Public Transport</h2>

      <figure className={styles.heroWrap}>
        <img
          src="" /* imagem do ônibus/parada aqui */
          alt="Passenger talking to a bus driver near the door"
          className={styles.hero}
        />
      </figure>

      <section className={styles.dialogueBlock}>
        <h3 className={styles.dialogueTitle}>Getting Off the Bus</h3>

        <div className={styles.dialogue}>
          <p className={styles.lineA}>
            <strong className={styles.nameA}>Hannah</strong>:
            {' '}Excuse me, is this the stop for Greenfield Avenue?
          </p>
          <p className={styles.lineB}>
            <strong className={styles.nameB}>Driver</strong>:
            {' '}Yes, it is. This is your stop.
          </p>

          <p className={styles.lineA}>
            <strong className={styles.nameA}>Hannah</strong>:
            {' '}Thank you. How often does this bus come by?
          </p>
          <p className={styles.lineB}>
            <strong className={styles.nameB}>Driver</strong>:
            {' '}During weekdays, it runs every 30 minutes. On weekends, it's about every 45 minutes.
          </p>

          <p className={styles.lineA}>
            <strong className={styles.nameA}>Hannah</strong>:
            {' '}Got it. Thanks for the information.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Pagina536;
