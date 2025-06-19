import React from 'react';
import styles from './pagina79.module.css';

const Pagina79 = () => {
  return (
    <div className={styles["page79__container"]}>

      {/* Bloco Nota */}
      <section className={styles["page79__note"]}>
        <div className={styles["page79__note-header"]}>
          Nota:
        </div>
        <div className={styles["page79__note-content"]}>
          <ul>
            <li>
              A tradução de frases afirmativas, negativas e interrogativas geralmente começa com o sujeito em português.
            </li>
          </ul>
          <p>
            <strong className={styles["page79__text-red"]}>Exceção</strong><br />
            <span className={styles["page79__text-red"]}>
              It rains a lot in July. <span className={styles["page79__text-blue"]}>( Chove muito em julho. )</span> <br />
              Em casos como esse, o pronome “it” é impessoal e
              <span className={styles["page79__highlight-red-bg"]}> não pode </span>
              ser traduzido. Traduzimos apenas o verbo na terceira pessoa do singular, respeitando o sentido da frase.
            </span>
          </p>
        </div>
      </section>

      {/* Frases Afirmativas */}
      <section className={styles["page79__block"]}>
        <h3 className={styles["page79__block-title"]}>Frases Afirmativas</h3>
        <table className={styles["page79__table"]}>
          <tbody>
            <tr>
              <td>They are at home.</td>
              <td>Eles estão em casa</td>
            </tr>
            <tr>
              <td><span className={styles["page79__text-red"]}>It rains a lot in July.</span></td>
              <td>Chove muito em julho</td>
            </tr>
            <tr>
              <td>We live in Curitiba.</td>
              <td>Nós moramos em Curitiba</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Frases Negativas */}
      <section className={styles["page79__block"]}>
        <h3 className={styles["page79__block-title"]}>Frases Negativas</h3>
        <table className={styles["page79__table"]}>
          <tbody>
            <tr>
              <td>They aren’t at home.</td>
              <td>Eles não estão em casa</td>
            </tr>
            <tr>
              <td><span className={styles["page79__text-red"]}>It doesn’t rain a lot in March</span></td>
              <td>Não chove muito em março</td>
            </tr>
            <tr>
              <td>We don’t live in Curitiba.</td>
              <td>Nós não moramos em Curitiba</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Frases Interrogativas */}
      <section className={styles["page79__block"]}>
        <h3 className={styles["page79__block-title"]}>Frases Interrogativas</h3>
        <table className={styles["page79__table"]}>
          <tbody>
            <tr>
              <td>Are they at home ?</td>
              <td>Eles estão em casa ?</td>
            </tr>
            <tr>
              <td><span className={styles["page79__text-red"]}>Does it rain a lot in October ?</span></td>
              <td>Chove muito em outubro ?</td>
            </tr>
            <tr>
              <td>Do they live in Curitiba ?</td>
              <td>Eles moram em Curitiba ?</td>
            </tr>
          </tbody>
        </table>
      </section>

    </div>
  );
};

export default Pagina79;
