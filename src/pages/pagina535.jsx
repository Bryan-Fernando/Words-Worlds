import React, { useEffect } from 'react';
import styles from './pagina535.module.css';

const Pagina535 = ({ onValidar }) => {
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
          alt="Two people asking for directions near a subway"
          className={styles.hero}
        />
      </figure>

      <section className={styles.dialogueBlock}>
        <h3 className={styles.dialogueTitle}>Asking for Directions</h3>

        <div className={styles.dialogue}>
          <p className={styles.lineA}>
            <strong className={styles.nameA}>Sarah</strong>:
            {' '}Hi, I’m trying to find the nearest subway station. Can you help?
          </p>
          <p className={styles.lineB}>
            <strong className={styles.nameB}>John</strong>:
            {' '}Of course! You’ll want to head two blocks down this street and take a right.
            You’ll see the station entrance on your left.
          </p>

          <p className={styles.lineA}>
            <strong className={styles.nameA}>Sarah</strong>:
            {' '}Thanks a lot. I’ve never used the subway here before.
          </p>
          <p className={styles.lineB}>
            <strong className={styles.nameB}>John</strong>:
            {' '}No worries, it’s a convenient way to get around. Just make sure to check the
            subway map to ensure you’re taking the right line.
          </p>

          <p className={styles.lineA}>
            <strong className={styles.nameA}>Sarah</strong>:
            {' '}Will do. By the way, do you know if the subway runs late at night?
          </p>
          <p className={styles.lineB}>
            <strong className={styles.nameB}>John</strong>:
            {' '}Yes, it does, but the frequency might be a bit lower. Be sure to check the
            schedule to avoid any surprises.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Pagina535;
