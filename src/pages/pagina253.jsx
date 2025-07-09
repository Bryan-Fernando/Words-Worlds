import React from 'react';
import styles from './pagina253.module.css';

const Pagina253 = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>
          Grammar - <span className={styles.black}>Question Words</span>
        </h1>
        <p className={styles.subtitle}>
          <span className={styles.red}>Verb To Be</span> <span className={styles.bold}>Simple Present</span>
        </p>
      </header>

      <section className={styles.vocabSection}>
        <div className={styles.vocabBox}>How many times<br /><span>Quantas vezes</span></div>
        <div className={styles.vocabBox}>How many times a day<br /><span>Quantas vezes por dia</span></div>
        <div className={styles.vocabBox}>How many times a week<br /><span>Quantas vezes por semana</span></div>
        <div className={styles.vocabBox}>How many times a month<br /><span>Quantas vezes por mês</span></div>
        <div className={styles.vocabBox}>How many times a year<br /><span>Quantas vezes por ano</span></div>
      </section>

      <section>
        <h2 className={styles.sectionTitle}>Question Words</h2>
        <h3 className={styles.subSectionTitle}>Interrogative Form</h3>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Palavras interrogativas</th>
              <th>Aux. Verb</th>
              <th>Subject</th>
              <th>Adv</th>
              <th>Verb (s)</th>
              <th>Object Complement</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>How many times</td>
              <td>is</td>
              <td>the bus</td>
              <td>—</td>
              <td>—</td>
              <td>late?</td>
            </tr>
            <tr>
              <td>How many times a day</td>
              <td>are</td>
              <td>the windows</td>
              <td>—</td>
              <td>cleaned?</td>
              <td>—</td>
            </tr>
            <tr>
              <td>How many times a week</td>
              <td>is</td>
              <td>the trash</td>
              <td>—</td>
              <td>collected?</td>
              <td>—</td>
            </tr>
            <tr>
              <td>How many times a month</td>
              <td>are</td>
              <td>you</td>
              <td>—</td>
              <td>—</td>
              <td>at the beach?</td>
            </tr>
            <tr>
              <td>How many times a year</td>
              <td>is</td>
              <td>the</td>
              <td>—</td>
              <td>—</td>
              <td>festival?</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h3 className={styles.subSectionTitle}>Affirmative Form</h3>
        <table className={styles.table}>
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
              <td>late very often</td>
            </tr>
            <tr>
              <td>They</td>
              <td>are</td>
              <td>—</td>
              <td>cleaned</td>
              <td>twice a day</td>
            </tr>
            <tr>
              <td>It</td>
              <td>is</td>
              <td>—</td>
              <td>collected</td>
              <td>once a week</td>
            </tr>
            <tr>
              <td>I</td>
              <td>am</td>
              <td>—</td>
              <td>—</td>
              <td>three times a month</td>
            </tr>
            <tr>
              <td>They</td>
              <td>are</td>
              <td>—</td>
              <td>—</td>
              <td>two times a year</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Pagina253;
