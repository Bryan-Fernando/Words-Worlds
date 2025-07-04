import React, { useRef } from 'react';
import styles from './pagina154.module.css';
import pagina154_imagem1 from '../assets/images/pagina154_imagem1.webp';

import pg154_audio1e from '../assets/audios/pg154_audio1e.mp3';
import pg154_audio2e from '../assets/audios/pg154_audio2e.mp3';
import pg154_audio3e from '../assets/audios/pg154_audio3e.mp3';
import pg154_audio4e from '../assets/audios/pg154_audio4e.mp3';
import pg154_audio5e from '../assets/audios/pg154_audio5e.mp3';

const Pagina154 = () => {
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
    <div className={styles["page154__container"]}>
    <h1 className={styles["page154__title"]}>
      Grammar <br />
      <span className={styles["page154__title--highlight"]}>
        Simple Present ( Be and Common Main Verbs )
      </span>
    </h1>
  
    {/* Tabela 1 */}
    <section>
      <div className={styles["page154__table-header"]}>Interrogative Form</div>
      <table className={styles["page154__table"]}>
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
              "",
              <span className={styles["page154__verb-cell"]}>Do</span>,
              "I",
              "",
              "work",
              "on weekends ?"
            ].map((cell, i) => (
              <td
                key={i}
                onClick={() => playAudio(pg154_audio1e)}
                style={{
                  cursor: 'pointer',
                  textAlign: cell === "I" ? "center" : undefined
                }}
              >
                {cell === "I" ? <strong>{cell}</strong> : cell}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </section>
  
    {/* Tabela 2 */}
    <section>
      <div className={styles["page154__table-header"]}>Interrogative Form</div>
      <table className={styles["page154__table"]}>
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
              "",
              "Am",
              "I",
              "",
              "late",
              "?"
            ].map((cell, i) => (
              <td
                key={i}
                onClick={() => playAudio(pg154_audio2e)}
                style={{
                  cursor: 'pointer',
                  textAlign: cell === "I" ? "center" : undefined
                }}
              >
                {cell === "I" ? (
                  <strong>{cell}</strong>
                ) : cell === "Am" ? (
                  <span style={{ color: "blue", fontWeight: "bold" }}>{cell}</span>
                ) : (
                  cell
                )}
              </td>
            ))}
          </tr>
          <tr>
            {[
              "",
              <span className={styles["page154__verb-cell"]}>Do</span>,
              "I",
              "",
              "need to work",
              "on Sunday ?"
            ].map((cell, i) => (
              <td
                key={i}
                onClick={() => playAudio(pg154_audio3e)}
                style={{
                  cursor: 'pointer',
                  textAlign: cell === "I" ? "center" : undefined
                }}
              >
                {cell === "I" ? <strong>{cell}</strong> : cell}
              </td>
            ))}
          </tr>
          <tr>
            {[
              "",
              <span className={styles["page154__verb-cell"]}>Do</span>,
              "I",
              "",
              "travel",
              "at 7:00 a.m. or at 7:00 p.m. ?"
            ].map((cell, i) => (
              <td
                key={i}
                onClick={() => playAudio(pg154_audio4e)}
                style={{
                  cursor: 'pointer',
                  textAlign: cell === "I" ? "center" : undefined
                }}
              >
                {cell === "I" ? <strong>{cell}</strong> : cell}
              </td>
            ))}
          </tr>
          <tr>
            {[
              "",
              <span className={styles["page154__verb-cell"]}>Do</span>,
              "I",
              "",
              "",
              "look like him ?"
            ].map((cell, i) => (
              <td
                key={i}
                onClick={() => playAudio(pg154_audio5e)}
                style={{
                  cursor: 'pointer',
                  textAlign: cell === "I" ? "center" : undefined
                }}
              >
                {cell === "I" ? <strong>{cell}</strong> : cell}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </section>
  
    {/* Imagem */}
    <section className={styles["page154__image-container"]}>
      <img
        src={pagina154_imagem1}
        alt="Pessoa com mala no aeroporto"
        className={styles["page154__image"]}
      />
    </section>
  </div>
  
  );
};

export default Pagina154;
