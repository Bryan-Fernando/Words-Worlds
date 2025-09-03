import React, { useRef } from 'react';
import styles from './pagina229.module.css';

import audio1 from '../assets/audios/pg229_audio1e.mp3';
import audio2 from '../assets/audios/pg229_audio2e.mp3';
import audio3 from '../assets/audios/pg229_audio3e.mp3';
import audio4 from '../assets/audios/pg229_audio4e.mp3';
import audio5 from '../assets/audios/pg229_audio5e.mp3';
import audio6 from '../assets/audios/pg229_audio6e.mp3';
import audio7 from '../assets/audios/pg229_audio7e.mp3';
import audio8 from '../assets/audios/pg229_audio8e.mp3';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';

const Pagina229 = () => {
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
    <div className={styles.page229__container}>
      <header className={styles.page229__header}>
        <h1 className={styles.page229__title}>
          Grammar – <span className={styles.page229__title_black}>Simple Present</span>
        </h1>
        <p className={styles.page229__subtitle}>
          Verbo <strong>To Be</strong> (Ser, Estar ou <span className={styles.page229__highlight}>Ter somente para idade</span>)
        </p>
      </header>

      <main className={styles.page229__main}>
        <section className={styles.page229__tableSection}>
          <div className={styles.page229__tableTitle}>Negative Form</div>
          <table className={styles.page229__table}>
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
                  <span className={styles.page229__red}>I</span> <br />
                  <span className={styles.page229__red}>I</span><br />
                  <span>Eu <br /> Eu <br /> Eu</span>
                </td>
                <td>
                  <span className={styles.page229__red}>am</span> <br />
                  <span className={styles.page229__red}>ain’t</span>
                  <img
                    src={eng_audio_icon}
                    alt="Play ain’t (I)"
                    className={styles.page229__icon}
                    onClick={() => playAudio(audio2)}
                  />
                  <br />não <br /> não <br /> não
                </td>
                <td>
                  <span className={styles.page229__red}>not</span>
                  <img
                    src={eng_audio_icon}
                    alt="Play not (I)"
                    className={styles.page229__icon}
                    onClick={() => playAudio(audio1)}
                  />
                  <br /> <br />
                  sou <br /> estou <br /> tenho
                </td>
                <td>—</td>
                <td>(somente para idade)</td>
              </tr>

              <tr>
                <td>
                  <span className={styles.page229__red}>He</span> <br />
                  <span className={styles.page229__red}>He</span><br />
                  <span>Ele <br /> Ele <br /> Ele</span>
                </td>
                <td>
                  <span className={styles.page229__red}>is</span><br />
                  <span className={styles.page229__red}>isn’t</span>
                  <img
                    src={eng_audio_icon}
                    alt="Play isn’t (He)"
                    className={styles.page229__icon}
                    onClick={() => playAudio(audio4)}
                  />
                  <br />não <br /> não <br /> não
                </td>
                <td>
                  <span className={styles.page229__red}>not</span>
                  <img
                    src={eng_audio_icon}
                    alt="Play not (He)"
                    className={styles.page229__icon}
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
                  <span className={styles.page229__red}>She</span><br />
                  <span>Ela <br /> Ela <br /> Ela</span>
                </td>
                <td>
                  <span className={styles.page229__red}>is</span><br />
                  <span className={styles.page229__red}>isn’t</span>
                  <img
                    src={eng_audio_icon}
                    alt="Play isn’t (She)"
                    className={styles.page229__icon}
                    onClick={() => playAudio(audio6)}
                  />
                  <br />não <br /> não <br /> não
                </td>
                <td>
                  <span className={styles.page229__red}>not</span>
                  <img
                    src={eng_audio_icon}
                    alt="Play not (She)"
                    className={styles.page229__icon}
                    onClick={() => playAudio(audio5)}
                  />
                  <br /> <br />
                  é <br /> está <br /> tem
                </td>
                <td>—</td>
                <td>(somente para idade)</td>
              </tr>

              <tr>
                <td>
                  <span className={styles.page229__red}>It</span>
                </td>
                <td>
                  <span className={styles.page229__red}>is</span><br />
                  <span className={styles.page229__red}>isn’t</span>
                  <img
                    src={eng_audio_icon}
                    alt="Play isn’t (It)"
                    className={styles.page229__icon}
                    onClick={() => playAudio(audio8)}
                  />
                  <br />não <br /> não <br /> não
                </td>
                <td>
                  <span className={styles.page229__red}>not</span>
                  <img
                    src={eng_audio_icon}
                    alt="Play not (It)"
                    className={styles.page229__icon}
                    onClick={() => playAudio(audio7)}
                  />
                  <br /> <br />
                  é <br /> está <br /> tem
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

export default Pagina229;
