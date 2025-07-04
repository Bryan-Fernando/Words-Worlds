import React, { useRef } from 'react';
import styles from './pagina155.module.css';
import pagina155_imagem1 from '../assets/images/pagina155_imagem1.webp';
import pagina155_imagem2 from '../assets/images/pagina155_imagem2.webp';

import pg155_audio1e from '../assets/audios/pg155_audio1e.mp3';
import pg155_audio2e from '../assets/audios/pg155_audio2e.mp3';
import pg155_audio3e from '../assets/audios/pg155_audio3e.mp3';
import pg155_audio4e from '../assets/audios/pg155_audio4e.mp3';
import pg155_audio5e from '../assets/audios/pg155_audio5e.mp3';
import pg155_audio6e from '../assets/audios/pg155_audio6e.mp3';
import pg155_audio7e from '../assets/audios/pg155_audio7e.mp3';
import pg155_audio8e from '../assets/audios/pg155_audio8e.mp3';
import pg155_audio9e from '../assets/audios/pg155_audio9e.mp3';

const Pagina155 = () => {
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
    <div className={styles["page155__container"]}>
      <h1 className={styles["page155__title"]}>
        Grammar <br />
        <span className={styles["page155__title--highlight"]}>
          Simple Present ( Be and Common Main Verbs )
        </span>
      </h1>

      {/* Tabela 1 */}
      <section>
        <div className={styles["page155__table-header"]}>Interrogative Form</div>
        <table className={styles["page155__table"]}>
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
                <span className={styles["page155__verb-cell"]}>Does</span>,
                "Maria",
                "",
                "work",
                "on weekends ?"
              ].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg155_audio1e)}
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
        <div className={styles["page155__table-header"]}>Interrogative Form</div>
        <table className={styles["page155__table"]}>
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
                "Is",
                "Priscila",
                "",
                "",
                "busy ?"
              ].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg155_audio2e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell === "Is" ? (
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
                <span className={styles["page155__verb-cell"]}>Does</span>,
                "Eric",
                "",
                "have to work",
                "on Sunday ?"
              ].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg155_audio3e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
            <tr>
              {[
                "",
                <span className={styles["page155__verb-cell"]}>Does</span>,
                "Nicole",
                "",
                "need to go",
                "to Miami on Friday ?"
              ].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg155_audio4e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
            <tr>
              {[
                "",
                <span className={styles["page155__verb-cell"]}>Does</span>,
                "the mall",
                "",
                "open",
                "in the morning or afternoon ?"
              ].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg155_audio5e)}
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
        <div className={styles["page155__table-header"]}>Interrogative Form</div>
        <table className={styles["page155__table"]}>
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
                <span className={styles["page155__verb-cell"]}>Does</span>,
                "he",
                "",
                "go",
                "to the gym every day ?"
              ].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg155_audio6e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
            <tr>
              {[
                "",
                <span className={styles["page155__verb-cell"]}>Does</span>,
                "she",
                "",
                "speak",
                "Spanish ?"
              ].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg155_audio7e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
            <tr>
              {[
                "",
                <span className={styles["page155__verb-cell"]}>Does</span>,
                "it",
                "",
                "open",
                "before 8:00 a.m ?"
              ].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg155_audio8e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
            <tr>
              {[
                "",
                "Is",
                "it",
                "",
                "open",
                "before 8:00 a.m ?"
              ].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg155_audio9e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell === "Is" ? (
                    <span style={{ color: "blue", fontWeight: "bold" }}>{cell}</span>
                  ) : (
                    cell
                  )}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </section>

      {/* Imagens */}
      <section className={styles["page155__images-container"]}>
        <img
          src={pagina155_imagem1}
          alt="Shopping à noite"
          className={styles["page155__image"]}
        />
        <img
          src={pagina155_imagem2}
          alt="Homem malhando"
          className={styles["page155__image"]}
        />
      </section>
    </div>

  );
};

export default Pagina155;
