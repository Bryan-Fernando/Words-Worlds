import React from 'react';
import styles from './pagina151.module.css';
import pagina151_imagem1 from '../assets/images/pagina151_imagem1.webp';

const Pagina151 = () => {
  return (
    <div className={styles["page151__container"]}>
      <h1 className={styles["page151__title"]}>
        Grammar <br />
        <span className={styles["page151__title--highlight"]}>
          Simple Present ( Be and Common Main Verbs )
        </span>
      </h1>

      {/* Tabela 1 */}
      <section>
        <div className={styles["page151__table-header"]}>Negative Form</div>
        <table className={styles["page151__table"]}>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Aux <br /> Verb</th>
              <th className={styles["page151__not-label"]}>( Not )</th>
              <th>Verb (s)</th>
              <th>Object <br /> Complement</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Lucas</td>
              <td><span className={styles["page151__text-red"]}>doesn’t</span></td> {/* Apenas texto vermelho, sem fundo */}
              <td></td>
              <td>live</td>
              <td>in São Paulo</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Tabela 2 */}
      <section>
        <div className={styles["page151__table-header"]}>Negative Form</div>
        <table className={styles["page151__table"]}>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Aux <br /> Verb</th>
              <th className={styles["page151__not-label"]}>( Not )</th>
              <th>Verb (s)</th>
              <th>Object <br /> Complement</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Lucas</td>
              <td>isn’t</td>
              <td></td>
              <td></td>
              <td>at the office.</td>
            </tr>
            <tr>
              <td>Lucas</td>
              <td><span className={styles["page151__verb-cell"]}>doesn’t</span></td>
              <td></td>
              <td>arrive</td>
              <td>at work at 8:00 a.m.</td>
            </tr>
            <tr>
              <td>Pam</td>
              <td><span className={styles["page151__verb-cell"]}>doesn’t</span></td>
              <td></td>
              <td>call</td>
              <td>her friends on Monday</td>
            </tr>
            <tr>
              <td>Credisis</td>
              <td><span className={styles["page151__verb-cell"]}>doesn’t</span></td>
              <td></td>
              <td>open</td>
              <td>at 8:00 a.m</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Imagem */}
      <section className={styles["page151__image-container"]}>
        <img src={pagina151_imagem1} alt="Homem no escritório" className={styles["page151__image"]} />
      </section>

      {/* Nota */}
      <section className={styles["page151__note"]}>
        <div className={styles["page151__note-header"]}>Nota:</div>
        <div className={styles["page151__note-content"]}>
          <p>
            <span className={styles["page151__note-red"]}>&ldquo;Doesn’t&rdquo;</span> é a forma contraída de <span className={styles["page151__note-red"]}>&ldquo;does not&rdquo;</span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Pagina151;