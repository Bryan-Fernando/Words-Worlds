import React, { useEffect } from 'react';
import styles from './pagina549.module.css';

const Pagina549 = ({ onValidar }) => {
  useEffect(() => { onValidar?.(true); }, [onValidar]);

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Real-life Dialogues</h1>

      {/* 1 — texto + imagem à direita */}
      <section className={styles.row}>
        <div className={styles.box}>
          <h3 className={styles.boxTitle}>Making Plans</h3>
          <p className={styles.lineA}>
            <strong className={styles.nameA}>Alex:</strong>{' '}
            What do you want to do this weekend?
          </p>
          <p className={styles.lineB}>
            <strong className={styles.nameB}>Sarah:</strong>{' '}
            We could go hiking or maybe visit the museum.
          </p>
          <p className={styles.lineA}>
            <strong className={styles.nameA}>Alex:</strong>{' '}
            I think we should go hiking. The weather's supposed to be great.
          </p>
        </div>
        <figure className={styles.media}>
          <img src="" alt="Person planning weekend activities" />
        </figure>
      </section>

      {/* 2 — imagem à esquerda + texto */}
      <section className={`${styles.row} ${styles.swap}`}>
        <figure className={styles.media}>
          <img src="" alt="Vintage sign asking for permission" />
        </figure>
        <div className={styles.box}>
          <h3 className={styles.boxTitle}>Asking for Permission</h3>
          <p className={styles.lineA}>
            <strong className={styles.nameA}>Mark:</strong>{' '}
            Can I borrow your car for a few hours?
          </p>
          <p className={styles.lineB}>
            <strong className={styles.nameB}>Anna:</strong>{' '}
            I'm sorry, I'm using it later. You may use it tomorrow morning.
          </p>
        </div>
      </section>

      {/* 3 — texto + imagem à direita */}
      <section className={styles.row}>
        <div className={styles.box}>
          <h3 className={styles.boxTitle}>Giving Advice</h3>
          <p className={styles.lineA}>
            <strong className={styles.nameA}>Emily:</strong>{' '}
            I have a job interview tomorrow, and I'm really nervous.
          </p>
          <p className={styles.lineB}>
            <strong className={styles.nameB}>David:</strong>{' '}
            You should prepare well, research the company, and practice your answers.
          </p>
        </div>
        <figure className={styles.media}>
          <img src="" alt="Colleagues discussing advice at work" />
        </figure>
      </section>

      {/* 4 — imagem à esquerda + texto */}
      <section className={`${styles.row} ${styles.swap}`}>
        <figure className={styles.media}>
          <img src="" alt="Street musician near subway entrance" />
        </figure>
        <div className={styles.box}>
          <h3 className={styles.boxTitle}>Expressing Possibility</h3>
          <p className={styles.lineA}>
            <strong className={styles.nameA}>Lucy:</strong>{' '}
            Do you think John will come to the party?
          </p>
          <p className={styles.lineB}>
            <strong className={styles.nameB}>Mike:</strong>{' '}
            He might come, but he mentioned he had other plans.
          </p>
        </div>
      </section>

      {/* 5 — texto + imagem à direita */}
      <section className={styles.row}>
        <div className={styles.box}>
          <h3 className={styles.boxTitle}>Offering Assistance</h3>
          <p className={styles.lineA}>
            <strong className={styles.nameA}>Lisa:</strong>{' '}
            I'm not sure how to fix this computer issue.
          </p>
          <p className={styles.lineB}>
            <strong className={styles.nameB}>Tom:</strong>{' '}
            I can help you with that. Let me take a look.
          </p>
        </div>
        <figure className={styles.media}>
          <img src="" alt="Coworkers outside reviewing documents" />
        </figure>
      </section>
    </div>
  );
};

export default Pagina549;
