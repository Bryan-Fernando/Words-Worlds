import React, { useRef } from 'react';
import styles from './pagina231.module.css';

import audio1 from '../assets/audios/pg231_audio1e.mp3';
import audio2 from '../assets/audios/pg231_audio2e.mp3';
import audio3 from '../assets/audios/pg231_audio3e.mp3';
import audio4 from '../assets/audios/pg231_audio4e.mp3';
import audio5 from '../assets/audios/pg231_audio5e.mp3';
import audio6 from '../assets/audios/pg231_audio6e.mp3';
import audio7 from '../assets/audios/pg231_audio7e.mp3';
import audio8 from '../assets/audios/pg231_audio8e.mp3';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';

const Pagina231 = () => {
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
    <div className={styles.page231__container}>
      <header className={styles.page231__header}>
        <h1 className={styles.page231__title}>
          Grammar – <span className={styles.page231__title_black}>Simple Present</span>
        </h1>
        <p className={styles.page231__subtitle}>
          Verbo <strong>To Be</strong> (Ser, Estar ou <span className={styles.page231__highlight}>Ter somente para idade</span>)
        </p>
      </header>

      <main className={styles.page231__main}>
        <section className={styles.page231__tableSection}>
          <div className={styles.page231__tableTitle}>Negative Contracted Form</div>
          <table className={styles.page231__table}>
            <thead>
              <tr>
                <th>Subject</th>
                <th>Aux. Verb</th>
                <th>Not</th>
                <th>Verb(s)</th>
                <th>Object Complement</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>I</strong></td>
                <td>
                  ain’t
                  <img
                    src={eng_audio_icon}
                    alt="Play I ain’t"
                    className={styles.page231__icon}
                    onClick={() => playAudio(audio1)}
                  />
                </td>
                <td>—</td>
                <td>—</td>
                <td>—</td>
              </tr>
              <tr>
                <td><span className={styles.page231__red}>He</span></td>
                <td>
                  ain’t
                  <img
                    src={eng_audio_icon}
                    alt="Play He ain’t"
                    className={styles.page231__icon}
                    onClick={() => playAudio(audio2)}
                  />
                </td>
                <td>—</td>
                <td>—</td>
                <td>—</td>
              </tr>
              <tr>
                <td><span className={styles.page231__red}>She</span></td>
                <td>
                  ain’t
                  <img
                    src={eng_audio_icon}
                    alt="Play She ain’t"
                    className={styles.page231__icon}
                    onClick={() => playAudio(audio3)}
                  />
                </td>
                <td>—</td>
                <td>—</td>
                <td>—</td>
              </tr>
              <tr>
                <td><span className={styles.page231__red}>It</span></td>
                <td>
                  ain’t
                  <img
                    src={eng_audio_icon}
                    alt="Play It ain’t"
                    className={styles.page231__icon}
                    onClick={() => playAudio(audio4)}
                  />
                </td>
                <td>—</td>
                <td>—</td>
                <td>—</td>
              </tr>
              <tr>
                <td><strong>We</strong></td>
                <td>
                  ain’t
                  <img
                    src={eng_audio_icon}
                    alt="Play We ain’t"
                    className={styles.page231__icon}
                    onClick={() => playAudio(audio5)}
                  />
                </td>
                <td>—</td>
                <td>—</td>
                <td>—</td>
              </tr>
              <tr>
                <td><strong>You</strong></td>
                <td>
                  ain’t
                  <img
                    src={eng_audio_icon}
                    alt="Play You ain’t"
                    className={styles.page231__icon}
                    onClick={() => playAudio(audio6)}
                  />
                </td>
                <td>—</td>
                <td>—</td>
                <td>—</td>
              </tr>
              <tr>
                <td><strong>You all</strong></td>
                <td>
                  ain’t
                  <img
                    src={eng_audio_icon}
                    alt="Play You all ain’t"
                    className={styles.page231__icon}
                    onClick={() => playAudio(audio7)}
                  />
                </td>
                <td>—</td>
                <td>—</td>
                <td>—</td>
              </tr>
              <tr>
                <td><strong>They</strong></td>
                <td>
                  ain’t
                  <img
                    src={eng_audio_icon}
                    alt="Play They ain’t"
                    className={styles.page231__icon}
                    onClick={() => playAudio(audio8)}
                  />
                </td>
                <td>—</td>
                <td>—</td>
                <td>—</td>
              </tr>
            </tbody>
          </table>

          <div className={styles.page231__note}>
            <strong>Nota:</strong> <span className={styles.page231__noteLabel}>C.F.</span> = Contracted Form
          </div>

          <div className={styles.page231__noteInfo}>
            <strong>Nota:</strong> <span className={styles.page231__highlightRed}>Ain’t</span> pode ser usado com todos os sujeitos na forma negativa contraída, conforme os exemplos acima. <span className={styles.page231__italic}>Forma informal</span>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pagina231;
