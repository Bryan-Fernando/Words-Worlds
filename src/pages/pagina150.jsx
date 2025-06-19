import React from 'react';
import styles from './pagina150.module.css';
import pagina150_imagem1 from '../assets/images/pagina150_imagem1.webp';

const Pagina150 = () => {
  return (
    <div className={styles["page150__container"]}>
      <h1 className={styles["page150__title"]}>
        Grammar <br />
        <span className={styles["page150__title--highlight"]}>
          Simple Present ( Be and Common Main Verbs )
        </span>
      </h1>

      {/* Tabela 1 */}
      <section>
        <div className={styles["page150__table-header"]}>Negative Form</div>
        <table className={styles["page150__table"]}>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Aux <br /> Verb</th>
              <th className={styles["page150__not-label"]}>( Not )</th>
              <th>Verb (s)</th>
              <th>Object <br /> Complement</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>I</td>
              <td><span className={styles["page150__text-red"]}>don’t</span></td> 
              <td></td>
              <td>eat</td>
              <td>fruit for breakfast</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Tabela 2 */}
      <section>
        <div className={styles["page150__table-header"]}>Negative Form</div>
        <table className={styles["page150__table"]}>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Aux <br /> Verb</th>
              <th className={styles["page150__not-label"]}>( Not )</th>
              <th>Verb (s)</th>
              <th>Object <br /> Complement</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>I</td>
              <td>am</td>
              <td><span className={styles["page150__text-red"]}>not</span></td>
              <td></td>
              <td>at home.</td>
            </tr>
            <tr>
              <td>I</td>
              <td><span className={styles["page150__verb-cell"]}>don’t</span></td>
              <td></td>
              <td>arrive</td>
              <td>at work at 8:00 a.m.</td>
            </tr>
            <tr>
              <td>I</td>
              <td><span className={styles["page150__verb-cell"]}>don’t</span></td>
              <td></td>
              <td>begin</td>
              <td>my day with a coffee.</td>
            </tr>
            <tr>
              <td>I</td>
              <td><span className={styles["page150__verb-cell"]}>don’t</span></td>
              <td></td>
              <td>need to be</td>
              <td>at the office before 9:00 a.m.</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Imagem */}
      <section className={styles["page150__image-container"]}>
        <img src={pagina150_imagem1} alt="Pessoa ao telefone" className={styles["page150__image"]} />
      </section>

      {/* Nota */}
      <section className={styles["page150__note"]}>
        <div className={styles["page150__note-header"]}>Nota:</div>
        <div className={styles["page150__note-content"]}>
          <p>
            <span className={styles["page150__note-red"]}>&ldquo;Don’t&rdquo;</span>
            <span> é a forma contraída de </span>
            <span className={styles["page150__note-red"]}>&ldquo;do not&rdquo;</span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Pagina150;