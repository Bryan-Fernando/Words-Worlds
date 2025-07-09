import React from 'react';
import styles from './pagina243.module.css';

const Pagina243 = () => {
  return (
    <div className={styles.page243__container}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          Grammar - <span className={styles.black}>Question Words</span>
        </h1>
        <p className={styles.subtitle}>
          <span className={styles.red}>Verb To Be</span> <span className={styles.bold}>Simple Present</span>
        </p>
      </header>

      <section className={styles.vocabulary}>
        <div className={styles.vocabBox}>Why<br /><span>“Por que” (em perguntas)</span></div>
        <div className={styles.vocabBox}>Who<br /><span>Quem</span></div>
        <div className={styles.vocabBox}>Which<br /><span>Que, qual, quais (opção)</span></div>
        <div className={styles.vocabBox}>What size<br /><span>Que tamanho / Qual tamanho</span></div>
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
              <td>What size</td>
              <td>are</td>
              <td>they?</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>What size</td>
              <td>is</td>
              <td>he?</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>What size</td>
              <td>are</td>
              <td>you?</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>What size</td>
              <td>is</td>
              <td>she?</td>
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
              <td>They</td>
              <td>are</td>
              <td>—</td>
              <td>—</td>
              <td>size medium</td>
            </tr>
            <tr>
              <td>He</td>
              <td>is</td>
              <td>—</td>
              <td>—</td>
              <td>size large</td>
            </tr>
            <tr>
              <td>I</td>
              <td>am</td>
              <td>—</td>
              <td>—</td>
              <td>size 38</td>
            </tr>
            <tr>
              <td>She</td>
              <td>is</td>
              <td>—</td>
              <td>—</td>
              <td>size small</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Pagina243;
