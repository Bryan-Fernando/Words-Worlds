import React from 'react';
import styles from './pagina161.module.css';

import pagina161_imagem1 from '../assets/images/pagina161_imagem1.webp';
import pagina161_imagem2 from '../assets/images/pagina161_imagem2.webp';

const Pagina161 = () => {
  return (
    <div className={styles["page161__container"]}>
      <h1 className={styles["page161__title"]}>
        Grammar <br />
        <span className={styles["page161__title--highlight"]}>Question Words</span>
      </h1>

      {/* Bloco Perguntas / Traduções */}
      <section className={styles["page161__question-translation"]}>
        <div className={styles["page161__question-column"]}>
          <table className={styles["page161__question-table"]}>
            <tbody>
              <tr>
                <td className={styles["page161__text-red"]}>Why</td>
                <td>"Por que" (em perguntas)</td>
              </tr>
              <tr>
                <td className={styles["page161__text-red"]}>Who</td>
                <td>Quem</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={styles["page161__question-column"]}>
          <table className={styles["page161__question-table"]}>
            <tbody>
              <tr>
                <td className={styles["page161__text-red"]}>Which</td>
                <td>Que, qual, quais (opção)</td>
              </tr>
              <tr>
                <td className={styles["page161__text-red"]}>What size</td>
                <td>Que tamanho / Qual tamanho</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Tabela principal */}
      <section>
        <div className={styles["page161__table-header"]}>Question Words</div>
        <table className={styles["page161__table"]}>
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
              <td><span className={styles["page161__text-red"]}>Who</span></td>
              <td className={styles["page161__text-blue"]}>do</td>
              <td>you</td>
              <td></td>
              <td>like</td>
              <td>the most in your family?</td>
            </tr>
            <tr>
              <td><span className={styles["page161__text-red"]}>Why</span></td>
              <td className={styles["page161__text-blue"]}>do</td>
              <td>Ana and Tom</td>
              <td></td>
              <td>study</td>
              <td>English?</td>
            </tr>
            <tr>
              <td><span className={styles["page161__text-red"]}>Which color</span></td>
              <td className={styles["page161__text-blue"]}>do</td>
              <td>they</td>
              <td></td>
              <td>prefer</td>
              <td>blue or red?</td>
            </tr>
            <tr>
              <td><span className={styles["page161__text-red"]}>What size</span></td>
              <td className={styles["page161__text-blue"]}>does</td>
              <td>Marco</td>
              <td></td>
              <td>wear</td>
              <td>(When asking about clothing or shoe size)</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Imagens */}
      <section className={styles["page161__images-container"]}>
        <img src={pagina161_imagem1} alt="Imagem 1" className={styles["page161__image"]} />
        <img src={pagina161_imagem2} alt="Imagem 2" className={styles["page161__image"]} />
      </section>
    </div>
  );
};

export default Pagina161;
