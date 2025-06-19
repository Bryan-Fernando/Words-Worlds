import React from 'react';
import styles from './pagina154.module.css';
import pagina154_imagem1 from '../assets/images/pagina154_imagem1.webp';

const Pagina154 = () => {
  return (
    <div className={styles["page154__container"]}>
      <h1 className={styles["page154__title"]}>
        Grammar <br />
        <span className={styles["page154__title--highlight"]}>
          Simple Present ( Be and Common Main Verbs )
        </span>
      </h1>

      {/* Tabela 1 */}
      <section>
        <div className={styles["page154__table-header"]}>Interrogative Form</div>
        <table className={styles["page154__table"]}>
          <thead>
            <tr>
              <th>Palavras <br /> interrogativas</th>
              <th>Aux. <br /> Verb</th>
              <th>Subject</th>
              <th>Adv</th>
              <th>Verb (s)</th>
              <th>Object <br /> Complement</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td><span className={styles["page154__verb-cell"]}>Do</span></td>
              <td>I</td>
              <td></td>
              <td>work</td>
              <td>on weekends ?</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Tabela 2 */}
      <section>
        <div className={styles["page154__table-header"]}>Interrogative Form</div>
        <table className={styles["page154__table"]}>
          <thead>
            <tr>
              <th>Palavras <br /> interrogativas</th>
              <th>Aux. <br /> Verb</th>
              <th>Subject</th>
              <th>Adv</th>
              <th>Verb (s)</th>
              <th>Object <br /> Complement</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td><span className={styles["page154__verb-cell"]}>Am</span></td>
              <td>I</td>
              <td></td>
              <td>late</td>
              <td>?</td>
            </tr>
            <tr>
              <td></td>
              <td><span className={styles["page154__verb-cell"]}>Do</span></td>
              <td>I</td>
              <td></td>
              <td>need to work</td>
              <td>on Sunday ?</td>
            </tr>
            <tr>
              <td></td>
              <td><span className={styles["page154__verb-cell"]}>Do</span></td>
              <td>I</td>
              <td></td>
              <td>travel</td>
              <td>at 7:00 a.m. or at 7:00 p.m. ?</td>
            </tr>
            <tr>
              <td></td>
              <td><span className={styles["page154__verb-cell"]}>Do</span></td>
              <td>I</td>
              <td></td>
              <td></td>
              <td>look like him ?</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Imagem */}
      <section className={styles["page154__image-container"]}>
        <img src={pagina154_imagem1} alt="Pessoa com mala no aeroporto" className={styles["page154__image"]} />
      </section>
    </div>
  );
};

export default Pagina154;
