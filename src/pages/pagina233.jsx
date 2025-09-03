import React, { useRef } from 'react';
import styles from './pagina233.module.css';

import audio1 from '../assets/audios/pg233_audio1e.mp3';
import audio2 from '../assets/audios/pg233_audio2e.mp3';
import audio3 from '../assets/audios/pg233_audio3e.mp3';
import audio4 from '../assets/audios/pg233_audio4e.mp3';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';

const Pagina233 = () => {
  const audioRef = useRef(null);

  const playAudio = (audioFile) => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    const newAudio = new Audio(audioFile);
    audioRef.current = newAudio;
    newAudio.play();
  };

  return (
    <div className={styles.page233__container}>
      <header className={styles.page233__header}>
        <h1 className={styles.page233__title}>
          Grammar – <span className={styles.page233__title_black}>Simple Present</span>
        </h1>
        <p className={styles.page233__subtitle}>
          Verbo <strong>To Be</strong> (Ser, Estar ou <span className={styles.page233__highlight}>Ter somente para idade</span>)
        </p>
      </header>

      <main className={styles.page233__main}>
        <section className={styles.page233__tableSection}>
          <div className={styles.page233__tableTitle}>Interrogative Form</div>
          <table className={styles.page233__table}>
            <thead>
              <tr>
                <th>Subject</th>
                <th>Aux. Verb</th>
                <th>Verb(s)</th>
                <th>Object Complement</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className={styles.page233__red}>Are</span><br />
                  <span>Nós</span>
                </td>
                <td className={styles.page233__red}>
                  <span className={styles.page233__red}>we</span>
                  <img
                    src={eng_audio_icon}
                    alt="Play Are we"
                    className={styles.page233__icon}
                    onClick={() => playAudio(audio1)}
                  />
                </td>
                <td>—</td>
                <td>...?</td>
              </tr>
              <tr>
                <td>Nós</td>
                <td>somos</td>
                <td>—</td>
                <td>...?</td>
              </tr>
              <tr>
                <td>Nós</td>
                <td>estamos</td>
                <td>—</td>
                <td>...?</td>
              </tr>
              <tr>
                <td>Nós</td>
                <td>temos</td>
                <td>—</td>
                <td>(somente para idade) ...?</td>
              </tr>

              <tr>
                <td>
                  <span className={styles.page233__red}>Are</span><br />
                  <span>Você</span>
                </td>
                <td className={styles.page233__red}>
                  <span className={styles.page233__red}>You (sg)</span>
                  <img
                    src={eng_audio_icon}
                    alt="Play Are you (sg)"
                    className={styles.page233__icon}
                    onClick={() => playAudio(audio2)}
                  />
                </td>
                <td>—</td>
                <td>...?</td>
              </tr>
              <tr>
                <td>Você</td>
                <td>é</td>
                <td>—</td>
                <td>...?</td>
              </tr>
              <tr>
                <td>Você</td>
                <td>está</td>
                <td>—</td>
                <td>...?</td>
              </tr>
              <tr>
                <td>Você</td>
                <td>tem</td>
                <td>—</td>
                <td>(somente para idade) ...?</td>
              </tr>

              <tr>
                <td>
                  <span className={styles.page233__red}>Are</span><br />
                  <span>Vocês</span>
                </td>
                <td className={styles.page233__red}>
                  <span className={styles.page233__red}>You all (pl)</span>
                  <img
                    src={eng_audio_icon}
                    alt="Play Are you all (pl)"
                    className={styles.page233__icon}
                    onClick={() => playAudio(audio3)}
                  />
                </td>
                <td>—</td>
                <td>...?</td>
              </tr>
              <tr>
                <td>Vocês</td>
                <td>são</td>
                <td>—</td>
                <td>...?</td>
              </tr>
              <tr>
                <td>Vocês</td>
                <td>estão</td>
                <td>—</td>
                <td>...?</td>
              </tr>
              <tr>
                <td>Vocês</td>
                <td>têm</td>
                <td>—</td>
                <td>(somente para idade) ...?</td>
              </tr>

              <tr>
                <td>
                  <span className={styles.page233__red}>Are</span><br />
                  <span>Eles / Elas</span>
                </td>
                <td className={styles.page233__red}>
                  <span className={styles.page233__red}>They</span>
                  <img
                    src={eng_audio_icon}
                    alt="Play Are they"
                    className={styles.page233__icon}
                    onClick={() => playAudio(audio4)}
                  />
                </td>
                <td>—</td>
                <td>...?</td>
              </tr>
              <tr>
                <td>Eles / Elas</td>
                <td>são</td>
                <td>—</td>
                <td>...?</td>
              </tr>
              <tr>
                <td>Eles / Elas</td>
                <td>estão</td>
                <td>—</td>
                <td>...?</td>
              </tr>
              <tr>
                <td>Eles / Elas</td>
                <td>têm</td>
                <td>—</td>
                <td>(somente para idade) ...?</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default Pagina233;
