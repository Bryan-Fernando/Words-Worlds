import React, { useRef } from 'react';
import styles from './pagina156.module.css';
import pagina156_imagem1 from '../assets/images/pagina156_imagem1.webp';
import pagina156_imagem2 from '../assets/images/pagina156_imagem2.webp';

import pg156_audio1e from '../assets/audios/pg156_audio1e.mp3';
import pg156_audio2e from '../assets/audios/pg156_audio2e.mp3';
import pg156_audio3e from '../assets/audios/pg156_audio3e.mp3';
import pg156_audio4e from '../assets/audios/pg156_audio4e.mp3';
import pg156_audio5e from '../assets/audios/pg156_audio5e.mp3';
import pg156_audio6e from '../assets/audios/pg156_audio6e.mp3';
import pg156_audio7e from '../assets/audios/pg156_audio7e.mp3';
import pg156_audio8e from '../assets/audios/pg156_audio8e.mp3';
import pg156_audio9e from '../assets/audios/pg156_audio9e.mp3';
import pg156_audio10e from '../assets/audios/pg156_audio10e.mp3';

const Pagina156 = () => {
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
    <div className={styles["page156__container"]}>
      <h1 className={styles["page156__title"]}>
        Grammar <br />
        <span className={styles["page156__title--highlight"]}>
          Simple Present ( Be and Common Main Verbs )
        </span>
      </h1>

      <section>
        <div className={styles["page156__table-header"]}>Interrogative Form</div>
        <table className={styles["page156__table"]}>
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
                <span className={styles["page156__text-red"]}>Do</span>,
                "you and I",
                "",
                "work",
                "on weekends ?"
              ].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg156_audio1e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <div className={styles["page156__table-header"]}>Interrogative Form</div>
        <table className={styles["page156__table"]}>
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
                <span className={styles["page156__verb-cell"]}>Do</span>,
                "you and I",
                "",
                "have to work",
                "on Sunday ?"
              ].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg156_audio2e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
            <tr>
              {[
                "",
                <span className={styles["page156__verb-cell"]}>Do</span>,
                "you",
                "",
                "need to go",
                "to California on Friday ?"
              ].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg156_audio3e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
            <tr>
              {[
                "",
                <span className={styles["page156__verb-cell"]}>Do</span>,
                "you and Bia",
                "",
                "travel",
                "very often to Miami ?"
              ].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg156_audio4e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
            <tr>
              {[
                "",
                <span className={styles["page156__verb-cell"]}>Do</span>,
                "Lucas and Eric",
                "",
                "live",
                "in New York City ?"
              ].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg156_audio5e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <div className={styles["page156__table-header"]}>Interrogative Form</div>
        <table className={styles["page156__table"]}>
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
                <span style={{ color: "blue", fontWeight: "bold" }}>Are</span>,
                "we",
                "",
                "",
                "on time ?"
              ].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg156_audio6e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
            <tr>
              {[
                "",
                <span className={styles["page156__verb-cell"]}>Do</span>,
                "we",
                "",
                "have to work",
                "on Sunday ?"
              ].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg156_audio7e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
            <tr>
              {[
                "",
                <span className={styles["page156__verb-cell"]}>Do</span>,
                "you",
                "",
                "need to go",
                "to Miami on Friday ?"
              ].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg156_audio8e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
            <tr>
              {[
                "",
                <span className={styles["page156__verb-cell"]}>Do</span>,
                "y’all",
                "",
                "travel",
                "very often to Miami ?"
              ].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg156_audio9e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
            <tr>
              {[
                "",
                <span className={styles["page156__verb-cell"]}>Do</span>,
                "they",
                "",
                "live",
                "in New York city ?"
              ].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg156_audio10e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </section>

      <section className={styles["page156__images-container"]}>
        <img src={pagina156_imagem1} alt="Times Square" className={styles["page156__image"]} />
        <img src={pagina156_imagem2} alt="Casa de praia" className={styles["page156__image"]} />
      </section>
    </div>
  );
};

export default Pagina156;
