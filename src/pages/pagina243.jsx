import React, { useRef } from 'react';
import styles from './pagina243.module.css';

import audio1 from '../assets/audios/pg243_audio1e.mp3';
import audio2 from '../assets/audios/pg243_audio2e.mp3';
import audio3 from '../assets/audios/pg243_audio3e.mp3';
import audio4 from '../assets/audios/pg243_audio4e.mp3';
import audio5 from '../assets/audios/pg243_audio5e.mp3';
import audio6 from '../assets/audios/pg243_audio6e.mp3';
import audio7 from '../assets/audios/pg243_audio7e.mp3';
import audio8 from '../assets/audios/pg243_audio8e.mp3';
import audio9 from '../assets/audios/pg243_audio9e.mp3';
import audio10 from '../assets/audios/pg243_audio10e.mp3';
import audio11 from '../assets/audios/pg243_audio11e.mp3';
import audio12 from '../assets/audios/pg243_audio12e.mp3';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';

const Pagina243 = () => {
  const audioRef = useRef(null);

  const playAudio = (file) => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    const a = new Audio(file);
    audioRef.current = a;
    a.play();
  };

  return (
    <div className={styles.page243__container}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          Grammar - <span className={styles.black}>Question Words</span>
        </h1>
        <p className={styles.subtitle}>
          <span className={styles.red}>Verb To Be</span> <span className={styles.bold}>Simple Present</span>
        </p>
      </header>

      <section className={styles.vocabulary}>
        <div className={styles.vocabBox}>
          Why
          <img
            src={eng_audio_icon}
            alt="Play Why"
            className={styles.page243__icon}
            onClick={() => playAudio(audio1)}
          />
          <br />
          <span>“Por que” (em perguntas)</span>
        </div>
        <div className={styles.vocabBox}>
          Who
          <img
            src={eng_audio_icon}
            alt="Play Who"
            className={styles.page243__icon}
            onClick={() => playAudio(audio3)}
          />
          <br />
          <span>Quem</span>
        </div>
        <div className={styles.vocabBox}>
          Which
          <img
            src={eng_audio_icon}
            alt="Play Which"
            className={styles.page243__icon}
            onClick={() => playAudio(audio4)}
          />
          <br />
          <span>Que, qual, quais (opção)</span>
        </div>
        <div className={styles.vocabBox}>
          What size
          <img
            src={eng_audio_icon}
            alt="Play What size"
            className={styles.page243__icon}
            onClick={() => playAudio(audio2)}
          />
          <br />
          <span>Que tamanho / Qual tamanho</span>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionTitle}>Question Words</div>
        <h2 className={styles.formTitle}>Interrogative Form</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Palavras interrogativas</th>
              <th>Aux. Verb</th>
              <th>Subject</th>
              <th>Adv</th>
              <th>Verb (s)</th>
              <th>Object Complement</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>What size</td>
              <td>are</td>
              <td>
                they?
                <img
                  src={eng_audio_icon}
                  alt="Play What size are they?"
                  className={styles.page243__icon}
                  onClick={() => playAudio(audio5)}
                />
              </td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>What size</td>
              <td>is</td>
              <td>
                he?
                <img
                  src={eng_audio_icon}
                  alt="Play What size is he?"
                  className={styles.page243__icon}
                  onClick={() => playAudio(audio6)}
                />
              </td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>What size</td>
              <td>are</td>
              <td>
                you?
                <img
                  src={eng_audio_icon}
                  alt="Play What size are you?"
                  className={styles.page243__icon}
                  onClick={() => playAudio(audio7)}
                />
              </td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>What size</td>
              <td>is</td>
              <td>
                she?
                <img
                  src={eng_audio_icon}
                  alt="Play What size is she?"
                  className={styles.page243__icon}
                  onClick={() => playAudio(audio8)}
                />
              </td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className={styles.section}>
        <h2 className={styles.formTitle}>Affirmative Form</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Aux. Verb</th>
              <th>Adv</th>
              <th>Verb (BF)</th>
              <th>Object Complement</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>They</td>
              <td>are</td>
              <td>—</td>
              <td>—</td>
              <td>
                size medium
                <img
                  src={eng_audio_icon}
                  alt="Play They are size medium"
                  className={styles.page243__icon}
                  onClick={() => playAudio(audio9)}
                />
              </td>
            </tr>
            <tr>
              <td>He</td>
              <td>is</td>
              <td>—</td>
              <td>—</td>
              <td>
                size large
                <img
                  src={eng_audio_icon}
                  alt="Play He is size large"
                  className={styles.page243__icon}
                  onClick={() => playAudio(audio10)}
                />
              </td>
            </tr>
            <tr>
              <td>I</td>
              <td>am</td>
              <td>—</td>
              <td>—</td>
              <td>
                size 38
                <img
                  src={eng_audio_icon}
                  alt="Play I am size 38"
                  className={styles.page243__icon}
                  onClick={() => playAudio(audio11)}
                />
              </td>
            </tr>
            <tr>
              <td>She</td>
              <td>is</td>
              <td>—</td>
              <td>—</td>
              <td>
                size small
                <img
                  src={eng_audio_icon}
                  alt="Play She is size small"
                  className={styles.page243__icon}
                  onClick={() => playAudio(audio12)}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Pagina243;
