import React from 'react';
import styles from './pagina162.module.css';

import pagina162_imagem1 from '../assets/images/pagina162_imagem1.webp';
import pagina162_imagem2 from '../assets/images/pagina162_imagem2.webp';

const Pagina162 = () => {
  return (
    <div className={styles["page162__container"]}>
      <h1 className={styles["page162__title"]}>
        Grammar <br />
        <span className={styles["page162__title--highlight"]}>Question Words</span>
      </h1>

      {/* Traduções */}
      <section className={styles["page162__translations"]}>
        <div className={styles["page162__translations-column"]}>
          <table className={styles["page162__translation-table"]}>
            <tbody>
              <tr>
                <td className={styles["page162__text-red"]}>Whose</td>
                <td>“De quem” ( posse )</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={styles["page162__translations-column"]}>
          <table className={styles["page162__translation-table"]}>
            <tbody>
              <tr>
                <td className={styles["page162__text-red"]}>What kind of</td>
                <td>Que tipo de / espécie de</td>
              </tr>
              <tr>
                <td className={styles["page162__text-red"]}>What type of</td>
                <td>Que tipo de / espécie de</td>
              </tr>
              <tr>
                <td className={styles["page162__text-red"]}>What sort of</td>
                <td>Que tipo de / espécie de</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Tabela Principal */}
      <section>
        <div className={styles["page162__table-header"]}>Question Words</div>
        <table className={styles["page162__table"]}>
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
              <td><span className={styles["page162__text-red"]}>Whose</span> mother</td>
              <td className={styles["page162__text-blue"]}></td>
              <td></td>
              <td></td>
              <td>works</td>
              <td>at NASA ?</td>
            </tr>
            <tr>
              <td>
                <span className={styles["page162__text-red"]}>What kind of</span> music
              </td>
              <td className={styles["page162__text-blue"]}>do</td>
              <td>Ane and Tom</td>
              <td></td>
              <td>listen to ?</td>
              <td></td>
            </tr>
            <tr>
              <td>
                <span className={styles["page162__text-red"]}>What type of</span> sports
              </td>
              <td className={styles["page162__text-blue"]}>does</td>
              <td>Miguel</td>
              <td></td>
              <td>like to play ?</td>
              <td></td>
            </tr>
            <tr>
              <td>
                <span className={styles["page162__text-red"]}>What sort of</span> movies
              </td>
              <td className={styles["page162__text-blue"]}>do</td>
              <td>you</td>
              <td></td>
              <td>like ?</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Imagens */}
      <section className={styles["page162__images-container"]}>
        <img src={pagina162_imagem1} alt="Imagem 1" className={styles["page162__image"]} />
        <img src={pagina162_imagem2} alt="Imagem 2" className={styles["page162__image"]} />
      </section>
    </div>
  );
};

export default Pagina162;
