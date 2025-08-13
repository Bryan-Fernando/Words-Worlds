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
              {/* I */}
              <tr>
                <td>
                  <span onClick={() => playAudio(audio1)} className={styles.page229__red} style={{ cursor: 'pointer' }}>I</span> <br />
                  <span onClick={() => playAudio(audio2)} className={styles.page229__red} style={{ cursor: 'pointer' }}>I</span><br />
                  <span>Eu <br /> Eu <br /> Eu</span>
                </td>
                <td>
                  <span onClick={() => playAudio(audio1)} className={styles.page229__red} style={{ cursor: 'pointer' }}>am</span> <br />
                  <span onClick={() => playAudio(audio2)} className={styles.page229__red} style={{ cursor: 'pointer' }}>ain’t</span><br />
                  não <br /> não <br /> não
                </td>
                <td>
                  <span onClick={() => playAudio(audio1)} className={styles.page229__red} style={{ cursor: 'pointer' }}>not</span> <br /> <br />
                  sou <br /> estou <br /> tenho
                </td>
                <td>—</td>
                <td>(somente para idade)</td>
              </tr>

              {/* He */}
              <tr>
                <td>
                  <span onClick={() => playAudio(audio3)} className={styles.page229__red} style={{ cursor: 'pointer' }}>He</span> <br />
                  <span onClick={() => playAudio(audio4)} className={styles.page229__red} style={{ cursor: 'pointer' }}>He</span><br />
                  <span>Ele <br /> Ele <br /> Ele</span>
                </td>
                <td>
                  <span onClick={() => playAudio(audio3)} className={styles.page229__red} style={{ cursor: 'pointer' }}>is</span><br />
                  <span onClick={() => playAudio(audio4)} className={styles.page229__red} style={{ cursor: 'pointer' }}>isn’t</span><br />
                  não <br /> não <br /> não
                </td>
                <td>
                  <span onClick={() => playAudio(audio3)} className={styles.page229__red} style={{ cursor: 'pointer' }}>not</span><br /> <br />
                  é <br /> está <br /> tem
                </td>
                <td>—</td>
                <td>(somente para idade)</td>
              </tr>

              {/* She */}
              <tr>
                <td>
                  <span onClick={() => playAudio(audio5)} className={styles.page229__red} style={{ cursor: 'pointer' }}>She</span><br />
                  <span>Ela <br /> Ela <br /> Ela</span>
                </td>
                <td>
                  <span onClick={() => playAudio(audio5)} className={styles.page229__red} style={{ cursor: 'pointer' }}>is</span><br />
                  <span onClick={() => playAudio(audio6)} className={styles.page229__red} style={{ cursor: 'pointer' }}>isn’t</span><br />
                  não <br /> não <br /> não
                </td>
                <td>
                  <span onClick={() => playAudio(audio5)} className={styles.page229__red} style={{ cursor: 'pointer' }}>not</span><br /> <br />
                  é <br /> está <br /> tem
                </td>
                <td>—</td>
                <td>(somente para idade)</td>
              </tr>

              {/* It */}
              <tr>
                <td>
                  <span onClick={() => playAudio(audio7)} className={styles.page229__red} style={{ cursor: 'pointer' }}>It</span>
                </td>
                <td>
                  <span onClick={() => playAudio(audio7)} className={styles.page229__red} style={{ cursor: 'pointer' }}>is</span><br />
                  <span onClick={() => playAudio(audio8)} className={styles.page229__red} style={{ cursor: 'pointer' }}>isn’t</span><br />
                  não <br /> não <br /> não
                </td>
                <td>
                  <span onClick={() => playAudio(audio7)} className={styles.page229__red} style={{ cursor: 'pointer' }}>not</span><br /> <br />
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
