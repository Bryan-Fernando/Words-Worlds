import React from 'react';
import styles from './pagina249.module.css';

const Pagina249 = () => {
  return (
    <div className={styles.page249__container}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          Grammar - <span className={styles.black}>Question Words</span>
        </h1>
        <p className={styles.subtitle}>
          <span className={styles.red}>Verb To Be</span> <span className={styles.bold}>Simple Present</span>
        </p>
      </header>

      <section className={styles.vocabulary}>
        <div className={styles.vocabBox}>How<br /><span>Como - Quão<br />(adjetivo / advérbio)</span></div>
        <div className={styles.vocabBox}>How far<br /><span>Quão longe<br />Que distância</span></div>
        <div className={styles.vocabBox}>How old<br /><span>Quantos anos<br />Quão velho<br />(<i>somente para idade</i>)</span></div>
        <div className={styles.vocabBox}>How often<br /><span>Com que frequência<br />Quão frequente</span></div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionTitle}>Question Words</div>
        <h2 className={styles.formTitle}>Interrogative Form</h2>
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
              <td>How often</td>
              <td>are</td>
              <td>you</td>
              <td>—</td>
              <td>—</td>
              <td>at home on weekends?</td>
            </tr>
            <tr>
              <td>How often</td>
              <td>is</td>
              <td>the bus</td>
              <td>—</td>
              <td>—</td>
              <td>early?</td>
            </tr>
            <tr>
              <td>How often</td>
              <td>is</td>
              <td>your class online?</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>How often</td>
              <td>are</td>
              <td>we</td>
              <td>—</td>
              <td>—</td>
              <td>in the same group?</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className={styles.section}>
        <h2 className={styles.formTitle}>Affirmative Form</h2>
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
              <td>I</td>
              <td>am</td>
              <td>usually</td>
              <td>—</td>
              <td>at home on Sundays</td>
            </tr>
            <tr>
              <td>It</td>
              <td>id</td>
              <td>—</td>
              <td>—</td>
              <td>early in the morning</td>
            </tr>
            <tr>
              <td>It</td>
              <td>is</td>
              <td>—</td>
              <td>—</td>
              <td>online three times a week</td>
            </tr>
            <tr>
              <td>We</td>
              <td>are</td>
              <td>usually</td>
              <td>—</td>
              <td>together in projects</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Pagina249;
