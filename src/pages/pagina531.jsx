import React, { useEffect } from 'react';
import styles from './pagina531.module.css';

const Pagina531 = ({ onValidar }) => {
  useEffect(() => { onValidar?.(true); }, [onValidar]);

  return (
    <div className={styles.page__container}>
      <header className={styles.page__header}>
        <h1 className={styles.page__title}>Real-life Dialogues</h1>
      </header>

      <h2 className={styles.sectionLabel}>Grocery Store Chats</h2>

      <figure className={styles.heroWrap}>
        <img
          src="" /* sua imagem aqui */
          alt="Cashier talking to a customer at a grocery store"
          className={styles.hero}
        />
      </figure>

      <section className={styles.dialogueBlock}>
        <h3 className={styles.dialogueTitle}>Talking to a Customer</h3>

        <div className={styles.dialogue}>
          <p className={styles.lineA}>
            <strong className={styles.nameA}>Cashier</strong>:
            Hi there! Did you find everything you were looking for?
          </p>

          <p className={styles.lineB}>
            <strong className={styles.nameB}>Customer</strong>:
            Yes, thank you. Just a quick question, do you have any gluten-free pasta?
          </p>

          <p className={styles.lineA}>
            <strong className={styles.nameA}>Cashier</strong>:
            Yes, we do! Aisle 5, on the left side. They have a good variety there.
          </p>

          <p className={styles.lineB}>
            <strong className={styles.nameB}>Customer</strong>:
            Perfect, thanks! I appreciate it.
          </p>

          <p className={styles.lineA}>
            <strong className={styles.nameA}>Cashier</strong>:
            Not a problem. Is there anything else I can assist you with?
          </p>

          <p className={styles.lineB}>
            <strong className={styles.nameB}>Customer</strong>:
            No, that should be it. Thanks for your help!
          </p>

          <p className={styles.lineA}>
            <strong className={styles.nameA}>Cashier</strong>:
            You're welcome. Have a great day!
          </p>
        </div>
      </section>
    </div>
  );
};

export default Pagina531;
