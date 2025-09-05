import React, { useRef } from 'react';
import styles from './pagina246.module.css';

import audio1 from '../assets/audios/pg246_audio1e.mp3';
import audio2 from '../assets/audios/pg246_audio2e.mp3';
import audio3 from '../assets/audios/pg246_audio3e.mp3';
import audio4 from '../assets/audios/pg246_audio4e.mp3';
import audio5 from '../assets/audios/pg246_audio5e.mp3';
import audio6 from '../assets/audios/pg246_audio6e.mp3';
import audio7 from '../assets/audios/pg246_audio7e.mp3';
import audio8 from '../assets/audios/pg246_audio8e.mp3';
import audio9 from '../assets/audios/pg246_audio9e.mp3';
import audio10 from '../assets/audios/pg246_audio10e.mp3';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';

const Pagina246 = () => {
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
    <div className={styles.page246__container}>
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
          How
          <img
            src={eng_audio_icon}
            alt="Play How"
            className={styles.page246__icon}
            onClick={() => playAudio(audio1)}
          />
          <br />
          <span>Como - Quão (adjetivo / advérbio)</span>
        </div>
        <div className={styles.vocabBox}>
          How far
          <img
            src={eng_audio_icon}
            alt="Play How far"
            className={styles.page246__icon}
            onClick={() => playAudio(audio2)}
          />
          <br />
          <span>Quão longe / Que distância</span>
        </div>
        <div className={styles.vocabBox}>
          How old
          <img
            src={eng_audio_icon}
            alt="Play How old"
            className={styles.page246__icon}
            onClick={() => playAudio(audio3)}
          />
          <br />
          <span>Quantos anos / Quão velho<br />(<i>somente para idade</i>)</span>
        </div>
        <div className={styles.vocabBox}>
          How often
          <img
            src={eng_audio_icon}
            alt="Play How often"
            className={styles.page246__icon}
            onClick={() => playAudio(audio4)}
          />
          <br />
          <span>Com que frequência / Quão frequente</span>
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
              <td>How</td>
              <td>are</td>
              <td>you</td>
              <td>—</td>
              <td>—</td>
              <td>
                today?
                <img
                  src={eng_audio_icon}
                  alt="Play How are you today?"
                  className={styles.page246__icon}
                  onClick={() => playAudio(audio5)}
                />
              </td>
            </tr>
            <tr>
              <td>How</td>
              <td>is</td>
              <td>
                your brother?
                <img
                  src={eng_audio_icon}
                  alt="Play How is your brother?"
                  className={styles.page246__icon}
                  onClick={() => playAudio(audio6)}
                />
              </td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>How</td>
              <td>is</td>
              <td>
                school?
                <img
                  src={eng_audio_icon}
                  alt="Play How is school?"
                  className={styles.page246__icon}
                  onClick={() => playAudio(audio7)}
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
              <td>I</td>
              <td>am</td>
              <td>—</td>
              <td>—</td>
              <td>
                good, thanks
                <img
                  src={eng_audio_icon}
                  alt="Play I am good, thanks"
                  className={styles.page246__icon}
                  onClick={() => playAudio(audio8)}
                />
              </td>
            </tr>
            <tr>
              <td>He</td>
              <td>is</td>
              <td>—</td>
              <td>—</td>
              <td>
                okay now
                <img
                  src={eng_audio_icon}
                  alt="Play He is okay now"
                  className={styles.page246__icon}
                  onClick={() => playAudio(audio9)}
                />
              </td>
            </tr>
            <tr>
              <td>It</td>
              <td>is</td>
              <td>—</td>
              <td>—</td>
              <td>
                interesting this year
                <img
                  src={eng_audio_icon}
                  alt="Play It is interesting this year"
                  className={styles.page246__icon}
                  onClick={() => playAudio(audio10)}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Pagina246;
