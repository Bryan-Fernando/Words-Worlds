import React, { useEffect } from 'react';
import styles from './pagina530.module.css';

const Pagina530 = ({ onValidar }) => {
  useEffect(() => { if (onValidar) onValidar(true); }, [onValidar]);

  return (
    <div className={styles.page__container}>
      <header className={styles.page__header}>
        <h1 className={styles.page__title}>Real-life Dialogues</h1>
      </header>

      <h2 className={styles.sectionLabel}>Grocery Store Chats</h2>

      <figure className={styles.heroWrap}>
        <img
          src=""
          alt="Two people chatting at a grocery store"
          className={styles.hero}
        />
      </figure>

      <section className={styles.dialogueBlock}>
        <h3 className={styles.dialogueTitle}>Meeting a Neighbor</h3>

        <div className={styles.dialogue}>
          <p className={styles.lineA}>
            <strong className={styles.nameA}>You</strong>: Oh, hi there! I didn't expect to run into you at the grocery store.
          </p>
          <p className={styles.lineB}>
            <strong className={styles.nameB}>Neighbor</strong>: Hi! Same here, just picking up a few things for dinner. How about you?
          </p>
          <p className={styles.lineA}>
            <strong className={styles.nameA}>You</strong>: Just doing my weekly shopping. Have you tried the new bakery items they have here?<br />
            The pastries are amazing.
          </p>
          <p className={styles.lineB}>
            <strong className={styles.nameB}>Neighbor</strong>: Not yet, but I'll definitely check them out. By the way,
            have you seen the new coffee shop that opened on Elm Street?
          </p>
          <p className={styles.lineA}>
            <strong className={styles.nameA}>You</strong>: Oh, I heard about it but haven't had a chance to visit yet.
            Is the coffee good?
          </p>
          <p className={styles.lineB}>
            <strong className={styles.nameB}>Neighbor</strong>: Yeah, I tried their latte last week and it was pretty great.
            We should go together sometime.
          </p>
          <p className={styles.lineA}>
            <strong className={styles.nameA}>You</strong>: Absolutely, that sounds like a plan! Enjoy your dinner shopping,
            and let's catch up soon.
          </p>
          <p className={styles.lineB}>
            <strong className={styles.nameB}>Neighbor</strong>: You too, see you around!
          </p>
        </div>
      </section>
    </div>
  );
};

export default Pagina530;
