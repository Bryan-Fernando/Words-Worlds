import React from 'react';
import styles from './pagina230.module.css';

const Pagina230 = () => {
  return (
    <div className={styles.page230__container}>
      <header className={styles.page230__header}>
        <h1 className={styles.page230__title}>
          Grammar – <span className={styles.page230__title_black}>Simple Present</span>
        </h1>
        <p className={styles.page230__subtitle}>
          Verbo <strong>To Be</strong> (Ser, Estar ou <span className={styles.page230__highlight}>Ter somente para idade</span>)
        </p>
      </header>

      <main className={styles.page230__main}>
        <section className={styles.page230__tableSection}>
          <div className={styles.page230__tableTitle}>Negative Form</div>
          <table className={styles.page230__table}>
            <thead>
              <tr>
                <th>Subject</th>
                <th>Aux. Verb</th>
                <th>Not</th>
                <th>Verb(s)</th>
                <th>Object Complement</th>
              </tr>
            </thead>
            <tbody>
              {/* We */}
              <tr>
                <td><spam className={styles.page230__red}>We</spam><br /><spam className={styles.page230__red}>We</spam><br /><span>Nós <br /> Nós <br /> Nós</span></td>
                <td><spam className={styles.page230__red}>are</spam><br /> <spam className={styles.page230__red}>aren’t</spam><br /> não <br /> não <br /> não</td>
                <td><spam className={styles.page230__red}>not</spam> <br /> <br /> somos <br /> estamos <br /> temos</td>
                <td>—</td>
                <td>(somente para idade)</td>
              </tr>
              {/* You (sg) */}
              <tr>
                <td><span className={styles.page230__red}>You (sg)</span><br /><span className={styles.page230__red}>You</span><br /><span>Você <br /> Você <br /> Você</span></td>
                <td><spam className={styles.page230__red}>are</spam><br /> <spam className={styles.page230__red}>aren’t</spam><br /> não <br /> não <br /> não</td>
                <td><spam className={styles.page230__red}>not</spam> <br /> <br /> é <br /> está <br /> tem</td>
                <td>—</td>
                <td>(somente para idade)</td>
              </tr>
              {/* You all (pl) */}
              <tr>
                <td><span className={styles.page230__red}>You all (pl)</span><br /><span className={styles.page230__red}>You all</span><br /><span>Vocês <br /> Vocês <br /> Vocês</span></td>
                <td><spam className={styles.page230__red}>are</spam><br /> <spam className={styles.page230__red}>aren’t</spam><br /> não <br /> não <br /> não</td>
                <td><spam className={styles.page230__red}>not</spam> <br /> <br /> são <br /> estão <br /> têm</td>
                <td>—</td>
                <td>(somente para idade)</td>
              </tr>
              {/* They */}
              <tr>
                <td><span className={styles.page230__red}>They</span><br /><span className={styles.page230__red}>They</span><br /><span>Eles / Elas <br /> Eles / Elas <br /> Eles / Elas</span></td>
                <td><spam className={styles.page230__red}>are</spam><br /> <spam className={styles.page230__red}>aren’t</spam><br /> não <br /> não <br /> não</td>
                <td><spam className={styles.page230__red}>not</spam> <br /> <br /> são <br /> estão <br /> têm</td>
                <td>—</td>
                <td>(somente para idade)</td>
              </tr>
            </tbody>
          </table>

          <div className={styles.page230__note}>
            <strong>Nota:</strong> <span className={styles.page230__noteLabel}>C.F.</span> = Contracted Form
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pagina230;
