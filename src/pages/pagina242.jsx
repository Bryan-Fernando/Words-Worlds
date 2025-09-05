import React, { useRef } from 'react';
import styles from './pagina242.module.css';

import audio1 from '../assets/audios/pg242_audio1e.mp3';
import audio2 from '../assets/audios/pg242_audio2e.mp3';
import audio3 from '../assets/audios/pg242_audio3e.mp3';
import audio4 from '../assets/audios/pg242_audio4e.mp3';
import audio5 from '../assets/audios/pg242_audio5e.mp3';
import audio6 from '../assets/audios/pg242_audio6e.mp3';
import audio7 from '../assets/audios/pg242_audio7e.mp3';
import audio8 from '../assets/audios/pg242_audio8e.mp3';
import audio9 from '../assets/audios/pg242_audio9e.mp3';
import audio10 from '../assets/audios/pg242_audio10e.mp3';
import audio11 from '../assets/audios/pg242_audio11e.mp3';
import audio12 from '../assets/audios/pg242_audio12e.mp3';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';

const Pagina242 = () => {
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
    <div className={styles.page242__container}>
      <header className={styles.page242__header}>
        <h1 className={styles.page242__title}>
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
            className={styles.page242__icon}
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
            className={styles.page242__icon}
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
            className={styles.page242__icon}
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
            className={styles.page242__icon}
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
              <td>Which color</td>
              <td>is</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
              <td>
                your favorite?
                <img
                  src={eng_audio_icon}
                  alt="Play Which color is your favorite?"
                  className={styles.page242__icon}
                  onClick={() => playAudio(audio5)}
                />
              </td>
            </tr>
            <tr>
              <td>Which of these 3 books</td>
              <td>is</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
              <td>
                on the top 10 list?
                <img
                  src={eng_audio_icon}
                  alt="Play Which of these 3 books is on the top 10 list?"
                  className={styles.page242__icon}
                  onClick={() => playAudio(audio6)}
                />
              </td>
            </tr>
            <tr>
              <td>Which game</td>
              <td>is</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
              <td>
                his favorite?
                <img
                  src={eng_audio_icon}
                  alt="Play Which game is his favorite?"
                  className={styles.page242__icon}
                  onClick={() => playAudio(audio7)}
                />
              </td>
            </tr>
            <tr>
              <td>Which snacks</td>
              <td>are</td>
              <td>—</td>
              <td>usual</td>
              <td>—</td>
              <td>
                at your parties?
                <img
                  src={eng_audio_icon}
                  alt="Play Which snacks are usual at your parties?"
                  className={styles.page242__icon}
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
              <td>Blue</td>
              <td>is</td>
              <td>—</td>
              <td>—</td>
              <td>
                my favorite
                <img
                  src={eng_audio_icon}
                  alt="Play Blue is my favorite"
                  className={styles.page242__icon}
                  onClick={() => playAudio(audio9)}
                />
              </td>
            </tr>
            <tr>
              <td>“The Little Prince”</td>
              <td>is</td>
              <td>—</td>
              <td>—</td>
              <td>
                on the top 10 list
                <img
                  src={eng_audio_icon}
                  alt="Play The Little Prince is on the top 10 list"
                  className={styles.page242__icon}
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
                chess
                <img
                  src={eng_audio_icon}
                  alt="Play It is chess"
                  className={styles.page242__icon}
                  onClick={() => playAudio(audio11)}
                />
              </td>
            </tr>
            <tr>
              <td>Chips and soda</td>
              <td>are</td>
              <td>usual</td>
              <td>—</td>
              <td>
                at our parties
                <img
                  src={eng_audio_icon}
                  alt="Play Chips and soda are usual at our parties"
                  className={styles.page242__icon}
                  onClick={() => playAudio(audio12)}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <footer className={styles.noteBox}>
        <strong>Nota:</strong>
        <ul>
          <li>Quando usamos <strong>which</strong>, normalmente estamos escolhendo entre duas ou mais opções limitadas.</li>
        </ul>
      </footer>
    </div>
  );
};

export default Pagina242;
