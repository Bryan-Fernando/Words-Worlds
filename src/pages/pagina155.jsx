import React from 'react';
import styles from './pagina155.module.css';
import pagina155_imagem1 from '../assets/images/pagina155_imagem1.webp';
import pagina155_imagem2 from '../assets/images/pagina155_imagem2.webp';

const Pagina155 = () => {
  return (
    <div className={styles["page155__container"]}>
      <h1 className={styles["page155__title"]}>
        Grammar <br />
        <span className={styles["page155__title--highlight"]}>
          Simple Present ( Be and Common Main Verbs )
        </span>
      </h1>

      {/* Tabela 1 */}
      <section>
        <div className={styles["page155__table-header"]}>Interrogative Form</div>
        <table className={styles["page155__table"]}>
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
              <td><span className={styles["page155__verb-cell"]}>Does</span></td>
              <td>Maria</td>
              <td></td>
              <td>work</td>
              <td>on weekends ?</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Tabela 2 */}
      <section>
        <div className={styles["page155__table-header"]}>Interrogative Form</div>
        <table className={styles["page155__table"]}>
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
              <td>Is</td>
              <td>Priscila</td>
              <td></td>
              <td></td>
              <td>busy ?</td>
            </tr>
            <tr>
              <td></td>
              <td><span className={styles["page155__verb-cell"]}>Does</span></td>
              <td>Eric</td>
              <td></td>
              <td>have to work</td>
              <td>on Sunday ?</td>
            </tr>
            <tr>
              <td></td>
              <td><span className={styles["page155__verb-cell"]}>Does</span></td>
              <td>Nicole</td>
              <td></td>
              <td>need to go</td>
              <td>to Miami on Friday ?</td>
            </tr>
            <tr>
              <td></td>
              <td><span className={styles["page155__verb-cell"]}>Does</span></td>
              <td>the mall</td>
              <td></td>
              <td>open</td>
              <td>in the morning or afternoon ?</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Tabela 3 */}
      <section>
        <div className={styles["page155__table-header"]}>Interrogative Form</div>
        <table className={styles["page155__table"]}>
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
              <td><span className={styles["page155__verb-cell"]}>Does</span></td>
              <td>he</td>
              <td></td>
              <td>go</td>
              <td>to the gym every day ?</td>
            </tr>
            <tr>
              <td></td>
              <td><span className={styles["page155__verb-cell"]}>Does</span></td>
              <td>she</td>
              <td></td>
              <td>speak</td>
              <td>Spanish ?</td>
            </tr>
            <tr>
              <td></td>
              <td><span className={styles["page155__verb-cell"]}>Does</span></td>
              <td>it</td>
              <td></td>
              <td>open</td>
              <td>before 8:00 a.m ?</td>
            </tr>
            <tr>
              <td></td>
              <td>Is</td>
              <td>it</td>
              <td></td>
              <td>open</td>
              <td>before 8:00 a.m ?</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Imagens */}
      <section className={styles["page155__images-container"]}>
        <img src={pagina155_imagem1} alt="Shopping à noite" className={styles["page155__image"]} />
        <img src={pagina155_imagem2} alt="Homem malhando" className={styles["page155__image"]} />
      </section>
    </div>
  );
};

export default Pagina155;
