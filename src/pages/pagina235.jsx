import React from 'react';
import styles from './pagina235.module.css';

const Pagina235 = () => {
  return (
    <div className={styles.page235__container}>
      <header className={styles.page235__header}>
        <h1 className={styles.page235__title}>
          Grammar – <span className={styles.page235__title_black}>Simple Present</span>
        </h1>
        <p className={styles.page235__subtitle}>
          Verbo <strong>To Be</strong> (Ser, Estar ou <span className={styles.page235__highlight}>Ter somente para idade</span>)
        </p>
      </header>

      <main className={styles.page235__main}>
        <section className={styles.page235__tableSection}>
          <div className={styles.page235__tableTitle}>Negative Interrogative Form</div>
          <table className={styles.page235__table}>
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
              {/* We */}
              <tr>
                <td><strong>Are</strong><br />Aren’t</td>
                <td>we<br /><span className={styles.translation}>Nós</span></td>
                <td>not<br />não</td>
                <td>—</td>
                <td>...?</td>
              </tr>
              <tr><td></td><td></td><td></td><td>—</td><td>...?</td></tr>
              <tr><td></td><td></td><td></td><td>—</td><td>(somente para idade) ...?</td></tr>

              {/* You (sg) */}
              <tr>
                <td><strong>Are</strong><br />Aren’t</td>
                <td>you <span className={styles.sg}>(sg)</span><br /><span className={styles.translation}>Você</span></td>
                <td>not<br />não</td>
                <td>—</td>
                <td>...?</td>
              </tr>
              <tr><td></td><td></td><td></td><td>—</td><td>...?</td></tr>
              <tr><td></td><td></td><td></td><td>—</td><td>(somente para idade) ...?</td></tr>

              {/* You all (pl) */}
              <tr>
                <td><strong>Are</strong><br />Aren’t</td>
                <td>you all <span className={styles.sg}>(pl)</span><br /><span className={styles.translation}>Vocês</span></td>
                <td>not<br />não</td>
                <td>—</td>
                <td>...?</td>
              </tr>
              <tr><td></td><td></td><td></td><td>—</td><td>...?</td></tr>
              <tr><td></td><td></td><td></td><td>—</td><td>(somente para idade) ...?</td></tr>

              {/* They */}
              <tr>
                <td><strong>Are</strong><br />Aren’t</td>
                <td>they<br /><span className={styles.translation}>Eles / Elas</span></td>
                <td>not<br />não</td>
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

export default Pagina235;
