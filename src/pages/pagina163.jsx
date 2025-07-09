import React, { useRef } from 'react';
import styles from './pagina163.module.css';

import pagina163_imagem1 from '../assets/images/pagina163_imagem1.webp';
import pagina163_imagem2 from '../assets/images/pagina163_imagem2.gif';

import pg163_audio1e from '../assets/audios/pg163_audio1e.mp3'; // How
import pg163_audio2e from '../assets/audios/pg163_audio2e.mp3'; // How far
import pg163_audio3e from '../assets/audios/pg163_audio3e.mp3'; // How old
import pg163_audio4e from '../assets/audios/pg163_audio4e.mp3'; // How often
import pg163_audio5e from '../assets/audios/pg163_audio5e.mp3'; // Row 1
import pg163_audio6e from '../assets/audios/pg163_audio6e.mp3'; // Row 2
import pg163_audio7e from '../assets/audios/pg163_audio7e.mp3'; // Row 3
import pg163_audio8e from '../assets/audios/pg163_audio8e.mp3'; // Row 4

const Pagina163 = () => {
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
    <div className={styles["page163__container"]}>
      <h1 className={styles["page163__title"]}>
        Grammar <br />
        <span className={styles["page163__title--highlight"]}>Question Words</span>
      </h1>

      <section className={styles["page163__translations"]}>
        <div className={styles["page163__translations-column"]}>
          <table className={styles["page163__translation-table"]}>
            <tbody>
              <tr>
                <td
                  className={styles["page163__text-red"]}
                  onClick={() => playAudio(pg163_audio1e)}
                  style={{ cursor: 'pointer' }}
                >
                  How
                </td>
                <td>Como - Quão (adjetivo / advérbio)</td>
              </tr>
              <tr>
                <td
                  className={styles["page163__text-red"]}
                  onClick={() => playAudio(pg163_audio2e)}
                  style={{ cursor: 'pointer' }}
                >
                  How far
                </td>
                <td>Quão longe <br /> Que distância</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={styles["page163__translations-column"]}>
          <table className={styles["page163__translation-table"]}>
            <tbody>
              <tr>
                <td
                  className={styles["page163__text-red"]}
                  onClick={() => playAudio(pg163_audio3e)}
                  style={{ cursor: 'pointer' }}
                >
                  How old
                </td>
                <td>
                  Quantos anos <br /> Quão velho <br /> ( somente para{" "}
                  <span className={styles["page163__text-red"]}>idade</span> )
                </td>
              </tr>
              <tr>
                <td
                  className={styles["page163__text-red"]}
                  onClick={() => playAudio(pg163_audio4e)}
                  style={{ cursor: 'pointer' }}
                >
                  How often
                </td>
                <td>Com que frequência <br /> Quão frequente</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <div className={styles["page163__table-header"]}>Question Words</div>
        <table className={styles["page163__table"]}>
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
                <span className={styles["page163__text-red"]}>How</span>,
                <span className={styles["page163__text-blue"]}>do</span>,
                "you",
                "",
                "go",
                "to Florianópolis ?"
              ].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg163_audio5e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
            <tr>
              {[
                <span className={styles["page163__text-red"]}>How far</span>,
                <span className={styles["page163__text-blue"]}>does</span>,
                "Annie",
                "",
                "live",
                "from San Francisco ?"
              ].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg163_audio6e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
            <tr>
              {[
                <span className={styles["page163__text-red"]}>How old</span>,
                <span className={styles["page163__text-blue"]}>do</span>,
                "you",
                "",
                <>
                  have <span className={styles["page163__text-red"]}>to be</span> to join
                </>,
                "the Air Force ?"
              ].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg163_audio7e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
            <tr>
              {[
                <span className={styles["page163__text-red"]}>How often</span>,
                <span className={styles["page163__text-blue"]}>does</span>,
                "it",
                "",
                "snow",
                "in your country ?"
              ].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg163_audio8e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </section>

      <section className={styles["page163__images-container"]}>
        <img src={pagina163_imagem1} alt="Imagem 1" className={styles["page163__image"]} />
        <img src={pagina163_imagem2} alt="Imagem 2" className={styles["page163__image"]} />
      </section>
    </div>
  );
};

export default Pagina163;
