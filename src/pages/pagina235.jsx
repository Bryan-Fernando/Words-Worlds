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
                <td><spam className={styles.page235__red}>Are</spam><br /><spam className={styles.page235__red}>Aren’t</spam></td>
                <td className={styles.page235__red}>we<br /><span>we</span></td>
                <td>not<br />—</td>
                <td>—</td>
                <td>...?</td>
              </tr>
              <tr><td>Nós</td><td>não</td><td>somos</td><td>—</td><td>...?</td></tr>
              <tr><td>Nós</td><td>não</td><td>estamos</td><td>—</td><td>...?</td></tr>
              <tr><td>Nós</td><td>não</td><td>temos</td><td>—</td><td>(somente para idade) ...?</td></tr>

              {/* You (sg) */}
              <tr>
                <td><spam className={styles.page235__red}>Are</spam><br /><spam className={styles.page235__red}>Aren’t</spam></td>
                <td className={styles.page235__red}>you <span>(sg)</span><br /><span>you</span></td>
                <td>not<br />—</td>
                <td>—</td>
                <td>...?</td>
              </tr>
              <tr><td>Você</td><td>não</td><td>é</td><td>—</td><td>...?</td></tr>
              <tr><td>Você</td><td>não</td><td>está</td><td>—</td><td>...?</td></tr>
              <tr><td>você</td><td>não</td><td>tem</td><td>—</td><td>(somente para idade) ...?</td></tr>

              {/* You all (pl) */}
              <tr>
                <td><spam className={styles.page235__red}>Are</spam><br /><spam className={styles.page235__red}>Aren’t</spam></td>
                <td className={styles.page235__red}>you all <span>(pl)</span><br /><span>you all</span></td>
                <td>not<br />—</td>
                <td>—</td>
                <td>...?</td>
              </tr>
              <tr><td>Vocês</td><td>não</td><td>são</td><td>—</td><td>...?</td></tr>
              <tr><td>Vocês</td><td>não</td><td>stão</td><td>—</td><td>...?</td></tr>
              <tr><td>Vocês</td><td>não</td><td>têm</td><td>—</td><td>(somente para idade) ...?</td></tr>

              {/* They */}
              <tr>
                <td><spam className={styles.page235__red}>Are</spam><br /><spam className={styles.page235__red}>Aren’t</spam></td>
                <td className={styles.page235__red}>they<br /><span>they</span></td>
                <td>not<br />—</td>
                <td>—</td>
                <td>...?</td>
              </tr>
              <tr><td>Eles/Elas</td><td>não</td><td>são</td><td>—</td><td>...?</td></tr>
              <tr><td>Eles/Elas</td><td>não</td><td>estão</td><td>—</td><td>...?</td></tr>
              <tr><td>Eles/Elas</td><td>não</td><td>têm</td><td>—</td><td>(somente para idade) ...?</td></tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default Pagina235;
