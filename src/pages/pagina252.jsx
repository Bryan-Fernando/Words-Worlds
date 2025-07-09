import React from 'react';
import styles from './pagina252.module.css';

const Pagina252 = () => {
  return (
    <div className={styles.page252__container}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          Grammar - <span className={styles.black}>Question Words</span>
        </h1>
        <p className={styles.subtitle}>
          <span className={styles.red}>Verb To Be</span> <span className={styles.bold}>Simple Present</span>
        </p>
      </header>

      <section className={styles.vocabulary}>
        <div className={styles.vocabBox}>
          How much<br />
          <span>
            Quanto / quanta / quanto de<br />
            <i>(substantivos incontáveis)</i>
          </span>
        </div>
        <div className={styles.vocabBox}>
          How many<br />
          <span>
            Quantos / quantas<br />
            <i>(substantivos contáveis)</i>
          </span>
        </div>
        <div className={styles.vocabBox}>
          How long<br />
          <span>
            Quanto tempo<br />
            <small>(usado para perguntar sobre a duração total de algo — do início ao fim)</small>
          </span>
        </div>
        <div className={styles.vocabBox}>
          How much longer<br />
          <span>
            Quanto tempo mais / ainda<br />
            <small>(tempo restante até algo terminar)</small>
          </span>
        </div>
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
              <td>How long</td>
              <td>is</td>
              <td>the class?</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>How long</td>
              <td>is</td>
              <td>the movie?</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>How long</td>
              <td>is</td>
              <td>your</td>
              <td>—</td>
              <td>—</td>
              <td>lunch break?</td>
            </tr>
            <tr>
              <td>How long</td>
              <td>are</td>
              <td>the meetings</td>
              <td>—</td>
              <td>—</td>
              <td>on Monday?</td>
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
              <td>50 minutes</td>
            </tr>
            <tr>
              <td>It</td>
              <td>is</td>
              <td>—</td>
              <td>—</td>
              <td>2 hours and 30 minutes</td>
            </tr>
            <tr>
              <td>It</td>
              <td>is</td>
              <td>—</td>
              <td>—</td>
              <td>45 minutes</td>
            </tr>
            <tr>
              <td>They</td>
              <td>are</td>
              <td>usually</td>
              <td>—</td>
              <td>one hour long</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Pagina252;
