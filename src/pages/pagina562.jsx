import React, { useEffect } from 'react';
import styles from './pagina562.module.css';

const Pagina562 = ({ onValidar }) => {
  useEffect(() => { onValidar?.(true); }, [onValidar]);

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Real-life Dialogues</h1>
      <h2 className={styles.subtitle}>Daily Routines with Kids</h2>

      <figure className={styles.heroWrap}>
        <img
          src="" /* adicione aqui a imagem */
          alt="Two friends chatting by the lake"
          className={styles.hero}
        />
      </figure>

      <main className={styles.dialog}>
        <p className={styles.lineA}>
          <strong className={styles.nameA}>Susan:</strong>{' '}
          Hi, Carol! How have you been?
        </p>

        <p className={styles.lineB}>
          <strong className={styles.nameB}>Carol:</strong>{' '}
          <em>
            Oh, hi Susan! I've been good, just a bit busy with the kids and work.
            How about you?
          </em>
        </p>

        <p className={styles.lineA}>
          <strong className={styles.nameA}>Susan:</strong>{' '}
          I know the feeling! How long does it usually take you to manage
          everything with the kids and work?
        </p>

        <p className={styles.lineB}>
          <strong className={styles.nameB}>Carol:</strong>{' '}
          <em>
            Well, it takes a bit of juggling, but I've got a routine. By the way,
            how long does it take Sarah to finish her homework?
          </em>
        </p>

        <p className={styles.lineA}>
          <strong className={styles.nameA}>Susan:</strong>{' '}
          She's pretty quick with most subjects, but math can be a challenge.
          How long does it take Timmy to do his homework?
        </p>

        <p className={styles.lineB}>
          <strong className={styles.nameB}>Carol:</strong>{' '}
          <em>
            Timmy takes his time, especially with math. I was thinking of getting
            him a tutor. How long did it take for Sarah to improve with the tutor?
          </em>
        </p>

        <p className={styles.lineA}>
          <strong className={styles.nameA}>Susan:</strong>{' '}
          It took a few weeks, but the improvement was noticeable. The tutor
          really helped her. Do you want their contact?
        </p>

        <p className={styles.lineB}>
          <strong className={styles.nameB}>Carol:</strong>{' '}
          <em>
            That would be great, thanks! And how long does it usually take for the
            kids to get ready in the morning?
          </em>
        </p>

        <p className={styles.lineA}>
          <strong className={styles.nameA}>Susan:</strong>{' '}
          Oh, mornings are a bit chaotic, but I'd say about 30 minutes if we stick
          to the schedule. How about your mornings?
        </p>
      </main>
    </div>
  );
};

export default Pagina562;
