import React, { useRef } from 'react';
import styles from './pagina228.module.css';

import audio1 from '../assets/audios/pg228_audio1e.mp3';
import audio2 from '../assets/audios/pg228_audio2e.mp3';
import audio3 from '../assets/audios/pg228_audio3e.mp3';
import audio4 from '../assets/audios/pg228_audio4e.mp3';
import audio5 from '../assets/audios/pg228_audio5e.mp3';
import audio6 from '../assets/audios/pg228_audio6e.mp3';
import audio7 from '../assets/audios/pg228_audio7e.mp3';
import audio8 from '../assets/audios/pg228_audio8e.mp3';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';

const Pagina228 = () => {
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
    <div className={styles.page228__container}>
      <header className={styles.page228__header}>
        <h1 className={styles.page228__title}>
          Grammar – <span className={styles.page228__title_black}>Simple Present</span>
        </h1>
        <p className={styles.page228__subtitle}>
          Verbo <strong>To Be</strong> (Ser, Estar ou <span className={styles.page228__highlight}>Ter somente para idade</span>)
        </p>
      </header>

      <main className={styles.page228__main}>
        <section className={styles.page228__tableSection}>
          <div className={styles.page228__tableTitle}>Affirmative Form</div>
          <table className={styles.page228__table}>
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
                  <strong>
                    <span>We</span>
                  </strong>
                  <br />
                  <span>Nós <br />Nós <br />Nós</span>
                </td>
                <td>
                  <span>are</span>
                  <img
                    src={eng_audio_icon}
                    alt="Play are (We)"
                    className={styles.page228__icon}
                    onClick={() => playAudio(audio1)}
                  />
                  <br />somos <br />estamos <br />temos
                </td>
                <td>
                  <span>We’re</span>
                  <img
                    src={eng_audio_icon}
                    alt="Play We’re"
                    className={styles.page228__icon}
                    onClick={() => playAudio(audio5)}
                  />
                </td>
                <td>—</td>
                <td>(somente para idade)</td>
              </tr>

              <tr>
                <td>
                  <span className={styles.page228__red}>
                    <span>You (sg)</span>
                  </span>
                  <br />
                  <span>Você <br />Você <br />Você</span>
                </td>
                <td>
                  <span>are</span>
                  <img
                    src={eng_audio_icon}
                    alt="Play are (You sg)"
                    className={styles.page228__icon}
                    onClick={() => playAudio(audio2)}
                  />
                  <br />é <br />está <br />tem
                </td>
                <td>
                  <span>You’re</span>
                  <img
                    src={eng_audio_icon}
                    alt="Play You’re"
                    className={styles.page228__icon}
                    onClick={() => playAudio(audio6)}
                  />
                </td>
                <td>—</td>
                <td>(somente para idade)</td>
              </tr>

              <tr>
                <td>
                  <span className={styles.page228__red}>
                    <span>You all (pl)</span>
                  </span>
                  <br />
                  <span>Vocês <br />Vocês <br />Vocês</span>
                </td>
                <td>
                  <span>are</span>
                  <img
                    src={eng_audio_icon}
                    alt="Play are (You all pl)"
                    className={styles.page228__icon}
                    onClick={() => playAudio(audio3)}
                  />
                  <br />são <br />estão <br />têm
                </td>
                <td>
                  <span>You all’re</span>
                  <img
                    src={eng_audio_icon}
                    alt="Play You all’re"
                    className={styles.page228__icon}
                    onClick={() => playAudio(audio7)}
                  />
                </td>
                <td>—</td>
                <td>(somente para idade)</td>
              </tr>

              <tr>
                <td>
                  <span className={styles.page228__red}>
                    <span>They</span>
                  </span>
                  <br />
                  <span>Eles / Elas <br />Eles / Elas <br />Eles / Elas</span>
                </td>
                <td>
                  <span>are</span>
                  <img
                    src={eng_audio_icon}
                    alt="Play are (They)"
                    className={styles.page228__icon}
                    onClick={() => playAudio(audio4)}
                  />
                  <br />são <br />estão <br />têm
                </td>
                <td>
                  <span>They’re</span>
                  <img
                    src={eng_audio_icon}
                    alt="Play They’re"
                    className={styles.page228__icon}
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

export default Pagina228;
