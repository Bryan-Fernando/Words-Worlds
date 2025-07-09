import React from 'react';
import styles from './pagina239.module.css';

const Pagina239 = () => {
  return (
    <div className={styles.page239__container}>
      <header className={styles.page239__header}>
        <h1 className={styles.page239__title}>
          Grammar - <span className={styles.black}>Question Words</span>
        </h1>
        <p className={styles.subtitle}>
          <span className={styles.red}>Verb To Be</span> <span className={styles.bold}>Simple Present</span>
        </p>
      </header>

      <section className={styles.vocabularySection}>
        <div className={styles.vocabBox}>What<br /><span className={styles.vocabTrans}>O que, que, qual, quais</span></div>
        <div className={styles.vocabBox}>Where<br /><span className={styles.vocabTrans}>Onde, aonde</span></div>
        <div className={styles.vocabBox}>When<br /><span className={styles.vocabTrans}>Quando</span></div>
        <div className={styles.vocabBox}>What time<br /><span className={styles.vocabTrans}>Que horas</span></div>
      </section>

      <section className={styles.tableSection}>
        <div className={styles.tableTitle}>Question Words</div>
        <div className={styles.subTitle}>Interrogative Form</div>
        <table className={styles.grammarTable}>
          <thead>
            <tr>
              <th>Palavras interrogativas</th>
              <th>Aux. Verb</th>
              <th>Subject</th>
              <th>Adv</th>
              <th>Verb(s)</th>
              <th>Object Complement</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>What time</td>
              <td>is</td>
              <td>it?</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>What time</td>
              <td>are</td>
              <td>Pedro and Joe</td>
              <td>—</td>
              <td>—</td>
              <td>free?</td>
            </tr>
            <tr>
              <td>What time</td>
              <td>is</td>
              <td>Pam</td>
              <td>—</td>
              <td>—</td>
              <td>available?</td>
            </tr>
            <tr>
              <td>What time</td>
              <td>are</td>
              <td>we</td>
              <td>—</td>
              <td>—</td>
              <td>at home?</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className={styles.tableSection}>
        <div className={styles.subTitle}>Affirmative Form</div>
        <table className={styles.grammarTable}>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Aux. Verb</th>
              <th>Adv</th>
              <th>Verb (BF)</th>
              <th>Object Complement</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>It</td>
              <td>is</td>
              <td>—</td>
              <td>—</td>
              <td>7 o'clock</td>
            </tr>
            <tr>
              <td>It</td>
              <td>is</td>
              <td>—</td>
              <td>—</td>
              <td>at 3 p.m.</td>
            </tr>
            <tr>
              <td>They</td>
              <td>are</td>
              <td>—</td>
              <td>—</td>
              <td>here at 6.</td>
            </tr>
            <tr>
              <td>We</td>
              <td>are</td>
              <td>—</td>
              <td>—</td>
              <td>at home at 5:00 p.m.</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Pagina239;
