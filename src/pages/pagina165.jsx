import React, { useRef } from 'react';
import styles from './pagina165.module.css';

import pagina165_imagem1 from '../assets/images/pagina165_imagem1.webp';
import pagina165_imagem2 from '../assets/images/pagina165_imagem2.webp';

import pg165_audio1e from '../assets/audios/pg165_audio1e.mp3'; // How many times
import pg165_audio2e from '../assets/audios/pg165_audio2e.mp3'; // How many times a day
import pg165_audio3e from '../assets/audios/pg165_audio3e.mp3'; // How many times a week
import pg165_audio4e from '../assets/audios/pg165_audio4e.mp3'; // How many times a month
import pg165_audio5e from '../assets/audios/pg165_audio5e.mp3'; // How many times a year
import pg165_audio6e from '../assets/audios/pg165_audio6e.mp3'; // Row 1
import pg165_audio7e from '../assets/audios/pg165_audio7e.mp3'; // Row 2
import pg165_audio8e from '../assets/audios/pg165_audio8e.mp3'; // Row 3
import pg165_audio9e from '../assets/audios/pg165_audio9e.mp3'; // Row 4
import pg165_audio10e from '../assets/audios/pg165_audio10e.mp3'; // Row 5

const Pagina165 = () => {
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
    <div className={styles["page165__container"]}>
      <h1 className={styles["page165__title"]}>
        Grammar <br />
        <span className={styles["page165__title--highlight"]}>Question Words</span>
      </h1>

      <section className={styles["page165__translations"]}>
        <div className={styles["page165__translations-column"]}>
          <table className={styles["page165__translation-table"]}>
            <tbody>
              <tr>
                <td
                  className={styles["page165__text-red"]}
                  onClick={() => playAudio(pg165_audio1e)}
                  style={{ cursor: 'pointer' }}
                >
                  How many times
                </td>
                <td>Quantas vezes</td>
              </tr>
              <tr>
                <td
                  className={styles["page165__text-red"]}
                  onClick={() => playAudio(pg165_audio2e)}
                  style={{ cursor: 'pointer' }}
                >
                  How many times a day
                </td>
                <td>Quantas vezes por dia</td>
              </tr>
              <tr>
                <td
                  className={styles["page165__text-red"]}
                  onClick={() => playAudio(pg165_audio3e)}
                  style={{ cursor: 'pointer' }}
                >
                  How many times a week
                </td>
                <td>Quantas vezes por semana</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={styles["page165__translations-column"]}>
          <table className={styles["page165__translation-table"]}>
            <tbody>
              <tr>
                <td
                  className={styles["page165__text-red"]}
                  onClick={() => playAudio(pg165_audio4e)}
                  style={{ cursor: 'pointer' }}
                >
                  How many times a month
                </td>
                <td>Quantas vezes por mês</td>
              </tr>
              <tr>
                <td
                  className={styles["page165__text-red"]}
                  onClick={() => playAudio(pg165_audio5e)}
                  style={{ cursor: 'pointer' }}
                >
                  How many times a year
                </td>
                <td>Quantas vezes por ano</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <div className={styles["page165__table-header"]}>Question Words</div>
        <table className={styles["page165__table"]}>
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
              {[
                <span className={styles["page165__text-red"]}>How many times</span>,
                <span className={styles["page165__text-blue"]}>does</span>,
                "Sarah",
                "",
                "call",
                "you ?"
              ].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg165_audio6e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
            <tr>
              {[
                <span className={styles["page165__text-red"]}>How many times a day</span>,
                <span className={styles["page165__text-blue"]}>do</span>,
                "you",
                "",
                "check",
                "your phone ?"
              ].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg165_audio7e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
            <tr>
              {[
                <span className={styles["page165__text-red"]}>How many times a week</span>,
                <span className={styles["page165__text-blue"]}>do</span>,
                "Ray and Miguel",
                "",
                "eat out ?",
                ""
              ].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg165_audio8e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
            <tr>
              {[
                <span className={styles["page165__text-red"]}>How many times a month</span>,
                <span className={styles["page165__text-blue"]}>does</span>,
                "John",
                "",
                "visit",
                "his grandparents ?"
              ].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg165_audio9e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
            <tr>
              {[
                <span className={styles["page165__text-red"]}>How many times a year</span>,
                <span className={styles["page165__text-blue"]}>do</span>,
                "you",
                "",
                "travel",
                "abroad ?"
              ].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg165_audio10e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </section>

      <section className={styles["page165__images-container"]}>
        <img src={pagina165_imagem1} alt="Imagem 1" className={styles["page165__image"]} />
        <img src={pagina165_imagem2} alt="Imagem 2" className={styles["page165__image2"]} />
      </section>
    </div>
  );
};

export default Pagina165;
