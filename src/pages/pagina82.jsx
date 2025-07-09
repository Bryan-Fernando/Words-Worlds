import React, { useRef } from 'react';
import styles from './pagina82.module.css';

import pagina82_imagem1 from '../assets/images/pagina82_imagem1.webp';
import pagina82_imagem2 from '../assets/images/pagina82_imagem2.webp';

import pg82_audio1e from '../assets/audios/pg82_audio1e.mp3';
import pg82_audio2e from '../assets/audios/pg82_audio2e.mp3';
import pg82_audio3e from '../assets/audios/pg82_audio3e.mp3';
import pg82_audio4e from '../assets/audios/pg82_audio4e.mp3';
import pg82_audio5e from '../assets/audios/pg82_audio5e.mp3';

const Pagina82 = () => {
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
    <div className={styles["page82"]}>
      <h1 className={styles["page82__title"]}>
        Grammar <br />
        <span className={styles["page82__title--highlight"]}>
          Simple Present ( Be and Common Main Verbs )
        </span>
      </h1>

      <section>
        <div className={styles["page82__table-header"]}>Affirmative Form</div>
        <table className={styles["page82__table"]}>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Aux Verb</th>
              <th>Adv</th>
              <th>Verb <span className={styles["page82__bf-label"]}>(BF)</span></th>
              <th>Object Complement</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {["He", <span className={styles["page82__verb-cell"]}>is</span>, "", "", "a nice guy"].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg82_audio1e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
            <tr>
              {["He", "", "", <span className={styles["page82__verb-cell"]}>begins</span>, "his day with a coffee"].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg82_audio2e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
            <tr>
              {["She", "", "", <span className={styles["page82__verb-cell"]}>calls</span>, "her friends on weekends"].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg82_audio3e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
            <tr>
              {["She", "", "", <span className={styles["page82__verb-cell"]}>has to go</span>, "to Campinas on Friday"].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg82_audio4e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
            <tr>
              {["It", "", "", <span className={styles["page82__verb-cell"]}>needs to open</span>, "at 8:00 a.m."].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg82_audio5e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </section>

      <section className={styles["page82__images"]}>
        <img src={pagina82_imagem1} alt="Agência Credisis" className={styles["page82__image"]} />
        <img src={pagina82_imagem2} alt="Homem com turbante" className={styles["page82__image"]} />
      </section>
    </div>
  );
};

export default Pagina82;
