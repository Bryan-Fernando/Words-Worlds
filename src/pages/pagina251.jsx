import React, { useRef } from 'react';
import styles from './pagina251.module.css';

import audio1 from '../assets/audios/pg251_audio1e.mp3';
import audio2 from '../assets/audios/pg251_audio2e.mp3';
import audio3 from '../assets/audios/pg251_audio3e.mp3';
import audio4 from '../assets/audios/pg251_audio4e.mp3';
import audio5 from '../assets/audios/pg251_audio5e.mp3';
import audio6 from '../assets/audios/pg251_audio6e.mp3';
import audio7 from '../assets/audios/pg251_audio7e.mp3';
import audio8 from '../assets/audios/pg251_audio8e.mp3';
import audio9 from '../assets/audios/pg251_audio9e.mp3';
import audio10 from '../assets/audios/pg251_audio10e.mp3';
import audio11 from '../assets/audios/pg251_audio11e.mp3';
import audio12 from '../assets/audios/pg251_audio12e.mp3';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';

const Pagina251 = () => {
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
    <div className={styles.page251__container}>
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
          How much
          <img
            src={eng_audio_icon}
            alt="Play How much"
            className={styles.page251__icon}
            onClick={() => playAudio(audio1)}
          />
          <br />
          <span>
            Quanto / quanta / quanto de<br />
            <i>(substantivos incontáveis)</i>
          </span>
        </div>
        <div className={styles.vocabBox}>
          How many
          <img
            src={eng_audio_icon}
            alt="Play How many"
            className={styles.page251__icon}
            onClick={() => playAudio(audio2)}
          />
          <br />
          <span>
            Quantos / quantas<br />
            <i>(substantivos contáveis)</i>
          </span>
        </div>
        <div className={styles.vocabBox}>
          How long
          <img
            src={eng_audio_icon}
            alt="Play How long"
            className={styles.page251__icon}
            onClick={() => playAudio(audio3)}
          />
          <br />
          <span>
            Quanto tempo<br />
            <small>(pergunta sobre a duração total — do início ao fim)</small>
          </span>
        </div>
        <div className={styles.vocabBox}>
          How much longer
          <img
            src={eng_audio_icon}
            alt="Play How much longer"
            className={styles.page251__icon}
            onClick={() => playAudio(audio4)}
          />
          <br />
          <span>
            Quanto tempo mais / ainda<br />
            <small>(foco no tempo restante)</small>
          </span>
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
              <td>How many students</td>
              <td>are</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
              <td>
                in your class?
                <img
                  src={eng_audio_icon}
                  alt="Play How many students are in your class?"
                  className={styles.page251__icon}
                  onClick={() => playAudio(audio5)}
                />
              </td>
            </tr>
            <tr>
              <td>How many people</td>
              <td>are</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
              <td>
                at the party?
                <img
                  src={eng_audio_icon}
                  alt="Play How many people are at the party?"
                  className={styles.page251__icon}
                  onClick={() => playAudio(audio6)}
                />
              </td>
            </tr>
            <tr>
              <td>How many books</td>
              <td>are</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
              <td>
                on the table?
                <img
                  src={eng_audio_icon}
                  alt="Play How many books are on the table?"
                  className={styles.page251__icon}
                  onClick={() => playAudio(audio7)}
                />
              </td>
            </tr>
            <tr>
              <td>How many windows</td>
              <td>are</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
              <td>
                in your house?
                <img
                  src={eng_audio_icon}
                  alt="Play How many windows are in your house?"
                  className={styles.page251__icon}
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
              <td>There</td>
              <td>are</td>
              <td>—</td>
              <td>—</td>
              <td>
                30 students
                <img
                  src={eng_audio_icon}
                  alt="Play There are 30 students"
                  className={styles.page251__icon}
                  onClick={() => playAudio(audio9)}
                />
              </td>
            </tr>
            <tr>
              <td>There</td>
              <td>are</td>
              <td>—</td>
              <td>—</td>
              <td>
                50 people
                <img
                  src={eng_audio_icon}
                  alt="Play There are 50 people"
                  className={styles.page251__icon}
                  onClick={() => playAudio(audio10)}
                />
              </td>
            </tr>
            <tr>
              <td>There</td>
              <td>are</td>
              <td>—</td>
              <td>—</td>
              <td>
                4 books
                <img
                  src={eng_audio_icon}
                  alt="Play There are 4 books"
                  className={styles.page251__icon}
                  onClick={() => playAudio(audio11)}
                />
              </td>
            </tr>
            <tr>
              <td>There</td>
              <td>are</td>
              <td>—</td>
              <td>—</td>
              <td>
                6 windows
                <img
                  src={eng_audio_icon}
                  alt="Play There are 6 windows"
                  className={styles.page251__icon}
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

export default Pagina251;
