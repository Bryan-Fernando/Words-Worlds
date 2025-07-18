import React from 'react';
import styles from './pagina229.module.css';

const Pagina229 = () => {
  return (
    <div className={styles.page229__container}>
      <header className={styles.page229__header}>
        <h1 className={styles.page229__title}>
          Grammar – <span className={styles.page229__title_black}>Simple Present</span>
        </h1>
        <p className={styles.page229__subtitle}>
          Verbo <strong>To Be</strong> (Ser, Estar ou <span className={styles.page229__highlight}>Ter somente para idade</span>)
        </p>
      </header>

      <main className={styles.page229__main}>
        <section className={styles.page229__tableSection}>
          <div className={styles.page229__tableTitle}>Negative Form</div>
          <table className={styles.page229__table}>
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
              {/* I */}
              <tr>
                <td><span className={styles.page229__red}>I</span> <br /><span className={styles.page229__red}>I</span><br /><span>Eu <br /> Eu <br /> Eu</span></td>
                <td><span className={styles.page229__red}>am</span> <br /> <span className={styles.page229__red}>ain’t</span><br /> não <br /> não <br /> não</td>
                <td><spam className={styles.page229__red}>not</spam> <br /> <br />sou <br /> estou <br /> tenho</td>
                <td>—</td>
                <td>(somente para idade)</td>
              </tr>
              {/* He */}
              <tr>
                <td><span className={styles.page229__red}>He</span> <br /><span className={styles.page229__red}>He</span><br /><span>Ele <br /> Ele <br /> Ele</span></td>
                <td><spam className={styles.page229__red}>is</spam><br />  <spam className={styles.page229__red}>isn’t</spam><br /> não <br /> não <br /> não</td>
                <td><spam className={styles.page229__red}>not</spam><br /> <br />é <br /> está <br /> tem</td>
                <td>—</td>
                <td>(somente para idade)</td>
              </tr>
              {/* She */}
              <tr>
                <td><span className={styles.page229__red}>She</span><br /><span>Ela <br /> Ela <br /> Ela</span></td>
                <td><spam className={styles.page229__red}>is </spam><br /> <spam className={styles.page229__red}>isn’t</spam><br /> não <br /> não <br /> não</td>
                <td><spam className={styles.page229__red}>not</spam><br /> <br /> é <br /> está <br /> tem</td>
                <td>—</td>
                <td>(somente para idade)</td>
              </tr>
              {/* It */}
              <tr>
                <td><span className={styles.page229__red}>It</span></td>
                <td><spam className={styles.page229__red}>is</spam> <br /> <spam className={styles.page229__red}>isn’t</spam><br /> não <br /> não <br /> não</td>
                <td><spam className={styles.page229__red}>not</spam><br /> <br /> é <br /> está <br /> tem</td>
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

export default Pagina229;
