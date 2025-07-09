import React from 'react';
import styles from './pagina242.module.css';

const Pagina242 = () => {
  return (
    <div className={styles.page242__container}>
      <header className={styles.page242__header}>
        <h1 className={styles.page242__title}>
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
              <td>Which color</td>
              <td>is</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
              <td>your favorite?</td>
            </tr>
            <tr>
              <td>Which of these 3 books</td>
              <td>is</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
              <td>on the top 10 list?</td>
            </tr>
            <tr>
              <td>Which game</td>
              <td>is</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
              <td>his favorite?</td>
            </tr>
            <tr>
              <td>Which snacks</td>
              <td>are</td>
              <td>—</td>
              <td>usual</td>
              <td>—</td>
              <td>at your parties?</td>
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
              <td>Blue</td>
              <td>is</td>
              <td>—</td>
              <td>—</td>
              <td>my favorite</td>
            </tr>
            <tr>
              <td>“The Little Prince”</td>
              <td>is</td>
              <td>—</td>
              <td>—</td>
              <td>on the top 10 list</td>
            </tr>
            <tr>
              <td>It</td>
              <td>is</td>
              <td>—</td>
              <td>—</td>
              <td>chess</td>
            </tr>
            <tr>
              <td>Chips and soda</td>
              <td>are</td>
              <td>usual</td>
              <td>—</td>
              <td>at our parties</td>
            </tr>
          </tbody>
        </table>
      </section>

      <footer className={styles.noteBox}>
        <strong>Nota:</strong>
        <ul>
          <li>Quando usamos <strong>which</strong>, normalmente estamos escolhendo entre duas ou mais opções limitadas.</li>
        </ul>
      </footer>
    </div>
  );
};

export default Pagina242;
