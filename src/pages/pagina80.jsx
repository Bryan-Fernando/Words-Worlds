import React from 'react';
import styles from './pagina80.module.css';

import pagina80_imagem1 from '../assets/images/pagina80_imagem1.webp';
import pagina80_imagem2 from '../assets/images/pagina80_imagem2.webp';

const Pagina80 = () => {
  return (
    <div className={styles["page80"]}>
      <h1 className={styles["page80__title"]}>
        Grammar <br />
        <span className={styles["page80__title--highlight"]}>
          Simple Present ( Be and Common Main Verbs )
        </span>
      </h1>

      {/* Tabela 1 */}
      <section>
        <div className={styles["page80__table-header"]}>Affirmative Form</div>
        <table className={styles["page80__table"]}>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Aux Verb</th>
              <th>Adv</th>
              <th>Verb <span className={styles["page80__bf-label"]}>(BF)</span></th>
              <th>Object Complement</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>I</td>
              <td></td>
              <td></td>
              <td>live</td>
              <td>in São Paulo</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Tabela 2 */}
      <section>
        <div className={styles["page80__table-header"]}>Affirmative Form</div>
        <table className={styles["page80__table"]}>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Aux Verb</th>
              <th>Adv</th>
              <th>Verb <span className={styles["page80__bf-label"]}>(BF)</span></th>
              <th>Object Complement</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>I</td>
              <td><span className={styles["page80__verb-cell"]}>am</span></td>
              <td></td>
              <td></td>
              <td>happy</td>
            </tr>
            <tr>
              <td>I</td>
              <td></td>
              <td></td>
              <td><span className={styles["page80__verb-cell"]}>call</span></td>
              <td>my friends on weekends</td>
            </tr>
            <tr>
              <td>I</td>
              <td></td>
              <td></td>
              <td><span className={styles["page80__verb-cell"]}>begin</span></td>
              <td>my day with a coffee</td>
            </tr>
            <tr>
              <td>I</td>
              <td></td>
              <td></td>
              <td><span className={styles["page80__verb-cell"]}>need to eat</span></td>
              <td>fruit for breakfast</td>
            </tr>
            <tr>
              <td>I</td>
              <td></td>
              <td></td>
              <td><span className={styles["page80__verb-cell"]}>have to go to work</span></td>
              <td>at 7:00 a.m.</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Tabela 3 */}
      <section>
        <div className={styles["page80__table-header"]}>Affirmative Form</div>
        <table className={styles["page80__table"]}>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Aux Verb</th>
              <th>Adv</th>
              <th>Verb <span className={styles["page80__bf-label"]}>(BF)</span></th>
              <th>Object Complement</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>I</td>
              <td></td>
              <td></td>
              <td><span className={styles["page80__verb-cell"]}>have</span></td>
              <td>a big family</td>
            </tr>
            <tr>
              <td>I</td>
              <td></td>
              <td></td>
              <td><span className={styles["page80__verb-cell"]}>finish</span></td>
              <td>my work before 5 a.m.</td>
            </tr>
            <tr>
              <td>I</td>
              <td></td>
              <td></td>
              <td><span className={styles["page80__verb-cell"]}>call</span></td>
              <td>my friends on weekends</td>
            </tr>
            <tr>
              <td>I</td>
              <td></td>
              <td></td>
              <td><span className={styles["page80__verb-cell"]}>eat</span></td>
              <td>fruit for breakfast</td>
            </tr>
            <tr>
              <td>I</td>
              <td></td>
              <td></td>
              <td><span className={styles["page80__verb-cell"]}>like to go</span></td>
              <td>to the gym in the morning</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Imagens */}
      <section className={styles["page80__images"]}>
        <img src={pagina80_imagem1} alt="Pessoa tomando café com notebook" className={styles["page80__image"]} />
        <img src={pagina80_imagem2} alt="Pessoa na academia" className={styles["page80__image"]} />
      </section>
    </div>
  );
};

export default Pagina80;