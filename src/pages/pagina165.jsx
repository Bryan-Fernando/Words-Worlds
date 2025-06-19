import React from 'react';
import styles from './pagina165.module.css';

import pagina165_imagem1 from '../assets/images/pagina165_imagem1.webp';
import pagina165_imagem2 from '../assets/images/pagina165_imagem2.webp';

const Pagina165 = () => {
  return (
    <div className={styles["page165__container"]}>
      <h1 className={styles["page165__title"]}>
        Grammar <br />
        <span className={styles["page165__title--highlight"]}>Question Words</span>
      </h1>

      {/* Traduções */}
      <section className={styles["page165__translations"]}>
        <div className={styles["page165__translations-column"]}>
          <table className={styles["page165__translation-table"]}>
            <tbody>
              <tr>
                <td className={styles["page165__text-red"]}>How many times</td>
                <td>Quantas vezes</td>
              </tr>
              <tr>
                <td className={styles["page165__text-red"]}>How many times a day</td>
                <td>Quantas vezes por dia</td>
              </tr>
              <tr>
                <td className={styles["page165__text-red"]}>How many times a week</td>
                <td>Quantas vezes por semana</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={styles["page165__translations-column"]}>
          <table className={styles["page165__translation-table"]}>
            <tbody>
              <tr>
                <td className={styles["page165__text-red"]}>How many times a month</td>
                <td>Quantas vezes por mês</td>
              </tr>
              <tr>
                <td className={styles["page165__text-red"]}>How many times a year</td>
                <td>Quantas vezes por ano</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Tabela Principal */}
      <section>
        <div className={styles["page165__table-header"]}>Question Words</div>
        <table className={styles["page165__table"]}>
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
              <td><span className={styles["page165__text-red"]}>How many times</span></td>
              <td className={styles["page165__text-blue"]}>does</td>
              <td>Sarah</td>
              <td></td>
              <td>call</td>
              <td>you ?</td>
            </tr>
            <tr>
              <td><span className={styles["page165__text-red"]}>How many times a day</span></td>
              <td className={styles["page165__text-blue"]}>do</td>
              <td>you</td>
              <td></td>
              <td>check</td>
              <td>your phone ?</td>
            </tr>
            <tr>
              <td><span className={styles["page165__text-red"]}>How many times a week</span></td>
              <td className={styles["page165__text-blue"]}>do</td>
              <td>Ray and Miguel</td>
              <td></td>
              <td>eat out ?</td>
              <td></td>
            </tr>
            <tr>
              <td><span className={styles["page165__text-red"]}>How many times a month</span></td>
              <td className={styles["page165__text-blue"]}>does</td>
              <td>John</td>
              <td></td>
              <td>visit</td>
              <td>his grandparents ?</td>
            </tr>
            <tr>
              <td><span className={styles["page165__text-red"]}>How many times a year</span></td>
              <td className={styles["page165__text-blue"]}>do</td>
              <td>you</td>
              <td></td>
              <td>travel</td>
              <td>abroad ?</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Imagens */}
      <section className={styles["page165__images-container"]}>
        <img src={pagina165_imagem1} alt="Imagem 1" className={styles["page165__image"]} />
        <img src={pagina165_imagem2} alt="Imagem 2" className={styles["page165__image2"]} />
      </section>
    </div>
  );
};

export default Pagina165;
