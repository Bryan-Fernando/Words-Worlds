import React, { useRef } from 'react';
import styles from './pagina236.module.css';

import audio1 from '../assets/audios/pg236_audio1e.mp3';
import audio2 from '../assets/audios/pg236_audio2e.mp3';
import audio3 from '../assets/audios/pg236_audio3e.mp3';
import audio4 from '../assets/audios/pg236_audio4e.mp3';
import audio5 from '../assets/audios/pg236_audio5e.mp3';
import audio6 from '../assets/audios/pg236_audio6e.mp3';
import audio7 from '../assets/audios/pg236_audio7e.mp3';
import audio8 from '../assets/audios/pg236_audio8e.mp3';
import audio9 from '../assets/audios/pg236_audio9e.mp3';
import audio10 from '../assets/audios/pg236_audio10e.mp3';
import audio11 from '../assets/audios/pg236_audio11e.mp3';
import audio12 from '../assets/audios/pg236_audio12e.mp3';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';

const Pagina236 = () => {
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
    <div className={styles.page236__container}>
      <header className={styles.page236__header}>
        <h1 className={styles.page236__title}>Grammar - <span className={styles.black}>Question Words</span></h1>
        <p className={styles.subtitle}>
          <span className={styles.red}>Verb To Be</span> <span className={styles.bold}>Simple Present</span>
        </p>
      </header>

      <section className={styles.vocabularySection}>
        <div className={styles.vocabBox}>
          What
          <img src={eng_audio_icon} alt="Play What" className={styles.page236__icon} onClick={() => playAudio(audio1)} />
          <br />
          <span className={styles.vocabTrans}>O que, que, qual, quais</span>
        </div>
        <div className={styles.vocabBox}>
          Where
          <img src={eng_audio_icon} alt="Play Where" className={styles.page236__icon} onClick={() => playAudio(audio3)} />
          <br />
          <span className={styles.vocabTrans}>Onde, aonde</span>
        </div>
        <div className={styles.vocabBox}>
          When
          <img src={eng_audio_icon} alt="Play When" className={styles.page236__icon} onClick={() => playAudio(audio4)} />
          <br />
          <span className={styles.vocabTrans}>Quando</span>
        </div>
        <div className={styles.vocabBox}>
          What time
          <img src={eng_audio_icon} alt="Play What time" className={styles.page236__icon} onClick={() => playAudio(audio2)} />
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
              <td>What</td>
              <td>is</td>
              <td>
                your name?
                <img src={eng_audio_icon} alt="Play What is your name?" className={styles.page236__icon} onClick={() => playAudio(audio5)} />
              </td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>What</td>
              <td>is</td>
              <td>
                your favorite color?
                <img src={eng_audio_icon} alt="Play What is your favorite color?" className={styles.page236__icon} onClick={() => playAudio(audio6)} />
              </td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>What</td>
              <td>is</td>
              <td>
                your job?
                <img src={eng_audio_icon} alt="Play What is your job?" className={styles.page236__icon} onClick={() => playAudio(audio7)} />
              </td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>What</td>
              <td>is</td>
              <td>
                your favorite subject?
                <img src={eng_audio_icon} alt="Play What is your favorite subject?" className={styles.page236__icon} onClick={() => playAudio(audio8)} />
              </td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
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
              <td>My name (it)</td>
              <td>is</td>
              <td>—</td>
              <td>—</td>
              <td>
                Lucas
                <img src={eng_audio_icon} alt="Play My name is Lucas" className={styles.page236__icon} onClick={() => playAudio(audio9)} />
              </td>
            </tr>
            <tr>
              <td>My favorite color (it)</td>
              <td>is</td>
              <td>—</td>
              <td>—</td>
              <td>
                blue
                <img src={eng_audio_icon} alt="Play My favorite color is blue" className={styles.page236__icon} onClick={() => playAudio(audio10)} />
              </td>
            </tr>
            <tr>
              <td>I</td>
              <td>am</td>
              <td>—</td>
              <td>—</td>
              <td>
                a chef
                <img src={eng_audio_icon} alt="Play I am a chef" className={styles.page236__icon} onClick={() => playAudio(audio11)} />
              </td>
            </tr>
            <tr>
              <td>I</td>
              <td>am</td>
              <td>—</td>
              <td>—</td>
              <td>
                English
                <img src={eng_audio_icon} alt="Play I am English" className={styles.page236__icon} onClick={() => playAudio(audio12)} />
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Pagina236;
