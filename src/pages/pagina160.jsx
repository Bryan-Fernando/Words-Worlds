import React from 'react';
import styles from './pagina160.module.css';

import pagina160_imagem1 from '../assets/images/pagina160_imagem1.webp';
import pagina160_imagem2 from '../assets/images/pagina160_imagem2.webp';

const Pagina160 = () => {
  return (
    <div className={styles["page160__container"]}>
      <h1 className={styles["page160__title"]}>
        Grammar <br />
        <span className={styles["page160__title--highlight"]}>Question Words</span>
      </h1>

      {/* Bloco Perguntas / Tradução */}
      <section className={styles["page160__question-translation"]}>
        <div className={styles["page160__question-column"]}>
          <table className={styles["page160__question-table"]}>
            <tbody>
              <tr>
                <td className={styles["page160__text-red"]}>What</td>
                <td>O que, que, qual, quais</td>
              </tr>
              <tr>
                <td className={styles["page160__text-red"]}>Where</td>
                <td>Onde, aonde</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={styles["page160__question-column"]}>
          <table className={styles["page160__question-table"]}>
            <tbody>
              <tr>
                <td className={styles["page160__text-red"]}>When</td>
                <td>Quando</td>
              </tr>
              <tr>
                <td className={styles["page160__text-red"]}>What time</td>
                <td>Que horas</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Tabela principal */}
      <section>
        <div className={styles["page160__table-header"]}>Question Words</div>
        <table className={styles["page160__table"]}>
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
              <td><span className={styles["page160__text-red"]}>What</span></td>
              <td className={styles["page160__text-blue"]}>do</td>
              <td>you ( sg )</td>
              <td>usually</td>
              <td>eat</td>
              <td>for breakfast?</td>
            </tr>
            <tr>
              <td><span className={styles["page160__text-red"]}>Where</span></td>
              <td className={styles["page160__text-blue"]}>does</td>
              <td>Ketlen</td>
              <td></td>
              <td>live?</td>
              <td></td>
            </tr>
            <tr>
              <td><span className={styles["page160__text-red"]}>When</span></td>
              <td className={styles["page160__text-blue"]}>does</td>
              <td>Carlos</td>
              <td></td>
              <td>go to work</td>
              <td>in São Paulo?</td>
            </tr>
            <tr>
              <td><span className={styles["page160__text-red"]}>What time</span></td>
              <td className={styles["page160__text-blue"]}>do</td>
              <td>banks</td>
              <td></td>
              <td>open?</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Imagens */}
      <section className={styles["page160__images-container"]}>
        <img src={pagina160_imagem1} alt="Imagem 1" className={styles["page160__image"]} />
        <img src={pagina160_imagem2} alt="Imagem 2" className={styles["page160__image"]} />
      </section>
    </div>
  );
};

export default Pagina160;