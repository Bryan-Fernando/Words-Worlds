import React from 'react';
import styles from './pagina152.module.css';
import pagina152_imagem1 from '../assets/images/pagina152_imagem1.webp';

const Pagina152 = () => {
  return (
    <div className={styles["page152__container"]}>
      <h1 className={styles["page152__title"]}>
        Grammar <br />
        <span className={styles["page152__title--highlight"]}>
          Simple Present ( Be and Common Main Verbs )
        </span>
      </h1>

      {/* Tabela 1 */}
      <section>
        <div className={styles["page152__table-header"]}>Negative Form</div>
        <table className={styles["page152__table"]}>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Aux <br /> Verb</th>
              <th className={styles["page152__not-label"]}>( Not )</th>
              <th>Verb (s)</th>
              <th>Object <br /> Complement</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Lucas</td>
              <td><span className={styles["page152__text-red"]}>doesn’t</span></td> {/* Apenas vermelho texto simples */}
              <td></td>
              <td>live</td>
              <td>in São Paulo</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Tabela 2 */}
      <section>
        <div className={styles["page152__table-header"]}>Negative Form</div>
        <table className={styles["page152__table"]}>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Aux <br /> Verb</th>
              <th className={styles["page152__not-label"]}>( Not )</th>
              <th>Verb (s)</th>
              <th>Object <br /> Complement</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>He</td>
              <td><span className={styles["page152__verb-cell"]}>doesn’t</span></td>
              <td></td>
              <td>work</td>
              <td>at home.</td>
            </tr>
            <tr>
              <td>She</td>
              <td><span className={styles["page152__verb-cell"]}>doesn’t</span></td>
              <td></td>
              <td>drink</td>
              <td>coffee.</td>
            </tr>
            <tr>
              <td>It</td>
              <td><span className={styles["page152__verb-cell"]}>doesn’t</span></td>
              <td></td>
              <td>open</td>
              <td>at 8:00 a.m</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Imagem */}
      <section className={styles["page152__image-container"]}>
        <img src={pagina152_imagem1} alt="Mulher bebendo suco" className={styles["page152__image"]} />
      </section>

      {/* Nota */}
      <section className={styles["page152__note"]}>
        <div className={styles["page152__note-header"]}>Nota:</div>
        <div className={styles["page152__note-content"]}>
          <p>
            <span className={styles["page152__note-red"]}>&ldquo;Doesn’t&rdquo;</span> é a forma contraída de <span className={styles["page152__note-red"]}>&ldquo;does not&rdquo;</span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Pagina152;
