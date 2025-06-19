import React from 'react';
import styles from './pagina164.module.css';

import pagina164_imagem1 from '../assets/images/pagina164_imagem1.webp';
import pagina164_imagem2 from '../assets/images/pagina164_imagem2.webp';

const Pagina164 = () => {
  return (
    <div className={styles["page164__container"]}>
      <h1 className={styles["page164__title"]}>
        Grammar <br />
        <span className={styles["page164__title--highlight"]}>Question Words</span>
      </h1>

      {/* Traduções */}
      <section className={styles["page164__translations"]}>
        <div className={styles["page164__translations-column"]}>
          <table className={styles["page164__translation-table"]}>
            <tbody>
              <tr>
                <td className={styles["page164__text-red"]}>How much</td>
                <td>
                  Quanto / quanta / quanto de <br />
                  <span className={styles["page164__translation-note"]}>( <span className={styles["page164__text-red"]}>substantivos</span> incontáveis)</span>
                </td>
              </tr>
              <tr>
                <td className={styles["page164__text-red"]}>How many</td>
                <td>
                  Quantos / quantas <br />
                  <span className={styles["page164__translation-note"]}>(<span className={styles["page164__text-red"]}>substantivos</span> contáveis)</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={styles["page164__translations-column"]}>
          <table className={styles["page164__translation-table"]}>
            <tbody>
              <tr>
                <td className={styles["page164__text-red"]}>How long</td>
                <td>
                  Quanto tempo <br />
                  <span className={styles["page164__translation-note"]}>
                    ( usado para perguntar sobre a <span className={styles["page164__text-red"]}>duração total</span> de algo, seja uma ação, estado ou situação do início ao fim. )
                  </span>
                </td>
              </tr>
              <tr>
                <td className={styles["page164__text-red"]}>How much longer</td>
                <td>
                  Quanto tempo mais <br />
                  Quanto tempo ainda <br />
                  <span className={styles["page164__translation-note"]}>
                    ( usado para perguntar quanto tempo ainda resta até que algo termine ou aconteça. Ou seja, é o foco no <span className={styles["page164__text-red"]}>tempo restante</span>, e não na duração total. )
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Tabela Principal */}
      <section>
        <div className={styles["page164__table-header"]}>Question Words</div>
        <table className={styles["page164__table"]}>
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
              <td><span className={styles["page164__text-red"]}>How much</span> water</td>
              <td className={styles["page164__text-blue"]}>do</td>
              <td>you</td>
              <td></td>
              <td>drink</td>
              <td>every day ?</td>
            </tr>
            <tr>
              <td><span className={styles["page164__text-red"]}>How many</span> books</td>
              <td className={styles["page164__text-blue"]}>does</td>
              <td>Bryan</td>
              <td></td>
              <td>read</td>
              <td>a month ?</td>
            </tr>
            <tr>
              <td><span className={styles["page164__text-red"]}>How long</span></td>
              <td className={styles["page164__text-blue"]}>do</td>
              <td>you</td>
              <td></td>
              <td>stay</td>
              <td>in Brazil ?</td>
            </tr>
            <tr>
              <td><span className={styles["page164__text-red"]}>How much longer</span></td>
              <td className={styles["page164__text-blue"]}>do</td>
              <td>we</td>
              <td></td>
              <td>have to wait ?</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Imagens */}
      <section className={styles["page164__images-container"]}>
        <img src={pagina164_imagem1} alt="Imagem 1" className={styles["page164__image"]} />
        <img src={pagina164_imagem2} alt="Imagem 2" className={styles["page164__image"]} />
      </section>
    </div>
  );
};

export default Pagina164;
