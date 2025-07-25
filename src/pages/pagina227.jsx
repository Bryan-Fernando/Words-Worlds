import React from 'react';
import styles from './pagina227.module.css';

const Pagina227 = () => {
  return (
    <div className={styles.page227__container}>
      <header className={styles.page227__header}>
        <h1 className={styles.page227__title}>
          Grammar – <span className={styles.page227__title_black}>Simple Present</span>
        </h1>
        <p className={styles.page227__subtitle}>
          Verbo <strong>To Be</strong> (Ser, Estar ou <span className={styles.page227__highlight}>Ter somente para idade</span>)
        </p>
      </header>

      <main className={styles.page227__main}>
        <section className={styles.page227__tableSection}>
          <div className={styles.page227__tableTitle}>Affirmative Form</div>
          <table className={styles.page227__table}>
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
              {/* I */}
              <tr>
                <td><strong>I</strong><br /><span>Eu <br />Eu <br /> Eu</span></td>
                <td>am<br />sou <br /> estou <br /> tenho</td>
                <td>I’m</td>
                <td>—</td>
                <td>(somente para idade)</td>
              </tr>
              {/* He */}
              <tr>
                <td><span className={styles.page227__red}>He</span><br />Ele <br /> Ele <br /> Ele</td>
                <td>is <br /> é <br /> está <br /> tem</td>
                <td>He’s</td>
                <td>—</td>
                <td>(somente para idade)</td>
              </tr>
              {/* She */}
              <tr>
                <td><span className={styles.page227__red}>She</span><br />Ela <br /> Ela <br /> Ela</td>
                <td>is <br /> é <br /> está <br /> tem</td>
                <td>She’s</td>
                <td>—</td>
                <td>(somente para idade)</td>
              </tr>
              {/* It */}
              <tr>
                <td><span className={styles.page227__red}>It</span></td>
                <td><div> is <br /> é <br /> está <br/> tem</div></td>
                <td>It’s</td>
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

export default Pagina227;
