import React, { useRef } from 'react';
import styles from './pagina244.module.css';

import audio1 from '../assets/audios/pg244_audio1e.mp3';
import audio2 from '../assets/audios/pg244_audio2e.mp3';
import audio3 from '../assets/audios/pg244_audio3e.mp3';
import audio4 from '../assets/audios/pg244_audio4e.mp3';
import audio5 from '../assets/audios/pg244_audio5e.mp3';
import audio6 from '../assets/audios/pg244_audio6e.mp3';
import audio7 from '../assets/audios/pg244_audio7e.mp3';
import audio8 from '../assets/audios/pg244_audio8e.mp3';
import audio9 from '../assets/audios/pg244_audio9e.mp3';
import audio10 from '../assets/audios/pg244_audio10e.mp3';
import audio11 from '../assets/audios/pg244_audio11e.mp3';
import audio12 from '../assets/audios/pg244_audio12e.mp3';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';

const Pagina244 = () => {
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
    <div className={styles.page244__container}>
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
            className={styles.page244__icon}
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
            className={styles.page244__icon}
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
            className={styles.page244__icon}
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
            className={styles.page244__icon}
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
              <td>Whose bag</td>
              <td>is</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
              <td>
                this?
                <img
                  src={eng_audio_icon}
                  alt="Play Whose bag is this?"
                  className={styles.page244__icon}
                  onClick={() => playAudio(audio5)}
                />
              </td>
            </tr>
            <tr>
              <td>Whose books</td>
              <td>are</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
              <td>
                on the table?
                <img
                  src={eng_audio_icon}
                  alt="Play Whose books are on the table?"
                  className={styles.page244__icon}
                  onClick={() => playAudio(audio6)}
                />
              </td>
            </tr>
            <tr>
              <td>Whose phone</td>
              <td>is</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
              <td>
                that?
                <img
                  src={eng_audio_icon}
                  alt="Play Whose phone is that?"
                  className={styles.page244__icon}
                  onClick={() => playAudio(audio7)}
                />
              </td>
            </tr>
            <tr>
              <td>Whose shoes</td>
              <td>are</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
              <td>
                these?
                <img
                  src={eng_audio_icon}
                  alt="Play Whose shoes are these?"
                  className={styles.page244__icon}
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
                Maria’s bag
                <img
                  src={eng_audio_icon}
                  alt="Play It is Maria’s bag"
                  className={styles.page244__icon}
                  onClick={() => playAudio(audio9)}
                />
              </td>
            </tr>
            <tr>
              <td>They</td>
              <td>are</td>
              <td>—</td>
              <td>—</td>
              <td>
                my books
                <img
                  src={eng_audio_icon}
                  alt="Play They are my books"
                  className={styles.page244__icon}
                  onClick={() => playAudio(audio10)}
                />
              </td>
            </tr>
            <tr>
              <td>That</td>
              <td>is</td>
              <td>—</td>
              <td>—</td>
              <td>
                his phone
                <img
                  src={eng_audio_icon}
                  alt="Play That is his phone"
                  className={styles.page244__icon}
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
                my sister’s shoes
                <img
                  src={eng_audio_icon}
                  alt="Play They are my sister’s shoes"
                  className={styles.page244__icon}
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

export default Pagina244;
