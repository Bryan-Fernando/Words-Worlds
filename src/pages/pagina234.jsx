import React from 'react';
import styles from './pagina234.module.css';

const Pagina234 = () => {
  return (
    <div className={styles.page234__container}>
      <header className={styles.page234__header}>
        <h1 className={styles.page234__title}>
          Grammar – <span className={styles.page234__title_black}>Simple Present</span>
        </h1>
        <p className={styles.page234__subtitle}>
          Verbo <strong>To Be</strong> (Ser, Estar ou <span className={styles.page234__highlight}>Ter somente para idade</span>)
        </p>
      </header>

      <main className={styles.page234__main}>
        <section className={styles.page234__tableSection}>
          <div className={styles.page234__tableTitle}>Negative Interrogative Form</div>
          <table className={styles.page234__table}>
            <thead>
              <tr>
                <th>Aux. Verb</th>
                <th>Subject</th>
                <th>Not</th>
                <th>Verb(s)</th>
                <th>Object Complement</th>
              </tr>
            </thead>
            <tbody>
              {/* I */}
              <tr>
                <td><strong>Am</strong><br />Ain’t</td>
                <td>I<br /><span className={styles.translation}>Eu</span></td>
                <td>not<br />não</td>
                <td>—</td>
                <td>...?</td>
              </tr>
              <tr>
                <td></td><td></td><td></td>
                <td>—</td>
                <td>...?</td>
              </tr>
              <tr>
                <td></td><td></td><td></td>
                <td>—</td>
                <td>(somente para idade) ...?</td>
              </tr>

              {/* He */}
              <tr>
                <td><strong>Is</strong><br />Isn’t</td>
                <td>he<br /><span className={styles.translation}>Ele</span></td>
                <td>not<br />não</td>
                <td>—</td>
                <td>...?</td>
              </tr>
              <tr><td></td><td></td><td></td><td>—</td><td>...?</td></tr>
              <tr><td></td><td></td><td></td><td>—</td><td>(somente para idade) ...?</td></tr>

              {/* She */}
              <tr>
                <td><strong>Is</strong><br />Isn’t</td>
                <td>she<br /><span className={styles.translation}>Ela</span></td>
                <td>not<br />não</td>
                <td>—</td>
                <td>...?</td>
              </tr>
              <tr><td></td><td></td><td></td><td>—</td><td>...?</td></tr>
              <tr><td></td><td></td><td></td><td>—</td><td>(somente para idade) ...?</td></tr>

              {/* It */}
              <tr>
                <td><strong>Is</strong><br />Isn’t</td>
                <td>it<br /><span className={styles.translation}>—</span></td>
                <td>not<br />Não</td>
                <td>—</td>
                <td>...?</td>
              </tr>
              <tr><td></td><td></td><td></td><td>—</td><td>...?</td></tr>
              <tr><td></td><td></td><td></td><td>—</td><td>(somente para idade) ...?</td></tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default Pagina234;
