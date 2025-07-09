import React from 'react';
import styles from './pagina231.module.css';

const Pagina231 = () => {
  return (
    <div className={styles.page231__container}>
      <header className={styles.page231__header}>
        <h1 className={styles.page231__title}>
          Grammar – <span className={styles.page231__title_black}>Simple Present</span>
        </h1>
        <p className={styles.page231__subtitle}>
          Verbo <strong>To Be</strong> (Ser, Estar ou <span className={styles.page231__highlight}>Ter somente para idade</span>)
        </p>
      </header>

      <main className={styles.page231__main}>
        <section className={styles.page231__tableSection}>
          <div className={styles.page231__tableTitle}>Negative Contracted Form</div>
          <table className={styles.page231__table}>
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
              {/* Linha 1 */}
              <tr>
                <td><strong>I</strong></td>
                <td>ain’t</td>
                <td>—</td>
                <td>—</td>
                <td>—</td>
              </tr>
              {/* Linha 2 */}
              <tr>
                <td><span className={styles.page231__red}>He</span></td>
                <td>ain’t</td>
                <td>—</td>
                <td>—</td>
                <td>—</td>
              </tr>
              <tr>
                <td><span className={styles.page231__red}>She</span></td>
                <td>ain’t</td>
                <td>—</td>
                <td>—</td>
                <td>—</td>
              </tr>
              <tr>
                <td><span className={styles.page231__red}>It</span></td>
                <td>ain’t</td>
                <td>—</td>
                <td>—</td>
                <td>—</td>
              </tr>
              {/* Linha 3 */}
              <tr>
                <td><strong>We</strong></td>
                <td>ain’t</td>
                <td>—</td>
                <td>—</td>
                <td>—</td>
              </tr>
              <tr>
                <td><strong>You</strong></td>
                <td>ain’t</td>
                <td>—</td>
                <td>—</td>
                <td>—</td>
              </tr>
              <tr>
                <td><strong>You all</strong></td>
                <td>ain’t</td>
                <td>—</td>
                <td>—</td>
                <td>—</td>
              </tr>
              <tr>
                <td><strong>They</strong></td>
                <td>ain’t</td>
                <td>—</td>
                <td>—</td>
                <td>—</td>
              </tr>
            </tbody>
          </table>

          {/* Nota 1 */}
          <div className={styles.page231__note}>
            <strong>Nota:</strong> <span className={styles.page231__noteLabel}>C.F.</span> = Contracted Form
          </div>

          {/* Nota 2 */}
          <div className={styles.page231__noteInfo}>
            <strong>Nota:</strong> <span className={styles.page231__highlightRed}>Ain’t</span> pode ser usado com todos os sujeitos na forma negativa contraída, conforme os exemplos acima. <span className={styles.page231__italic}>Forma informal</span>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pagina231;
