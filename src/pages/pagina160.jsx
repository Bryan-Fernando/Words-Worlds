import React, { useRef } from 'react';
import styles from './pagina160.module.css';

import pagina160_imagem1 from '../assets/images/pagina160_imagem1.gif';
import pagina160_imagem2 from '../assets/images/pagina160_imagem2.gif';

import pg160_audio1e from '../assets/audios/pg160_audio1e.mp3'; 
import pg160_audio2e from '../assets/audios/pg160_audio2e.mp3';
import pg160_audio3e from '../assets/audios/pg160_audio3e.mp3';
import pg160_audio4e from '../assets/audios/pg160_audio4e.mp3';
import pg160_audio5e from '../assets/audios/pg160_audio5e.mp3';
import pg160_audio6e from '../assets/audios/pg160_audio6e.mp3';
import pg160_audio7e from '../assets/audios/pg160_audio7e.mp3';
import pg160_audio8e from '../assets/audios/pg160_audio8e.mp3';

const Pagina160 = () => {
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
    <div className={styles["page160__container"]}>
      <h1 className={styles["page160__title"]}>
        Grammar <br />
        <span className={styles["page160__title--highlight"]}>Question Words</span>
      </h1>

      <section className={styles["page160__question-translation"]}>
        <div className={styles["page160__question-column"]}>
          <table className={styles["page160__question-table"]}>
            <tbody>
              <tr>
                <td
                  className={styles["page160__text-red"]}
                  onClick={() => playAudio(pg160_audio1e)}
                  style={{ cursor: 'pointer' }}
                >
                  What
                </td>
                <td>O que, que, qual, quais</td>
              </tr>
              <tr>
                <td
                  className={styles["page160__text-red"]}
                  onClick={() => playAudio(pg160_audio2e)}
                  style={{ cursor: 'pointer' }}
                >
                  Where
                </td>
                <td>Onde, aonde</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={styles["page160__question-column"]}>
          <table className={styles["page160__question-table"]}>
            <tbody>
              <tr>
                <td
                  className={styles["page160__text-red"]}
                  onClick={() => playAudio(pg160_audio3e)}
                  style={{ cursor: 'pointer' }}
                >
                  When
                </td>
                <td>Quando</td>
              </tr>
              <tr>
                <td
                  className={styles["page160__text-red"]}
                  onClick={() => playAudio(pg160_audio4e)}
                  style={{ cursor: 'pointer' }}
                >
                  What time
                </td>
                <td>Que horas</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <div className={styles["page160__table-header"]}>Question Words</div>
        <table className={styles["page160__table"]}>
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
                <span className={styles["page160__text-red"]}>What</span>,
                <span className={styles["page160__text-blue"]}>do</span>,
                "you ( sg )",
                "usually",
                "eat",
                "for breakfast?"
              ].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg160_audio5e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
            <tr>
              {[
                <span className={styles["page160__text-red"]}>Where</span>,
                <span className={styles["page160__text-blue"]}>does</span>,
                "Ketlen",
                "",
                "live?",
                ""
              ].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg160_audio6e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
            <tr>
              {[
                <span className={styles["page160__text-red"]}>When</span>,
                <span className={styles["page160__text-blue"]}>does</span>,
                "Carlos",
                "",
                "go to work",
                "in São Paulo?"
              ].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg160_audio7e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
            <tr>
              {[
                <span className={styles["page160__text-red"]}>What time</span>,
                <span className={styles["page160__text-blue"]}>do</span>,
                "banks",
                "",
                "open?",
                ""
              ].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg160_audio8e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </section>

      <section className={styles["page160__images-container"]}>
        <img src={pagina160_imagem1} alt="Imagem 1" className={styles["page160__image"]} />
        <img src={pagina160_imagem2} alt="Imagem 2" className={styles["page160__image"]} />
      </section>
    </div>
  );
};

export default Pagina160;
