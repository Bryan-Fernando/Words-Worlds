import React, { useRef } from 'react';
import styles from './pagina157.module.css';
import pagina157_imagem1 from '../assets/images/pagina157_imagem1.webp';

import pg157_audio1e from '../assets/audios/pg157_audio1e.mp3';
import pg157_audio2e from '../assets/audios/pg157_audio2e.mp3';
import pg157_audio3e from '../assets/audios/pg157_audio3e.mp3';
import pg157_audio4e from '../assets/audios/pg157_audio4e.mp3';
import pg157_audio5e from '../assets/audios/pg157_audio5e.mp3';

const Pagina157 = () => {
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
    <div className={styles["page157__container"]}>
      <h1 className={styles["page157__title"]}>
        Grammar <br />
        <span className={styles["page157__title--highlight"]}>
          Simple Present ( Be and Common Main Verbs )
        </span>
      </h1>

      <section>
        <div className={styles["page157__table-header"]}>Negative Interrogative</div>
        <table className={styles["page157__table"]}>
          <thead>
            <tr>
              <th>Palavras <br /> interrogativas</th>
              <th>Aux. <br /> Verb</th>
              <th>Subject</th>
              <th className={styles["page157__not-label"]}>( Not )</th>
              <th>Verb (s)</th>
              <th>Object <br /> Complement</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {[
                "",
                <span className={styles["page157__text-red"]}>Don’t</span>,
                "I",
                "",
                "work",
                "on weekends ?"
              ].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg157_audio1e)}
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
        <div className={styles["page157__table-header"]}>Negative Interrogative</div>
        <table className={styles["page157__table"]}>
          <thead>
            <tr>
              <th>Palavras <br /> interrogativas</th>
              <th>Aux. <br /> Verb</th>
              <th>Subject</th>
              <th className={styles["page157__not-label"]}>( Not )</th>
              <th>Verb (s)</th>
              <th>Object <br /> Complement</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {[
                "",
                <span className={styles["page157__text-red"]}>Ain’t</span>,
                "I",
                "",
                "",
                "late ?"
              ].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg157_audio2e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
            <tr>
              {[
                "",
                <span className={styles["page157__verb-cell"]}>Don’t</span>,
                "I",
                "",
                "need to work",
                "on weekends ?"
              ].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg157_audio3e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
            <tr>
              {[
                "",
                <span className={styles["page157__verb-cell"]}>Don’t</span>,
                "I",
                "",
                "travel",
                "at 7:00 a.m. ?"
              ].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg157_audio4e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
            <tr>
              {[
                "",
                <span className={styles["page157__verb-cell"]}>Don’t</span>,
                "I",
                "",
                "look",
                "like him ?"
              ].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg157_audio5e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </section>

      <section className={styles["page157__image-container"]}>
        <img src={pagina157_imagem1} alt="Imagem" className={styles["page157__image"]} />
      </section>

      <section className={styles["page157__note"]}>
        <div className={styles["page157__note-header"]}>Nota</div>
        <div className={styles["page157__note-content"]}>
          <p>
            <span className={styles["page157__text-red"]}>&quot;Don’t&quot;</span> é a forma contraída de <span className={styles["page157__text-red"]}>&quot;do not&quot;</span>
          </p>
        </div>
      </section>

      <section className={styles["page157__note"]}>
        <div className={styles["page157__note-header"]}>Nota</div>
        <div className={styles["page157__note-content"]}>
          <p>
            <span className={styles["page157__text-red"]}>&quot;Ain’t&quot;</span> pode ser usado com todos os pronomes pessoais ou nomes próprios.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Pagina157;
