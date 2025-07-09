import React, { useRef } from 'react';
import styles from './pagina80.module.css';

import pagina80_imagem1 from '../assets/images/pagina80_imagem1.webp';
import pagina80_imagem2 from '../assets/images/pagina80_imagem2.gif';

import pg80_audio1e from '../assets/audios/pg80_audio1e.mp3';
import pg80_audio2e from '../assets/audios/pg80_audio2e.mp3';
import pg80_audio3e from '../assets/audios/pg80_audio3e.mp3';
import pg80_audio4e from '../assets/audios/pg80_audio4e.mp3';
import pg80_audio5e from '../assets/audios/pg80_audio5e.mp3';
import pg80_audio6e from '../assets/audios/pg80_audio6e.mp3';
import pg80_audio7e from '../assets/audios/pg80_audio7e.mp3';
import pg80_audio8e from '../assets/audios/pg80_audio8e.mp3';
import pg80_audio9e from '../assets/audios/pg80_audio9e.mp3';
import pg80_audio10e from '../assets/audios/pg80_audio10e.mp3';
import pg80_audio11e from '../assets/audios/pg80_audio11e.mp3';

const Pagina80 = () => {
  const currentAudioRef = useRef(null);

  const playAudio = (audioFile) => {
    if (currentAudioRef.current) {
      currentAudioRef.current.pause();
      currentAudioRef.current.currentTime = 0;
    }
    const audio = new Audio(audioFile);
    currentAudioRef.current = audio;
    audio.play();
  };

  return (
    <div className={styles["page80"]}>
      <h1 className={styles["page80__title"]}>
        Grammar <br />
        <span className={styles["page80__title--highlight"]}>
          Simple Present ( Be and Common Main Verbs )
        </span>
      </h1>

      {/* Tabela 1 */}
      <section>
        <div className={styles["page80__table-header"]}>Affirmative Form</div>
        <table className={styles["page80__table"]}>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Aux Verb</th>
              <th>Adv</th>
              <th>Verb <span className={styles["page80__bf-label"]}>(BF)</span></th>
              <th>Object Complement</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {["I", "", "", "live", "in São Paulo"].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg80_audio1e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </section>

      {/* Tabela 2 */}
      <section>
        <div className={styles["page80__table-header"]}>Affirmative Form</div>
        <table className={styles["page80__table"]}>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Aux Verb</th>
              <th>Adv</th>
              <th>Verb <span className={styles["page80__bf-label"]}>(BF)</span></th>
              <th>Object Complement</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {["I", <span className={styles["page80__verb-cell"]}>am</span>, "", "", "happy"].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg80_audio2e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
            <tr>
              {["I", "", "", <span className={styles["page80__verb-cell"]}>call</span>, "my friends on weekends"].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg80_audio3e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
            <tr>
              {["I", "", "", <span className={styles["page80__verb-cell"]}>begin</span>, "my day with a coffee"].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg80_audio4e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
            <tr>
              {["I", "", "", <span className={styles["page80__verb-cell"]}>need to eat</span>, "fruit for breakfast"].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg80_audio5e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
            <tr>
              {["I", "", "", <span className={styles["page80__verb-cell"]}>have to go to work</span>, "at 7:00 a.m."].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg80_audio6e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </section>

      {/* Tabela 3 */}
      <section>
        <div className={styles["page80__table-header"]}>Affirmative Form</div>
        <table className={styles["page80__table"]}>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Aux Verb</th>
              <th>Adv</th>
              <th>Verb <span className={styles["page80__bf-label"]}>(BF)</span></th>
              <th>Object Complement</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {["I", "", "", <span className={styles["page80__verb-cell"]}>have</span>, "a big family"].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg80_audio7e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
            <tr>
              {["I", "", "", <span className={styles["page80__verb-cell"]}>finish</span>, "my work before 5 a.m."].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg80_audio8e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
            <tr>
              {["I", "", "", <span className={styles["page80__verb-cell"]}>call</span>, "my friends on weekends"].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg80_audio9e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
            <tr>
              {["I", "", "", <span className={styles["page80__verb-cell"]}>eat</span>, "fruit for breakfast"].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg80_audio10e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
            <tr>
              {["I", "", "", <span className={styles["page80__verb-cell"]}>like to go</span>, "to the gym in the morning"].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg80_audio11e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </section>

      {/* Imagens */}
      <section className={styles["page80__images"]}>
        <img src={pagina80_imagem1} alt="Pessoa tomando café com notebook" className={styles["page80__image"]} />
        <img src={pagina80_imagem2} alt="Pessoa na academia" className={styles["page80__image"]} />
      </section>
    </div>
  );
};

export default Pagina80;
