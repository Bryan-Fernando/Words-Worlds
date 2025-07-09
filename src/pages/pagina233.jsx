import React from 'react';
import styles from './pagina233.module.css';

const Pagina233 = () => {
  return (
    <div className={styles.page233__container}>
      <header className={styles.page233__header}>
        <h1 className={styles.page233__title}>
          Grammar – <span className={styles.page233__title_black}>Simple Present</span>
        </h1>
        <p className={styles.page233__subtitle}>
          Verbo <strong>To Be</strong> (Ser, Estar ou <span className={styles.page233__highlight}>Ter somente para idade</span>)
        </p>
      </header>

      <main className={styles.page233__main}>
        <section className={styles.page233__tableSection}>
          <div className={styles.page233__tableTitle}>Interrogative Form</div>
          <table className={styles.page233__table}>
            <thead>
              <tr>
                <th>Subject</th>
                <th>Aux. Verb</th>
                <th>Verb(s)</th>
                <th>Object Complement</th>
              </tr>
            </thead>
            <tbody>
              {/* We */}
              <tr>
                <td><strong>We</strong><br /><span className={styles.page233__translation}>Nós</span></td>
                <td>Are</td>
                <td>—</td>
                <td>...?</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>—</td>
                <td>...?</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>—</td>
                <td>(somente para idade) ...?</td>
              </tr>

              {/* You (sg) */}
              <tr>
                <td><span className={styles.page233__red}>You (sg)</span><br /><span className={styles.page233__translation}>Você</span></td>
                <td>Are</td>
                <td>—</td>
                <td>...?</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>—</td>
                <td>...?</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>—</td>
                <td>(somente para idade) ...?</td>
              </tr>

              {/* You all (pl) */}
              <tr>
                <td><strong>You all (pl)</strong><br /><span className={styles.page233__translation}>Vocês</span></td>
                <td>Are</td>
                <td>—</td>
                <td>...?</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>—</td>
                <td>...?</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>—</td>
                <td>(somente para idade) ...?</td>
              </tr>

              {/* They */}
              <tr>
                <td><strong>They</strong><br /><span className={styles.page233__translation}>Eles / Elas</span></td>
                <td>Are</td>
                <td>—</td>
                <td>...?</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>—</td>
                <td>...?</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>—</td>
                <td>(somente para idade) ...?</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default Pagina233;
