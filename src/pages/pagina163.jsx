import React from 'react';
import styles from './pagina163.module.css';

import pagina163_imagem1 from '../assets/images/pagina163_imagem1.webp';
import pagina163_imagem2 from '../assets/images/pagina163_imagem2.webp';

const Pagina163 = () => {
  return (
    <div className={styles["page163__container"]}>
      <h1 className={styles["page163__title"]}>
        Grammar <br />
        <span className={styles["page163__title--highlight"]}>Question Words</span>
      </h1>

      {/* Traduções */}
      <section className={styles["page163__translations"]}>
        <div className={styles["page163__translations-column"]}>
          <table className={styles["page163__translation-table"]}>
            <tbody>
              <tr>
                <td className={styles["page163__text-red"]}>How</td>
                <td>Como - Quão (adjetivo / advérbio)</td>
              </tr>
              <tr>
                <td className={styles["page163__text-red"]}>How far</td>
                <td>Quão longe <br /> Que distância</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={styles["page163__translations-column"]}>
          <table className={styles["page163__translation-table"]}>
            <tbody>
              <tr>
                <td className={styles["page163__text-red"]}>How old</td>
                <td>Quantos anos <br /> Quão velho <br /> ( somente para <span className={styles["page163__text-red"]}>idade</span>  )</td>
              </tr>
              <tr>
                <td className={styles["page163__text-red"]}>How often</td>
                <td>Com que frequência <br /> Quão frequente</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Tabela Principal */}
      <section>
        <div className={styles["page163__table-header"]}>Question Words</div>
        <table className={styles["page163__table"]}>
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
              <td><span className={styles["page163__text-red"]}>How</span></td>
              <td className={styles["page163__text-blue"]}>do</td>
              <td>you</td>
              <td></td>
              <td>go</td>
              <td>to Florianópolis ?</td>
            </tr>
            <tr>
              <td><span className={styles["page163__text-red"]}>How far</span></td>
              <td className={styles["page163__text-blue"]}>does</td>
              <td>Annie</td>
              <td></td>
              <td>live</td>
              <td>from San Francisco ?</td>
            </tr>
            <tr>
              <td><span className={styles["page163__text-red"]}>How old</span></td>
              <td className={styles["page163__text-blue"]}>do</td>
              <td>you</td>
              <td></td>
              <td>
                have <span className={styles["page163__text-red"]}>to be</span> to join
              </td>
              <td>the Air Force ?</td>
            </tr>
            <tr>
              <td><span className={styles["page163__text-red"]}>How often</span></td>
              <td className={styles["page163__text-blue"]}>does</td>
              <td>it</td>
              <td></td>
              <td>snow</td>
              <td>in your country ?</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Imagens */}
      <section className={styles["page163__images-container"]}>
        <img src={pagina163_imagem1} alt="Imagem 1" className={styles["page163__image"]} />
        <img src={pagina163_imagem2} alt="Imagem 2" className={styles["page163__image"]} />
      </section>
    </div>
  );
};

export default Pagina163;
