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
            <ul> Usado para indicar ações que estão:
              <li style={{ fontSize: '2rem' }}>Em andamento ou acontecendo no momento da fala;</li>
              <li style={{ fontSize: '2rem' }}>Ações ou situações temporárias (não definitivas);</li>
              <li style={{ fontSize: '2rem' }}>Também usado para planos futuros ou ações que acontecerão em breve.</li>
            </ul>
          </div>
        </section>

        {/* Estrutura */}
        <section className={styles.pg129__estrutura}>
          <h3 className={styles.pg129__estrutura_titulo}>Structure / Estrutura</h3>
          <div className={styles.pg129__estrutura_formula}>
            <span>Subject</span>
            <span className={styles.pg129__plus}> + </span>
            <span>Verbo be am / is / are</span>
            <span className={styles.pg129__plus}> + </span>
            <span>Main Verb <span className={styles.pg129__highlight_red}>( ING )</span></span>
            <span className={styles.pg129__plus}> + </span>
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
                <th>Aux. <br /> Verb</th>
                <th>Adv</th>
                <th>Verb (s)</th>
                <th>Object <br />Complement</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
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
                <th>Aux. <br /> Verb</th>
                <th className={styles.pg129__negativo_not}>(Not)</th>
                <th>Verb (s)</th>
                <th>Object <br />Complement</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <div className={styles.pg129__exemplos}>
            <strong>Negative:</strong>
            <ul>
              <li>I am <span style={{ color: 'red' }}>not</span> sleeping now.</li>
              <li>He is <span style={{ color: 'red' }}>not</span> listening to music.</li>
              <li>We are <span style={{ color: 'red' }}>not</span> going to the party.</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pagina129;