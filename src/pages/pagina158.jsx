import React from 'react';
import styles from './pagina158.module.css';
import pagina158_imagem1 from '../assets/images/pagina158_imagem1.webp';

const Pagina158 = () => {
  return (
    <div className={styles["page158__container"]}>
      <h1 className={styles["page158__title"]}>
        Grammar <br />
        <span className={styles["page158__title--highlight"]}>
          Simple Present ( Be and Common Main Verbs )
        </span>
      </h1>

      {/* Tabela 1 */}
      <section>
        <div className={styles["page158__table-header"]}>Negative Interrogative</div>
        <table className={styles["page158__table"]}>
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
              <td><span className={styles["page158__text-red"]}>Doesn’t</span></td>
              <td>Pedro</td>
              <td></td>
              <td>work</td>
              <td>on weekends ?</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Tabela 2 */}
      <section>
        <div className={styles["page158__table-header"]}>Negative Interrogative</div>
        <table className={styles["page158__table"]}>
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
              <td><span className={styles["page158__text-red"]}>Isn’t</span></td>
              <td>Nicole</td>
              <td></td>
              <td></td>
              <td>at home ?</td>
            </tr>
            <tr>
              <td></td>
              <td><span className={styles["page158__verb-cell"]}>Doesn’t</span></td>
              <td>Eric</td>
              <td></td>
              <td>have to work</td>
              <td>on Sunday ?</td>
            </tr>
            <tr>
              <td></td>
              <td><span className={styles["page158__verb-cell"]}>Doesn’t</span></td>
              <td>Nicole</td>
              <td></td>
              <td>need to go</td>
              <td>to Miami on Friday ?</td>
            </tr>
            <tr>
              <td></td>
              <td><span className={styles["page158__verb-cell"]}>Doesn’t</span></td>
              <td>the mall</td>
              <td></td>
              <td>travel</td>
              <td>in the morning or afternoon ?</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Tabela 3 */}
      <section>
        <div className={styles["page158__table-header"]}>Negative Interrogative</div>
        <table className={styles["page158__table"]}>
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
              <td><span className={styles["page158__verb-cell"]}>Doesn’t</span></td>
              <td>he</td>
              <td></td>
              <td>go</td>
              <td>to the gym every day ?</td>
            </tr>
            <tr>
              <td></td>
              <td><span className={styles["page158__verb-cell"]}>Doesn’t</span></td>
              <td>she</td>
              <td></td>
              <td>speak</td>
              <td>Spanish ?</td>
            </tr>
            <tr>
              <td></td>
              <td><span className={styles["page158__verb-cell"]}>Doesn’t</span></td>
              <td>it</td>
              <td></td>
              <td>open</td>
              <td>before 8:00 a.m. ?</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Imagem */}
      <section className={styles["page158__image-container"]}>
        <img src={pagina158_imagem1} alt="Shopping" className={styles["page158__image"]} />
      </section>

      {/* Nota */}
      <section className={styles["page158__note"]}>
        <div className={styles["page158__note-header"]}>Nota</div>
        <div className={styles["page158__note-content"]}>
          <p>
            <span className={styles["page158__text-red"]}>&quot;Doesn’t&quot;</span> é a forma contraída de <span className={styles["page158__text-red"]}>&quot;does not&quot;</span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Pagina158;
