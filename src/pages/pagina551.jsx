import React, { useEffect } from 'react';
import styles from './pagina551.module.css';

const Pagina551 = ({ onValidar }) => {
  useEffect(() => { onValidar?.(true); }, [onValidar]);

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Real-life Dialogues</h1>

      {/* 1 — At the Beach (texto + imagem à direita) */}
      <section className={styles.row}>
        <div className={styles.box}>
          <h3 className={styles.boxTitle}>At the Beach</h3>

          <p className={styles.lineA}>
            <strong className={styles.nameA}>A:</strong>{' '}
            I really enjoy swimming at the beach. It's so refreshing being in the water and feeling the waves around me.
          </p>

          <p className={styles.lineB}>
            <strong className={styles.nameB}>B:</strong>{' '}
            Yeah, I agree. I've always liked the sound of waves crashing and the sensation of floating.
            Have you ever tried <span className={styles.u}>snorkeling</span>? It's like exploring a whole new world under the sea.
          </p>
        </div>

        <figure className={styles.media}>
          <img src="" alt="Person swimming in the sea" />
        </figure>
      </section>

      {/* 2 — Starting a Hobby (imagem à esquerda + texto) */}
      <section className={`${styles.row} ${styles.swap}`}>
        <figure className={styles.media}>
          <img src="" alt="People painting on easels in an art class" />
        </figure>

        <div className={styles.box}>
          <h3 className={styles.boxTitle}>Starting a Hobby</h3>

          <p className={styles.lineA}>
            <strong className={styles.nameA}>A:</strong>{' '}
            I'm thinking about starting a new hobby.
          </p>

          <p className={styles.lineB}>
            <strong className={styles.nameB}>B:</strong>{' '}
            That sounds interesting. What are you considering doing?
          </p>

          <p className={styles.lineA}>
            <strong className={styles.nameA}>A:</strong>{' '}
            I'm thinking about <span className={styles.u}>painting</span>. I find it relaxing and love
            expressing myself through colors and brushstrokes.
          </p>

          <p className={styles.lineB}>
            <strong className={styles.nameB}>B:</strong>{' '}
            Painting is great! I've tried it before, and I enjoyed mixing colors and creating something unique.
            You might end up discovering a hidden talent.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Pagina551;
