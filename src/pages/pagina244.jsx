import React from 'react';
import styles from './pagina244.module.css';

const Pagina244 = () => {
  return (
    <div className={styles.page244__container}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          Grammar - <span className={styles.black}>Question Words</span>
        </h1>
        <p className={styles.subtitle}>
          <span className={styles.red}>Verb To Be</span> <span className={styles.bold}>Simple Present</span>
        </p>
      </header>

      <section className={styles.vocabulary}>
        <div className={styles.vocabBox}>Whose<br /><span>“De quem” (posse)</span></div>
        <div className={styles.vocabBox}>What kind of<br /><span>Que tipo de / espécie de</span></div>
        <div className={styles.vocabBox}>What type of<br /><span>Que tipo de / espécie de</span></div>
        <div className={styles.vocabBox}>What sort of<br /><span>Que tipo de / espécie de</span></div>
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
              <td>Whose bag</td>
              <td>is</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
              <td>this?</td>
            </tr>
            <tr>
              <td>Whose books</td>
              <td>are</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
              <td>on the table?</td>
            </tr>
            <tr>
              <td>Whose phone</td>
              <td>is</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
              <td>that?</td>
            </tr>
            <tr>
              <td>Whose shoes</td>
              <td>are</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
              <td>these?</td>
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
              <td>It</td>
              <td>is</td>
              <td>—</td>
              <td>—</td>
              <td>Maria’s bag</td>
            </tr>
            <tr>
              <td>They</td>
              <td>are</td>
              <td>—</td>
              <td>—</td>
              <td>my books</td>
            </tr>
            <tr>
              <td>That</td>
              <td>is</td>
              <td>—</td>
              <td>—</td>
              <td>his phone</td>
            </tr>
            <tr>
              <td>They</td>
              <td>are</td>
              <td>—</td>
              <td>—</td>
              <td>my sister’s shoes</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Pagina244;
