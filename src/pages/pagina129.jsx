import React, { useRef } from 'react';
import styles from './pagina129.module.css';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import global_affirmativee from '../assets/audios/global_affirmativee.mp3';
import global_affirmativep from '../assets/audios/global_affirmativep.mp3';
import global_negativee from '../assets/audios/global_negativee.mp3';
import global_negativep from '../assets/audios/global_negativep.mp3';
import pg129_audio1e from '../assets/audios/pg129_audio1e.mp3';
import pg129_audio2e from '../assets/audios/pg129_audio2e.mp3';
import pg129_audio3e from '../assets/audios/pg129_audio3e.mp3';
import pg129_audio4e from '../assets/audios/pg129_audio4e.mp3';
import pg129_audio5e from '../assets/audios/pg129_audio5e.mp3';
import pg129_audio6e from '../assets/audios/pg129_audio6e.mp3';


const Pagina129 = () => {

  const audioMap = {
    pg129_audio1e, pg129_audio2e, pg129_audio3e, pg129_audio4e, pg129_audio5e, pg129_audio6e, global_affirmativee,
    global_affirmativep, global_negativee, global_negativep,
  };

  const currentAudioRef = useRef(null);

  const playAudio = (audioKey) => {
    if (currentAudioRef.current) {
      currentAudioRef.current.pause();
      currentAudioRef.current.currentTime = 0;
    }
    const audio = new Audio(audioMap[audioKey]);
    currentAudioRef.current = audio;
    audio.play();
  };

  const renderIcon = (engKey) => (
    <span className={styles["page129__icons-container"]}>
      <img
        src={eng_audio_icon}
        alt="English Audio"
        className={styles["page129__icon"]}
        onClick={() => playAudio(engKey)}
      />
    </span>
  );



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
              <li className={styles.page129__liRed}>Em andamento ou acontecendo no momento da fala;</li>
              <li className={styles.page129__liRed}>Ações ou situações temporárias (não definitivas);</li>
              <li className={styles.page129__liRed}>Também usado para planos futuros ou ações que acontecerão em breve.</li>
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
                <td><input type="text" className={styles.pg129__input} /></td>
                <td><input type="text" className={styles.pg129__input} /></td>
                <td><input type="text" className={styles.pg129__input} /></td>
                <td><input type="text" className={styles.pg129__input} /></td>
                <td><input type="text" className={styles.pg129__input} /></td>
              </tr>
            </tbody>
          </table>
          <div className={styles.pg129__exemplos}>
            <strong>Affirmative: {renderIcon('global_affirmativee')}</strong>
            <ul>
              <li>
                I am studying English.
                {renderIcon('pg129_audio1e')}
              </li>
              <li>
                She is watching TV.
                {renderIcon('pg129_audio2e')}
              </li>
              <li>
                They are playing soccer.
                {renderIcon('pg129_audio3e')}
              </li>
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
                <td><input type="text" className={styles.pg129__input} /></td>
                <td><input type="text" className={styles.pg129__input} /></td>
                <td><input type="text" className={styles.pg129__input} /></td>
                <td><input type="text" className={styles.pg129__input} /></td>
                <td><input type="text" className={styles.pg129__input} /></td>
              </tr>
            </tbody>
          </table>
          <div className={styles.pg129__exemplos}>
            <strong>Negative: {renderIcon('global_negativee')}</strong>
            <ul>
              <li>
                I am <span style={{ color: 'red' }}>not</span> sleeping now.
                {renderIcon('pg129_audio4e')}
              </li>
              <li>
                He is <span style={{ color: 'red' }}>not</span> listening to music.
                {renderIcon('pg129_audio5e')}
              </li>
              <li>
                We are <span style={{ color: 'red' }}>not</span> going to the party.
                {renderIcon('pg129_audio6e')}
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pagina129;