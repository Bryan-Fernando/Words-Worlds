import React, { useRef } from 'react';
import styles from './pagina245.module.css';

import audio1 from '../assets/audios/pg245_audio1e.mp3';
import audio2 from '../assets/audios/pg245_audio2e.mp3';
import audio3 from '../assets/audios/pg245_audio3e.mp3';
import audio4 from '../assets/audios/pg245_audio4e.mp3';
import audio5 from '../assets/audios/pg245_audio5e.mp3';
import audio6 from '../assets/audios/pg245_audio6e.mp3';
import audio7 from '../assets/audios/pg245_audio7e.mp3';
import audio8 from '../assets/audios/pg245_audio8e.mp3';
import audio9 from '../assets/audios/pg245_audio9e.mp3';
import audio10 from '../assets/audios/pg245_audio10e.mp3';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';

const Pagina245 = () => {
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
    <div className={styles.page245__container}>
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
          Whose
          <img
            src={eng_audio_icon}
            alt="Play Whose"
            className={styles.page245__icon}
            onClick={() => playAudio(audio1)}
          />
          <br />
          <span>“De quem” (posse)</span>
        </div>
        <div className={styles.vocabBox}>
          What kind of
          <img
            src={eng_audio_icon}
            alt="Play What kind of"
            className={styles.page245__icon}
            onClick={() => playAudio(audio2)}
          />
          <br />
          <span>Que tipo de / espécie de</span>
        </div>
        <div className={styles.vocabBox}>
          What type of
          <img
            src={eng_audio_icon}
            alt="Play What type of"
            className={styles.page245__icon}
            onClick={() => playAudio(audio3)}
          />
          <br />
          <span>Que tipo de / espécie de</span>
        </div>
        <div className={styles.vocabBox}>
          What sort of
          <img
            src={eng_audio_icon}
            alt="Play What sort of"
            className={styles.page245__icon}
            onClick={() => playAudio(audio4)}
          />
          <br />
          <span>Que tipo de / espécie de</span>
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
              <td>What kind of car</td>
              <td>is</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
              <td>
                that?
                <img
                  src={eng_audio_icon}
                  alt="Play What kind of car is that?"
                  className={styles.page245__icon}
                  onClick={() => playAudio(audio5)}
                />
              </td>
            </tr>
            <tr>
              <td>What type of student</td>
              <td>is</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
              <td>
                she?
                <img
                  src={eng_audio_icon}
                  alt="Play What type of student is she?"
                  className={styles.page245__icon}
                  onClick={() => playAudio(audio6)}
                />
              </td>
            </tr>
            <tr>
              <td>What sort of animal</td>
              <td>is</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
              <td>
                a dolphin?
                <img
                  src={eng_audio_icon}
                  alt="Play What sort of animal is a dolphin?"
                  className={styles.page245__icon}
                  onClick={() => playAudio(audio7)}
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
              <td>It</td>
              <td>is</td>
              <td>—</td>
              <td>—</td>
              <td>
                a sports car
                <img
                  src={eng_audio_icon}
                  alt="Play It is a sports car"
                  className={styles.page245__icon}
                  onClick={() => playAudio(audio8)}
                />
              </td>
            </tr>
            <tr>
              <td>She</td>
              <td>is</td>
              <td>—</td>
              <td>—</td>
              <td>
                a hardworking student
                <img
                  src={eng_audio_icon}
                  alt="Play She is a hardworking student"
                  className={styles.page245__icon}
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
                a marine animal
                <img
                  src={eng_audio_icon}
                  alt="Play It is a marine animal"
                  className={styles.page245__icon}
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

export default Pagina245;
