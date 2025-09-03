import React, { useEffect } from 'react';
import styles from './pagina532.module.css';

const Pagina532 = ({ onValidar }) => {
  useEffect(() => { onValidar?.(true); }, [onValidar]);

  return (
    <div className={styles.page__container}>
      <header className={styles.page__header}>
        <h1 className={styles.page__title}>Real-life Dialogues</h1>
      </header>

      <h2 className={styles.sectionLabel}>Grocery Store Chats</h2>

      <figure className={styles.heroWrap}>
        <img
          src="" /* imagem do mercado aqui */
          alt="Two people chatting in a grocery store"
          className={styles.hero}
        />
      </figure>

      <section className={styles.dialogueBlock}>
        <h3 className={styles.dialogueTitle}>Catching Up with an Acquaintance</h3>

        <div className={styles.dialogue}>
          <p className={styles.lineA}>
            <strong className={styles.nameA}>Acquaintance</strong>:
            Hey, long time no see! How have you been?
          </p>
          <p className={styles.lineB}>
            <strong className={styles.nameB}>You</strong>:
            Hey! I’ve been good, just keeping busy with work and life. How about you?
          </p>

          <p className={styles.lineA}>
            <strong className={styles.nameA}>Acquaintance</strong>:
            Same here, trying to balance everything. Did you try that new recipe I shared last week?
          </p>
          <p className={styles.lineB}>
            <strong className={styles.nameB}>You</strong>:
            Oh, the one with the roasted vegetables? Yes, I actually made it for a family dinner.
            Everyone loved it!
          </p>

          <p className={styles.lineA}>
            <strong className={styles.nameA}>Acquaintance</strong>:
            That’s awesome to hear. If you need more recipe ideas, I’ve got plenty!
          </p>
          <p className={styles.lineB}>
            <strong className={styles.nameB}>You</strong>:
            Thanks, I might take you up on that. Anyway, I’m just grabbing some fresh produce
            for the week. How about you?
          </p>

          <p className={styles.lineA}>
            <strong className={styles.nameA}>Acquaintance</strong>:
            I’m looking for some snacks for a movie night. By the way, have you been to the new
            gym that opened downtown?
          </p>
          <p className={styles.lineB}>
            <strong className={styles.nameB}>You</strong>:
            Not yet, but I’ve heard good things. Have you been going?
          </p>

          <p className={styles.lineA}>
            <strong className={styles.nameA}>Acquaintance</strong>:
            Yeah, a few times a week. It’s really motivating. You should give it a try!
          </p>
          <p className={styles.lineB}>
            <strong className={styles.nameB}>You</strong>:
            Maybe I will. Thanks for the recommendation. Enjoy your movie night!
          </p>

          <p className={styles.lineA}>
            <strong className={styles.nameA}>Acquaintance</strong>:
            You too, catch you later!
          </p>
        </div>
      </section>
    </div>
  );
};

export default Pagina532;
