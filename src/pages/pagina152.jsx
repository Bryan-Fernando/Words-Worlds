import React, { useRef } from 'react';
import styles from './pagina152.module.css';
import pagina152_imagem1 from '../assets/images/pagina152_imagem1.gif';

import pg152_audio1e from '../assets/audios/pg152_audio1e.mp3';
import pg152_audio2e from '../assets/audios/pg152_audio2e.mp3';
import pg152_audio3e from '../assets/audios/pg152_audio3e.mp3';
import pg152_audio4e from '../assets/audios/pg152_audio4e.mp3';

const Pagina152 = () => {
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
    <div className={styles["page152__container"]}>
      <h1 className={styles["page152__title"]}>
        Grammar <br />
        <span className={styles["page152__title--highlight"]}>
          Simple Present ( Be and Common Main Verbs )
        </span>
      </h1>

      <section>
        <div className={styles["page152__table-header"]}>Negative Form</div>
        <table className={styles["page152__table"]}>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Aux <br /> Verb</th>
              <th className={styles["page152__not-label"]}>( Not )</th>
              <th>Verb (s)</th>
              <th>Object <br /> Complement</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {[
                "Lucas",
                <span className={styles["page152__text-red"]}>doesn’t</span>,
                "",
                "live",
                "in São Paulo"
              ].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg152_audio1e)}
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
        <div className={styles["page152__table-header"]}>Negative Form</div>
        <table className={styles["page152__table"]}>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Aux <br /> Verb</th>
              <th className={styles["page152__not-label"]}>( Not )</th>
              <th>Verb (s)</th>
              <th>Object <br /> Complement</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {[
                "He",
                <span className={styles["page152__verb-cell"]}>doesn’t</span>,
                "",
                "work",
                "at home."
              ].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg152_audio2e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
            <tr>
              {[
                "She",
                <span className={styles["page152__verb-cell"]}>doesn’t</span>,
                "",
                "drink",
                "coffee."
              ].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg152_audio3e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
            <tr>
              {[
                "It",
                <span className={styles["page152__verb-cell"]}>doesn’t</span>,
                "",
                "open",
                "at 8:00 a.m"
              ].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg152_audio4e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </section>

      <section className={styles["page152__image-container"]}>
        <img src={pagina152_imagem1} alt="Mulher bebendo suco" className={styles["page152__image"]} />
      </section>

      <section className={styles["page152__note"]}>
        <div className={styles["page152__note-header"]}>Nota:</div>
        <div className={styles["page152__note-content"]}>
          <p>
            <span className={styles["page152__note-red"]}>&ldquo;Doesn’t&rdquo;</span> é a forma contraída de <span className={styles["page152__note-red"]}>&ldquo;does not&rdquo;</span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Pagina152;
