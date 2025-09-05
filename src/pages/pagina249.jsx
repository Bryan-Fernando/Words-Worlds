import React, { useRef } from 'react';
import styles from './pagina249.module.css';

import audio1 from '../assets/audios/pg249_audio1e.mp3';
import audio2 from '../assets/audios/pg249_audio2e.mp3';
import audio3 from '../assets/audios/pg249_audio3e.mp3';
import audio4 from '../assets/audios/pg249_audio4e.mp3';
import audio5 from '../assets/audios/pg249_audio5e.mp3';
import audio6 from '../assets/audios/pg249_audio6e.mp3';
import audio7 from '../assets/audios/pg249_audio7e.mp3';
import audio8 from '../assets/audios/pg249_audio8e.mp3';
import audio9 from '../assets/audios/pg249_audio9e.mp3';
import audio10 from '../assets/audios/pg249_audio10e.mp3';
import audio11 from '../assets/audios/pg249_audio11e.mp3';
import audio12 from '../assets/audios/pg249_audio12e.mp3';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';

const Pagina249 = () => {
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
    <div className={styles.page249__container}>
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
            className={styles.page249__icon}
            onClick={() => playAudio(audio1)}
          />
          <br />
          <span>Como - Quão<br />(adjetivo / advérbio)</span>
        </div>
        <div className={styles.vocabBox}>
          How far
          <img
            src={eng_audio_icon}
            alt="Play How far"
            className={styles.page249__icon}
            onClick={() => playAudio(audio2)}
          />
          <br />
          <span>Quão longe<br />Que distância</span>
        </div>
        <div className={styles.vocabBox}>
          How old
          <img
            src={eng_audio_icon}
            alt="Play How old"
            className={styles.page249__icon}
            onClick={() => playAudio(audio3)}
          />
          <br />
          <span>Quantos anos<br />Quão velho<br />(<i>somente para idade</i>)</span>
        </div>
        <div className={styles.vocabBox}>
          How often
          <img
            src={eng_audio_icon}
            alt="Play How often"
            className={styles.page249__icon}
            onClick={() => playAudio(audio4)}
          />
          <br />
          <span>Com que frequência<br />Quão frequente</span>
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
              <td>How often</td>
              <td>are</td>
              <td>you</td>
              <td>—</td>
              <td>—</td>
              <td>
                at home on weekends?
                <img
                  src={eng_audio_icon}
                  alt="Play How often are you at home on weekends?"
                  className={styles.page249__icon}
                  onClick={() => playAudio(audio5)}
                />
              </td>
            </tr>
            <tr>
              <td>How often</td>
              <td>is</td>
              <td>the bus</td>
              <td>—</td>
              <td>—</td>
              <td>
                early?
                <img
                  src={eng_audio_icon}
                  alt="Play How often is the bus early?"
                  className={styles.page249__icon}
                  onClick={() => playAudio(audio6)}
                />
              </td>
            </tr>
            <tr>
              <td>How often</td>
              <td>is</td>
              <td>
                your class online?
                <img
                  src={eng_audio_icon}
                  alt="Play How often is your class online?"
                  className={styles.page249__icon}
                  onClick={() => playAudio(audio7)}
                />
              </td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>How often</td>
              <td>are</td>
              <td>we</td>
              <td>—</td>
              <td>—</td>
              <td>
                in the same group?
                <img
                  src={eng_audio_icon}
                  alt="Play How often are we in the same group?"
                  className={styles.page249__icon}
                  onClick={() => playAudio(audio8)}
                />
              </td>
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
              <td>usually</td>
              <td>—</td>
              <td>
                at home on Sundays
                <img
                  src={eng_audio_icon}
                  alt="Play I am usually at home on Sundays"
                  className={styles.page249__icon}
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
                early in the morning
                <img
                  src={eng_audio_icon}
                  alt="Play It is early in the morning"
                  className={styles.page249__icon}
                  onClick={() => playAudio(audio10)}
                />
              </td>
            </tr>
            <tr>
              <td>It</td>
              <td>is</td>
              <td>—</td>
              <td>—</td>
              <td>
                online three times a week
                <img
                  src={eng_audio_icon}
                  alt="Play It is online three times a week"
                  className={styles.page249__icon}
                  onClick={() => playAudio(audio11)}
                />
              </td>
            </tr>
            <tr>
              <td>We</td>
              <td>are</td>
              <td>usually</td>
              <td>—</td>
              <td>
                together in projects
                <img
                  src={eng_audio_icon}
                  alt="Play We are usually together in projects"
                  className={styles.page249__icon}
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

export default Pagina249;
