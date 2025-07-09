import React, { useRef } from 'react';
import styles from './pagina164.module.css';

import pagina164_imagem1 from '../assets/images/pagina164_imagem1.gif';
import pagina164_imagem2 from '../assets/images/pagina164_imagem2.webp';

import pg164_audio1e from '../assets/audios/pg164_audio1e.mp3'; // How much
import pg164_audio2e from '../assets/audios/pg164_audio2e.mp3'; // How many
import pg164_audio3e from '../assets/audios/pg164_audio3e.mp3'; // How long
import pg164_audio4e from '../assets/audios/pg164_audio4e.mp3'; // How much longer
import pg164_audio5e from '../assets/audios/pg164_audio5e.mp3'; // Row 1
import pg164_audio6e from '../assets/audios/pg164_audio6e.mp3'; // Row 2
import pg164_audio7e from '../assets/audios/pg164_audio7e.mp3'; // Row 3
import pg164_audio8e from '../assets/audios/pg164_audio8e.mp3'; // Row 4

const Pagina164 = () => {
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
    <div className={styles["page164__container"]}>
      <h1 className={styles["page164__title"]}>
        Grammar <br />
        <span className={styles["page164__title--highlight"]}>Question Words</span>
      </h1>

      <section className={styles["page164__translations"]}>
        <div className={styles["page164__translations-column"]}>
          <table className={styles["page164__translation-table"]}>
            <tbody>
              <tr>
                <td
                  className={styles["page164__text-red"]}
                  onClick={() => playAudio(pg164_audio1e)}
                  style={{ cursor: 'pointer' }}
                >
                  How much
                </td>
                <td>
                  Quanto / quanta / quanto de <br />
                  <span className={styles["page164__translation-note"]}>
                    ( <span className={styles["page164__text-red"]}>substantivos</span> incontáveis )
                  </span>
                </td>
              </tr>
              <tr>
                <td
                  className={styles["page164__text-red"]}
                  onClick={() => playAudio(pg164_audio2e)}
                  style={{ cursor: 'pointer' }}
                >
                  How many
                </td>
                <td>
                  Quantos / quantas <br />
                  <span className={styles["page164__translation-note"]}>
                    (<span className={styles["page164__text-red"]}>substantivos</span> contáveis)
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={styles["page164__translations-column"]}>
          <table className={styles["page164__translation-table"]}>
            <tbody>
              <tr>
                <td
                  className={styles["page164__text-red"]}
                  onClick={() => playAudio(pg164_audio3e)}
                  style={{ cursor: 'pointer' }}
                >
                  How long
                </td>
                <td>
                  Quanto tempo <br />
                  <span className={styles["page164__translation-note"]}>
                    ( usado para perguntar sobre a{" "}
                    <span className={styles["page164__text-red"]}>duração total</span> de algo )
                  </span>
                </td>
              </tr>
              <tr>
                <td
                  className={styles["page164__text-red"]}
                  onClick={() => playAudio(pg164_audio4e)}
                  style={{ cursor: 'pointer' }}
                >
                  How much longer
                </td>
                <td>
                  Quanto tempo mais <br />
                  Quanto tempo ainda <br />
                  <span className={styles["page164__translation-note"]}>
                    ( usado para perguntar quanto tempo ainda resta até que algo termine )
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <div className={styles["page164__table-header"]}>Question Words</div>
        <table className={styles["page164__table"]}>
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
                  <span className={styles["page164__text-red"]}>How much</span> water
                </>,
                <span className={styles["page164__text-blue"]}>do</span>,
                "you",
                "",
                "drink",
                "every day ?"
              ].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg164_audio5e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
            <tr>
              {[
                <>
                  <span className={styles["page164__text-red"]}>How many</span> books
                </>,
                <span className={styles["page164__text-blue"]}>does</span>,
                "Bryan",
                "",
                "read",
                "a month ?"
              ].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg164_audio6e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
            <tr>
              {[
                <span className={styles["page164__text-red"]}>How long</span>,
                <span className={styles["page164__text-blue"]}>do</span>,
                "you",
                "",
                "stay",
                "in Brazil ?"
              ].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg164_audio7e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
            <tr>
              {[
                <span className={styles["page164__text-red"]}>How much longer</span>,
                <span className={styles["page164__text-blue"]}>do</span>,
                "we",
                "",
                "have to wait ?",
                ""
              ].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg164_audio8e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </section>

      <section className={styles["page164__images-container"]}>
        <img src={pagina164_imagem1} alt="Imagem 1" className={styles["page164__image"]} />
        <img src={pagina164_imagem2} alt="Imagem 2" className={styles["page164__image"]} />
      </section>
    </div>
  );
};

export default Pagina164;
