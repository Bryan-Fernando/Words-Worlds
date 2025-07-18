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
                <td><spam className={styles.page234__red}>Am</spam><br /><spam className={styles.page234__red}>Ain’t</spam></td>
                <td className={styles.page234__red}>I <br /> I</td>
                <td>not<br />—</td>
                <td>—</td>
                <td>...?</td>
              </tr>
              <tr>
                <td>Eu</td>
                <td>não</td>
                <td>sou</td>
                <td>—</td>
                <td>...?</td>
              </tr>
              <tr>
                <td>Eu</td>
                <td>não</td>
                <td>estou</td>
                <td>—</td>
                <td>...?</td>
              </tr>
              <tr>
                <td>Eu</td>
                <td>não</td>
                <td>tenho</td>
                <td>—</td>
                <td>(somente para idade) ...?</td>
              </tr>

              {/* He */}
              <tr>
                <td><spam className={styles.page234__red}>Is</spam><br /><spam className={styles.page234__red}>Isn’t</spam></td>
                <td className={styles.page234__red}>he<br /><span>he</span></td>
                <td>not<br />—</td>
                <td>—</td>
                <td>...?</td>
              </tr>
              <tr>
                <td>Ele</td>
                <td>não</td>
                <td>é</td>
                <td>—</td>
                <td>...?</td>
              </tr>
               <tr>
                <td>Ele</td>
                <td>não</td>
                <td>está</td>
                <td>—</td>
                <td>...?</td>
              </tr>
              <tr>
                <td>Ele</td>
                <td>não</td>
                <td>tem</td>
                <td>—</td>
                <td>(somente para idade) ...?</td>
              </tr>
              {/* She */}
              <tr>
                <td><spam className={styles.page234__red}>Is</spam><br /><spam className={styles.page234__red}>Isn’t</spam></td>
                <td className={styles.page234__red}>she<br /><span>she</span></td>
                <td>not<br />—</td>
                <td>—</td>
                <td>...?</td>
              </tr>
              <tr>
                <td>Ela</td>
                <td>não</td>
                <td>é</td>
                <td>—</td>
                <td>...?</td>
              </tr>
                <tr>
                <td>Ela</td>
                <td>não</td>
                <td>está</td>
                <td>—</td>
                <td>...?</td>
              </tr>
              <tr>
                <td>Ela</td>
                <td>não</td>
                <td>tem</td>
                <td>—</td>
                <td>(somente para idade) ...?</td>
              </tr>
              {/* It */}
              <tr>
                <td><spam className={styles.page234__red}>Is</spam><br /><spam className={styles.page234__red}>Isn’t</spam></td>
                <td className={styles.page234__red}>it<br /><span>—</span></td>
                <td>not<br />—</td>
                <td>—</td>
                <td>...?</td>
              </tr>
              <tr>
                <td></td>
                <td>Não</td>
                <td>é</td>
                <td>—</td>
                <td>...?</td>
              </tr>
              <tr>
                <td></td>
                <td>Não</td>
                <td>está</td>
                <td>—</td>
                <td>...?</td>
              </tr>
              <tr>
                <td></td>
                <td>Não</td>
                <td>tem</td>
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

export default Pagina234;
