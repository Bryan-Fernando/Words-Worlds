import React, { useRef } from 'react';
import styles from './pagina230.module.css';

import audio1 from '../assets/audios/pg230_audio1e.mp3';
import audio2 from '../assets/audios/pg230_audio2e.mp3';
import audio3 from '../assets/audios/pg230_audio3e.mp3';
import audio4 from '../assets/audios/pg230_audio4e.mp3';
import audio5 from '../assets/audios/pg230_audio5e.mp3';
import audio6 from '../assets/audios/pg230_audio6e.mp3';
import audio7 from '../assets/audios/pg230_audio7e.mp3';
import audio8 from '../assets/audios/pg230_audio8e.mp3';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';

const Pagina230 = () => {
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
    <div className={styles.page230__container}>
      <header className={styles.page230__header}>
        <h1 className={styles.page230__title}>
          Grammar – <span className={styles.page230__title_black}>Simple Present</span>
        </h1>
        <p className={styles.page230__subtitle}>
          Verbo <strong>To Be</strong> (Ser, Estar ou <span className={styles.page230__highlight}>Ter somente para idade</span>)
        </p>
      </header>

      <main className={styles.page230__main}>
        <section className={styles.page230__tableSection}>
          <div className={styles.page230__tableTitle}>Negative Form</div>
          <table className={styles.page230__table}>
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
                <td>
                  <span className={styles.page230__red}>We</span><br />
                  <span className={styles.page230__red}>We</span><br />
                  <span>Nós <br /> Nós <br /> Nós</span>
                </td>
                <td>
                  <span className={styles.page230__red}>are</span><br />
                  <span className={styles.page230__red}>aren’t</span>
                  <img
                    src={eng_audio_icon}
                    alt="Play aren’t (We)"
                    className={styles.page230__icon}
                    onClick={() => playAudio(audio2)}
                  />
                  <br />não <br /> não <br /> não
                </td>
                <td>
                  <span className={styles.page230__red}>not</span>
                  <img
                    src={eng_audio_icon}
                    alt="Play not (We)"
                    className={styles.page230__icon}
                    onClick={() => playAudio(audio1)}
                  />
                  <br /> <br />
                  somos <br /> estamos <br /> temos
                </td>
                <td>—</td>
                <td>(somente para idade)</td>
              </tr>

              <tr>
                <td>
                  <span className={styles.page230__red}>You (sg)</span><br />
                  <span className={styles.page230__red}>You</span><br />
                  <span>Você <br /> Você <br /> Você</span>
                </td>
                <td>
                  <span className={styles.page230__red}>are</span><br />
                  <span className={styles.page230__red}>aren’t</span>
                  <img
                    src={eng_audio_icon}
                    alt="Play aren’t (You sg)"
                    className={styles.page230__icon}
                    onClick={() => playAudio(audio4)}
                  />
                  <br />não <br /> não <br /> não
                </td>
                <td>
                  <span className={styles.page230__red}>not</span>
                  <img
                    src={eng_audio_icon}
                    alt="Play not (You sg)"
                    className={styles.page230__icon}
                    onClick={() => playAudio(audio3)}
                  />
                  <br /> <br />
                  é <br /> está <br /> tem
                </td>
                <td>—</td>
                <td>(somente para idade)</td>
              </tr>

              <tr>
                <td>
                  <span className={styles.page230__red}>You all (pl)</span><br />
                  <span className={styles.page230__red}>You all</span><br />
                  <span>Vocês <br /> Vocês <br /> Vocês</span>
                </td>
                <td>
                  <span className={styles.page230__red}>are</span><br />
                  <span className={styles.page230__red}>aren’t</span>
                  <img
                    src={eng_audio_icon}
                    alt="Play aren’t (You all pl)"
                    className={styles.page230__icon}
                    onClick={() => playAudio(audio6)}
                  />
                  <br />não <br /> não <br /> não
                </td>
                <td>
                  <span className={styles.page230__red}>not</span>
                  <img
                    src={eng_audio_icon}
                    alt="Play not (You all pl)"
                    className={styles.page230__icon}
                    onClick={() => playAudio(audio5)}
                  />
                  <br /> <br />
                  são <br /> estão <br /> têm
                </td>
                <td>—</td>
                <td>(somente para idade)</td>
              </tr>

              <tr>
                <td>
                  <span className={styles.page230__red}>They</span><br />
                  <span className={styles.page230__red}>They</span><br />
                  <span>Eles / Elas <br /> Eles / Elas <br /> Eles / Elas</span>
                </td>
                <td>
                  <span className={styles.page230__red}>are</span><br />
                  <span className={styles.page230__red}>aren’t</span>
                  <img
                    src={eng_audio_icon}
                    alt="Play aren’t (They)"
                    className={styles.page230__icon}
                    onClick={() => playAudio(audio8)}
                  />
                  <br />não <br /> não <br /> não
                </td>
                <td>
                  <span className={styles.page230__red}>not</span>
                  <img
                    src={eng_audio_icon}
                    alt="Play not (They)"
                    className={styles.page230__icon}
                    onClick={() => playAudio(audio7)}
                  />
                  <br /> <br />
                  são <br /> estão <br /> têm
                </td>
                <td>—</td>
                <td>(somente para idade)</td>
              </tr>
            </tbody>
          </table>

          <div className={styles.page230__note}>
            <strong>Nota:</strong> <span className={styles.page230__noteLabel}>C.F.</span> = Contracted Form
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pagina230;
