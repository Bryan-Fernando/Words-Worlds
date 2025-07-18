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
                <td><spam className={styles.page233__red}>Are</spam><br /><span>Nós</span></td>
                <td className={styles.page233__red}>we</td>
                <td>—</td>
                <td>...?</td>
              </tr>
              <tr>
                <td>Nós</td>
                <td>somos</td>
                <td>—</td>
                <td>...?</td>
              </tr>
               <tr>
                <td>Nós</td>
                <td>estamos</td>
                <td>—</td>
                <td>...?</td>
              </tr>
              <tr>
                <td>Nós</td>
                <td>temos</td>
                <td>—</td>
                <td>(somente para idade) ...?</td>
              </tr>

              {/* You (sg) */}
              <tr>
                <td><span className={styles.page233__red}>Are</span><br /><span>Você</span></td>
                <td className={styles.page233__red}>You (sg)</td>
                <td>—</td>
                <td>...?</td>
              </tr>
              <tr>
                <td>Você</td>
                <td>é</td>
                <td>—</td>
                <td>...?</td>
              </tr>
              <tr>
                <td>Você</td>
                <td>está</td>
                <td>—</td>
                <td>...?</td>
              </tr>
              <tr>
                <td>Você</td>
                <td>tem</td>
                <td>—</td>
                <td>(somente para idade) ...?</td>
              </tr>

              {/* You all (pl) */}
              <tr>
                <td><spam className={styles.page233__red}>Are</spam><br /><span>Vocês</span></td>
                <td className={styles.page233__red}>You all (pl)</td>
                <td>—</td>
                <td>...?</td>
              </tr>
              <tr>
                <td>Vocês</td>
                <td>sáo</td>
                <td>—</td>
                <td>...?</td>
              </tr>
              <tr>
                <td>Vocês</td>
                <td>estão</td>
                <td>—</td>
                <td>...?</td>
              </tr>
              <tr>
                <td>Vocês</td>
                <td>têm</td>
                <td>—</td>
                <td>(somente para idade) ...?</td>
              </tr>

              {/* They */}
              <tr>
                <td><spam className={styles.page233__red}>Are</spam><br /><span>Eles / Elas</span></td>
                <td className={styles.page233__red}>They</td>
                <td>—</td>
                <td>...?</td>
              </tr>
              <tr>
                <td>Eles / Elas</td>
                <td>são</td>
                <td>—</td>
                <td>...?</td>
              </tr>
               <tr>
                <td>Eles / Elas</td>
                <td>estão</td>
                <td>—</td>
                <td>...?</td>
              </tr>
              <tr>
                <td>Eles / Elas</td>
                <td>têm</td>
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
