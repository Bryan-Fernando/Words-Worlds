import React, { useRef } from 'react';
import styles from './pagina253.module.css';

import audio1 from '../assets/audios/pg253_audio1e.mp3';
import audio2 from '../assets/audios/pg253_audio2e.mp3';
import audio3 from '../assets/audios/pg253_audio3e.mp3';
import audio4 from '../assets/audios/pg253_audio4e.mp3';
import audio5 from '../assets/audios/pg253_audio5e.mp3';
import audio6 from '../assets/audios/pg253_audio6e.mp3';
import audio7 from '../assets/audios/pg253_audio7e.mp3';
import audio8 from '../assets/audios/pg253_audio8e.mp3';
import audio9 from '../assets/audios/pg253_audio9e.mp3';
import audio10 from '../assets/audios/pg253_audio10e.mp3';
import audio11 from '../assets/audios/pg253_audio11e.mp3';
import audio12 from '../assets/audios/pg253_audio12e.mp3';
import audio13 from '../assets/audios/pg253_audio13e.mp3';
import audio14 from '../assets/audios/pg253_audio14e.mp3';
import audio15 from '../assets/audios/pg253_audio15e.mp3';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';

const Pagina253 = () => {
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
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          Grammar - <span>Question Words</span>
        </h1>
        <p className={styles.subtitle}>
          <span className={styles.red}>Verb To Be</span> <span className={styles.bold}>Simple Present</span>
        </p>
      </header>

      <section className={styles.vocabSection}>
        <div className={styles.vocabBox}>
          How many times
          <img
            src={eng_audio_icon}
            alt="Play How many times"
            className={styles.page253__icon}
            onClick={() => playAudio(audio1)}
          />
          <br />
          <span>Quantas vezes</span>
        </div>
        <div className={styles.vocabBox}>
          How many times a day
          <img
            src={eng_audio_icon}
            alt="Play How many times a day"
            className={styles.page253__icon}
            onClick={() => playAudio(audio2)}
          />
          <br />
          <span>Quantas vezes por dia</span>
        </div>
        <div className={styles.vocabBox}>
          How many times a week
          <img
            src={eng_audio_icon}
            alt="Play How many times a week"
            className={styles.page253__icon}
            onClick={() => playAudio(audio3)}
          />
          <br />
          <span>Quantas vezes por semana</span>
        </div>
        <div className={styles.vocabBox}>
          How many times a month
          <img
            src={eng_audio_icon}
            alt="Play How many times a month"
            className={styles.page253__icon}
            onClick={() => playAudio(audio4)}
          />
          <br />
          <span>Quantas vezes por mês</span>
        </div>
        <div className={styles.vocabBox}>
          How many times a year
          <img
            src={eng_audio_icon}
            alt="Play How many times a year"
            className={styles.page253__icon}
            onClick={() => playAudio(audio5)}
          />
          <br />
          <span>Quantas vezes por ano</span>
        </div>
      </section>

      <section>
        <h2 className={styles.sectionTitle}>Question Words</h2>
        <h3 className={styles.subSectionTitle}>Interrogative Form</h3>
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
              <td>How many times</td>
              <td>is</td>
              <td>the bus</td>
              <td>—</td>
              <td>—</td>
              <td>
                late?
                <img
                  src={eng_audio_icon}
                  alt="Play How many times is the bus late?"
                  className={styles.page253__icon}
                  onClick={() => playAudio(audio6)}
                />
              </td>
            </tr>
            <tr>
              <td>How many times a day</td>
              <td>are</td>
              <td>the windows</td>
              <td>—</td>
              <td>
                cleaned?
                <img
                  src={eng_audio_icon}
                  alt="Play How many times a day are the windows cleaned?"
                  className={styles.page253__icon}
                  onClick={() => playAudio(audio7)}
                />
              </td>
              <td>—</td>
            </tr>
            <tr>
              <td>How many times a week</td>
              <td>is</td>
              <td>the trash</td>
              <td>—</td>
              <td>
                collected?
                <img
                  src={eng_audio_icon}
                  alt="Play How many times a week is the trash collected?"
                  className={styles.page253__icon}
                  onClick={() => playAudio(audio8)}
                />
              </td>
              <td>—</td>
            </tr>
            <tr>
              <td>How many times a month</td>
              <td>are</td>
              <td>you</td>
              <td>—</td>
              <td>—</td>
              <td>
                at the beach?
                <img
                  src={eng_audio_icon}
                  alt="Play How many times a month are you at the beach?"
                  className={styles.page253__icon}
                  onClick={() => playAudio(audio9)}
                />
              </td>
            </tr>
            <tr>
              <td>How many times a year</td>
              <td>is</td>
              <td>the</td>
              <td>—</td>
              <td>—</td>
              <td>
                festival?
                <img
                  src={eng_audio_icon}
                  alt="Play How many times a year is the festival?"
                  className={styles.page253__icon}
                  onClick={() => playAudio(audio10)}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h3 className={styles.subSectionTitle}>Affirmative Form</h3>
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
              <td>It</td>
              <td>is</td>
              <td>—</td>
              <td>—</td>
              <td>
                late very often
                <img
                  src={eng_audio_icon}
                  alt="Play It is late very often"
                  className={styles.page253__icon}
                  onClick={() => playAudio(audio11)}
                />
              </td>
            </tr>
            <tr>
              <td>They</td>
              <td>are</td>
              <td>—</td>
              <td>
                cleaned
                <img
                  src={eng_audio_icon}
                  alt="Play They are cleaned"
                  className={styles.page253__icon}
                  onClick={() => playAudio(audio12)}
                />
              </td>
              <td>twice a day</td>
            </tr>
            <tr>
              <td>It</td>
              <td>is</td>
              <td>—</td>
              <td>
                collected
                <img
                  src={eng_audio_icon}
                  alt="Play It is collected"
                  className={styles.page253__icon}
                  onClick={() => playAudio(audio13)}
                />
              </td>
              <td>once a week</td>
            </tr>
            <tr>
              <td>I</td>
              <td>am</td>
              <td>—</td>
              <td>—</td>
              <td>
                three times a month
                <img
                  src={eng_audio_icon}
                  alt="Play I am three times a month"
                  className={styles.page253__icon}
                  onClick={() => playAudio(audio14)}
                />
              </td>
            </tr>
            <tr>
              <td>They</td>
              <td>are</td>
              <td>—</td>
              <td>—</td>
              <td>
                two times a year
                <img
                  src={eng_audio_icon}
                  alt="Play They are two times a year"
                  className={styles.page253__icon}
                  onClick={() => playAudio(audio15)}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Pagina253;
