import React, { useRef } from 'react';
import styles from './pagina248.module.css';

import audio1 from '../assets/audios/pg248_audio1e.mp3';
import audio2 from '../assets/audios/pg248_audio2e.mp3';
import audio3 from '../assets/audios/pg248_audio3e.mp3';
import audio4 from '../assets/audios/pg248_audio4e.mp3';
import audio5 from '../assets/audios/pg248_audio5e.mp3';
import audio6 from '../assets/audios/pg248_audio6e.mp3';
import audio7 from '../assets/audios/pg248_audio7e.mp3';
import audio8 from '../assets/audios/pg248_audio8e.mp3';
import audio9 from '../assets/audios/pg248_audio9e.mp3';
import audio10 from '../assets/audios/pg248_audio10e.mp3';
import audio11 from '../assets/audios/pg248_audio11e.mp3';
import audio12 from '../assets/audios/pg248_audio12e.mp3';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';

const Pagina248 = () => {
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
    <div className={styles.page248__container}>
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
            className={styles.page248__icon}
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
            className={styles.page248__icon}
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
            className={styles.page248__icon}
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
            className={styles.page248__icon}
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
              <td>How old</td>
              <td>is</td>
              <td>
                your brother?
                <img
                  src={eng_audio_icon}
                  alt="Play How old is your brother?"
                  className={styles.page248__icon}
                  onClick={() => playAudio(audio5)}
                />
              </td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>How old</td>
              <td>are</td>
              <td>you?
                <img
                  src={eng_audio_icon}
                  alt="Play How old are you? from the station?"
                  className={styles.page248__icon}
                  onClick={() => playAudio(audio6)}
                />
              </td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>How old</td>
              <td>is</td>
              <td>
                the building?
                <img
                  src={eng_audio_icon}
                  alt="Play How old is the building?"
                  className={styles.page248__icon}
                  onClick={() => playAudio(audio7)}
                />
              </td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>How old</td>
              <td>is</td>
              <td>
                your dog?
                <img
                  src={eng_audio_icon}
                  alt="Play How old is your dog?"
                  className={styles.page248__icon}
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
              <td>He</td>
              <td>is</td>
              <td>—</td>
              <td>—</td>
              <td>
                12 years old
                <img
                  src={eng_audio_icon}
                  alt="Play He is 12 years old"
                  className={styles.page248__icon}
                  onClick={() => playAudio(audio9)}
                />
              </td>
            </tr>
            <tr>
              <td>I</td>
              <td>am</td>
              <td>—</td>
              <td>—</td>
              <td>
                25 years old
                <img
                  src={eng_audio_icon}
                  alt="Play I am 25 years old"
                  className={styles.page248__icon}
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
                100 years old
                <img
                  src={eng_audio_icon}
                  alt="Play It is 100 years old"
                  className={styles.page248__icon}
                  onClick={() => playAudio(audio11)}
                />
              </td>
            </tr>
            <tr>
              <td>It</td>
              <td>is</td>
              <td>—</td>
              <td>—</td>
              <td>
                5 years old
                <img
                  src={eng_audio_icon}
                  alt="Play It is 5 years old"
                  className={styles.page248__icon}
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

export default Pagina248;
