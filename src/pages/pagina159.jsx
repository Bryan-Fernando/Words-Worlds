import React from 'react';
import styles from './pagina159.module.css';
import pagina159_imagem1 from '../assets/images/pagina159_imagem1.webp';

const Pagina159 = () => {
  return (
    <div className={styles["page159__container"]}>
      <h1 className={styles["page159__title"]}>
        Grammar <br />
        <span className={styles["page159__title--highlight"]}>
          Simple Present ( Be and Common Main Verbs )
        </span>
      </h1>

      {/* Tabela 1 */}
      <section>
        <div className={styles["page159__table-header"]}>Negative Interrogative</div>
        <table className={styles["page159__table"]}>
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
              <td><span className={styles["page159__text-red"]}>Don’t</span></td>
              <td>Eric and I</td>
              <td></td>
              <td>work</td>
              <td>on weekends ?</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Tabela 2 */}
      <section>
        <div className={styles["page159__table-header"]}>Negative Interrogative</div>
        <table className={styles["page159__table"]}>
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
              <td><span className={styles["page159__text-red"]}>Aren’t</span></td>
              <td>you and me</td>
              <td></td>
              <td></td>
              <td>on the list ?</td>
            </tr>
            <tr>
              <td></td>
              <td><span className={styles["page159__verb-cell"]}>Don’t</span></td>
              <td>you and I</td>
              <td></td>
              <td>have to work</td>
              <td>on Sunday ?</td>
            </tr>
            <tr>
              <td></td>
              <td><span className={styles["page159__verb-cell"]}>Don’t</span></td>
              <td>you</td>
              <td></td>
              <td>need to go</td>
              <td>to Miami on Friday ?</td>
            </tr>
            <tr>
              <td></td>
              <td><span className={styles["page159__verb-cell"]}>Don’t</span></td>
              <td>you and Bia</td>
              <td></td>
              <td>travel</td>
              <td>in the morning or afternoon ?</td>
            </tr>
            <tr>
              <td></td>
              <td><span className={styles["page159__verb-cell"]}>Don’t</span></td>
              <td>they</td>
              <td></td>
              <td>live</td>
              <td>in New York city ?</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Tabela 3 */}
      <section>
        <div className={styles["page159__table-header"]}>Negative Interrogative</div>
        <table className={styles["page159__table"]}>
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
              <td><span className={styles["page159__verb-cell"]}>Don’t</span></td>
              <td>we</td>
              <td></td>
              <td>have to work</td>
              <td>on Sunday ?</td>
            </tr>
            <tr>
              <td></td>
              <td><span className={styles["page159__verb-cell"]}>Don’t</span></td>
              <td>you</td>
              <td></td>
              <td>need to go</td>
              <td>to Miami on Friday ?</td>
            </tr>
            <tr>
              <td></td>
              <td><span className={styles["page159__verb-cell"]}>Don’t</span></td>
              <td>y’all</td>
              <td></td>
              <td>travel</td>
              <td>in the morning or afternoon ?</td>
            </tr>
            <tr>
              <td></td>
              <td><span className={styles["page159__verb-cell"]}>Don’t</span></td>
              <td>they</td>
              <td></td>
              <td>live</td>
              <td>in New York city ?</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Nota + Imagem em 2 colunas */}
      <section className={styles["page159__bottom-section"]}>
        <div className={styles["page159__note"]}>
          <div className={styles["page159__note-header"]}>Nota</div>
          <div className={styles["page159__note-content"]}>
            <p>
              <span className={styles["page159__text-red"]}>&quot;Don’t&quot;</span> é a forma contraída de <span className={styles["page159__text-red"]}>&quot;do not&quot;</span>
            </p>
          </div>
        </div>

        <div className={styles["page159__image-container"]}>
          <img src={pagina159_imagem1} alt="Avião" className={styles["page159__image"]} />
        </div>
      </section>
    </div>
  );
};

export default Pagina159;
