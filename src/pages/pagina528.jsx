import React, { useEffect } from 'react';
import styles from './pagina528.module.css';

const Pagina528 = ({ onValidar }) => {
  useEffect(() => { if (onValidar) onValidar(true); }, [onValidar]);

  return (
    <div className={styles.page__container}>
      <header className={styles.page__header}>
        <h1 className={styles.page__title}>Real-life Dialogues</h1>
      </header>

      <main className={styles.rows}>
        {/* 1 — imagem à esquerda */}
        <section className={styles.row}>
          <img src="" alt="Swimming pool and fitness" className={styles.row__image} />
          <div className={styles.box}>
            <p className={styles.lineA}>
              <strong className={styles.nameA}>A:</strong> What should you do if you want to improve your physical fitness?
            </p>
            <p className={styles.lineB}>
              <strong className={styles.nameB}>B:</strong> To improve your physical fitness, you should engage in regular exercise,
              such as jogging, swimming, or cycling. Additionally, maintaining a balanced diet rich in fruits, vegetables,
              and lean proteins is essential. Remember to stay <em className={styles.emphasis}>hydrated by drinking plenty of water</em>
              throughout the day.
            </p>
          </div>
        </section>

        {/* 2 — imagem à direita */}
        <section className={`${styles.row} ${styles.rowReverse}`}>
          <div className={styles.box}>
            <p className={styles.lineA}>
              <strong className={styles.nameA}>A:</strong> As a teacher, what advice would you give to students preparing for exams?
            </p>
            <p className={styles.lineB}>
              <strong className={styles.nameB}>B:</strong> Students ought to start preparing well in advance to avoid last-minute
              cramming. They should <em className={styles.emphasis}>create a study schedule</em> and stick to it, allocating time for each subject.
              It’s also crucial to review notes regularly and seek help from teachers or classmates if they encounter difficulties.
            </p>
          </div>
          <img src="" alt="Teacher with students in class" className={styles.row__image} />
        </section>

        {/* 3 — imagem à esquerda */}
        <section className={styles.row}>
          <img src="" alt="Traveler overlooking a city" className={styles.row__image} />
          <div className={styles.box}>
            <p className={styles.lineA}>
              <strong className={styles.nameA}>A:</strong> What should travelers pack to ensure a smooth and enjoyable journey abroad?
            </p>
            <p className={styles.lineB}>
              <strong className={styles.nameB}>B:</strong> Travelers should pack essential items such as travel documents
              (passport, visas), clothing appropriate for the destination’s climate, personal hygiene products, medications,
              and any necessary electronics (phone, charger, adapter). They ought to pack light and avoid overpacking to
              minimize luggage weight and maximize convenience while traveling.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pagina528;
