import React, { useRef } from 'react';
import styles from './pagina235.module.css';

import audio1 from '../assets/audios/pg235_audio1e.mp3';
import audio2 from '../assets/audios/pg235_audio2e.mp3';
import audio3 from '../assets/audios/pg235_audio3e.mp3';
import audio4 from '../assets/audios/pg235_audio4e.mp3';
import audio5 from '../assets/audios/pg235_audio5e.mp3';
import audio6 from '../assets/audios/pg235_audio6e.mp3';
import audio7 from '../assets/audios/pg235_audio7e.mp3';
import audio8 from '../assets/audios/pg235_audio8e.mp3';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';

const Pagina235 = () => {
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
    <div className={styles.page235__container}>
      <header className={styles.page235__header}>
        <h1 className={styles.page235__title}>
          Grammar – <span className={styles.page235__title_black}>Simple Present</span>
        </h1>
        <p className={styles.page235__subtitle}>
          Verbo <strong>To Be</strong> (Ser, Estar ou <span className={styles.page235__highlight}>Ter somente para idade</span>)
        </p>
      </header>

      <main className={styles.page235__main}>
        <section className={styles.page235__tableSection}>
          <div className={styles.page235__tableTitle}>Negative Interrogative Form</div>
          <table className={styles.page235__table}>
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
                <td><spam className={styles.page235__red}>Are</spam><br /><spam className={styles.page235__red}>Aren’t</spam></td>
                <td className={styles.page235__red}>
                  we<br />
                  <span>we</span>
                  <img
                    src={eng_audio_icon}
                    alt="Play Aren’t we"
                    className={styles.page235__icon}
                    onClick={() => playAudio(audio2)}
                  />
                </td>
                <td>
                  not
                  <img
                    src={eng_audio_icon}
                    alt="Play Are we not"
                    className={styles.page235__icon}
                    onClick={() => playAudio(audio1)}
                  />
                  <br />—
                </td>
                <td>—</td>
                <td>...?</td>
              </tr>
              <tr><td>Nós</td><td>não</td><td>somos</td><td>—</td><td>...?</td></tr>
              <tr><td>Nós</td><td>não</td><td>estamos</td><td>—</td><td>...?</td></tr>
              <tr><td>Nós</td><td>não</td><td>temos</td><td>—</td><td>(somente para idade) ...?</td></tr>

              <tr>
                <td><spam className={styles.page235__red}>Are</spam><br /><spam className={styles.page235__red}>Aren’t</spam></td>
                <td className={styles.page235__red}>
                  you <span>(sg)</span><br />
                  <span>you</span>
                  <img
                    src={eng_audio_icon}
                    alt="Play Aren’t you (sg)"
                    className={styles.page235__icon}
                    onClick={() => playAudio(audio4)}
                  />
                </td>
                <td>
                  not
                  <img
                    src={eng_audio_icon}
                    alt="Play Are you (sg) not"
                    className={styles.page235__icon}
                    onClick={() => playAudio(audio3)}
                  />
                  <br />—
                </td>
                <td>—</td>
                <td>...?</td>
              </tr>
              <tr><td>Você</td><td>não</td><td>é</td><td>—</td><td>...?</td></tr>
              <tr><td>Você</td><td>não</td><td>está</td><td>—</td><td>...?</td></tr>
              <tr><td>você</td><td>não</td><td>tem</td><td>—</td><td>(somente para idade) ...?</td></tr>

              <tr>
                <td><spam className={styles.page235__red}>Are</spam><br /><spam className={styles.page235__red}>Aren’t</spam></td>
                <td className={styles.page235__red}>
                  you all <span>(pl)</span><br />
                  <span>you all</span>
                  <img
                    src={eng_audio_icon}
                    alt="Play Aren’t you all (pl)"
                    className={styles.page235__icon}
                    onClick={() => playAudio(audio6)}
                  />
                </td>
                <td>
                  not
                  <img
                    src={eng_audio_icon}
                    alt="Play Are you all (pl) not"
                    className={styles.page235__icon}
                    onClick={() => playAudio(audio5)}
                  />
                  <br />—
                </td>
                <td>—</td>
                <td>...?</td>
              </tr>
              <tr><td>Vocês</td><td>não</td><td>são</td><td>—</td><td>...?</td></tr>
              <tr><td>Vocês</td><td>não</td><td>stão</td><td>—</td><td>...?</td></tr>
              <tr><td>Vocês</td><td>não</td><td>têm</td><td>—</td><td>(somente para idade) ...?</td></tr>

              <tr>
                <td><spam className={styles.page235__red}>Are</spam><br /><spam className={styles.page235__red}>Aren’t</spam></td>
                <td className={styles.page235__red}>
                  they<br />
                  <span>they</span>
                  <img
                    src={eng_audio_icon}
                    alt="Play Aren’t they"
                    className={styles.page235__icon}
                    onClick={() => playAudio(audio8)}
                  />
                </td>
                <td>
                  not
                  <img
                    src={eng_audio_icon}
                    alt="Play Are they not"
                    className={styles.page235__icon}
                    onClick={() => playAudio(audio7)}
                  />
                  <br />—
                </td>
                <td>—</td>
                <td>...?</td>
              </tr>
              <tr><td>Eles/Elas</td><td>não</td><td>são</td><td>—</td><td>...?</td></tr>
              <tr><td>Eles/Elas</td><td>não</td><td>estão</td><td>—</td><td>...?</td></tr>
              <tr><td>Eles/Elas</td><td>não</td><td>têm</td><td>—</td><td>(somente para idade) ...?</td></tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default Pagina235;
