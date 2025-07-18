import React from 'react';
import styles from './pagina238.module.css';

const Pagina238 = () => {
  return (
    <div className={styles.page238__container}>
      <header className={styles.page238__header}>
        <h1 className={styles.page238__title}>
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
              <td>When</td>
              <td>is</td>
              <td>the class</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>When</td>
              <td>are</td>
              <td>we</td>
              <td>—</td>
              <td>—</td>
              <td>free?</td>
            </tr>
            <tr>
              <td>When</td>
              <td>is</td>
              <td>Pam</td>
              <td>—</td>
              <td>—</td>
              <td>available?</td>
            </tr>
            <tr>
              <td>When</td>
              <td>is</td>
              <td>the conference?</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
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
              <td>at 10 a.m.</td>
            </tr>
            <tr>
              <td>We</td>
              <td>are</td>
              <td>—</td>
              <td>—</td>
              <td>free on Friday.</td>
            </tr>
            <tr>
              <td>She</td>
              <td>is</td>
              <td>—</td>
              <td>—</td>
              <td>available in the afternoon</td>
            </tr>
            <tr>
              <td>It</td>
              <td>is</td>
              <td>—</td>
              <td>—</td>
              <td>on May 10th</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Pagina238;
