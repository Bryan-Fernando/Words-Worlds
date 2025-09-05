import React, { useEffect } from 'react';
import styles from './pagina559.module.css';

const Pagina559 = ({ onValidar }) => {
  useEffect(() => { onValidar?.(true); }, [onValidar]);

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Real-life Dialogues</h1>
      <h2 className={styles.subtitle}>Part 2 / 2</h2>

      <figure className={styles.heroWrap}>
        <img
          src="" /* sua imagem aqui */
          alt="Friends chatting at a restaurant table"
          className={styles.hero}
        />
      </figure>

      <main className={styles.dialog}>
        <p className={styles.lineA}>
          <strong className={styles.nameA}>Jake:</strong>{' '}
          The main course is diverse. I went for the Grilled Salmon with Lemon Dill Sauce, and it
          was cooked to perfection. The chef really knows their way around seafood.
        </p>

        <p className={styles.lineB}>
          <strong className={styles.nameB}>Lisa:</strong>{' '}
          Mmm, salmon is my favorite! I can't wait to try that. What about desserts?
        </p>

        <p className={styles.lineA}>
          <strong className={styles.nameA}>Jake:</strong>{' '}
          Oh, you're in for a treat. The desserts are divine. I had the Chocolate Lava Cake, and it
          was pure indulgence. The warm, gooey chocolate center just melts in your mouth.
        </p>

        <p className={styles.lineB}>
          <strong className={styles.nameB}>Lisa:</strong>{' '}
          You're making my mouth water! We definitely need to plan a visit soon. How was the
          overall ambiance?
        </p>

        <p className={styles.lineA}>
          <strong className={styles.nameA}>Jake:</strong>{' '}
          The ambiance is fantastic – a mix of rustic and modern decor. Plus, the service was
          impeccable. I think it's going to become the go-to place in town.
        </p>

        <p className={styles.lineB}>
          <strong className={styles.nameB}>Lisa:</strong>{' '}
          Sounds like the perfect spot for a dinner date. Let's make a reservation for this
          weekend. I can't wait to try those appetizers, main courses, and desserts you've
          raved about!
        </p>

        <p className={styles.lineA}>
          <strong className={styles.nameA}>Jake:</strong>{' '}
          Great idea, Lisa! It'll be a feast to remember.
        </p>
      </main>
    </div>
  );
};

export default Pagina559;
