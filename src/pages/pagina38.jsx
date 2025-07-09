import React, { useRef } from 'react';
import styles from './pagina38.module.css';

import pagina38_imagem1 from '../assets/images/pagina38_imagem1.webp';

import pg38_audio1e from '../assets/audios/pg38_audio1e.mp3';
import pg38_audio2e from '../assets/audios/pg38_audio2e.mp3';
import pg38_audio3e from '../assets/audios/pg38_audio3e.mp3';
import pg38_audio4e from '../assets/audios/pg38_audio4e.mp3';
import pg38_audio5e from '../assets/audios/pg38_audio5e.mp3';
import pg38_audio6e from '../assets/audios/pg38_audio6e.mp3';
import pg38_audio7e from '../assets/audios/pg38_audio7e.mp3';
import pg38_audio8e from '../assets/audios/pg38_audio8e.mp3';
import pg38_audio9e from '../assets/audios/pg38_audio9e.mp3';
import pg38_audio10e from '../assets/audios/pg38_audio10e.mp3';
import pg38_audio11e from '../assets/audios/pg38_audio11e.mp3';
import pg38_audio12e from '../assets/audios/pg38_audio12e.mp3';
import pg38_audio13e from '../assets/audios/pg38_audio13e.mp3';

const Pagina38 = () => {
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
    <div className={styles["page38"]}>
      <h1 className={styles["page38__title"]}>
        Grammar <br />
        <span className={styles["page38__title--highlight"]}>
          Simple Present ( Be and Common Main Verbs )
        </span>
      </h1>

      <section>
        <div className={styles["page38__table-header"]}>Affirmative Form</div>
        <table className={styles["page38__table"]}>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Aux Verb</th>
              <th>Adv</th>
              <th>Verb <span className={styles["page38__bf-label"]}>(BF)</span></th>
              <th>Object Complement</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {["Lucas and I", "", "", "live", "in São Paulo"].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg38_audio1e)}
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
        <div className={styles["page38__table-header"]}>Affirmative Form</div>
        <table className={styles["page38__table"]}>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Aux Verb</th>
              <th>Adv</th>
              <th>Verb <span className={styles["page38__bf-label"]}>(BF)</span></th>
              <th>Object Complement</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {["Marcia and I", <span className={styles["page38__verb-cell"]}>are</span>, "", "", "happy"].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg38_audio2e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
            <tr>
              {["Lucas, Pam and I", "", "", <span className={styles["page38__verb-cell"]}>live</span>, "in Brazil"].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg38_audio3e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
            <tr>
              {["You", "", "", <span className={styles["page38__verb-cell"]}>make</span>, "delicious pancakes"].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg38_audio4e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
            <tr>
              {["You, Luca and Bia", "", "", <span className={styles["page38__verb-cell"]}>need</span>, "a new phone"].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg38_audio5e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
            <tr>
              {["Isa, Talita and Eric", "", "", <span className={styles["page38__verb-cell"]}>travel</span>, "by bus"].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg38_audio6e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
            <tr>
              {["Banks", "", "", <span className={styles["page38__verb-cell"]}>open</span>, "at 8:00 a.m."].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg38_audio7e)}
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
        <div className={styles["page38__table-header"]}>Affirmative Form</div>
        <table className={styles["page38__table"]}>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Aux Verb</th>
              <th>Adv</th>
              <th>Verb <span className={styles["page38__bf-label"]}>(BF)</span></th>
              <th>Object Complement</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {["We", <span className={styles["page38__verb-cell"]}>are</span>, "", "", "happy"].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg38_audio8e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
            <tr>
              {["We", "", "", <span className={styles["page38__verb-cell"]}>live</span>, "in Brazil"].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg38_audio9e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
            <tr>
              {["You", "", "", <span className={styles["page38__verb-cell"]}>make</span>, "delicious pancakes"].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg38_audio10e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
            <tr>
              {["Y’all", "", "", <span className={styles["page38__verb-cell"]}>need</span>, "a new phone"].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg38_audio11e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
            <tr>
              {["They", "", "", <span className={styles["page38__verb-cell"]}>travel</span>, "by plane"].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg38_audio12e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
            <tr>
              {["They", "", "", <span className={styles["page38__verb-cell"]}>open</span>, "at 8:00 a.m."].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg38_audio13e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </section>

      <section className={styles["page38__image-container"]}>
        <img src={pagina38_imagem1} alt="Grupo de amigos" className={styles["page38__image"]} />
      </section>
    </div>
  );
};

export default Pagina38;
