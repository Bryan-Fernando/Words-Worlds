import React, { useRef } from 'react';
import styles from './pagina130.module.css';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';

import pg130_audio1e from '../assets/audios/pg130_audio1e.mp3';
import pg130_audio2e from '../assets/audios/pg130_audio2e.mp3';
import pg130_audio3e from '../assets/audios/pg130_audio3e.mp3';
import pg130_audio4e from '../assets/audios/pg130_audio4e.mp3';
import pg130_audio5e from '../assets/audios/pg130_audio5e.mp3';
import pg130_audio6e from '../assets/audios/pg130_audio6e.mp3';
import pg130_audio7e from '../assets/audios/pg130_audio7e.mp3';
import pg130_audio8e from '../assets/audios/pg130_audio8e.mp3';
import pg130_audio9e from '../assets/audios/pg130_audio9e.mp3';
import pg130_audio10e from '../assets/audios/pg130_audio10e.mp3';
import pg130_audio11e from '../assets/audios/pg130_audio11e.mp3';
import pg130_audio12e from '../assets/audios/pg130_audio12e.mp3';
import pg130_audio13e from '../assets/audios/pg130_audio13e.mp3';

const Pagina130 = () => {
  const audioMap = {
    pg130_audio1e,
    pg130_audio2e,
    pg130_audio3e,
    pg130_audio4e,
    pg130_audio5e,
    pg130_audio6e,
    pg130_audio7e,
    pg130_audio8e,
    pg130_audio9e,
    pg130_audio10e,
    pg130_audio11e,
    pg130_audio12e,
    pg130_audio13e,
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
    <span className={styles["page130__icons-container"]}>
      <img
        src={eng_audio_icon}
        alt="English Audio"
        className={styles["page130__icon"]}
        onClick={() => playAudio(engKey)}
      />
    </span>
  );

  return (
    <div className={styles["page130"]}>
      <header className={styles["page130__header"]}>
        <h1 className={styles["page130__header--h1"]}>
          Grammar: <span className={styles["page130__header--highlight"]}>Present Continuous or Progressive Form</span>
        </h1>
        <h2 className={styles["page130__header--h2"]}>Gerúndio</h2>
      </header>

      <div className={styles["page130__table--header"]}>
        Interrogative Form (+, -, ?)
      </div>

      <table className={styles["page130__styled--table"]}>
        <thead>
          <tr>
            <th>Palavras interrogativas</th>
            <th>Verbo <br /> Auxiliar</th>
            <th>Sujeito</th>
            <th><span style={{ color: 'red' }}>'Not'</span> <br /> Advérbio</th>
            <th>Verbo(s)</th>
            <th>Objeto <br /> Complemento</th>
            <th>Tradução</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td onClick={() => playAudio('pg130_audio1e')} style={{ cursor: 'pointer' }}></td>
            <td onClick={() => playAudio('pg130_audio1e')} style={{ cursor: 'pointer' }}>Am</td>
            <td onClick={() => playAudio('pg130_audio1e')} style={{ cursor: 'pointer' }}>I</td>
            <td onClick={() => playAudio('pg130_audio1e')} style={{ cursor: 'pointer', color: 'red' }}>not</td>
            <td onClick={() => playAudio('pg130_audio1e')} style={{ cursor: 'pointer' }}>going</td>
            <td onClick={() => playAudio('pg130_audio1e')} style={{ cursor: 'pointer' }}>to the movies with you?</td>
            <td>Eu não vou ao cinema com vocês?</td>
          </tr>
          <tr>
            <td onClick={() => playAudio('pg130_audio2e')} style={{ cursor: 'pointer' }}></td>
            <td onClick={() => playAudio('pg130_audio2e')} style={{ cursor: 'pointer' }}>Ain't</td>
            <td onClick={() => playAudio('pg130_audio2e')} style={{ cursor: 'pointer' }}>I</td>
            <td></td>
            <td onClick={() => playAudio('pg130_audio2e')} style={{ cursor: 'pointer' }}>going</td>
            <td onClick={() => playAudio('pg130_audio2e')} style={{ cursor: 'pointer' }}>to the movies with you?</td>
            <td>Eu não vou ao cinema com vocês?</td>
          </tr>
        </tbody>
      </table>

      <section className={styles["page130__examples"]}>
        <div className={styles["page130__examples--block"]}>
          <p className={styles["page130__examples--title"]}>
            Interrogative - Affirmative: {renderIcon('pg130_audio3e')}
          </p>
          <ul>
            <li>Are you studying now? {renderIcon('pg130_audio4e')}</li>
            <li>Is she cooking dinner? {renderIcon('pg130_audio5e')}</li>
            <li>Am I speaking too loud? {renderIcon('pg130_audio6e')}</li>
          </ul>
        </div>

        <div className={styles["page130__examples--block"]}>
          <p className={styles["page130__examples--title"]}>
            Interrogative - Negative: {renderIcon('pg130_audio7e')}
          </p>
          <ul>
            <li>Aren’t you studying for the test? {renderIcon('pg130_audio8e')}</li>
            <li>Isn’t she cooking dinner? {renderIcon('pg130_audio9e')}</li>
            <li>Ain’t I speaking too fast? {renderIcon('pg130_audio10e')}</li>
          </ul>
        </div>
      </section>

      <section className={styles["page130__translations"]}>
        <div>
          <p>Speak - Speaking {renderIcon('pg130_audio11e')}</p>
          <p>Eat - Eating {renderIcon('pg130_audio12e')}</p>
          <p>Leave - Leaving {renderIcon('pg130_audio13e')}</p>
        </div>
        <div>
          <p>Falar - Falando</p>
          <p>Comer - Comendo</p>
          <p>Partir / Sair - Partindo / Saindo</p>
        </div>
      </section>

      <aside className={styles["page130__aside"]}>
        <div className={styles["page130__aside--container"]}>
          <div className={styles["page130__aside--note1"]}>
            <p>Nota:</p>
          </div>
          <div className={styles["page130__aside--note2"]}>
            <p>Em português, o gerúndio é a forma do verbo terminada em <strong>“ando“, “endo“, “indo“.</strong></p>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Pagina130;
