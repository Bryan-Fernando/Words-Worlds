import React from 'react';
import styles from './pagina81.module.css';

const Pagina81 = () => {
  return (
    <div className={styles["page81"]}>
      <h1 className={styles["page81__title"]}>
        Grammar <br />
        <span className={styles["page81__title--highlight"]}>
          Simple Present ( Be and Common Main Verbs )
        </span>
      </h1>

      {/* Tabela 1 */}
      <section>
        <div className={styles["page81__table-header"]}>Affirmative Form</div>
        <table className={styles["page81__table"]}>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Aux Verb</th>
              <th>Adv</th>
              <th>Verb <span className={styles["page81__bf-label"]}>(BF)</span></th>
              <th>Object Complement</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Lucas</td>
              <td></td>
              <td></td>
              <td>lives</td>
              <td>in São Paulo</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Tabela 2 */}
      <section>
        <div className={styles["page81__table-header"]}>Affirmative Form</div>
        <table className={styles["page81__table"]}>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Aux Verb</th>
              <th>Adv</th>
              <th>Verb <span className={styles["page81__bf-label"]}>(BF)</span></th>
              <th>Object Complement</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Lucas</td>
              <td><span className={styles["page81__verb-cell"]}>is</span></td>
              <td></td>
              <td></td>
              <td>a nice guy</td>
            </tr>
            <tr>
              <td>Lucas</td>
              <td></td>
              <td></td>
              <td><span className={styles["page81__verb-cell"]}>arrives</span></td>
              <td>at work at 8 a.m.</td>
            </tr>
            <tr>
              <td>Pam</td>
              <td></td>
              <td></td>
              <td><span className={styles["page81__verb-cell"]}>begins</span></td>
              <td>her day with a coffee</td>
            </tr>
            <tr>
              <td>Pam</td>
              <td></td>
              <td></td>
              <td><span className={styles["page81__verb-cell"]}>calls</span></td>
              <td>her friends on weekends</td>
            </tr>
            <tr>
              <td>Credisis</td>
              <td></td>
              <td></td>
              <td><span className={styles["page81__verb-cell"]}>opens</span></td>
              <td>at 8:00 a.m.</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Pagina81;
