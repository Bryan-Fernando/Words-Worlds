import React, { useRef } from 'react';
import styles from './pagina252.module.css';

import audio1 from '../assets/audios/pg252_audio1e.mp3';
import audio2 from '../assets/audios/pg252_audio2e.mp3';
import audio3 from '../assets/audios/pg252_audio3e.mp3';
import audio4 from '../assets/audios/pg252_audio4e.mp3';
import audio5 from '../assets/audios/pg252_audio5e.mp3';
import audio6 from '../assets/audios/pg252_audio6e.mp3';
import audio7 from '../assets/audios/pg252_audio7e.mp3';
import audio8 from '../assets/audios/pg252_audio8e.mp3';
import audio9 from '../assets/audios/pg252_audio9e.mp3';
import audio10 from '../assets/audios/pg252_audio10e.mp3';
import audio11 from '../assets/audios/pg252_audio11e.mp3';
import audio12 from '../assets/audios/pg252_audio12e.mp3';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';

const Pagina252 = () => {
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
    <div className={styles.page252__container}>
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
            className={styles.page252__icon}
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
            className={styles.page252__icon}
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
            className={styles.page252__icon}
            onClick={() => playAudio(audio3)}
          />
          <br />
          <span>
            Quanto tempo<br />
            <small>(usado para perguntar sobre a duração total de algo — do início ao fim)</small>
          </span>
        </div>
        <div className={styles.vocabBox}>
          How much longer
          <img
            src={eng_audio_icon}
            alt="Play How much longer"
            className={styles.page252__icon}
            onClick={() => playAudio(audio4)}
          />
          <br />
          <span>
            Quanto tempo mais / ainda<br />
            <small>(tempo restante até algo terminar)</small>
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
              <td>How long</td>
              <td>is</td>
              <td>
                the class?
                <img
                  src={eng_audio_icon}
                  alt="Play How long is the class?"
                  className={styles.page252__icon}
                  onClick={() => playAudio(audio5)}
                />
              </td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>How long</td>
              <td>is</td>
              <td>
                the movie?
                <img
                  src={eng_audio_icon}
                  alt="Play How long is the movie?"
                  className={styles.page252__icon}
                  onClick={() => playAudio(audio6)}
                />
              </td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>How long</td>
              <td>is</td>
              <td>your</td>
              <td>—</td>
              <td>—</td>
              <td>
                lunch break?
                <img
                  src={eng_audio_icon}
                  alt="Play How long is your lunch break?"
                  className={styles.page252__icon}
                  onClick={() => playAudio(audio7)}
                />
              </td>
            </tr>
            <tr>
              <td>How long</td>
              <td>are</td>
              <td>the meetings</td>
              <td>—</td>
              <td>—</td>
              <td>
                on Monday?
                <img
                  src={eng_audio_icon}
                  alt="Play How long are the meetings on Monday?"
                  className={styles.page252__icon}
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
                50 minutes
                <img
                  src={eng_audio_icon}
                  alt="Play It is 50 minutes"
                  className={styles.page252__icon}
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
                2 hours and 30 minutes
                <img
                  src={eng_audio_icon}
                  alt="Play It is 2 hours and 30 minutes"
                  className={styles.page252__icon}
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
                45 minutes
                <img
                  src={eng_audio_icon}
                  alt="Play It is 45 minutes"
                  className={styles.page252__icon}
                  onClick={() => playAudio(audio11)}
                />
              </td>
            </tr>
            <tr>
              <td>They</td>
              <td>are</td>
              <td>usually</td>
              <td>—</td>
              <td>
                one hour long
                <img
                  src={eng_audio_icon}
                  alt="Play They are usually one hour long"
                  className={styles.page252__icon}
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

export default Pagina252;
