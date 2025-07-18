import React from 'react';
import styles from './pagina228.module.css';

const Pagina228 = () => {
  return (
    <div className={styles.page228__container}>
      <header className={styles.page228__header}>
        <h1 className={styles.page228__title}>
          Grammar – <span className={styles.page228__title_black}>Simple Present</span>
        </h1>
        <p className={styles.page228__subtitle}>
          Verbo <strong>To Be</strong> (Ser, Estar ou <span className={styles.page228__highlight}>Ter somente para idade</span>)
        </p>
      </header>

      <main className={styles.page228__main}>
        <section className={styles.page228__tableSection}>
          <div className={styles.page228__tableTitle}>Affirmative Form</div>
          <table className={styles.page228__table}>
            <thead>
              <tr>
                <th>Subject</th>
                <th>Aux. Verb</th>
                <th>Contracted Form</th>
                <th>Verb(s)</th>
                <th>Object Complement</th>
              </tr>
            </thead>
            <tbody>
              {/* We */}
              <tr>
                <td><strong>We</strong><br /><span>Nós <br /> Nós <br /> Nós</span></td>
                <td>are <br /> somos <br /> estamos <br /> temos</td>
                <td>We’re</td>
                <td>—</td>
                <td>(somente para idade)</td>
              </tr>
              {/* You (sg) */}
              <tr>
                <td><span className={styles.page228__red}>You (sg)</span><br /><span>Você <br /> Você <br /> Você</span></td>
                <td>are <br /> é <br /> está <br /> tem</td>
                <td>You’re</td>
                <td>—</td>
                <td>(somente para idade)</td>
              </tr>
              {/* You all (pl) */}
              <tr>
                <td><span className={styles.page228__red}>You all (pl)</span><br /><span>Vocês <br /> Vocês <br /> Vocês</span></td>
                <td>are <br /> são <br /> estão <br /> têm</td>
                <td>You all’re</td>
                <td>—</td>
                <td>(somente para idade)</td>
              </tr>
              {/* They */}
              <tr>
                <td><span className={styles.page228__red}>They</span><br /><span>Eles / Elas <br /> Eles / Elas <br /> Eles / Elas</span></td>
                <td>are <br /> são <br /> estão <br /> têm</td>
                <td>They’re</td>
                <td>—</td>
                <td>(somente para idade)</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default Pagina228;
