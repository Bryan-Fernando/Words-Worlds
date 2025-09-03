import React, { useEffect } from 'react';
import styles from './pagina548.module.css';

const Pagina548 = ({ onValidar }) => {
  useEffect(() => { onValidar?.(true); }, [onValidar]);

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Real-life Dialogues</h1>

      {/* 1 — texto + imagem à direita */}
      <section className={styles.row}>
        <div className={styles.box}>
          <h3 className={styles.boxTitle}>Arranging a Meeting</h3>
          <p className={styles.lineA}>
            <strong className={styles.nameA}>John:</strong>{' '}
            Are you free for a meeting tomorrow afternoon?
          </p>
          <p className={styles.lineB}>
            <strong className={styles.nameB}>Sarah:</strong>{' '}
            I may be available. I’ll need to check my schedule first.
          </p>
          <p className={styles.lineA}>
            <strong className={styles.nameA}>John:</strong>{' '}
            No problem. Let me know if you can make it.
          </p>
        </div>

        <figure className={styles.media}>
          <img src="" alt="Person planning a meeting" />
        </figure>
      </section>

      {/* 2 — imagem à esquerda + texto */}
      <section className={`${styles.row} ${styles.swap}`}>
        <figure className={styles.media}>
          <img src="" alt="Coworkers checking a book at the office" />
        </figure>

        <div className={styles.box}>
          <h3 className={styles.boxTitle}>Discussing Plans</h3>
          <p className={styles.lineA}>
            <strong className={styles.nameA}>Amy:</strong>{' '}
            Do you think it will rain tomorrow?
          </p>
          <p className={styles.lineB}>
            <strong className={styles.nameB}>Ben:</strong>{' '}
            It might rain, but the forecast isn’t certain.
          </p>
          <p className={styles.lineA}>
            <strong className={styles.nameA}>Amy:</strong>{' '}
            Should we bring umbrellas then?
          </p>
          <p className={styles.lineB}>
            <strong className={styles.nameB}>Ben:</strong>{' '}
            Yes, we might need them just in case.
          </p>
        </div>
      </section>

      {/* 3 — texto + imagem à direita */}
      <section className={styles.row}>
        <div className={styles.box}>
          <h3 className={styles.boxTitle}>Making Plans for the Weekend</h3>
          <p className={styles.lineA}>
            <strong className={styles.nameA}>Emma:</strong>{' '}
            Want to go hiking this weekend?
          </p>
          <p className={styles.lineB}>
            <strong className={styles.nameB}>Mike:</strong>{' '}
            I'm not sure; I might not be available. I could have some family commitments pop up.
          </p>
          <p className={styles.lineA}>
            <strong className={styles.nameA}>Emma:</strong>{' '}
            No problem at all. Let’s keep our plans flexible, and if you can make it, that’s great!
          </p>
        </div>

        <figure className={styles.media}>
          <img src="" alt="Friends in sportswear planning the weekend" />
        </figure>
      </section>

      {/* 4 — imagem à esquerda + texto */}
      <section className={`${styles.row} ${styles.swap}`}>
        <figure className={styles.media}>
          <img src="" alt="Person picking up a package by the door" />
        </figure>

        <div className={styles.box}>
          <h3 className={styles.boxTitle}>Waiting for a Delivery</h3>
          <p className={styles.lineA}>
            <strong className={styles.nameA}>Alex:</strong>{' '}
            Has the package arrived yet?
          </p>
          <p className={styles.lineB}>
            <strong className={styles.nameB}>Lisa:</strong>{' '}
            Not yet. It might not come until later today.
          </p>
          <p className={styles.lineA}>
            <strong className={styles.nameA}>Alex:</strong>{' '}
            I hope it arrives soon; I need it for the presentation.
          </p>
        </div>
      </section>

      {/* 5 — texto + imagem à direita */}
      <section className={styles.row}>
        <div className={styles.box}>
          <h3 className={styles.boxTitle}>Asking for Permission</h3>
          <p className={styles.lineA}>
            <strong className={styles.nameA}>Sam:</strong>{' '}
            May I use your computer to finish this assignment?
          </p>
          <p className={styles.lineB}>
            <strong className={styles.nameB}>Jess:</strong>{' '}
            Sorry, I’m using it right now. You may not be able to use it until later.
          </p>
          <p className={styles.lineA}>
            <strong className={styles.nameA}>Sam:</strong>{' '}
            Alright, no problem. I’ll try again later.
          </p>
        </div>

        <figure className={styles.media}>
          <img src="" alt="Student working on a laptop at home" />
        </figure>
      </section>
    </div>
  );
};

export default Pagina548;
