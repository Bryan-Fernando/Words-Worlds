import React, { useRef } from 'react';
import styles from './pagina158.module.css';
import pagina158_imagem1 from '../assets/images/pagina158_imagem1.webp';

import pg158_audio1e from '../assets/audios/pg158_audio1e.mp3';
import pg158_audio2e from '../assets/audios/pg158_audio2e.mp3';
import pg158_audio3e from '../assets/audios/pg158_audio3e.mp3';
import pg158_audio4e from '../assets/audios/pg158_audio4e.mp3';
import pg158_audio5e from '../assets/audios/pg158_audio5e.mp3';
import pg158_audio6e from '../assets/audios/pg158_audio6e.mp3';
import pg158_audio7e from '../assets/audios/pg158_audio7e.mp3';
import pg158_audio8e from '../assets/audios/pg158_audio8e.mp3';

const Pagina158 = () => {
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
    <div className={styles["page158__container"]}>
      <h1 className={styles["page158__title"]}>
        Grammar <br />
        <span className={styles["page158__title--highlight"]}>
          Simple Present ( Be and Common Main Verbs )
        </span>
      </h1>

      <section>
        <div className={styles["page158__table-header"]}>Negative Interrogative</div>
        <table className={styles["page158__table"]}>
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
                <span className={styles["page158__text-red"]}>Doesn’t</span>,
                "Pedro",
                "",
                "work",
                "on weekends ?"
              ].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg158_audio1e)}
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
        <div className={styles["page158__table-header"]}>Negative Interrogative</div>
        <table className={styles["page158__table"]}>
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
                <span className={styles["page158__text-red"]}>Isn’t</span>,
                "Nicole",
                "",
                "",
                "at home ?"
              ].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg158_audio2e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
            <tr>
              {[
                "",
                <span className={styles["page158__verb-cell"]}>Doesn’t</span>,
                "Eric",
                "",
                "have to work",
                "on Sunday ?"
              ].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg158_audio3e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
            <tr>
              {[
                "",
                <span className={styles["page158__verb-cell"]}>Doesn’t</span>,
                "Nicole",
                "",
                "need to go",
                "to Miami on Friday ?"
              ].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg158_audio4e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
            <tr>
              {[
                "",
                <span className={styles["page158__verb-cell"]}>Doesn’t</span>,
                "the mall",
                "",
                "open",
                "in the morning or afternoon ?"
              ].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg158_audio5e)}
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
        <div className={styles["page158__table-header"]}>Negative Interrogative</div>
        <table className={styles["page158__table"]}>
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
                <span className={styles["page158__verb-cell"]}>Doesn’t</span>,
                "he",
                "",
                "go",
                "to the gym every day ?"
              ].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg158_audio6e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
            <tr>
              {[
                "",
                <span className={styles["page158__verb-cell"]}>Doesn’t</span>,
                "she",
                "",
                "speak",
                "Spanish ?"
              ].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg158_audio7e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
            <tr>
              {[
                "",
                <span className={styles["page158__verb-cell"]}>Doesn’t</span>,
                "it",
                "",
                "open",
                "before 8:00 a.m. ?"
              ].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg158_audio8e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </section>

      <section className={styles["page158__image-container"]}>
        <img src={pagina158_imagem1} alt="Shopping" className={styles["page158__image"]} />
      </section>

      <section className={styles["page158__note"]}>
        <div className={styles["page158__note-header"]}>Nota</div>
        <div className={styles["page158__note-content"]}>
          <p>
            <span className={styles["page158__text-red"]}>&quot;Doesn’t&quot;</span> é a forma contraída de <span className={styles["page158__text-red"]}>&quot;does not&quot;</span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Pagina158;
