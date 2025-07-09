import React from 'react';
import styles from './pagina248.module.css';

const Pagina248 = () => {
  return (
    <div className={styles.page248__container}>
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
              <td>How old</td>
              <td>is</td>
              <td>your brother?</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>How old</td>
              <td>are</td>
              <td>you?</td>
              <td>—</td>
              <td>—</td>
              <td>from the station?</td>
            </tr>
            <tr>
              <td>How old</td>
              <td>is</td>
              <td>the building?</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>How old</td>
              <td>is</td>
              <td>your dog?</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
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
              <td>He</td>
              <td>is</td>
              <td>—</td>
              <td>—</td>
              <td>12 years old</td>
            </tr>
            <tr>
              <td>I</td>
              <td>am</td>
              <td>—</td>
              <td>—</td>
              <td>25 years old</td>
            </tr>
            <tr>
              <td>It</td>
              <td>is</td>
              <td>—</td>
              <td>—</td>
              <td>100 years old</td>
            </tr>
            <tr>
              <td>It</td>
              <td>is</td>
              <td>—</td>
              <td>—</td>
              <td>5 years old</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Pagina248;
