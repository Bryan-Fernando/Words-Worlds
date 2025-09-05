import React, { useRef } from 'react';
import styles from './pagina247.module.css';

import audio1 from '../assets/audios/pg247_audio1e.mp3';
import audio2 from '../assets/audios/pg247_audio2e.mp3';
import audio3 from '../assets/audios/pg247_audio3e.mp3';
import audio4 from '../assets/audios/pg247_audio4e.mp3';
import audio5 from '../assets/audios/pg247_audio5e.mp3';
import audio6 from '../assets/audios/pg247_audio6e.mp3';
import audio7 from '../assets/audios/pg247_audio7e.mp3';
import audio8 from '../assets/audios/pg247_audio8e.mp3';
import audio9 from '../assets/audios/pg247_audio9e.mp3';
import audio10 from '../assets/audios/pg247_audio10e.mp3';
import audio11 from '../assets/audios/pg247_audio11e.mp3';
import audio12 from '../assets/audios/pg247_audio12e.mp3';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';

const Pagina247 = () => {
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
    <div className={styles.page247__container}>
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
            className={styles.page247__icon}
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
            className={styles.page247__icon}
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
            className={styles.page247__icon}
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
            className={styles.page247__icon}
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
              <td>How far</td>
              <td>is</td>
              <td>
                the bus stop?
                <img
                  src={eng_audio_icon}
                  alt="Play How far is the bus stop?"
                  className={styles.page247__icon}
                  onClick={() => playAudio(audio5)}
                />
              </td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>How far</td>
              <td>are</td>
              <td>we</td>
              <td>—</td>
              <td>—</td>
              <td>
                from the station?
                <img
                  src={eng_audio_icon}
                  alt="Play How far are we from the station?"
                  className={styles.page247__icon}
                  onClick={() => playAudio(audio6)}
                />
              </td>
            </tr>
            <tr>
              <td>How far</td>
              <td>is</td>
              <td>
                the office?
                <img
                  src={eng_audio_icon}
                  alt="Play How far is the office?"
                  className={styles.page247__icon}
                  onClick={() => playAudio(audio7)}
                />
              </td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>How far</td>
              <td>are</td>
              <td>
                the shops?
                <img
                  src={eng_audio_icon}
                  alt="Play How far are the shops?"
                  className={styles.page247__icon}
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
              <td>It</td>
              <td>is</td>
              <td>—</td>
              <td>—</td>
              <td>
                just around the corner
                <img
                  src={eng_audio_icon}
                  alt="Play It is just around the corner"
                  className={styles.page247__icon}
                  onClick={() => playAudio(audio9)}
                />
              </td>
            </tr>
            <tr>
              <td>We</td>
              <td>are</td>
              <td>—</td>
              <td>—</td>
              <td>
                15 minutes away
                <img
                  src={eng_audio_icon}
                  alt="Play We are 15 minutes away"
                  className={styles.page247__icon}
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
                on the next street
                <img
                  src={eng_audio_icon}
                  alt="Play It is on the next street"
                  className={styles.page247__icon}
                  onClick={() => playAudio(audio11)}
                />
              </td>
            </tr>
            <tr>
              <td>They</td>
              <td>are</td>
              <td>—</td>
              <td>—</td>
              <td>
                across the park
                <img
                  src={eng_audio_icon}
                  alt="Play They are across the park"
                  className={styles.page247__icon}
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

export default Pagina247;
