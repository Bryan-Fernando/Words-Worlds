import React, { useRef } from 'react';
import styles from './pagina239.module.css';

import audio1 from '../assets/audios/pg239_audio1e.mp3';
import audio2 from '../assets/audios/pg239_audio2e.mp3';
import audio3 from '../assets/audios/pg239_audio3e.mp3';
import audio4 from '../assets/audios/pg239_audio4e.mp3';
import audio5 from '../assets/audios/pg239_audio5e.mp3';
import audio6 from '../assets/audios/pg239_audio6e.mp3';
import audio7 from '../assets/audios/pg239_audio7e.mp3';
import audio8 from '../assets/audios/pg239_audio8e.mp3';
import audio9 from '../assets/audios/pg239_audio9e.mp3';
import audio10 from '../assets/audios/pg239_audio10e.mp3';
import audio11 from '../assets/audios/pg239_audio11e.mp3';
import audio12 from '../assets/audios/pg239_audio12e.mp3';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';

const Pagina239 = () => {
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
    <div className={styles.page239__container}>
      <header className={styles.page239__header}>
        <h1 className={styles.page239__title}>
          Grammar - <span className={styles.black}>Question Words</span>
        </h1>
        <p className={styles.subtitle}>
          <span className={styles.red}>Verb To Be</span> <span className={styles.bold}>Simple Present</span>
        </p>
      </header>

      <section className={styles.vocabularySection}>
        <div className={styles.vocabBox}>
          What
          <img
            src={eng_audio_icon}
            alt="Play What"
            className={styles.page239__icon}
            onClick={() => playAudio(audio1)}
          />
          <br />
          <span className={styles.vocabTrans}>O que, que, qual, quais</span>
        </div>
        <div className={styles.vocabBox}>
          Where
          <img
            src={eng_audio_icon}
            alt="Play Where"
            className={styles.page239__icon}
            onClick={() => playAudio(audio3)}
          />
          <br />
          <span className={styles.vocabTrans}>Onde, aonde</span>
        </div>
        <div className={styles.vocabBox}>
          When
          <img
            src={eng_audio_icon}
            alt="Play When"
            className={styles.page239__icon}
            onClick={() => playAudio(audio4)}
          />
          <br />
          <span className={styles.vocabTrans}>Quando</span>
        </div>
        <div className={styles.vocabBox}>
          What time
          <img
            src={eng_audio_icon}
            alt="Play What time"
            className={styles.page239__icon}
            onClick={() => playAudio(audio2)}
          />
          <br />
          <span className={styles.vocabTrans}>Que horas</span>
        </div>
      </section>

      <section className={styles.tableSection}>
        <div className={styles.tableTitle}>Question Words</div>
        <div className={styles.subTitle}>Interrogative Form</div>
        <table className={styles.grammarTable}>
          <thead>
            <tr>
              <th>Palavras interrogativas</th>
              <th>Aux. Verb</th>
              <th>Subject</th>
              <th>Adv</th>
              <th>Verb(s)</th>
              <th>Object Complement</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>What time</td>
              <td>is</td>
              <td>
                it?
                <img
                  src={eng_audio_icon}
                  alt="Play What time is it?"
                  className={styles.page239__icon}
                  onClick={() => playAudio(audio5)}
                />
              </td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>What time</td>
              <td>are</td>
              <td>Pedro and Joe</td>
              <td>—</td>
              <td>—</td>
              <td>
                free?
                <img
                  src={eng_audio_icon}
                  alt="Play What time are Pedro and Joe free?"
                  className={styles.page239__icon}
                  onClick={() => playAudio(audio6)}
                />
              </td>
            </tr>
            <tr>
              <td>What time</td>
              <td>is</td>
              <td>Pam</td>
              <td>—</td>
              <td>—</td>
              <td>
                available?
                <img
                  src={eng_audio_icon}
                  alt="Play What time is Pam available?"
                  className={styles.page239__icon}
                  onClick={() => playAudio(audio7)}
                />
              </td>
            </tr>
            <tr>
              <td>What time</td>
              <td>are</td>
              <td>we</td>
              <td>—</td>
              <td>—</td>
              <td>
                at home?
                <img
                  src={eng_audio_icon}
                  alt="Play What time are we at home?"
                  className={styles.page239__icon}
                  onClick={() => playAudio(audio8)}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className={styles.tableSection}>
        <div className={styles.subTitle}>Affirmative Form</div>
        <table className={styles.grammarTable}>
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
                7 o'clock
                <img
                  src={eng_audio_icon}
                  alt="Play It is 7 o'clock"
                  className={styles.page239__icon}
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
                at 3 p.m.
                <img
                  src={eng_audio_icon}
                  alt="Play It is at 3 p.m."
                  className={styles.page239__icon}
                  onClick={() => playAudio(audio10)}
                />
              </td>
            </tr>
            <tr>
              <td>They</td>
              <td>are</td>
              <td>—</td>
              <td>—</td>
              <td>
                here at 6.
                <img
                  src={eng_audio_icon}
                  alt="Play They are here at 6."
                  className={styles.page239__icon}
                  onClick={() => playAudio(audio11)}
                />
              </td>
            </tr>
            <tr>
              <td>We</td>
              <td>are</td>
              <td>—</td>
              <td>—</td>
              <td>
                at home at 5:00 p.m.
                <img
                  src={eng_audio_icon}
                  alt="Play We are at home at 5:00 p.m."
                  className={styles.page239__icon}
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

export default Pagina239;
