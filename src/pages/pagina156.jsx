import React from 'react';
import styles from './pagina156.module.css';
import pagina156_imagem1 from '../assets/images/pagina156_imagem1.webp';
import pagina156_imagem2 from '../assets/images/pagina156_imagem2.webp';

const Pagina156 = () => {
  return (
    <div className={styles["page156__container"]}>
      <h1 className={styles["page156__title"]}>
        Grammar <br />
        <span className={styles["page156__title--highlight"]}>
          Simple Present ( Be and Common Main Verbs )
        </span>
      </h1>
      {/* Tabela 1 */}
      <section>
        <div className={styles["page156__table-header"]}>Interrogative Form</div>
        <table className={styles["page156__table"]}>
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
              <td><span className={styles["page156__text-red"]}>Do</span></td> {/* Só vermelho, sem fundo */}
              <td>you and I</td>
              <td></td>
              <td>work</td>
              <td>on weekends ?</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Tabela 2 */}
      <section>
        <div className={styles["page156__table-header"]}>Interrogative Form</div>
        <table className={styles["page156__table"]}>
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
              <td><span className={styles["page156__verb-cell"]}>Do</span></td>
              <td>you and I</td>
              <td></td>
              <td>have to work</td>
              <td>on Sunday ?</td>
            </tr>
            <tr>
              <td></td>
              <td><span className={styles["page156__verb-cell"]}>Do</span></td>
              <td>you</td>
              <td></td>
              <td>need to go</td>
              <td>to Miami on Friday ?</td>
            </tr>
            <tr>
              <td></td>
              <td><span className={styles["page156__verb-cell"]}>Do</span></td>
              <td>you and Bia</td>
              <td></td>
              <td>travel</td>
              <td>very often to Miami ?</td>
            </tr>
            <tr>
              <td></td>
              <td><span className={styles["page156__verb-cell"]}>Do</span></td>
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
        <div className={styles["page156__table-header"]}>Interrogative Form</div>
        <table className={styles["page156__table"]}>
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
              <td><span className={styles["page156__text-red"]}>Are</span></td> {/* Apenas texto vermelho */}
              <td>we</td>
              <td></td>
              <td></td>
              <td>on time ?</td>
            </tr>
            <tr>
              <td></td>
              <td><span className={styles["page156__verb-cell"]}>Do</span></td>
              <td>we</td>
              <td></td>
              <td>have to work</td>
              <td>on Sunday ?</td>
            </tr>
            <tr>
              <td></td>
              <td><span className={styles["page156__verb-cell"]}>Do</span></td>
              <td>you</td>
              <td></td>
              <td>need to go</td>
              <td>to Miami on Friday ?</td>
            </tr>
            <tr>
              <td></td>
              <td><span className={styles["page156__verb-cell"]}>Do</span></td>
              <td>y’all</td>
              <td></td>
              <td>travel</td>
              <td>very often to Miami ?</td>
            </tr>
            <tr>
              <td></td>
              <td><span className={styles["page156__verb-cell"]}>Do</span></td>
              <td>they</td>
              <td></td>
              <td>live</td>
              <td>in New York city ?</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Imagens */}
      <section className={styles["page156__images-container"]}>
        <img src={pagina156_imagem1} alt="Times Square" className={styles["page156__image"]} />
        <img src={pagina156_imagem2} alt="Casa de praia" className={styles["page156__image"]} />
      </section>
    </div>
  );
};

export default Pagina156;
