import React from 'react';
import styles from './pagina82.module.css';

import pagina82_imagem1 from '../assets/images/pagina82_imagem1.webp';
import pagina82_imagem2 from '../assets/images/pagina82_imagem2.webp';

const Pagina82 = () => {
  return (
    <div className={styles["page82"]}>
      <h1 className={styles["page82__title"]}>
        Grammar <br />
        <span className={styles["page82__title--highlight"]}>
          Simple Present ( Be and Common Main Verbs )
        </span>
      </h1>

      {/* Tabela */}
      <section>
        <div className={styles["page82__table-header"]}>Affirmative Form</div>
        <table className={styles["page82__table"]}>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Aux Verb</th>
              <th>Adv</th>
              <th>Verb <span className={styles["page82__bf-label"]}>(BF)</span></th>
              <th>Object Complement</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>He</td>
              <td><span className={styles["page82__verb-cell"]}>is</span></td>
              <td></td>
              <td></td>
              <td>a nice guy</td>
            </tr>
            <tr>
              <td>He</td>
              <td></td>
              <td></td>
              <td><span className={styles["page82__verb-cell"]}>begins</span></td>
              <td>his day with a coffee</td>
            </tr>
            <tr>
              <td>She</td>
              <td></td>
              <td></td>
              <td><span className={styles["page82__verb-cell"]}>calls</span></td>
              <td>her friends on weekends</td>
            </tr>
            <tr>
              <td>She</td>
              <td></td>
              <td></td>
              <td><span className={styles["page82__verb-cell"]}>has to go</span></td>
              <td>to Campinas on Friday</td>
            </tr>
            <tr>
              <td>It</td>
              <td></td>
              <td></td>
              <td><span className={styles["page82__verb-cell"]}>needs to open</span></td>
              <td>at 8:00 a.m.</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Imagens */}
      <section className={styles["page82__images"]}>
        <img src={pagina82_imagem1} alt="Agência Credisis" className={styles["page82__image"]} />
        <img src={pagina82_imagem2} alt="Homem com turbante" className={styles["page82__image"]} />
      </section>
    </div>
  );
};

export default Pagina82;