import React, { useRef } from 'react';
import styles from './pagina234.module.css';

import audio1 from '../assets/audios/pg234_audio1e.mp3';
import audio2 from '../assets/audios/pg234_audio2e.mp3';
import audio3 from '../assets/audios/pg234_audio3e.mp3';
import audio4 from '../assets/audios/pg234_audio4e.mp3';
import audio5 from '../assets/audios/pg234_audio5e.mp3';
import audio6 from '../assets/audios/pg234_audio6e.mp3';
import audio7 from '../assets/audios/pg234_audio7e.mp3';
import audio8 from '../assets/audios/pg234_audio8e.mp3';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';

const Pagina234 = () => {
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
    <div className={styles.page234__container}>
      <header className={styles.page234__header}>
        <h1 className={styles.page234__title}>
          Grammar – <span className={styles.page234__title_black}>Simple Present</span>
        </h1>
        <p className={styles.page234__subtitle}>
          Verbo <strong>To Be</strong> (Ser, Estar ou <span className={styles.page234__highlight}>Ter somente para idade</span>)
        </p>
      </header>

      <main className={styles.page234__main}>
        <section className={styles.page234__tableSection}>
          <div className={styles.page234__tableTitle}>Negative Interrogative Form</div>
          <table className={styles.page234__table}>
            <thead>
              <tr>
                <th>Aux. Verb</th>
                <th>Subject</th>
                <th>Not</th>
                <th>Verb(s)</th>
                <th>Object Complement</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><spam className={styles.page234__red}>Am</spam><br /><spam className={styles.page234__red}>Ain’t</spam></td>
                <td className={styles.page234__red}>
                  I <br />
                  I
                  <img
                    src={eng_audio_icon}
                    alt="Play Ain’t I"
                    className={styles.page234__icon}
                    onClick={() => playAudio(audio2)}
                  />
                </td>
                <td>
                  not
                  <img
                    src={eng_audio_icon}
                    alt="Play Am I not"
                    className={styles.page234__icon}
                    onClick={() => playAudio(audio1)}
                  />
                  <br />—
                </td>
                <td>—</td>
                <td>...?</td>
              </tr>
              <tr>
                <td>Eu</td>
                <td>não</td>
                <td>sou</td>
                <td>—</td>
                <td>...?</td>
              </tr>
              <tr>
                <td>Eu</td>
                <td>não</td>
                <td>estou</td>
                <td>—</td>
                <td>...?</td>
              </tr>
              <tr>
                <td>Eu</td>
                <td>não</td>
                <td>tenho</td>
                <td>—</td>
                <td>(somente para idade) ...?</td>
              </tr>

              <tr>
                <td><spam className={styles.page234__red}>Is</spam><br /><spam className={styles.page234__red}>Isn’t</spam></td>
                <td className={styles.page234__red}>
                  he<br />
                  <span>he</span>
                  <img
                    src={eng_audio_icon}
                    alt="Play Isn’t he"
                    className={styles.page234__icon}
                    onClick={() => playAudio(audio4)}
                  />
                </td>
                <td>
                  not
                  <img
                    src={eng_audio_icon}
                    alt="Play Is he not"
                    className={styles.page234__icon}
                    onClick={() => playAudio(audio3)}
                  />
                  <br />—
                </td>
                <td>—</td>
                <td>...?</td>
              </tr>
              <tr>
                <td>Ele</td>
                <td>não</td>
                <td>é</td>
                <td>—</td>
                <td>...?</td>
              </tr>
              <tr>
                <td>Ele</td>
                <td>não</td>
                <td>está</td>
                <td>—</td>
                <td>...?</td>
              </tr>
              <tr>
                <td>Ele</td>
                <td>não</td>
                <td>tem</td>
                <td>—</td>
                <td>(somente para idade) ...?</td>
              </tr>

              <tr>
                <td><spam className={styles.page234__red}>Is</spam><br /><spam className={styles.page234__red}>Isn’t</spam></td>
                <td className={styles.page234__red}>
                  she<br />
                  <span>she</span>
                  <img
                    src={eng_audio_icon}
                    alt="Play Isn’t she"
                    className={styles.page234__icon}
                    onClick={() => playAudio(audio6)}
                  />
                </td>
                <td>
                  not
                  <img
                    src={eng_audio_icon}
                    alt="Play Is she not"
                    className={styles.page234__icon}
                    onClick={() => playAudio(audio5)}
                  />
                  <br />—
                </td>
                <td>—</td>
                <td>...?</td>
              </tr>
              <tr>
                <td>Ela</td>
                <td>não</td>
                <td>é</td>
                <td>—</td>
                <td>...?</td>
              </tr>
              <tr>
                <td>Ela</td>
                <td>não</td>
                <td>está</td>
                <td>—</td>
                <td>...?</td>
              </tr>
              <tr>
                <td>Ela</td>
                <td>não</td>
                <td>tem</td>
                <td>—</td>
                <td>(somente para idade) ...?</td>
              </tr>

              <tr>
                <td><spam className={styles.page234__red}>Is</spam><br /><spam className={styles.page234__red}>Isn’t</spam></td>
                <td className={styles.page234__red}>
                  it
                  <img
                    src={eng_audio_icon}
                    alt="Play Isn’t it"
                    className={styles.page234__icon}
                    onClick={() => playAudio(audio8)}
                  />
                  <br /><span>—</span>
                </td>
                <td>
                  not
                  <img
                    src={eng_audio_icon}
                    alt="Play Is it not"
                    className={styles.page234__icon}
                    onClick={() => playAudio(audio7)}
                  />
                  <br />—
                </td>
                <td>—</td>
                <td>...?</td>
              </tr>
              <tr>
                <td></td>
                <td>Não</td>
                <td>é</td>
                <td>—</td>
                <td>...?</td>
              </tr>
              <tr>
                <td></td>
                <td>Não</td>
                <td>está</td>
                <td>—</td>
                <td>...?</td>
              </tr>
              <tr>
                <td></td>
                <td>Não</td>
                <td>tem</td>
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

export default Pagina234;
