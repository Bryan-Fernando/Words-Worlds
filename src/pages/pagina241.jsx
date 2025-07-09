import React from 'react';
import styles from './pagina241.module.css';

const Pagina241 = () => {
  return (
    <div className={styles.page241__container}>
      <header className={styles.page241__header}>
        <h1 className={styles.page241__title}>
          Grammar - <span className={styles.black}>Question Words</span>
        </h1>
        <p className={styles.subtitle}>
          <span className={styles.red}>Verb To Be</span> <span className={styles.bold}>Simple Present</span>
        </p>
      </header>

      <section className={styles.vocabularySection}>
        <div className={styles.vocabBox}>Why<br /><span className={styles.vocabTrans}>"Por que?" (em perguntas)</span></div>
        <div className={styles.vocabBox}>Who<br /><span className={styles.vocabTrans}>Quem</span></div>
        <div className={styles.vocabBox}>Which<br /><span className={styles.vocabTrans}>Que, qual, quais (opção)</span></div>
        <div className={styles.vocabBox}>What size<br /><span className={styles.vocabTrans}>Que tamanho, qual tamanho</span></div>
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
              <th>Verb (s)</th>
              <th>Object Complement</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Who</td>
              <td>are</td>
              <td>you?</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>Who</td>
              <td>is</td>
              <td>he?</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>Who</td>
              <td>is</td>
              <td>it?</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>Who</td>
              <td>are</td>
              <td>they?</td>
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
              <td>I</td>
              <td>am</td>
              <td>—</td>
              <td>—</td>
              <td>your English teacher</td>
            </tr>
            <tr>
              <td>He</td>
              <td>is</td>
              <td>—</td>
              <td>—</td>
              <td>my best friend - Eric</td>
            </tr>
            <tr>
              <td>It</td>
              <td>is</td>
              <td>—</td>
              <td>—</td>
              <td>me - John</td>
            </tr>
            <tr>
              <td>They</td>
              <td>are</td>
              <td>—</td>
              <td>—</td>
              <td>my cousins - Mary and Joe</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Pagina241;
