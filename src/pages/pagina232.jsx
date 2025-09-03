import React, { useRef } from 'react';
import styles from './pagina232.module.css';

import audio1 from '../assets/audios/pg232_audio1e.mp3';
import audio2 from '../assets/audios/pg232_audio2e.mp3';
import audio3 from '../assets/audios/pg232_audio3e.mp3';
import audio4 from '../assets/audios/pg232_audio4e.mp3';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';

const Pagina232 = () => {
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
    <div className={styles.page232__container}>
      <header className={styles.page232__header}>
        <h1 className={styles.page232__title}>
          Grammar – <span className={styles.page232__title_black}>Simple Present</span>
        </h1>
        <p className={styles.page232__subtitle}>
          Verbo <strong>To Be</strong> (Ser, Estar ou <span className={styles.page232__highlight}>Ter somente para idade</span>)
        </p>
      </header>

      <main className={styles.page232__main}>
        <section className={styles.page232__tableSection}>
          <div className={styles.page232__tableTitle}>Interrogative Form</div>
          <table className={styles.page232__table}>
            <thead>
              <tr>
                <th>Aux. Verb</th>
                <th>Subject</th>
                <th>Verb(s)</th>
                <th>Object Complement</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className={styles.page232__red}>Am</span><br />
                  <span>Eu</span>
                </td>
                <td>
                  <span className={styles.page232__red}>I</span>
                  <img
                    src={eng_audio_icon}
                    alt="Play Am I"
                    className={styles.page232__icon}
                    onClick={() => playAudio(audio1)}
                  />
                </td>
                <td>—</td>
                <td>...?</td>
              </tr>
              <tr>
                <td>Eu</td>
                <td>sou</td>
                <td>—</td>
                <td>...?</td>
              </tr>
              <tr>
                <td>Eu</td>
                <td>estou</td>
                <td>—</td>
                <td>...?</td>
              </tr>
              <tr>
                <td>Eu</td>
                <td>tenho</td>
                <td>—</td>
                <td>(somente para idade) ...?</td>
              </tr>

              <tr>
                <td>
                  <span className={styles.page232__red}>Is</span><br />
                  <span>Ele</span>
                </td>
                <td>
                  <span className={styles.page232__red}>he</span>
                  <img
                    src={eng_audio_icon}
                    alt="Play Is he"
                    className={styles.page232__icon}
                    onClick={() => playAudio(audio2)}
                  />
                </td>
                <td>—</td>
                <td>...?</td>
              </tr>
              <tr>
                <td>Ele</td>
                <td>é</td>
                <td>—</td>
                <td>...?</td>
              </tr>
              <tr>
                <td>Ele</td>
                <td>está</td>
                <td>—</td>
                <td>...?</td>
              </tr>
              <tr>
                <td>Ele</td>
                <td>tem</td>
                <td>—</td>
                <td>(somente para idade) ...?</td>
              </tr>

              <tr>
                <td>
                  <span className={styles.page232__red}>Is</span><br />
                  <span>Ela</span>
                </td>
                <td>
                  <span className={styles.page232__red}>she</span>
                  <img
                    src={eng_audio_icon}
                    alt="Play Is she"
                    className={styles.page232__icon}
                    onClick={() => playAudio(audio3)}
                  />
                </td>
                <td>—</td>
                <td>...?</td>
              </tr>
              <tr>
                <td>Ela</td>
                <td>é</td>
                <td>—</td>
                <td>...?</td>
              </tr>
              <tr>
                <td>Ela</td>
                <td>está</td>
                <td>—</td>
                <td>...?</td>
              </tr>
              <tr>
                <td>Ela</td>
                <td>tem</td>
                <td>—</td>
                <td>(somente para idade) ...?</td>
              </tr>

              <tr>
                <td>
                  <span className={styles.page232__red}>Is</span>
                </td>
                <td>
                  <span className={styles.page232__red}>it</span>
                  <img
                    src={eng_audio_icon}
                    alt="Play Is it"
                    className={styles.page232__icon}
                    onClick={() => playAudio(audio4)}
                  />
                </td>
                <td>—</td>
                <td>...?</td>
              </tr>
              <tr>
                <td>—</td>
                <td>É</td>
                <td>—</td>
                <td>...?</td>
              </tr>
              <tr>
                <td>—</td>
                <td>Está</td>
                <td>—</td>
                <td>...?</td>
              </tr>
              <tr>
                <td>—</td>
                <td>Tem</td>
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

export default Pagina232;
