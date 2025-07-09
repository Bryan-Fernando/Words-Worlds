import React from 'react';
import styles from './pagina250.module.css';

const Pagina250 = () => {
  return (
    <div className={styles.page250__container}>
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
            <small>(usado para perguntar sobre a duração total de algo, do início ao fim)</small>
          </span>
        </div>
        <div className={styles.vocabBox}>
          How much longer<br />
          <span>
            Quanto tempo mais<br />Quanto tempo ainda<br />
            <small>
              (usado para perguntar quanto tempo ainda resta até que algo termine ou aconteça)
            </small>
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
              <td>How much</td>
              <td>is</td>
              <td>this book?</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>How much</td>
              <td>is</td>
              <td>the ticket</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>How much</td>
              <td>is</td>
              <td>a sandwich</td>
              <td>—</td>
              <td>—</td>
              <td>at that café?</td>
            </tr>
            <tr>
              <td>How much</td>
              <td>is</td>
              <td>the electricity</td>
              <td>—</td>
              <td>—</td>
              <td>today?</td>
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
              <td>20 dollars</td>
            </tr>
            <tr>
              <td>It</td>
              <td>is</td>
              <td>—</td>
              <td>—</td>
              <td>15 dollars</td>
            </tr>
            <tr>
              <td>It</td>
              <td>is</td>
              <td>—</td>
              <td>—</td>
              <td>12 dollars</td>
            </tr>
            <tr>
              <td>It</td>
              <td>is</td>
              <td>—</td>
              <td>—</td>
              <td>more expensive this month</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Pagina250;
