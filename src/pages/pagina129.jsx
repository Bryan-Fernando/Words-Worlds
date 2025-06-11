import React from 'react';
import styles from './pagina129.module.css';

const Pagina129 = () => {
  return (
    <div className={styles.pg129__container}>
      <header className={styles.pg129__header}>
        <h1 className={styles.pg129__header_h1}>Grammar: <span className={styles.pg129__highlight}>Present Continuous or Progressive Form</span></h1>
        <h2 className={styles.pg129__header_h2}>Gerúndio</h2>
      </header>
      <main className={styles.pg129__main}>
        {/* Bloco azul - Present Continuous / Progressive Form */}
        <section className={styles.pg129__aside}>
          <div className={styles.pg129__aside_note1}>
            <strong>Present Continuous / Progressive Form</strong>
          </div>
          <div className={styles.pg129__aside_note2}>
            <p>
              The Present Continuous tense is used to describe actions happening right now, at the moment of speaking, or actions that are ongoing and temporary. It is also used for future plans that will happen soon.
            </p>
          </div>
        </section>

        {/* Bloco azul - Gerúndio */}
        <section className={styles.pg129__aside}>
          <div className={styles.pg129__aside_note1}>
            <strong>Gerúndio - Forma do Presente Contínuo / Progressivo</strong>
          </div>
          <div className={styles.pg129__aside_note2}>
            <ul>
              <li>Em andamento ou acontecendo no momento da fala;</li>
              <li>Ações ou situações temporárias (não definitivas);</li>
              <li>Também usado para planos futuros ou ações que acontecerão em breve.</li>
            </ul>
          </div>
        </section>

        {/* Estrutura */}
        <section className={styles.pg129__estrutura}>
          <h3 className={styles.pg129__estrutura_titulo}>Structure / Estrutura</h3>
          <div className={styles.pg129__estrutura_formula}>
            <span>Subject</span>
            <span> + </span>
            <span>Verbo be am/is/are</span>
            <span> + </span>
            <span>Main Verb ( ING )</span>
            <span> + </span>
            <span>Object</span>
          </div>
        </section>

        {/* Tabela Affirmative */}
        <section className={styles.pg129__table_afirmativa_container}>
          <div className={styles.pg129__table_header_afirmativa}>Affirmative Form (+)</div>
          <table className={styles.pg129__styled_table_afirmativa}>
            <thead>
              <tr>
                <th>Subject</th>
                <th>Aux</th>
                <th>Adv</th>
                <th>Verb (s)</th>
                <th>Object/Complement</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>I</td>
                <td>am</td>
                <td></td>
                <td>studying</td>
                <td>English.</td>
              </tr>
              <tr>
                <td>She</td>
                <td>is</td>
                <td></td>
                <td>watching</td>
                <td>TV.</td>
              </tr>
              <tr>
                <td>They</td>
                <td>are</td>
                <td></td>
                <td>playing</td>
                <td>soccer.</td>
              </tr>
            </tbody>
          </table>
          <div className={styles.pg129__exemplos}>
            <strong>Affirmative:</strong>
            <ul>
              <li>I am studying English.</li>
              <li>She is watching TV.</li>
              <li>They are playing soccer.</li>
            </ul>
          </div>
        </section>

        {/* Tabela Negative */}
        <section className={styles.pg129__table_negativa_container}>
          <div className={styles.pg129__table_header_negativa}>Negative Form (-)</div>
          <table className={styles.pg129__styled_table_negativa}>
            <thead>
              <tr>
                <th>Subject</th>
                <th>Aux (Not)</th>
                <th>Verb (s)</th>
                <th>Object/Complement</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>I</td>
                <td>am not</td>
                <td>sleeping</td>
                <td>now.</td>
              </tr>
              <tr>
                <td>He</td>
                <td>is not</td>
                <td>listening</td>
                <td>to music.</td>
              </tr>
              <tr>
                <td>We</td>
                <td>are not</td>
                <td>going</td>
                <td>to the party.</td>
              </tr>
            </tbody>
          </table>
          <div className={styles.pg129__exemplos}>
            <strong>Negative:</strong>
            <ul>
              <li>I am not sleeping now.</li>
              <li>He is not listening to music.</li>
              <li>We are not going to the party.</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pagina129;