import React, { useRef } from 'react';
import styles from './pagina240.module.css';

import audio1 from '../assets/audios/pg240_audio1e.mp3';
import audio2 from '../assets/audios/pg240_audio2e.mp3';
import audio3 from '../assets/audios/pg240_audio3e.mp3';
import audio4 from '../assets/audios/pg240_audio4e.mp3';
import audio5 from '../assets/audios/pg240_audio5e.mp3';
import audio6 from '../assets/audios/pg240_audio6e.mp3';
import audio7 from '../assets/audios/pg240_audio7e.mp3';
import audio8 from '../assets/audios/pg240_audio8e.mp3';
import audio9 from '../assets/audios/pg240_audio9e.mp3';
import audio10 from '../assets/audios/pg240_audio10e.mp3';
import audio11 from '../assets/audios/pg240_audio11e.mp3';
import audio12 from '../assets/audios/pg240_audio12e.mp3';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';

const Pagina240 = () => {
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
    <div className={styles.page240__container}>
      <header className={styles.page240__header}>
        <h1 className={styles.page240__title}>
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
            className={styles.page240__icon}
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
            className={styles.page240__icon}
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
            className={styles.page240__icon}
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
            className={styles.page240__icon}
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
              <td>Why</td>
              <td>are</td>
              <td>you</td>
              <td>—</td>
              <td>—</td>
              <td>
                late?
                <img
                  src={eng_audio_icon}
                  alt="Play Why are you late?"
                  className={styles.page240__icon}
                  onClick={() => playAudio(audio5)}
                />
              </td>
            </tr>
            <tr>
              <td>Why</td>
              <td>are</td>
              <td>Pedro and Joe</td>
              <td>—</td>
              <td>—</td>
              <td>
                at home?
                <img
                  src={eng_audio_icon}
                  alt="Play Why are Pedro and Joe at home?"
                  className={styles.page240__icon}
                  onClick={() => playAudio(audio6)}
                />
              </td>
            </tr>
            <tr>
              <td>Why</td>
              <td>is</td>
              <td>Pam</td>
              <td>—</td>
              <td>—</td>
              <td>
                happy?
                <img
                  src={eng_audio_icon}
                  alt="Play Why is Pam happy?"
                  className={styles.page240__icon}
                  onClick={() => playAudio(audio7)}
                />
              </td>
            </tr>
            <tr>
              <td>Why</td>
              <td>is</td>
              <td>it</td>
              <td>—</td>
              <td>—</td>
              <td>
                cold in here?
                <img
                  src={eng_audio_icon}
                  alt="Play Why is it cold in here?"
                  className={styles.page240__icon}
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
              <th>Introduction</th>
              <th>Subject</th>
              <th>Aux. Verb</th>
              <th>Adv</th>
              <th>Verb</th>
              <th>Object Complement</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Because</td>
              <td>the bus</td>
              <td>is</td>
              <td>always</td>
              <td>—</td>
              <td>
                slow
                <img
                  src={eng_audio_icon}
                  alt="Play Because the bus is always slow"
                  className={styles.page240__icon}
                  onClick={() => playAudio(audio9)}
                />
              </td>
            </tr>
            <tr>
              <td>Because</td>
              <td>they</td>
              <td>are</td>
              <td>—</td>
              <td>—</td>
              <td>
                sick
                <img
                  src={eng_audio_icon}
                  alt="Play Because they are sick"
                  className={styles.page240__icon}
                  onClick={() => playAudio(audio10)}
                />
              </td>
            </tr>
            <tr>
              <td>Because</td>
              <td>today</td>
              <td>is</td>
              <td>—</td>
              <td>—</td>
              <td>
                her birthday
                <img
                  src={eng_audio_icon}
                  alt="Play Because today is her birthday"
                  className={styles.page240__icon}
                  onClick={() => playAudio(audio11)}
                />
              </td>
            </tr>
            <tr>
              <td>Because</td>
              <td>the window</td>
              <td>is</td>
              <td>—</td>
              <td>—</td>
              <td>
                open
                <img
                  src={eng_audio_icon}
                  alt="Play Because the window is open"
                  className={styles.page240__icon}
                  onClick={() => playAudio(audio12)}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className={styles.noteSection}>
        <p>
          <strong>*Nota:</strong><br />
          <span className={styles.red}>“Why”</span> = “Por que?” em perguntas<br />
          <span className={styles.red}>“Because”</span> = “Porque” em respostas
        </p>
      </section>
    </div>
  );
};

export default Pagina240;
