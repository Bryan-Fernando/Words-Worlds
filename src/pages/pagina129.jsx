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
import pg129_audio1p from '../assets/audios/pg129_audio1p.mp3';
import pg129_audio2p from '../assets/audios/pg129_audio2p.mp3';
import pg129_audio3p from '../assets/audios/pg129_audio3p.mp3';
import pg129_audio4p from '../assets/audios/pg129_audio4p.mp3';
import pg129_audio5p from '../assets/audios/pg129_audio5p.mp3';
import pg129_audio6p from '../assets/audios/pg129_audio6p.mp3';

const Pagina129 = () => {

  const audioMap = {
    pg129_audio1e, pg129_audio2e, pg129_audio3e, pg129_audio4e, pg129_audio5e, pg129_audio6e,
    pg129_audio1p, pg129_audio2p, pg129_audio3p, pg129_audio4p, pg129_audio5p, pg129_audio6p,
    global_affirmativee, global_affirmativep,
    global_negativee, global_negativep,
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

  const renderIcon = (engKey, ptKey) => (
    <span className={styles["page129__icons-container"]}>
      <img
        src={eng_audio_icon}
        alt="English Audio"
        className={styles["page129__icon"]}
        onClick={() => playAudio(engKey)}
      />
      <img
        src={ptbr_audio_icon}
        alt="Portuguese Audio"
        className={styles["page129__icon"]}
        onClick={() => playAudio(ptKey)}
      />
    </span>
  );

  return (
    <div className={styles["page129__container"]}>
      <header className={styles["page129__header"]}>
        <h1 className={styles["page129__header-title"]}>
          Grammar: <span className={styles["page129__highlight"]}>Present Continuous or Progressive Form</span>
        </h1>
        <h2 className={styles["page129__header-subtitle"]}>Gerúndio</h2>
      </header>

      <main className={styles["page129__main"]}>
        {/* Bloco azul - Present Continuous / Progressive Form */}
        <section className={styles["page129__aside"]}>
          <div className={styles["page129__aside-note1"]}>
            <strong>Present Continuous / Progressive Form</strong>
          </div>
          <div className={styles["page129__aside-note2"]}>
            <p>
              The Present Continuous tense is used to describe actions happening right now, at the moment of speaking,
              or actions that are ongoing and temporary. It is also used for future plans that will happen soon.
            </p>
          </div>
        </section>

        {/* Bloco azul - Gerúndio */}
        <section className={styles["page129__aside"]}>
          <div className={styles["page129__aside-note1"]}>
            <strong>Gerúndio - Forma do Presente Contínuo / Progressivo</strong>
          </div>
          <div className={styles["page129__aside-note2"]}>
            <ul>
              Usado para indicar ações que estão:
              <li className={styles["page129__li--red"]}>Em andamento ou acontecendo no momento da fala;</li>
              <li className={styles["page129__li--red"]}>Ações ou situações temporárias (não definitivas);</li>
              <li className={styles["page129__li--red"]}>Também usado para planos futuros ou ações que acontecerão em breve.</li>
            </ul>
          </div>
        </section>

        {/* Estrutura */}
        <section className={styles["page129__structure"]}>
          <h3 className={styles["page129__structure-title"]}>Structure / Estrutura</h3>
          <div className={styles["page129__structure-formula"]}>
            <span>Subject</span>
            <span className={styles["page129__plus"]}> + </span>
            <span>Verbo be am / is / are</span>
            <span className={styles["page129__plus"]}> + </span>
            <span>
              Main Verb <span className={styles["page129__highlight--red"]}>( ING )</span>
            </span>
            <span className={styles["page129__plus"]}> + </span>
            <span>Object</span>
          </div>
        </section>

        {/* Tabela Affirmative */}
        <section className={styles["page129__table-afirmative-container"]}>
          <div className={styles["page129__table-header--afirmative"]}>Affirmative Form (+)</div>
          <table className={styles["page129__styled-table--afirmative"]}>
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
                <td><input type="text" className={styles["page129__input"]} /></td>
                <td><input type="text" className={styles["page129__input"]} /></td>
                <td><input type="text" className={styles["page129__input"]} /></td>
                <td><input type="text" className={styles["page129__input"]} /></td>
                <td><input type="text" className={styles["page129__input"]} /></td>
              </tr>
            </tbody>
          </table>
          <div className={styles["page129__examples"]}>
            <strong>Affirmative: {renderIcon('global_affirmativee', 'global_affirmativep')}</strong>
            <ul>
              <li>
                I am studying English.
                {renderIcon('pg129_audio1e', 'pg129_audio1p')}
              </li>
              <li>
                She is watching TV.
                {renderIcon('pg129_audio2e', 'pg129_audio2p')}
              </li>
              <li>
                They are playing soccer.
                {renderIcon('pg129_audio3e', 'pg129_audio3p')}
              </li>
            </ul>
          </div>
        </section>

        {/* Tabela Negative */}
        <section className={styles["page129__table-negative-container"]}>
          <div className={styles["page129__table-header--negative"]}>Negative Form (-)</div>
          <table className={styles["page129__styled-table--negative"]}>
            <thead>
              <tr>
                <th>Subject</th>
                <th>Aux. <br /> Verb</th>
                <th className={styles["page129__negative-not"]}>(Not)</th>
                <th>Verb (s)</th>
                <th>Object <br />Complement</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><input type="text" className={styles["page129__input"]} /></td>
                <td><input type="text" className={styles["page129__input"]} /></td>
                <td><input type="text" className={styles["page129__input"]} /></td>
                <td><input type="text" className={styles["page129__input"]} /></td>
                <td><input type="text" className={styles["page129__input"]} /></td>
              </tr>
            </tbody>
          </table>
          <div className={styles["page129__examples"]}>
            <strong>Negative: {renderIcon('global_negativee', 'global_negativep')}</strong>
            <ul>
              <li>
                I am <span style={{ color: 'red' }}>not</span> sleeping now.
                {renderIcon('pg129_audio4e', 'pg129_audio4p')}
              </li>
              <li>
                He is <span style={{ color: 'red' }}>not</span> listening to music.
                {renderIcon('pg129_audio5e', 'pg129_audio5p')}
              </li>
              <li>
                We are <span style={{ color: 'red' }}>not</span> going to the party.
                {renderIcon('pg129_audio6e', 'pg129_audio6p')}
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pagina129;
