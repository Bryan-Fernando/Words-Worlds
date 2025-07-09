import React from 'react';
import styles from './pagina251.module.css';

const Pagina251 = () => {
  return (
    <div className={styles.page251__container}>
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
            <small>(pergunta sobre a duração total — do início ao fim)</small>
          </span>
        </div>
        <div className={styles.vocabBox}>
          How much longer<br />
          <span>
            Quanto tempo mais / ainda<br />
            <small>(foco no tempo restante)</small>
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
              <td>How many students</td>
              <td>are</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
              <td>in your class?</td>
            </tr>
            <tr>
              <td>How many people</td>
              <td>are</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
              <td>at the party?</td>
            </tr>
            <tr>
              <td>How many books</td>
              <td>are</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
              <td>on the table?</td>
            </tr>
            <tr>
              <td>How many windows</td>
              <td>are</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
              <td>in your house?</td>
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
              <td>There</td>
              <td>are</td>
              <td>—</td>
              <td>—</td>
              <td>30 students</td>
            </tr>
            <tr>
              <td>There</td>
              <td>are</td>
              <td>—</td>
              <td>—</td>
              <td>50 people</td>
            </tr>
            <tr>
              <td>There</td>
              <td>are</td>
              <td>—</td>
              <td>—</td>
              <td>4 books</td>
            </tr>
            <tr>
              <td>There</td>
              <td>are</td>
              <td>—</td>
              <td>—</td>
              <td>6 windows</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Pagina251;
