import React, { useRef } from 'react';
import styles from './pagina159.module.css';
import pagina159_imagem1 from '../assets/images/pagina159_imagem1.webp';

import pg159_audio1e from '../assets/audios/pg159_audio1e.mp3';
import pg159_audio2e from '../assets/audios/pg159_audio2e.mp3';
import pg159_audio3e from '../assets/audios/pg159_audio3e.mp3';
import pg159_audio4e from '../assets/audios/pg159_audio4e.mp3';
import pg159_audio5e from '../assets/audios/pg159_audio5e.mp3';
import pg159_audio6e from '../assets/audios/pg159_audio6e.mp3';
import pg159_audio7e from '../assets/audios/pg159_audio7e.mp3';
import pg159_audio8e from '../assets/audios/pg159_audio8e.mp3';
import pg159_audio9e from '../assets/audios/pg159_audio9e.mp3';
import pg159_audio10e from '../assets/audios/pg159_audio10e.mp3';

const Pagina159 = () => {
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
    <div className={styles["page159__container"]}>
      <h1 className={styles["page159__title"]}>
        Grammar <br />
        <span className={styles["page159__title--highlight"]}>
          Simple Present ( Be and Common Main Verbs )
        </span>
      </h1>

      <section>
        <div className={styles["page159__table-header"]}>Negative Interrogative</div>
        <table className={styles["page159__table"]}>
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
                <span className={styles["page159__text-red"]}>Don’t</span>,
                "Eric and I",
                "",
                "work",
                "on weekends ?"
              ].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg159_audio1e)}
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
        <div className={styles["page159__table-header"]}>Negative Interrogative</div>
        <table className={styles["page159__table"]}>
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
                "Aren’t",
                "you and me",
                "",
                "",
                "on the list ?"
              ].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg159_audio2e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell === "Aren’t" ? (
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
                <span className={styles["page159__verb-cell"]}>Don’t</span>,
                "you and I",
                "",
                "have to work",
                "on Sunday ?"
              ].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg159_audio3e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
            <tr>
              {[
                "",
                <span className={styles["page159__verb-cell"]}>Don’t</span>,
                "you",
                "",
                "need to go",
                "to Losangeles on Friday ?"
              ].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg159_audio4e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
            <tr>
              {[
                "",
                <span className={styles["page159__verb-cell"]}>Don’t</span>,
                "you and Bia",
                "",
                "travel",
                "in the morning or afternoon ?"
              ].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg159_audio5e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
            <tr>
              {[
                "",
                <span className={styles["page159__verb-cell"]}>Don’t</span>,
                "Bia and Michel",
                "",
                "live",
                "in New York city ?"
              ].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg159_audio6e)}
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
        <div className={styles["page159__table-header"]}>Negative Interrogative</div>
        <table className={styles["page159__table"]}>
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
                <span className={styles["page159__verb-cell"]}>Don’t</span>,
                "we",
                "",
                "have to work",
                "on Sunday ?"
              ].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg159_audio7e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
            <tr>
              {[
                "",
                <span className={styles["page159__verb-cell"]}>Don’t</span>,
                "you",
                "",
                "need to go",
                "to Miami on Friday ?"
              ].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg159_audio8e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
            <tr>
              {[
                "",
                <span className={styles["page159__verb-cell"]}>Don’t</span>,
                "y’all",
                "",
                "travel",
                "in the morning or afternoon ?"
              ].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg159_audio9e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
            <tr>
              {[
                "",
                <span className={styles["page159__verb-cell"]}>Don’t</span>,
                "they",
                "",
                "live",
                "in New York city ?"
              ].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg159_audio10e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </section>

      <section className={styles["page159__bottom-section"]}>
        <div className={styles["page159__note"]}>
          <div className={styles["page159__note-header"]}>Nota</div>
          <div className={styles["page159__note-content"]}>
            <p>
              <span className={styles["page159__text-red"]}>&quot;Don’t&quot;</span> é a forma contraída de <span className={styles["page159__text-red"]}>&quot;do not&quot;</span>
            </p>
          </div>
        </div>

        <div className={styles["page159__image-container"]}>
          <img src={pagina159_imagem1} alt="Avião" className={styles["page159__image"]} />
        </div>
      </section>
    </div>
  );
};

export default Pagina159;
