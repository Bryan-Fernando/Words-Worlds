import React, { useRef } from 'react';
import styles from './pagina151.module.css';
import pagina151_imagem1 from '../assets/images/pagina151_imagem1.gif';

import pg151_audio1e from '../assets/audios/pg151_audio1e.mp3';
import pg151_audio2e from '../assets/audios/pg151_audio2e.mp3';
import pg151_audio3e from '../assets/audios/pg151_audio3e.mp3';
import pg151_audio4e from '../assets/audios/pg151_audio4e.mp3';
import pg151_audio5e from '../assets/audios/pg151_audio5e.mp3';

const Pagina151 = () => {
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
    <div className={styles["page151__container"]}>
      <h1 className={styles["page151__title"]}>
        Grammar <br />
        <span className={styles["page151__title--highlight"]}>
          Simple Present ( Be and Common Main Verbs )
        </span>
      </h1>

      <section>
        <div className={styles["page151__table-header"]}>Negative Form</div>
        <table className={styles["page151__table"]}>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Aux <br /> Verb</th>
              <th className={styles["page151__not-label"]}>( Not )</th>
              <th>Verb (s)</th>
              <th>Object <br /> Complement</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {[
                "Lucas",
                <span className={styles["page151__text-red"]}>doesn’t</span>,
                "",
                "live",
                "in São Paulo"
              ].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg151_audio1e)}
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
        <div className={styles["page151__table-header"]}>Negative Form</div>
        <table className={styles["page151__table"]}>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Aux <br /> Verb</th>
              <th className={styles["page151__not-label"]}>( Not )</th>
              <th>Verb (s)</th>
              <th>Object <br /> Complement</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {[
                "Lucas",
                "isn’t",
                "",
                "",
                "at the office."
              ].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg151_audio2e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell === "isn’t" ? (
                    <span style={{ color: "blue", fontWeight: "bold" }}>{cell}</span>
                  ) : (
                    cell
                  )}
                </td>
              ))}
            </tr>
            <tr>
              {[
                "Lucas",
                <span className={styles["page151__verb-cell"]}>doesn’t</span>,
                "",
                "arrive",
                "at work at 8:00 a.m."
              ].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg151_audio3e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
            <tr>
              {[
                "Pam",
                <span className={styles["page151__verb-cell"]}>doesn’t</span>,
                "",
                "call",
                "her friends on Monday"
              ].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg151_audio4e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
            <tr>
              {[
                "Credisis",
                <span className={styles["page151__verb-cell"]}>doesn’t</span>,
                "",
                "open",
                "at 8:00 a.m"
              ].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg151_audio5e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </section>

      <section className={styles["page151__image-container"]}>
        <img src={pagina151_imagem1} alt="Homem no escritório" className={styles["page151__image"]} />
      </section>

      <section className={styles["page151__note"]}>
        <div className={styles["page151__note-header"]}>Nota:</div>
        <div className={styles["page151__note-content"]}>
          <p>
            <span className={styles["page151__note-red"]}>&ldquo;Doesn’t&rdquo;</span> é a forma contraída de <span className={styles["page151__note-red"]}>&ldquo;does not&rdquo;</span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Pagina151;
