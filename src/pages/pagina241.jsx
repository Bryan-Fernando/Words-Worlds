import React, { useRef } from 'react';
import styles from './pagina241.module.css';

import audio1 from '../assets/audios/pg241_audio1e.mp3';
import audio2 from '../assets/audios/pg241_audio2e.mp3';
import audio3 from '../assets/audios/pg241_audio3e.mp3';
import audio4 from '../assets/audios/pg241_audio4e.mp3';
import audio5 from '../assets/audios/pg241_audio5e.mp3';
import audio6 from '../assets/audios/pg241_audio6e.mp3';
import audio7 from '../assets/audios/pg241_audio7e.mp3';
import audio8 from '../assets/audios/pg241_audio8e.mp3';
import audio9 from '../assets/audios/pg241_audio9e.mp3';
import audio10 from '../assets/audios/pg241_audio10e.mp3';
import audio11 from '../assets/audios/pg241_audio11e.mp3';
import audio12 from '../assets/audios/pg241_audio12e.mp3';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';

const Pagina241 = () => {
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
    <div className={styles.page241__container}>
      <header className={styles.page241__header}>
        <h1 className={styles.page241__title}>
          Grammar - <span className={styles.black}>Question Words</span>
        </h1>
        <p className={styles.subtitle}>
          <span className={styles.red}>Verb To Be</span> <span className={styles.bold}>Simple Present</span>
        </p>
      </header>

      <section className={styles.vocabularySection}>
        <div className={styles.vocabBox}>
          Why
          <img
            src={eng_audio_icon}
            alt="Play Why"
            className={styles.page241__icon}
            onClick={() => playAudio(audio1)}
          />
          <br />
          <span className={styles.vocabTrans}>"Por que?" (em perguntas)</span>
        </div>
        <div className={styles.vocabBox}>
          Who
          <img
            src={eng_audio_icon}
            alt="Play Who"
            className={styles.page241__icon}
            onClick={() => playAudio(audio3)}
          />
          <br />
          <span className={styles.vocabTrans}>Quem</span>
        </div>
        <div className={styles.vocabBox}>
          Which
          <img
            src={eng_audio_icon}
            alt="Play Which"
            className={styles.page241__icon}
            onClick={() => playAudio(audio4)}
          />
          <br />
          <span className={styles.vocabTrans}>Que, qual, quais (opção)</span>
        </div>
        <div className={styles.vocabBox}>
          What size
          <img
            src={eng_audio_icon}
            alt="Play What size"
            className={styles.page241__icon}
            onClick={() => playAudio(audio2)}
          />
          <br />
          <span className={styles.vocabTrans}>Que tamanho, qual tamanho</span>
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
              <th>Verb (s)</th>
              <th>Object Complement</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Who</td>
              <td>are</td>
              <td>
                you?
                <img
                  src={eng_audio_icon}
                  alt="Play Who are you?"
                  className={styles.page241__icon}
                  onClick={() => playAudio(audio5)}
                />
              </td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>Who</td>
              <td>is</td>
              <td>
                he?
                <img
                  src={eng_audio_icon}
                  alt="Play Who is he?"
                  className={styles.page241__icon}
                  onClick={() => playAudio(audio6)}
                />
              </td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>Who</td>
              <td>is</td>
              <td>
                it?
                <img
                  src={eng_audio_icon}
                  alt="Play Who is it?"
                  className={styles.page241__icon}
                  onClick={() => playAudio(audio7)}
                />
              </td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>Who</td>
              <td>are</td>
              <td>
                they?
                <img
                  src={eng_audio_icon}
                  alt="Play Who are they?"
                  className={styles.page241__icon}
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
              <td>I</td>
              <td>am</td>
              <td>—</td>
              <td>—</td>
              <td>
                your English teacher
                <img
                  src={eng_audio_icon}
                  alt="Play I am your English teacher"
                  className={styles.page241__icon}
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
                my best friend - Eric
                <img
                  src={eng_audio_icon}
                  alt="Play He is my best friend - Eric"
                  className={styles.page241__icon}
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
                me - John
                <img
                  src={eng_audio_icon}
                  alt="Play It is me - John"
                  className={styles.page241__icon}
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
                my cousins - Mary and Joe
                <img
                  src={eng_audio_icon}
                  alt="Play They are my cousins - Mary and Joe"
                  className={styles.page241__icon}
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

export default Pagina241;
