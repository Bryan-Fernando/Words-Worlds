import React, { useRef } from 'react';
import styles from './pagina153.module.css';

import pg153_audio1e from '../assets/audios/pg153_audio1e.mp3';
import pg153_audio2e from '../assets/audios/pg153_audio2e.mp3';
import pg153_audio3e from '../assets/audios/pg153_audio3e.mp3';
import pg153_audio4e from '../assets/audios/pg153_audio4e.mp3';
import pg153_audio5e from '../assets/audios/pg153_audio5e.mp3';
import pg153_audio6e from '../assets/audios/pg153_audio6e.mp3';
import pg153_audio7e from '../assets/audios/pg153_audio7e.mp3';
import pg153_audio8e from '../assets/audios/pg153_audio8e.mp3';
import pg153_audio9e from '../assets/audios/pg153_audio9e.mp3';
import pg153_audio10e from '../assets/audios/pg153_audio10e.mp3';
import pg153_audio11e from '../assets/audios/pg153_audio11e.mp3';
import pg153_audio12e from '../assets/audios/pg153_audio12e.mp3';
import pg153_audio13e from '../assets/audios/pg153_audio13e.mp3';

const Pagina153 = () => {
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
    <div className={styles["page153__container"]}>
      <h1 className={styles["page153__title"]}>
        Grammar <br />
        <span className={styles["page153__title--highlight"]}>
          Simple Present ( Be and Common Main Verbs )
        </span>
      </h1>

      <section>
        <div className={styles["page153__table-header"]}>Negative Form</div>
        <table className={styles["page153__table"]}>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Aux <br /> Verb</th>
              <th className={styles["page153__not-label"]}>( Not )</th>
              <th>Verb (s)</th>
              <th>Object <br /> Complement</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {[
                "We",
                <span className={styles["page153__text-red"]}>don’t</span>,
                "",
                "live",
                "in São Paulo"
              ].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg153_audio1e)}
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
        <div className={styles["page153__table-header"]}>Negative Form</div>
        <table className={styles["page153__table"]}>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Aux <br /> Verb</th>
              <th className={styles["page153__not-label"]}>( Not )</th>
              <th>Verb (s)</th>
              <th>Object <br /> Complement</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {[
                "Lucas and I",
                "aren’t",
                "",
                "",
                "in Brazil"
              ].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg153_audio2e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
            <tr>
              {[
                "Lucas and I",
                <span className={styles["page153__verb-cell"]}>don’t</span>,
                "",
                "live",
                "in Brazil"
              ].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg153_audio3e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
            <tr>
              {[
                "You",
                <span className={styles["page153__verb-cell"]}>don’t</span>,
                "",
                "work",
                "on Monday"
              ].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg153_audio4e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
            <tr>
              {[
                "You, Lucas and Bianca",
                <span className={styles["page153__verb-cell"]}>don’t</span>,
                "",
                "need",
                "a new phone"
              ].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg153_audio5e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
            <tr>
              {[
                "Isa, Talita and Eric",
                <span className={styles["page153__verb-cell"]}>don’t</span>,
                "",
                "drive",
                "to work"
              ].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg153_audio6e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
            <tr>
              {[
                "Banks",
                <span className={styles["page153__verb-cell"]}>don’t</span>,
                "",
                "open",
                "at 8:00 a.m"
              ].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg153_audio7e)}
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
        <div className={styles["page153__table-header"]}>Negative Form</div>
        <table className={styles["page153__table"]}>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Aux <br /> Verb</th>
              <th className={styles["page153__not-label"]}>( Not )</th>
              <th>Verb (s)</th>
              <th>Object <br /> Complement</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {[
                "We",
                <span className={styles["page153__text-red"]}>aren’t</span>,
                "",
                "",
                "in Brazil"
              ].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg153_audio8e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
            <tr>
              {[
                "We",
                <span className={styles["page153__verb-cell"]}>don’t</span>,
                "",
                "live",
                "in Brazil"
              ].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg153_audio9e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
            <tr>
              {[
                "You",
                <span className={styles["page153__verb-cell"]}>don’t</span>,
                "",
                "work",
                "on Monday"
              ].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg153_audio10e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
            <tr>
              {[
                "You",
                <span className={styles["page153__verb-cell"]}>don’t</span>,
                "",
                "need",
                "a new phone"
              ].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg153_audio11e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
            <tr>
              {[
                "Y’all",
                <span className={styles["page153__verb-cell"]}>don’t</span>,
                "",
                "drive",
                "to work"
              ].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg153_audio12e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
            <tr>
              {[
                "They",
                <span className={styles["page153__verb-cell"]}>don’t</span>,
                "",
                "open",
                "at 8:00 a.m"
              ].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg153_audio13e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </section>

      <section className={styles["page153__note"]}>
        <div className={styles["page153__note-header"]}>Nota:</div>
        <div className={styles["page153__note-content"]}>
          <p>
            <span className={styles["page153__note-red"]}>&ldquo;Don’t&rdquo;</span> é a forma contraída de <span className={styles["page153__note-red"]}>&ldquo;do not&rdquo;</span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Pagina153;
