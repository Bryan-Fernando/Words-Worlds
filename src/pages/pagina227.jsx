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
              {/* I */}
              <tr>
                <td>
                  <strong>
                    <span onClick={() => playAudio(audio1)} style={{ cursor: 'pointer' }}>I</span>
                  </strong>
                  <br />
                  <span>
                    Eu <br />Eu <br /> Eu
                  </span>
                </td>
                <td>
                  <span onClick={() => playAudio(audio1)} style={{ cursor: 'pointer' }}>am</span>
                  <br />sou <br />estou <br />tenho
                </td>
                <td>
                  <span onClick={() => playAudio(audio5)} style={{ cursor: 'pointer' }}>I'm</span>
                </td>
                <td>—</td>
                <td>(somente para idade)</td>
              </tr>

              {/* He */}
              <tr>
                <td>
                  <span className={styles.page227__red}>
                    <span onClick={() => playAudio(audio2)} style={{ cursor: 'pointer' }}>He</span>
                  </span>
                  <br />
                  Ele <br />Ele <br />Ele
                </td>
                <td>
                  <span onClick={() => playAudio(audio2)} style={{ cursor: 'pointer' }}>is</span>
                  <br />é <br />está <br />tem
                </td>
                <td>
                  <span onClick={() => playAudio(audio6)} style={{ cursor: 'pointer' }}>He's</span>
                </td>
                <td>—</td>
                <td>(somente para idade)</td>
              </tr>

              {/* She */}
              <tr>
                <td>
                  <span className={styles.page227__red}>
                    <span onClick={() => playAudio(audio3)} style={{ cursor: 'pointer' }}>She</span>
                  </span>
                  <br />
                  Ela <br />Ela <br />Ela
                </td>
                <td>
                  <span onClick={() => playAudio(audio3)} style={{ cursor: 'pointer' }}>is</span>
                  <br />é <br />está <br />tem
                </td>
                <td>
                  <span onClick={() => playAudio(audio7)} style={{ cursor: 'pointer' }}>She's</span>
                </td>
                <td>—</td>
                <td>(somente para idade)</td>
              </tr>

              {/* It */}
              <tr>
                <td>
                  <span className={styles.page227__red}>
                    <span onClick={() => playAudio(audio4)} style={{ cursor: 'pointer' }}>It</span>
                  </span>
                </td>
                <td>
                  <span onClick={() => playAudio(audio4)} style={{ cursor: 'pointer' }}>is</span>
                  <br />é <br />está <br />tem
                </td>
                <td>
                  <span onClick={() => playAudio(audio8)} style={{ cursor: 'pointer' }}>It's</span>
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
