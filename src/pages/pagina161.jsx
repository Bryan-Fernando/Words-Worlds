import React, { useRef } from 'react';
import styles from './pagina161.module.css';

import pagina161_imagem1 from '../assets/images/pagina161_imagem1.webp';
import pagina161_imagem2 from '../assets/images/pagina161_imagem2.webp';

import pg161_audio1e from '../assets/audios/pg161_audio1e.mp3'; // Why
import pg161_audio2e from '../assets/audios/pg161_audio2e.mp3'; // Who
import pg161_audio3e from '../assets/audios/pg161_audio3e.mp3'; // Which
import pg161_audio4e from '../assets/audios/pg161_audio4e.mp3'; // What size
import pg161_audio5e from '../assets/audios/pg161_audio5e.mp3'; // Row 1
import pg161_audio6e from '../assets/audios/pg161_audio6e.mp3'; // Row 2
import pg161_audio7e from '../assets/audios/pg161_audio7e.mp3'; // Row 3
import pg161_audio8e from '../assets/audios/pg161_audio8e.mp3'; // Row 4

const Pagina161 = () => {
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
    <div className={styles["page161__container"]}>
      <h1 className={styles["page161__title"]}>
        Grammar <br />
        <span className={styles["page161__title--highlight"]}>Question Words</span>
      </h1>

      <section className={styles["page161__question-translation"]}>
        <div className={styles["page161__question-column"]}>
          <table className={styles["page161__question-table"]}>
            <tbody>
              <tr>
                <td
                  className={styles["page161__text-red"]}
                  onClick={() => playAudio(pg161_audio1e)}
                  style={{ cursor: 'pointer' }}
                >
                  Why
                </td>
                <td>"Por que" (em perguntas)</td>
              </tr>
              <tr>
                <td
                  className={styles["page161__text-red"]}
                  onClick={() => playAudio(pg161_audio2e)}
                  style={{ cursor: 'pointer' }}
                >
                  Who
                </td>
                <td>Quem</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={styles["page161__question-column"]}>
          <table className={styles["page161__question-table"]}>
            <tbody>
              <tr>
                <td
                  className={styles["page161__text-red"]}
                  onClick={() => playAudio(pg161_audio3e)}
                  style={{ cursor: 'pointer' }}
                >
                  Which
                </td>
                <td>Que, qual, quais (opção)</td>
              </tr>
              <tr>
                <td
                  className={styles["page161__text-red"]}
                  onClick={() => playAudio(pg161_audio4e)}
                  style={{ cursor: 'pointer' }}
                >
                  What size
                </td>
                <td>Que tamanho / Qual tamanho</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <div className={styles["page161__table-header"]}>Question Words</div>
        <table className={styles["page161__table"]}>
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
                <span className={styles["page161__text-red"]}>Who</span>,
                <span className={styles["page161__text-blue"]}>do</span>,
                "you",
                "",
                "like",
                "the most in your family?"
              ].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg161_audio5e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
            <tr>
              {[
                <span className={styles["page161__text-red"]}>Why</span>,
                <span className={styles["page161__text-blue"]}>do</span>,
                "Ana and Tom",
                "",
                "study",
                "English?"
              ].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg161_audio6e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
            <tr>
              {[
                <span className={styles["page161__text-red"]}>Which color</span>,
                <span className={styles["page161__text-blue"]}>do</span>,
                "they",
                "",
                "prefer",
                "blue or red?"
              ].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg161_audio7e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
            <tr>
              {[
                <span className={styles["page161__text-red"]}>What size</span>,
                <span className={styles["page161__text-blue"]}>does</span>,
                "Marco",
                "",
                "wear",
                "(When asking about clothing or shoe size)"
              ].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg161_audio8e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </section>

      <section className={styles["page161__images-container"]}>
        <img src={pagina161_imagem1} alt="Imagem 1" className={styles["page161__image"]} />
        <img src={pagina161_imagem2} alt="Imagem 2" className={styles["page161__image"]} />
      </section>
    </div>
  );
};

export default Pagina161;
