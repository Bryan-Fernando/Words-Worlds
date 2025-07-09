import React, { useRef } from 'react';
import styles from './pagina162.module.css';

import pagina162_imagem1 from '../assets/images/pagina162_imagem1.gif';
import pagina162_imagem2 from '../assets/images/pagina162_imagem2.webp';

import pg162_audio1e from '../assets/audios/pg162_audio1e.mp3'; // Whose
import pg162_audio2e from '../assets/audios/pg162_audio2e.mp3'; // What kind of
import pg162_audio3e from '../assets/audios/pg162_audio3e.mp3'; // What type of
import pg162_audio4e from '../assets/audios/pg162_audio4e.mp3'; // What sort of
import pg162_audio5e from '../assets/audios/pg162_audio5e.mp3'; // Row 1
import pg162_audio6e from '../assets/audios/pg162_audio6e.mp3'; // Row 2
import pg162_audio7e from '../assets/audios/pg162_audio7e.mp3'; // Row 3
import pg162_audio8e from '../assets/audios/pg162_audio8e.mp3'; // Row 4

const Pagina162 = () => {
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
    <div className={styles["page162__container"]}>
      <h1 className={styles["page162__title"]}>
        Grammar <br />
        <span className={styles["page162__title--highlight"]}>Question Words</span>
      </h1>

      <section className={styles["page162__translations"]}>
        <div className={styles["page162__translations-column"]}>
          <table className={styles["page162__translation-table"]}>
            <tbody>
              <tr>
                <td
                  className={styles["page162__text-red"]}
                  onClick={() => playAudio(pg162_audio1e)}
                  style={{ cursor: 'pointer' }}
                >
                  Whose
                </td>
                <td>“De quem” (posse)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={styles["page162__translations-column"]}>
          <table className={styles["page162__translation-table"]}>
            <tbody>
              <tr>
                <td
                  className={styles["page162__text-red"]}
                  onClick={() => playAudio(pg162_audio2e)}
                  style={{ cursor: 'pointer' }}
                >
                  What kind of
                </td>
                <td>Que tipo de / espécie de</td>
              </tr>
              <tr>
                <td
                  className={styles["page162__text-red"]}
                  onClick={() => playAudio(pg162_audio3e)}
                  style={{ cursor: 'pointer' }}
                >
                  What type of
                </td>
                <td>Que tipo de / espécie de</td>
              </tr>
              <tr>
                <td
                  className={styles["page162__text-red"]}
                  onClick={() => playAudio(pg162_audio4e)}
                  style={{ cursor: 'pointer' }}
                >
                  What sort of
                </td>
                <td>Que tipo de / espécie de</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <div className={styles["page162__table-header"]}>Question Words</div>
        <table className={styles["page162__table"]}>
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
                <>
                  <span className={styles["page162__text-red"]}>Whose</span> mother
                </>,
                <span className={styles["page162__text-blue"]}></span>,
                "",
                "",
                "works",
                "at NASA ?"
              ].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg162_audio5e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
            <tr>
              {[
                <>
                  <span className={styles["page162__text-red"]}>What kind of</span> music
                </>,
                <span className={styles["page162__text-blue"]}>do</span>,
                "Ane and Tom",
                "",
                "listen to ?",
                ""
              ].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg162_audio6e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
            <tr>
              {[
                <>
                  <span className={styles["page162__text-red"]}>What type of</span> sports
                </>,
                <span className={styles["page162__text-blue"]}>does</span>,
                "Miguel",
                "",
                "like to play ?",
                ""
              ].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg162_audio7e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
            <tr>
              {[
                <>
                  <span className={styles["page162__text-red"]}>What sort of</span> movies
                </>,
                <span className={styles["page162__text-blue"]}>do</span>,
                "you",
                "",
                "like ?",
                ""
              ].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg162_audio8e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </section>

      <section className={styles["page162__images-container"]}>
        <img src={pagina162_imagem1} alt="Imagem 1" className={styles["page162__image"]} />
        <img src={pagina162_imagem2} alt="Imagem 2" className={styles["page162__image"]} />
      </section>
    </div>
  );
};

export default Pagina162;
