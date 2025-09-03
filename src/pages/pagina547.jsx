import React, { useEffect } from 'react';
import styles from './pagina547.module.css';

const Pagina547 = ({ onValidar }) => {
  useEffect(() => { onValidar?.(true); }, [onValidar]);

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Real-life Dialogues</h1>

      {/* 1. At the Park (imagem à direita) */}
      <section className={`${styles.card} ${styles.rightImg}`}>
        <div className={styles.content}>
          <h3 className={styles.cardTitle}>At the Park</h3>
          <p className={styles.lineA}>
            <strong className={styles.nameA}>Jack:</strong> Hey, where
            <span className={styles.emph}> were</span> you yesterday afternoon?
          </p>
          <p className={styles.lineB}>
            <strong className={styles.nameB}>Sarah:</strong> I
            <span className={styles.emph}> was</span> at home studying for the exam. Why?
          </p>
          <p className={styles.lineA}>
            <strong className={styles.nameA}>Jack:</strong> Oh, I tried calling you, but you
            <span className={styles.emph}> weren’t</span> answering your phone.
          </p>
        </div>
        <img src="" alt="Friends at the park" className={styles.thumb} />
      </section>

      {/* 2. Shopping (imagem à esquerda) */}
      <section className={`${styles.card} ${styles.leftImg}`}>
        <img src="" alt="People shopping for clothes" className={styles.thumb} />
        <div className={styles.content}>
          <h3 className={styles.cardTitle}>Shopping</h3>
          <p className={styles.lineA}>
            <strong className={styles.nameA}>Emma:</strong> How
            <span className={styles.emph}> were</span> the prices at the new store?
          </p>
          <p className={styles.lineB}>
            <strong className={styles.nameB}>Mike:</strong> Surprisingly good! The clothes
            <span className={styles.emph}> weren’t</span> too expensive, and there
            <span className={styles.emph}> were</span> long queues at the checkout.
          </p>
          <p className={styles.lineA}>
            <strong className={styles.nameA}>Emma:</strong> That’s great! I thought they
            <span className={styles.emph}> were</span> going to be overpriced.
          </p>
        </div>
      </section>

      {/* 3. Family Reunion (imagem à direita) */}
      <section className={`${styles.card} ${styles.rightImg}`}>
        <div className={styles.content}>
          <h3 className={styles.cardTitle}>Family Reunion</h3>
          <p className={styles.lineA}>
            <strong className={styles.nameA}>Jenny:</strong> How
            <span className={styles.emph}> was</span> the family reunion last week?
          </p>
          <p className={styles.lineB}>
            <strong className={styles.nameB}>Tom:</strong> It
            <span className={styles.emph}> was</span> fantastic! Everyone
            <span className={styles.emph}> was</span> there, and the food
            <span className={styles.emph}> was</span> delicious. You
            <span className={styles.emph}> were</span> there, right?
          </p>
          <p className={styles.lineA}>
            <strong className={styles.nameA}>Jenny:</strong> No, I
            <span className={styles.emph}> wasn’t</span> able to make it, unfortunately.
          </p>
        </div>
        <img src="" alt="Family dinner gathering" className={styles.thumb} />
      </section>

      {/* 4. Rock concert (imagem à esquerda, monólogo) */}
      <section className={`${styles.card} ${styles.leftImg}`}>
        <img src="" alt="Rock concert crowd" className={styles.thumb} />
        <div className={styles.content}>
          <h3 className={styles.cardTitle}>Rock concert</h3>
          <p className={styles.lineA}>
            Hiya, Oggi. My bad. I
            <span className={styles.emph}> wasn’t</span> at home last Friday. I
            <span className={styles.emph}> was</span> at a rock concert. The band
            <span className={styles.emph}> was</span> superb. It
            <span className={styles.emph}> was</span> super fun. The weather
            <span className={styles.emph}> was</span> cool. The perfect evening. Also, the drinks
            <span className={styles.emph}> were</span> not pricey, and the snacks
            <span className={styles.emph}> were</span> delicious.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Pagina547;
