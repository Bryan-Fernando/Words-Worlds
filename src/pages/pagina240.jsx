import React from 'react';
import styles from './pagina240.module.css';

const Pagina240 = () => {
  return (
    <div className={styles.page240__container}>
      <header className={styles.page240__header}>
        <h1 className={styles.page240__title}>
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
              <td>Why</td>
              <td>are</td>
              <td>you</td>
              <td>—</td>
              <td>—</td>
              <td>late?</td>
            </tr>
            <tr>
              <td>Why</td>
              <td>are</td>
              <td>Pedro and Joe</td>
              <td>—</td>
              <td>—</td>
              <td>at home?</td>
            </tr>
            <tr>
              <td>Why</td>
              <td>is</td>
              <td>Pam</td>
              <td>—</td>
              <td>—</td>
              <td>happy?</td>
            </tr>
            <tr>
              <td>Why</td>
              <td>is</td>
              <td>it</td>
              <td>—</td>
              <td>—</td>
              <td>cold in here?</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className={styles.tableSection}>
        <div className={styles.subTitle}>Affirmative Form</div>
        <table className={styles.grammarTable}>
          <thead>
            <tr>
              <th>Introduction</th>
              <th>Subject</th>
              <th>Aux. Verb</th>
              <th>Adv</th>
              <th>Verb</th>
              <th>Object Complement</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Because</td>
              <td>the bus</td>
              <td>is</td>
              <td>always</td>
              <td>—</td>
              <td>slow</td>
            </tr>
            <tr>
              <td>Because</td>
              <td>they</td>
              <td>are</td>
              <td>—</td>
              <td>—</td>
              <td>sick</td>
            </tr>
            <tr>
              <td>Because</td>
              <td>today</td>
              <td>is</td>
              <td>—</td>
              <td>—</td>
              <td>her birthday</td>
            </tr>
            <tr>
              <td>Because</td>
              <td>the window</td>
              <td>is</td>
              <td>—</td>
              <td>—</td>
              <td>open</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className={styles.noteSection}>
        <p>
          <strong>*Nota:</strong><br />
          <span className={styles.red}>“Why”</span> = “Por que?” em perguntas<br />
          <span className={styles.red}>“Because”</span> = “Porque” em respostas
        </p>
      </section>
    </div>
  );
};

export default Pagina240;
