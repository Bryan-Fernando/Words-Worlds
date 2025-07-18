import React from 'react';
import styles from './pagina232.module.css';

const Pagina232 = () => {
  return (
    <div className={styles.page232__container}>
      <header className={styles.page232__header}>
        <h1 className={styles.page232__title}>
          Grammar – <span className={styles.page232__title_black}>Simple Present</span>
        </h1>
        <p className={styles.page232__subtitle}>
          Verbo <strong>To Be</strong> (Ser, Estar ou <span className={styles.page232__highlight}>Ter somente para idade</span>)
        </p>
      </header>

      <main className={styles.page232__main}>
        <section className={styles.page232__tableSection}>
          <div className={styles.page232__tableTitle}>Interrogative Form</div>
          <table className={styles.page232__table}>
            <thead>
              <tr>
                <th>Aux. Verb</th>
                <th>Subject</th>
                <th>Verb(s)</th>
                <th>Object Complement</th>
              </tr>
            </thead>
            <tbody>
              {/* I */}
              <tr>
                <td><spam className={styles.page232__red}>Am</spam><br /><span>Eu</span></td>
                <td><spam className={styles.page232__red}>I</spam></td>
                <td>—</td>
                <td>...?</td>
              </tr>
              <tr>
                <td>Eu</td>
                <td>sou</td>
                <td>—</td>
                <td>...?</td>
              </tr>
               <tr>
                <td>Eu</td>
                <td>estou</td>
                <td>—</td>
                <td>...?</td>
              </tr>
              <tr>
                <td>Eu</td>
                <td>tenho</td>
                <td>—</td>
                <td>(somente para idade) ...?</td>
              </tr>

              {/* He */}
              <tr>
                <td><span className={styles.page232__red}>Is</span><br /><span>Ele</span></td>
                <td><span className={styles.page232__red}>he</span></td>
                <td>—</td>
                <td>...?</td>
              </tr>
              <tr>
                <td>Ele</td>
                <td>é</td>
                <td>—</td>
                <td>...?</td>
              </tr>
               <tr>
                <td>Ele</td>
                <td>está</td>
                <td>—</td>
                <td>...?</td>
              </tr>
              <tr>
                <td>Ele</td>
                <td>tem</td>
                <td>—</td>
                <td>(somente para idade) ...?</td>
              </tr>

              {/* She */}
              <tr>
                <td><span className={styles.page232__red}>Is</span><br /><span>Ela</span></td>
                <td><span className={styles.page232__red}>she</span></td>
                <td>—</td>
                <td>...?</td>
              </tr>
              <tr>
                <td>Ela</td>
                <td>é</td>
                <td>—</td>
                <td>...?</td>
              </tr>
               <tr>
                <td>Ela</td>
                <td>está</td>
                <td>—</td>
                <td>...?</td>
              </tr>
              <tr>
                <td>Ela</td>
                <td>tem</td>
                <td>—</td>
                <td>(somente para idade) ...?</td>
              </tr>

              {/* It */}
              <tr>
                <td><span className={styles.page232__red}>Is</span></td>
                <td><span className={styles.page232__red}>it</span></td>
                <td>—</td>
                <td>...?</td>
              </tr>
              <tr>
                <td>—</td>
                <td>É</td>
                <td>—</td>
                <td>...?</td>
              </tr>
               <tr>
                <td>—</td>
                <td>Está</td>
                <td>—</td>
                <td>...?</td>
              </tr>
              <tr>
                <td>—</td>
                <td>Tem</td>
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

export default Pagina232;
