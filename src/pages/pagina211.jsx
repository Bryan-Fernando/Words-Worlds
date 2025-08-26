import React, { useRef } from 'react';
import styles from './pagina211.module.css';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import audio1 from '../assets/audios/pg211_audio1e.mp3';
import audio2 from '../assets/audios/pg211_audio2e.mp3';
import audio3 from '../assets/audios/pg211_audio3e.mp3';
import audio4 from '../assets/audios/pg211_audio4e.mp3';
import audio5 from '../assets/audios/pg211_audio5e.mp3';

const Pagina211 = () => {
  const currentAudio = useRef(null);

  const playAudio = (audioId) => {
    const audioMap = {
      pg211_audio1e: audio1,
      pg211_audio2e: audio2,
      pg211_audio3e: audio3,
      pg211_audio4e: audio4,
      pg211_audio5e: audio5,
    };

    if (currentAudio.current) {
      currentAudio.current.pause();
      currentAudio.current.currentTime = 0;
    }

    const audio = new Audio(audioMap[audioId]);
    currentAudio.current = audio;
    audio.play();
  };

  return (
    <div className={styles.page211__container}>
      <div className={styles.page211__pageContainer}>
        <header className={styles.page211__header}>
          <h1 className={styles.page211__headerTitle}>Grammar</h1>
        </header>

        <main className={styles.page211__mainContent}>
          <section className={styles.page211__grammarIntro}>
            <div className={styles.page211__modalVerb}>
              <h2>
                <span>Can</span>
                <span> - Modal Verb</span>
                <img
                  src={eng_audio_icon}
                  alt="Audio icon"
                  className={styles.page211__audio_icon}
                  onClick={() => playAudio('pg211_audio1e')}
                />
              </h2>
              <p><span>Can</span><span> - Verbo Modal</span></p>
            </div>
          </section>

          <section className={styles.page211__grammarSection}>
            <div className={styles.page211__grammarHeader}>
              <h2 className={styles.page211__grammarTitle}>Interrogative Form</h2>
            </div>
            <div className={styles.page211__grammarContent}>
              <div className={styles.page211__grammarRow}>
                <span>Aux. Verb</span>
                <span>Subject</span>
                <span>Adv</span>
                <span>Verb</span>
                <span>Object / Complement</span>
              </div>
            </div>
          </section>

          <section className={styles.page211__tableContent}>
            {/* WE */}
            <div className={styles.page211__tableGroup}>
              <div
                className={styles.page211__tableRow}
                onClick={() => playAudio('pg211_audio2e')}
                style={{ cursor: 'pointer' }}
              >
                <div className={styles.page211__pg213Cell}><span className={styles.page211__pg213Red}>Can</span></div>
                <div className={styles.page211__pg213Cell}>
                  <span className={styles.page211__pg213Red}>we</span>
                  <span className={styles.page211__pg213Black}>Nós</span>
                </div>
                <div className={styles.page211__pg213Cell}><span className={styles.page211__pg213Dash}>—</span></div>
                <div className={styles.page211__pg213Cell}>
                  <span className={styles.page211__pg213Red}>travel</span>
                  <span className={styles.page211__pg213Black}>podemos viajar</span>
                </div>
                <div className={styles.page211__pg213Cell}>
                  <span className={styles.page211__pg213Red}>by train?</span>
                  <span className={styles.page211__pg213Black}>de trem?</span>
                </div>
              </div>
            </div>

            {/* YOU (SG) */}
            <div className={styles.page211__tableGroup}>
              <div
                className={styles.page211__tableRow}
                onClick={() => playAudio('pg211_audio3e')}
                style={{ cursor: 'pointer' }}
              >
                <div className={styles.page211__pg213Cell}><span className={styles.page211__pg213Red}>Can</span></div>
                <div className={styles.page211__pg213Cell}>
                  <span className={styles.page211__pg213Red}>you(sg)</span>
                  <span className={styles.page211__pg213Black}>Você</span>
                </div>
                <div className={styles.page211__pg213Cell}><span className={styles.page211__pg213Dash}>—</span></div>
                <div className={styles.page211__pg213Cell}>
                  <span className={styles.page211__pg213Red}>read</span>
                  <span className={styles.page211__pg213Black}>pode ler</span>
                </div>
                <div className={styles.page211__pg213Cell}>
                  <span className={styles.page211__pg213Red}>this text?</span>
                  <span className={styles.page211__pg213Black}>esse texto?</span>
                </div>
              </div>
            </div>

            {/* Y’ALL (PL) */}
            <div className={styles.page211__tableGroup}>
              <div
                className={styles.page211__tableRow}
                onClick={() => playAudio('pg211_audio4e')}
                style={{ cursor: 'pointer' }}
              >
                <div className={styles.page211__pg213Cell}><span className={styles.page211__pg213Red}>Can</span></div>
                <div className={styles.page211__pg213Cell}>
                  <span className={styles.page211__pg213Red}>y'all(pl)</span>
                  <span className={styles.page211__pg213Black}>Vocês</span>
                </div>
                <div className={styles.page211__pg213Cell}><span className={styles.page211__pg213Dash}>—</span></div>
                <div className={styles.page211__pg213Cell}>
                  <span className={styles.page211__pg213Red}>finish</span>
                  <span className={styles.page211__pg213Black}>podem terminar</span>
                </div>
                <div className={styles.page211__pg213Cell}>
                  <span className={styles.page211__pg213Red}>the project today?</span>
                  <span className={styles.page211__pg213Black}>o projeto hoje?</span>
                </div>
              </div>
            </div>

            {/* THEY */}
            <div className={styles.page211__tableGroup}>
              <div
                className={styles.page211__tableRow}
                onClick={() => playAudio('pg211_audio5e')}
                style={{ cursor: 'pointer' }}
              >
                <div className={styles.page211__pg213Cell}><span className={styles.page211__pg213Red}>Can</span></div>
                <div className={styles.page211__pg213Cell}>
                  <span className={styles.page211__pg213Red}>they</span>
                  <span className={styles.page211__pg213Black}>Eles / Elas</span>
                </div>
                <div className={styles.page211__pg213Cell}><span className={styles.page211__pg213Dash}>—</span></div>
                <div className={styles.page211__pg213Cell}>
                  <span className={styles.page211__pg213Red}>see</span>
                  <span className={styles.page211__pg213Black}>podem ver</span>
                </div>
                <div className={styles.page211__pg213Cell}>
                  <span className={styles.page211__pg213Red}>the stars from there?</span>
                  <span className={styles.page211__pg213Black}>as estrelas de lá?</span>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Pagina211;
