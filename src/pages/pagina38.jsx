import React from 'react';
import styles from './pagina38.module.css';

import pagina38_imagem1 from '../assets/images/pagina38_imagem1.webp';

const Pagina38 = () => {
  return (
    <div className={styles["page38"]}>
      <h1 className={styles["page38__title"]}>
        Grammar <br />
        <span className={styles["page38__title--highlight"]}>
          Simple Present ( Be and Common Main Verbs )
        </span>
      </h1>

      {/* Tabela 1 */}
      <section>
        <div className={styles["page38__table-header"]}>Affirmative Form</div>
        <table className={styles["page38__table"]}>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Aux Verb</th>
              <th>Adv</th>
              <th>Verb <span className={styles["page38__bf-label"]}>(BF)</span></th>
              <th>Object Complement</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Lucas and I</td>
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
        <div className={styles["page38__table-header"]}>Affirmative Form</div>
        <table className={styles["page38__table"]}>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Aux Verb</th>
              <th>Adv</th>
              <th>Verb <span className={styles["page38__bf-label"]}>(BF)</span></th>
              <th>Object Complement</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Marcia and I</td>
              <td><span className={styles["page38__verb-cell"]}>are</span></td>
              <td></td>
              <td></td>
              <td>happy</td>
            </tr>
            <tr>
              <td>Lucas, Pam and I</td>
              <td></td>
              <td></td>
              <td><span className={styles["page38__verb-cell"]}>live</span></td>
              <td>in Brazil</td>
            </tr>
            <tr>
              <td>You</td>
              <td></td>
              <td></td>
              <td><span className={styles["page38__verb-cell"]}>make</span></td>
              <td>delicious pancakes</td>
            </tr>
            <tr>
              <td>You, Luca and Bia</td>
              <td></td>
              <td></td>
              <td><span className={styles["page38__verb-cell"]}>need</span></td>
              <td>a new phone</td>
            </tr>
            <tr>
              <td>Isa, Talita and Eric</td>
              <td></td>
              <td></td>
              <td><span className={styles["page38__verb-cell"]}>travel</span></td>
              <td>by bus</td>
            </tr>
            <tr>
              <td>Banks</td>
              <td></td>
              <td></td>
              <td><span className={styles["page38__verb-cell"]}>open</span></td>
              <td>at 8:00 a.m.</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Tabela 3 */}
      <section>
        <div className={styles["page38__table-header"]}>Affirmative Form</div>
        <table className={styles["page38__table"]}>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Aux Verb</th>
              <th>Adv</th>
              <th>Verb <span className={styles["page38__bf-label"]}>(BF)</span></th>
              <th>Object Complement</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>We</td>
              <td><span className={styles["page38__verb-cell"]}>are</span></td>
              <td></td>
              <td></td>
              <td>happy</td>
            </tr>
            <tr>
              <td>We</td>
              <td></td>
              <td></td>
              <td><span className={styles["page38__verb-cell"]}>live</span></td>
              <td>in Brazil</td>
            </tr>
            <tr>
              <td>You</td>
              <td></td>
              <td></td>
              <td><span className={styles["page38__verb-cell"]}>make</span></td>
              <td>delicious pancakes</td>
            </tr>
            <tr>
              <td>Y’all</td>
              <td></td>
              <td></td>
              <td><span className={styles["page38__verb-cell"]}>need</span></td>
              <td>a new phone</td>
            </tr>
            <tr>
              <td>They</td>
              <td></td>
              <td></td>
              <td><span className={styles["page38__verb-cell"]}>travel</span></td>
              <td>by plane</td>
            </tr>
            <tr>
              <td>They</td>
              <td></td>
              <td></td>
              <td><span className={styles["page38__verb-cell"]}>open</span></td>
              <td>at 8:00 a.m.</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Imagem */}
      <section className={styles["page38__image-container"]}>
        <img src={pagina38_imagem1} alt="Grupo de amigos" className={styles["page38__image"]} />
      </section>
    </div>
  );
};

export default Pagina38;
