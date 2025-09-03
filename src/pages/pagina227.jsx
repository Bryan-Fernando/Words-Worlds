import React, { useRef } from 'react';
import styles from './pagina227.module.css';

import audio1 from '../assets/audios/pg227_audio1e.mp3';
import audio2 from '../assets/audios/pg227_audio2e.mp3';
import audio3 from '../assets/audios/pg227_audio3e.mp3';
import audio4 from '../assets/audios/pg227_audio4e.mp3';
import audio5 from '../assets/audios/pg227_audio5e.mp3';
import audio6 from '../assets/audios/pg227_audio6e.mp3';
import audio7 from '../assets/audios/pg227_audio7e.mp3';
import audio8 from '../assets/audios/pg227_audio8e.mp3';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';

const Pagina227 = () => {
  const currentAudio = useRef(null);

  const playAudio = (audio) => {
    if (currentAudio.current) {
      currentAudio.current.pause();
      currentAudio.current.currentTime = 0;
    }
    const newAudio = new Audio(audio);
    currentAudio.current = newAudio;
    newAudio.play();
  };

  return (
    <div className={styles.page227__container}>
      <header className={styles.page227__header}>
        <h1 className={styles.page227__title}>
          Grammar – <span className={styles.page227__title_black}>Simple Present</span>
        </h1>
        <p className={styles.page227__subtitle}>
          Verbo <strong>To Be</strong> (Ser, Estar ou <span className={styles.page227__highlight}>Ter somente para idade</span>)
        </p>
      </header>

      <main className={styles.page227__main}>
        <section className={styles.page227__tableSection}>
          <div className={styles.page227__tableTitle}>Affirmative Form</div>
          <table className={styles.page227__table}>
            <thead>
              <tr>
                <th>Subject</th>
                <th>Aux. Verb</th>
                <th>Contracted Form</th>
                <th>Verb(s)</th>
                <th>Object Complement</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>I</strong>
                  <br />
                  <span>
                    Eu <br />Eu <br /> Eu
                  </span>
                </td>
                <td>
                  am
                  <img
                    src={eng_audio_icon}
                    alt="Play am"
                    className={styles.page227__icon}
                    onClick={() => playAudio(audio1)}
                  />
                  <br />sou <br />estou <br />tenho
                </td>
                <td>
                  I&apos;m
                  <img
                    src={eng_audio_icon}
                    alt="Play I'm"
                    className={styles.page227__icon}
                    onClick={() => playAudio(audio5)}
                  />
                </td>
                <td>—</td>
                <td>(somente para idade)</td>
              </tr>

              <tr>
                <td>
                  <span className={styles.page227__red}>He</span>
                  <br />
                  Ele <br />Ele <br />Ele
                </td>
                <td>
                  is
                  <img
                    src={eng_audio_icon}
                    alt="Play is (He)"
                    className={styles.page227__icon}
                    onClick={() => playAudio(audio2)}
                  />
                  <br />é <br />está <br />tem
                </td>
                <td>
                  He&apos;s
                  <img
                    src={eng_audio_icon}
                    alt="Play He's"
                    className={styles.page227__icon}
                    onClick={() => playAudio(audio6)}
                  />
                </td>
                <td>—</td>
                <td>(somente para idade)</td>
              </tr>

              <tr>
                <td>
                  <span className={styles.page227__red}>She</span>
                  <br />
                  Ela <br />Ela <br />Ela
                </td>
                <td>
                  is
                  <img
                    src={eng_audio_icon}
                    alt="Play is (She)"
                    className={styles.page227__icon}
                    onClick={() => playAudio(audio3)}
                  />
                  <br />é <br />está <br />tem
                </td>
                <td>
                  She&apos;s
                  <img
                    src={eng_audio_icon}
                    alt="Play She's"
                    className={styles.page227__icon}
                    onClick={() => playAudio(audio7)}
                  />
                </td>
                <td>—</td>
                <td>(somente para idade)</td>
              </tr>

              <tr>
                <td>
                  <span className={styles.page227__red}>It</span>
                </td>
                <td>
                  is
                  <img
                    src={eng_audio_icon}
                    alt="Play is (It)"
                    className={styles.page227__icon}
                    onClick={() => playAudio(audio4)}
                  />
                  <br />é <br />está <br />tem
                </td>
                <td>
                  It&apos;s
                  <img
                    src={eng_audio_icon}
                    alt="Play It's"
                    className={styles.page227__icon}
                    onClick={() => playAudio(audio8)}
                  />
                </td>
                <td>—</td>
                <td>(somente para idade)</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default Pagina227;
