import React, { useRef } from 'react';
import styles from './pagina81.module.css';

import pg81_audio1e from '../assets/audios/pg81_audio1e.mp3';
import pg81_audio2e from '../assets/audios/pg81_audio2e.mp3';
import pg81_audio3e from '../assets/audios/pg81_audio3e.mp3';
import pg81_audio4e from '../assets/audios/pg81_audio4e.mp3';
import pg81_audio5e from '../assets/audios/pg81_audio5e.mp3';
import pg81_audio6e from '../assets/audios/pg81_audio6e.mp3';

const Pagina81 = () => {
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
    <div className={styles["page81"]}>
      <h1 className={styles["page81__title"]}>
        Grammar <br />
        <span className={styles["page81__title--highlight"]}>
          Simple Present ( Be and Common Main Verbs )
        </span>
      </h1>

      <section>
        <div className={styles["page81__table-header"]}>Affirmative Form</div>
        <table className={styles["page81__table"]}>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Aux Verb</th>
              <th>Adv</th>
              <th>Verb <span className={styles["page81__bf-label"]}>(BF)</span></th>
              <th>Object Complement</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {["Lucas", "", "", "lives", "in São Paulo"].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg81_audio1e)}
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
        <div className={styles["page81__table-header"]}>Affirmative Form</div>
        <table className={styles["page81__table"]}>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Aux Verb</th>
              <th>Adv</th>
              <th>Verb <span className={styles["page81__bf-label"]}>(BF)</span></th>
              <th>Object Complement</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {["Lucas", <span className={styles["page81__verb-cell"]}>is</span>, "", "", "a nice guy"].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg81_audio2e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
            <tr>
              {["Lucas", "", "", <span className={styles["page81__verb-cell"]}>arrives</span>, "at work at 8 a.m."].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg81_audio3e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
            <tr>
              {["Pam", "", "", <span className={styles["page81__verb-cell"]}>begins</span>, "her day with a coffee"].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg81_audio4e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
            <tr>
              {["Pam", "", "", <span className={styles["page81__verb-cell"]}>calls</span>, "her friends on weekends"].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg81_audio5e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
            <tr>
              {["Credisis", "", "", <span className={styles["page81__verb-cell"]}>opens</span>, "at 8:00 a.m."].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg81_audio6e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Pagina81;
