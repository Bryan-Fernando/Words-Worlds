import React from 'react';
import styles from './pagina157.module.css';
import pagina157_imagem1 from '../assets/images/pagina157_imagem1.webp';

const Pagina157 = () => {
  return (
    <div className={styles["page157__container"]}>
      <h1 className={styles["page157__title"]}>
        Grammar <br />
        <span className={styles["page157__title--highlight"]}>
          Simple Present ( Be and Common Main Verbs )
        </span>
      </h1>

      {/* Tabela 1 */}
      <section>
        <div className={styles["page157__table-header"]}>Negative Interrogative</div>
        <table className={styles["page157__table"]}>
          <thead>
            <tr>
              <th>Palavras <br /> interrogativas</th>
              <th>Aux. <br /> Verb</th>
              <th>Subject</th>
              <th className={styles["page157__not-label"]}>( Not )</th>
              <th>Verb (s)</th>
              <th>Object <br /> Complement</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td><span className={styles["page157__text-red"]}>Don’t</span></td>
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
        <div className={styles["page157__table-header"]}>Negative Interrogative</div>
        <table className={styles["page157__table"]}>
          <thead>
            <tr>
              <th>Palavras <br /> interrogativas</th>
              <th>Aux. <br /> Verb</th>
              <th>Subject</th>
              <th className={styles["page157__not-label"]}>( Not )</th>
              <th>Verb (s)</th>
              <th>Object <br /> Complement</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td><span className={styles["page157__text-red"]}>Ain’t</span></td>
              <td>I</td>
              <td></td>
              <td></td>
              <td>late ?</td>
            </tr>
            <tr>
              <td></td>
              <td><span className={styles["page157__verb-cell"]}>Don’t</span></td>
              <td>I</td>
              <td></td>
              <td>need to work</td>
              <td>on weekends ?</td>
            </tr>
            <tr>
              <td></td>
              <td><span className={styles["page157__verb-cell"]}>Don’t</span></td>
              <td>I</td>
              <td></td>
              <td>travel</td>
              <td>at 7:00 a.m. ?</td>
            </tr>
            <tr>
              <td></td>
              <td><span className={styles["page157__verb-cell"]}>Don’t</span></td>
              <td>I</td>
              <td></td>
              <td>look</td>
              <td>like him ?</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Imagem */}
      <section className={styles["page157__image-container"]}>
        <img src={pagina157_imagem1} alt="Imagem" className={styles["page157__image"]} />
      </section>

      {/* Nota 1 */}
      <section className={styles["page157__note"]}>
        <div className={styles["page157__note-header"]}>Nota</div>
        <div className={styles["page157__note-content"]}>
          <p>
            <span className={styles["page157__text-red"]}>&quot;Don’t&quot;</span> é a forma contraída de <span className={styles["page157__text-red"]}>&quot;do not&quot;</span>
          </p>
        </div>
      </section>

      {/* Nota 2 */}
      <section className={styles["page157__note"]}>
        <div className={styles["page157__note-header"]}>Nota</div>
        <div className={styles["page157__note-content"]}>
          <p>
            <span className={styles["page157__text-red"]}>&quot;Ain’t&quot;</span> pode ser usado com todos os pronomes pessoais ou nomes próprios.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Pagina157;
