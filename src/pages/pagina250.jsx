import React, { useRef } from 'react';
import styles from './pagina250.module.css';

import audio1 from '../assets/audios/pg250_audio1e.mp3';
import audio2 from '../assets/audios/pg250_audio2e.mp3';
import audio3 from '../assets/audios/pg250_audio3e.mp3';
import audio4 from '../assets/audios/pg250_audio4e.mp3';
import audio5 from '../assets/audios/pg250_audio5e.mp3';
import audio6 from '../assets/audios/pg250_audio6e.mp3';
import audio7 from '../assets/audios/pg250_audio7e.mp3';
import audio8 from '../assets/audios/pg250_audio8e.mp3';
import audio9 from '../assets/audios/pg250_audio9e.mp3';
import audio10 from '../assets/audios/pg250_audio10e.mp3';
import audio11 from '../assets/audios/pg250_audio11e.mp3';
import audio12 from '../assets/audios/pg250_audio12e.mp3';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';

const Pagina250 = () => {
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
    <div className={styles.page250__container}>
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
            className={styles.page250__icon}
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
            className={styles.page250__icon}
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
            className={styles.page250__icon}
            onClick={() => playAudio(audio3)}
          />
          <br />
          <span>
            Quanto tempo<br />
            <small>(usado para perguntar sobre a duração total de algo, do início ao fim)</small>
          </span>
        </div>
        <div className={styles.vocabBox}>
          How much longer
          <img
            src={eng_audio_icon}
            alt="Play How much longer"
            className={styles.page250__icon}
            onClick={() => playAudio(audio4)}
          />
          <br />
          <span>
            Quanto tempo mais<br />Quanto tempo ainda<br />
            <small>(usado para perguntar quanto tempo ainda resta até que algo termine ou aconteça)</small>
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
              <td>How much</td>
              <td>is</td>
              <td>
                this book?
                <img
                  src={eng_audio_icon}
                  alt="Play How much is this book?"
                  className={styles.page250__icon}
                  onClick={() => playAudio(audio5)}
                />
              </td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>How much</td>
              <td>is</td>
              <td>
                the ticket
                <img
                  src={eng_audio_icon}
                  alt="Play How much is the ticket?"
                  className={styles.page250__icon}
                  onClick={() => playAudio(audio6)}
                />
              </td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>How much</td>
              <td>is</td>
              <td>a sandwich</td>
              <td>—</td>
              <td>—</td>
              <td>
                at that café?
                <img
                  src={eng_audio_icon}
                  alt="Play How much is a sandwich at that café?"
                  className={styles.page250__icon}
                  onClick={() => playAudio(audio7)}
                />
              </td>
            </tr>
            <tr>
              <td>How much</td>
              <td>is</td>
              <td>the electricity</td>
              <td>—</td>
              <td>—</td>
              <td>
                today?
                <img
                  src={eng_audio_icon}
                  alt="Play How much is the electricity today?"
                  className={styles.page250__icon}
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
              <td>It</td>
              <td>is</td>
              <td>—</td>
              <td>—</td>
              <td>
                20 dollars
                <img
                  src={eng_audio_icon}
                  alt="Play It is 20 dollars"
                  className={styles.page250__icon}
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
                15 dollars
                <img
                  src={eng_audio_icon}
                  alt="Play It is 15 dollars"
                  className={styles.page250__icon}
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
                12 dollars
                <img
                  src={eng_audio_icon}
                  alt="Play It is 12 dollars"
                  className={styles.page250__icon}
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
                more expensive this month
                <img
                  src={eng_audio_icon}
                  alt="Play It is more expensive this month"
                  className={styles.page250__icon}
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

export default Pagina250;
